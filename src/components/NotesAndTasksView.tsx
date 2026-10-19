import React, { useState, useEffect, useRef } from 'react';
import {
  CheckSquare,
  BookOpen,
  Plus,
  Trash2,
  Calendar,
  Clock,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Tag,
  Edit3,
  Copy,
  Check,
  Bell,
  BellRing,
  X
} from 'lucide-react';
import { NoteItem, SubjectId, TaskItem, Topic, UserProfile } from '../types';
import { SUBJECTS } from '../data/subjects';
import {
  createNote,
  createTask,
  fetchNotes,
  fetchTasks,
  removeNote,
  removeTask,
  toggleTaskCompletion,
  updateNote,
  updateTask
} from '../services/api';

interface NotesAndTasksViewProps {
  user: UserProfile;
  initialTopicNote?: Topic | null;
  onClearInitialTopicNote?: () => void;
}

export const NotesAndTasksView: React.FC<NotesAndTasksViewProps> = ({
  user,
  initialTopicNote,
  onClearInitialTopicNote
}) => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'notes'>('tasks');

  // Task State
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskDate, setNewTaskDate] = useState(new Date().toISOString().split('T')[0]);
  const [newTaskTime, setNewTaskTime] = useState('17:00');
  const [newTaskPriority, setNewTaskPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [newTaskSubject, setNewTaskSubject] = useState<SubjectId>('math');
  const [newTaskEarlyReminder, setNewTaskEarlyReminder] = useState<number>(30); // 30 mins before
  const [isAddingTask, setIsAddingTask] = useState(true);
  const [taskSavedMessage, setTaskSavedMessage] = useState(false);
  const [dismissedReminders, setDismissedReminders] = useState<Record<string, boolean>>({});

  // Note State
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteSubject, setNewNoteSubject] = useState<SubjectId>('math');
  const [noteSearch, setNoteSearch] = useState('');
  const [noteSubjectFilter, setNoteSubjectFilter] = useState<string>('all');
  const [isAddingNote, setIsAddingNote] = useState(true);
  const [noteSavedMessage, setNoteSavedMessage] = useState(false);
  const [copiedNoteId, setCopiedNoteId] = useState<string | null>(null);

  const appliedInitialNoteIdRef = useRef<string | null>(null);

  useEffect(() => {
    async function load() {
      const [nList, tList] = await Promise.all([
        fetchNotes(user.id),
        fetchTasks(user.id)
      ]);
      setNotes(nList);
      setTasks(tList);
    }
    load();
  }, [user.id]);

  // Early Reminder Scanner: Computes tasks approaching within their reminder window
  const activeEarlyReminders = tasks.filter((t) => {
    if (t.completed || dismissedReminders[t.id]) return false;
    if (!t.dueDate) return false;
    const timeStr = t.dueTime || '23:59';
    const dueDateTime = new Date(`${t.dueDate}T${timeStr}:00`).getTime();
    if (isNaN(dueDateTime)) return false;

    const now = Date.now();
    const minutesLeft = Math.round((dueDateTime - now) / 60000);
    const reminderWindow = t.earlyReminderMinutes ?? 30;

    // Show if due within the early reminder window and not yet more than 60 mins overdue
    return minutesLeft > -60 && minutesLeft <= reminderWindow;
  });

  // Only apply initial topic note ONCE when specifically passed
  useEffect(() => {
    if (initialTopicNote && appliedInitialNoteIdRef.current !== initialTopicNote.id) {
      appliedInitialNoteIdRef.current = initialTopicNote.id;
      setActiveTab('notes');
      setIsAddingNote(true);
      setEditingNoteId(null);
      setNewNoteTitle(`${initialTopicNote.title} — Key Revision`);
      setNewNoteSubject(initialTopicNote.subjectId);
      setNewNoteContent(
        `Summary:\n${initialTopicNote.learnContent.summary}\n\nKey Concepts:\n` +
          initialTopicNote.learnContent.keyConcepts
            .map((k) => `• ${k.title}: ${k.explanation}`)
            .join('\n')
      );
      if (onClearInitialTopicNote) {
        onClearInitialTopicNote();
      }
    }
  }, [initialTopicNote, onClearInitialTopicNote]);

  // Tasks Handlers
  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const task = await createTask({
      userId: user.id,
      text: newTaskText.trim(),
      dueDate: newTaskDate,
      dueTime: newTaskTime,
      priority: newTaskPriority,
      subjectId: newTaskSubject,
      completed: false,
      earlyReminderMinutes: newTaskEarlyReminder
    });

    setTasks((prev) => [task, ...prev]);
    setNewTaskText('');
    setTaskSavedMessage(true);
    setTimeout(() => setTaskSavedMessage(false), 2500);
  };

  const handleToggleTask = async (taskId: string, current: boolean) => {
    await toggleTaskCompletion(taskId, !current, user.id);
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !current } : t))
    );
  };

  const handleDeleteTask = async (taskId: string) => {
    await removeTask(taskId, user.id);
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const handleDismissReminder = (taskId: string) => {
    setDismissedReminders((prev) => ({ ...prev, [taskId]: true }));
  };

  // Notes Handlers
  const handleCreateOrUpdateNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim()) return;

    if (editingNoteId) {
      const updated = await updateNote(
        editingNoteId,
        {
          title: newNoteTitle.trim(),
          content: newNoteContent.trim(),
          subjectId: newNoteSubject
        },
        user.id
      );

      setNotes((prev) =>
        prev.map((n) => (n.id === editingNoteId ? (updated || { ...n, title: newNoteTitle.trim(), content: newNoteContent.trim(), subjectId: newNoteSubject }) : n))
      );
      setEditingNoteId(null);
    } else {
      const note = await createNote({
        userId: user.id,
        title: newNoteTitle.trim(),
        content: newNoteContent.trim(),
        subjectId: newNoteSubject
      });
      setNotes((prev) => [note, ...prev]);
    }

    setNewNoteTitle('');
    setNewNoteContent('');
    setNoteSavedMessage(true);
    setTimeout(() => setNoteSavedMessage(false), 2500);
  };

  const handleEditNote = (note: NoteItem) => {
    setEditingNoteId(note.id);
    setNewNoteTitle(note.title);
    setNewNoteContent(note.content);
    if (note.subjectId) setNewNoteSubject(note.subjectId as SubjectId);
    setIsAddingNote(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEditNote = () => {
    setEditingNoteId(null);
    setNewNoteTitle('');
    setNewNoteContent('');
  };

  const handleCopyNote = (note: NoteItem) => {
    navigator.clipboard.writeText(`${note.title}\n\n${note.content}`);
    setCopiedNoteId(note.id);
    setTimeout(() => setCopiedNoteId(null), 2000);
  };

  const handleDeleteNote = async (noteId: string) => {
    if (editingNoteId === noteId) {
      handleCancelEditNote();
    }
    await removeNote(noteId, user.id);
    setNotes((prev) => prev.filter((n) => n.id !== noteId));
  };

  const filteredNotes = notes.filter((n) => {
    const matchesSearch =
      n.title.toLowerCase().includes(noteSearch.toLowerCase()) ||
      n.content.toLowerCase().includes(noteSearch.toLowerCase());
    const matchesSubj = noteSubjectFilter === 'all' || n.subjectId === noteSubjectFilter;
    return matchesSearch && matchesSubj;
  });

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 max-w-7xl mx-auto text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header with Switcher Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
            Notes & Study Tasks
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Organize homework deadlines with early reminder alerts and review revision notes.
          </p>
        </div>

        <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-full sm:w-auto">
          <button
            id="tab-view-tasks"
            onClick={() => setActiveTab('tasks')}
            className={`flex-1 sm:flex-initial px-4 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px] ${
              activeTab === 'tasks'
                ? 'bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Tasks ({tasks.filter((t) => !t.completed).length})</span>
          </button>
          <button
            id="tab-view-notes"
            onClick={() => setActiveTab('notes')}
            className={`flex-1 sm:flex-initial px-4 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px] ${
              activeTab === 'notes'
                ? 'bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Notes ({notes.length})</span>
          </button>
        </div>
      </div>

      {/* Early Reminder Notification Banner */}
      {activeEarlyReminders.length > 0 && (
        <div className="space-y-2">
          {activeEarlyReminders.map((reminder) => {
            const timeStr = reminder.dueTime || '23:59';
            const dueDateTime = new Date(`${reminder.dueDate}T${timeStr}:00`).getTime();
            const mins = Math.max(0, Math.round((dueDateTime - Date.now()) / 60000));
            const subj = SUBJECTS.find((s) => s.id === reminder.subjectId);

            return (
              <div
                key={`banner-${reminder.id}`}
                className="p-3.5 sm:p-4 bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700 rounded-2xl flex items-center justify-between gap-3 shadow-sm animate-in fade-in"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 animate-pulse">
                    <BellRing className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wide">
                        Early Reminder Alert:
                      </span>
                      {subj && (
                        <span className="text-[10px] font-semibold bg-amber-200/70 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded">
                          {subj.name}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-amber-900 dark:text-amber-100 font-semibold truncate mt-0.5">
                      "{reminder.text}" is due in {mins === 0 ? 'less than 1 minute' : `${mins} minutes`} ({reminder.dueTime || 'today'})!
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleToggleTask(reminder.id, false)}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg cursor-pointer transition-colors"
                  >
                    Mark Done
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDismissReminder(reminder.id)}
                    className="p-1.5 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900 rounded-lg cursor-pointer"
                    aria-label="Dismiss alert"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ================= TASKS TAB ================= */}
      {activeTab === 'tasks' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 font-['Outfit']">
              <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>Homework & Reminders</span>
            </h2>

            {!isAddingTask && (
              <button
                type="button"
                id="btn-add-task"
                onClick={() => setIsAddingTask(true)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-sm shadow-purple-600/20 min-h-[44px]"
              >
                <Plus className="w-4 h-4" />
                <span>Add Task / Reminder</span>
              </button>
            )}
          </div>

          {/* Feedback alert when saved */}
          {taskSavedMessage && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Academic task saved with early reminder alert!</span>
            </div>
          )}

          {/* New Task Form */}
          {isAddingTask && (
            <form onSubmit={handleCreateTask} className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border-2 border-purple-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Add New Academic Task or Reminder</h3>
                <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">Ready to type</span>
              </div>
              
              <div>
                <label htmlFor="input-task-text" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Task Description & Details
                </label>
                <input
                  id="input-task-text"
                  name="taskText"
                  type="text"
                  required
                  autoFocus
                  placeholder="e.g. Complete Chemistry worksheet questions 1-10"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 placeholder-slate-400 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div>
                  <label htmlFor="input-task-date" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Due Date
                  </label>
                  <input
                    id="input-task-date"
                    name="taskDate"
                    type="date"
                    required
                    value={newTaskDate}
                    onChange={(e) => setNewTaskDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 font-medium min-h-[40px]"
                  />
                </div>

                <div>
                  <label htmlFor="input-task-time" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Due Time
                  </label>
                  <input
                    id="input-task-time"
                    name="taskTime"
                    type="time"
                    value={newTaskTime}
                    onChange={(e) => setNewTaskTime(e.target.value)}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 font-medium min-h-[40px]"
                  />
                </div>

                <div>
                  <label htmlFor="select-task-reminder" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                    <Bell className="w-3 h-3 text-amber-500" />
                    <span>Early Alert</span>
                  </label>
                  <select
                    id="select-task-reminder"
                    name="taskEarlyReminder"
                    value={newTaskEarlyReminder}
                    onChange={(e) => setNewTaskEarlyReminder(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 font-medium min-h-[40px]"
                  >
                    <option value={15}>15 mins before</option>
                    <option value={30}>30 mins before</option>
                    <option value={60}>1 hour before</option>
                    <option value={120}>2 hours before</option>
                    <option value={1440}>1 day before</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="select-task-priority" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Priority
                  </label>
                  <select
                    id="select-task-priority"
                    name="taskPriority"
                    value={newTaskPriority}
                    onChange={(e) => setNewTaskPriority(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 font-medium min-h-[40px]"
                  >
                    <option value="high">High Priority</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low Priority</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="select-task-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="select-task-subject"
                    name="taskSubject"
                    value={newTaskSubject}
                    onChange={(e) => setNewTaskSubject(e.target.value as SubjectId)}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 font-medium min-h-[40px]"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="submit"
                  id="btn-save-task"
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer shadow-sm shadow-purple-600/20 min-h-[44px]"
                >
                  Save Task & Set Reminder
                </button>
              </div>
            </form>
          )}

          {/* Task List */}
          <div className="space-y-3">
            {tasks.length === 0 ? (
              <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs">
                No tasks created yet. Click "Add Task / Reminder" to schedule homework deadlines!
              </div>
            ) : (
              tasks.map((t) => {
                const isDueToday = t.dueDate === todayStr;
                const subj = SUBJECTS.find((s) => s.id === t.subjectId);

                return (
                  <div
                    key={t.id}
                    className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-4 bg-white dark:bg-slate-900 ${
                      t.completed
                        ? 'border-slate-200 dark:border-slate-800 opacity-60'
                        : isDueToday
                        ? 'border-purple-300 dark:border-purple-700 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div className="flex items-start gap-3.5 flex-1 min-w-0">
                      <input
                        type="checkbox"
                        checked={t.completed}
                        onChange={() => handleToggleTask(t.id, t.completed)}
                        className="mt-1 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 cursor-pointer accent-purple-600 shrink-0"
                      />
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          {isDueToday && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                              Due Today
                            </span>
                          )}
                          {subj && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                              {subj.name}
                            </span>
                          )}
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                              t.priority === 'high'
                                ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                            }`}
                          >
                            {t.priority.toUpperCase()}
                          </span>
                          {t.earlyReminderMinutes && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center gap-1">
                              <Bell className="w-2.5 h-2.5" /> {t.earlyReminderMinutes}m alert
                            </span>
                          )}
                        </div>

                        <p className={`text-xs font-semibold text-slate-800 dark:text-slate-200 ${t.completed ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                          {t.text}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 dark:text-slate-500">
                          {t.dueDate && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> Due {t.dueDate}
                            </span>
                          )}
                          {t.dueTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {t.dueTime}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteTask(t.id)}
                      className="text-slate-400 hover:text-red-600 p-2 cursor-pointer transition-colors shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center"
                      title="Delete task"
                      aria-label="Delete task"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* ================= NOTES TAB ================= */}
      {activeTab === 'notes' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Search & Subject filter */}
            <div className="flex items-center gap-3 flex-1 max-w-md">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search notes..."
                  value={noteSearch}
                  onChange={(e) => setNoteSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 min-h-[40px]"
                />
              </div>

              <select
                value={noteSubjectFilter}
                onChange={(e) => setNoteSubjectFilter(e.target.value)}
                className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 min-h-[40px]"
              >
                <option value="all">All Subjects</option>
                {SUBJECTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {!isAddingNote && (
              <button
                type="button"
                id="btn-add-note"
                onClick={() => {
                  setEditingNoteId(null);
                  setIsAddingNote(true);
                }}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-sm shadow-purple-600/20 min-h-[44px]"
              >
                <Plus className="w-4 h-4" />
                <span>Create Revision Note</span>
              </button>
            )}
          </div>

          {/* Feedback alert when saved */}
          {noteSavedMessage && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Revision note successfully saved and stored!</span>
            </div>
          )}

          {/* New / Edit Note Form */}
          {isAddingNote && (
            <form onSubmit={handleCreateOrUpdateNote} className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border-2 border-purple-200 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {editingNoteId ? 'Edit Revision Note' : 'Write New Revision Note'}
                </h3>
                {editingNoteId && (
                  <button
                    type="button"
                    onClick={handleCancelEditNote}
                    className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium cursor-pointer"
                  >
                    Cancel Editing
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label htmlFor="input-note-title" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Note Title
                  </label>
                  <input
                    id="input-note-title"
                    name="noteTitle"
                    type="text"
                    required
                    placeholder="e.g. Quadratic Formula Discriminant Summary"
                    value={newNoteTitle}
                    onChange={(e) => setNewNoteTitle(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 font-medium placeholder-slate-400 min-h-[40px]"
                  />
                </div>

                <div>
                  <label htmlFor="select-note-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="select-note-subject"
                    name="noteSubject"
                    value={newNoteSubject}
                    onChange={(e) => setNewNoteSubject(e.target.value as SubjectId)}
                    className="w-full px-3 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 font-medium min-h-[40px]"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="textarea-note-content" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Note Content, Explanations & Key Takeaways
                </label>
                <textarea
                  id="textarea-note-content"
                  name="noteContent"
                  rows={6}
                  required
                  placeholder="Type your study notes, formulas, memory tricks, or lesson summaries here..."
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 font-mono leading-relaxed placeholder-slate-400"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="submit"
                  id="btn-save-note"
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold rounded-xl text-xs cursor-pointer shadow-sm shadow-purple-600/20 min-h-[44px]"
                >
                  {editingNoteId ? 'Update Note' : 'Save Revision Note'}
                </button>
              </div>
            </form>
          )}

          {/* Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNotes.length === 0 ? (
              <div className="col-span-full p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs">
                No notes found. Use the editor above to write and save your first revision note!
              </div>
            ) : (
              filteredNotes.map((n) => {
                const subj = SUBJECTS.find((s) => s.id === n.subjectId);
                const isCopied = copiedNoteId === n.id;

                return (
                  <div
                    key={n.id}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        {subj && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                            {subj.name}
                          </span>
                        )}
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">
                          {new Date(n.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1 mb-2">
                        {n.title}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-line line-clamp-5 leading-relaxed font-mono">
                        {n.content}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => handleCopyNote(n)}
                          className="text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 p-1.5 rounded-lg hover:bg-purple-50 dark:hover:bg-slate-800 transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                          title="Copy Note"
                          aria-label="Copy Note"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleEditNote(n)}
                          className="text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 p-1.5 rounded-lg hover:bg-purple-50 dark:hover:bg-slate-800 transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                          title="Edit Note"
                          aria-label="Edit Note"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDeleteNote(n.id)}
                        className="text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                        title="Delete note"
                        aria-label="Delete note"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
