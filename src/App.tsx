import React, { useState, useEffect } from 'react';
import { GradeLevel, SubjectId, Topic, UserProfile } from './types';
import { getStoredSession, removeStoredSession, updateUserGrade } from './services/api';
import { AuthScreen } from './components/AuthScreen';
import { Navigation } from './components/Navigation';
import { DashboardView } from './components/DashboardView';
import { SubjectsView } from './components/SubjectsView';
import { TopicsView } from './components/TopicsView';
import { TopicDetailView } from './components/TopicDetailView';
import { TimedTestView } from './components/TimedTestView';
import { NotesAndTasksView } from './components/NotesAndTasksView';
import { StudyTimerView } from './components/StudyTimerView';
import { AchievementsView } from './components/AchievementsView';
import { OpportunitiesView } from './components/OpportunitiesView';
import { SettingsView } from './components/SettingsView';
import { FloatingEduviaAI } from './components/FloatingEduviaAI';
import { EduviaAIFullscreen } from './components/EduviaAIFullscreen';
import { BrainFeedView } from './components/BrainFeedView';
import { PhotoSolverModal } from './components/PhotoSolverModal';

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(() => getStoredSession());
  const [activeView, setActiveView] = useState<string>('dashboard');
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('math');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [initialTopicNote, setInitialTopicNote] = useState<Topic | null>(null);
  const [isAiFullscreen, setIsAiFullscreen] = useState(false);
  const [isPhotoSolverOpen, setIsPhotoSolverOpen] = useState(false);

  // Handle Login success
  const onLoginSuccess = (authenticatedUser: UserProfile) => {
    setUser(authenticatedUser);
    setActiveView('dashboard');
  };

  // Backwards compatibility alias
  const handleAuthSuccess = onLoginSuccess;

  // Handle Logout
  const handleLogout = () => {
    removeStoredSession();
    setUser(null);
    setActiveView('dashboard');
    setSelectedTopic(null);
  };

  // Handle Grade Change
  const handleChangeGrade = (newGrade: GradeLevel) => {
    if (user) {
      const updated = { ...user, grade: newGrade };
      setUser(updated);
      updateUserGrade(user.id, newGrade);
    }
  };

  // Navigation callbacks
  const handleSelectSubject = (subjectId: SubjectId) => {
    setSelectedSubjectId(subjectId);
    setActiveView('topics');
  };

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setActiveView('topic-detail');
  };

  const handleLaunchTimedTest = (subjectId: SubjectId) => {
    setSelectedSubjectId(subjectId);
    setActiveView('test');
  };

  const handleOpenNotesWithTopic = (topic: Topic) => {
    setInitialTopicNote(topic);
    setActiveView('notes-tasks');
  };

  // STRICT GUARD: If user is not authenticated, strictly show the AuthScreen
  if (!user) {
    return (
      <AuthScreen
        onLoginSuccess={onLoginSuccess}
        onAuthSuccess={onLoginSuccess}
      />
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white font-['Plus_Jakarta_Sans'] overflow-hidden">
      {/* Sidebar Navigation */}
      <Navigation
        user={user}
        activeView={activeView}
        onNavigate={(view) => {
          if (view === 'eduvia-ai') {
            setIsAiFullscreen(true);
          } else {
            setActiveView(view);
            if (view !== 'topic-detail') setSelectedTopic(null);
          }
        }}
        onLogout={handleLogout}
        onChangeGrade={handleChangeGrade}
        onOpenEduviaAI={() => setIsAiFullscreen(true)}
        onOpenPhotoSolver={() => setIsPhotoSolverOpen(true)}
      >
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto min-h-0 bg-slate-50 dark:bg-[#030712]">
          {activeView === 'dashboard' && (
            <DashboardView
              user={user}
              onNavigate={(view) => {
                if (view === 'eduvia-ai') {
                  setIsAiFullscreen(true);
                } else {
                  setActiveView(view);
                }
              }}
              onSelectSubject={handleSelectSubject}
              onLaunchTimedTest={handleLaunchTimedTest}
              onOpenEduviaAI={() => setIsAiFullscreen(true)}
              onOpenPhotoSolver={() => setIsPhotoSolverOpen(true)}
            />
          )}

          {activeView === 'subjects' && (
            <SubjectsView
              user={user}
              onSelectSubject={handleSelectSubject}
              onStartTimedTest={handleLaunchTimedTest}
            />
          )}

          {activeView === 'brainfeed' && (
            <BrainFeedView
              user={user}
              onOpenEduviaAIWithQuery={(query) => {
                setIsAiFullscreen(true);
              }}
            />
          )}

          {activeView === 'topics' && (
            <TopicsView
              subjectId={selectedSubjectId}
              user={user}
              onSelectTopic={handleSelectTopic}
              onBackToSubjects={() => setActiveView('subjects')}
              onStartTimedTest={handleLaunchTimedTest}
            />
          )}

          {activeView === 'topic-detail' && selectedTopic && (
            <TopicDetailView
              topic={selectedTopic}
              user={user}
              onBack={() => setActiveView('topics')}
              onOpenNotesWithTopic={handleOpenNotesWithTopic}
            />
          )}

          {activeView === 'test' && (
            <TimedTestView
              initialSubjectId={selectedSubjectId}
              user={user}
              onBackToDashboard={() => setActiveView('dashboard')}
            />
          )}

          {activeView === 'notes-tasks' && (
            <NotesAndTasksView
              user={user}
              initialTopicNote={initialTopicNote}
              onClearInitialTopicNote={() => setInitialTopicNote(null)}
            />
          )}

          {activeView === 'study-timer' && (
            <StudyTimerView user={user} />
          )}

          {activeView === 'achievements' && (
            <AchievementsView user={user} />
          )}

          {activeView === 'opportunities' && (
            <OpportunitiesView user={user} />
          )}

          {activeView === 'settings' && (
            <SettingsView
              user={user}
              onChangeGrade={handleChangeGrade}
              onLogout={handleLogout}
            />
          )}
        </div>
      </Navigation>

      {/* Homework & Textbook Multimodal Photo Solver Modal */}
      <PhotoSolverModal
        isOpen={isPhotoSolverOpen}
        onClose={() => setIsPhotoSolverOpen(false)}
        user={user}
        onOpenInEduviaAI={(initialQuery) => {
          setIsPhotoSolverOpen(false);
          setIsAiFullscreen(true);
        }}
      />

      {/* Persistent Floating Eduvia AI Assistant */}
      <FloatingEduviaAI
        user={user}
        onOpenFullscreen={() => setIsAiFullscreen(true)}
      />

      {/* Fullscreen Eduvia AI Modal/View */}
      <EduviaAIFullscreen
        user={user}
        isOpen={isAiFullscreen}
        onClose={() => setIsAiFullscreen(false)}
        onOpenPhotoSolver={() => setIsPhotoSolverOpen(true)}
      />
    </div>
  );
}
