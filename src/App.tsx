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

export default function App() {
  // CRITICAL REQUIREMENT:
  // "The Login/Sign Up page must always be the first screen shown when the app is opened — before the Dashboard, before anything else."
  // "No page (Dashboard, Subjects, Topics, Test, Notes & Tasks) should be reachable without an active login session. If a user isn't logged in and tries to access any other page, redirect them back to the Login page automatically."
  // "Add a Logout button (visible in the sidebar or top bar on every page once logged in) that ends the session and redirects the user back to the Login page."

  const [user, setUser] = useState<UserProfile | null>(() => getStoredSession());
  const [activeView, setActiveView] = useState<string>('dashboard');
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('math');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [initialTopicNote, setInitialTopicNote] = useState<Topic | null>(null);
  const [isAiFullscreen, setIsAiFullscreen] = useState(false);

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
            />
          )}

          {activeView === 'subjects' && (
            <SubjectsView
              user={user}
              onSelectSubject={handleSelectSubject}
              onStartTimedTest={handleLaunchTimedTest}
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
      />
    </div>
  );
}
