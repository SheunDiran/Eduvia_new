import React, { useState, useRef, useEffect } from 'react';
import {
  Camera,
  Upload,
  X,
  Sparkles,
  RotateCcw,
  BookOpen,
  Check,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { aiSolvePhoto, saveNote } from '../services/api';
import { GradeLevel, SubjectId, UserProfile } from '../types';
import { MarkdownRenderer } from './MarkdownRenderer';

interface PhotoSolverModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  initialSubject?: string;
  onOpenInEduviaAI?: (initialQuery: string) => void;
}

export const PhotoSolverModal: React.FC<PhotoSolverModalProps> = ({
  isOpen,
  onClose,
  user,
  initialSubject,
  onOpenInEduviaAI
}) => {
  const [mode, setMode] = useState<'upload' | 'camera'>('upload');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('image/jpeg');
  const [studentNote, setStudentNote] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(initialSubject || 'Mathematics');
  const [isLoading, setIsLoading] = useState(false);
  const [solutionText, setSolutionText] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSavedToNotes, setIsSavedToNotes] = useState(false);

  // Camera video stream
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      stopCamera();
      setImagePreview(null);
      setSolutionText(null);
      setErrorMessage(null);
      setIsSavedToNotes(false);
    }
  }, [isOpen]);

  const startCamera = async () => {
    setMode('camera');
    setErrorMessage(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err: any) {
      console.warn('Camera access denied or unavailable:', err);
      setErrorMessage('Camera access was denied or is not supported. Please upload a photo from your gallery instead.');
      setMode('upload');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      setImagePreview(dataUrl);
      setMimeType('image/jpeg');
      stopCamera();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select a valid image file (PNG, JPG, WEBP).');
      return;
    }

    setMimeType(file.type);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
      setErrorMessage(null);
    };
    reader.readAsDataURL(file);
  };

  const handleSolve = async () => {
    if (!imagePreview) return;
    setIsLoading(true);
    setErrorMessage(null);
    setSolutionText(null);

    try {
      const result = await aiSolvePhoto({
        imageBase64: imagePreview,
        mimeType,
        studentNote: studentNote.trim(),
        subject: selectedSubject,
        grade: user.grade
      });
      setSolutionText(result);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to analyze photo. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveToNotes = () => {
    if (!solutionText) return;
    const cleanTitle = `Photo Solution: ${selectedSubject} (${new Date().toLocaleDateString()})`;
    saveNote(user.id, {
      title: cleanTitle,
      content: `${studentNote ? `**Student Question Note:** ${studentNote}\n\n` : ''}${solutionText}`,
      subjectId: 'math'
    });
    setIsSavedToNotes(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-['Outfit']">
                Eduvia Vision Photo Solver
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Snap homework, handwritten math, diagrams, or textbook pages for instant Socratic analysis
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {errorMessage && (
            <div className="p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {!solutionText ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Image Input Area (Left/Top) */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Target Problem Photo
                  </label>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => { stopCamera(); setMode('upload'); }}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                        mode === 'upload'
                          ? 'bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300'
                          : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      Upload File
                    </button>
                    <button
                      type="button"
                      onClick={startCamera}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                        mode === 'camera'
                          ? 'bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300'
                          : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      Use Camera
                    </button>
                  </div>
                </div>

                {/* Viewport: Upload Drag / Camera Preview / Captured Photo */}
                <div className="relative aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/50 flex flex-col items-center justify-center overflow-hidden">
                  {imagePreview ? (
                    <div className="relative w-full h-full group">
                      <img
                        src={imagePreview}
                        alt="Problem Preview"
                        className="w-full h-full object-contain bg-black/10"
                      />
                      <button
                        type="button"
                        onClick={() => { setImagePreview(null); setMode('upload'); }}
                        className="absolute top-3 right-3 px-3 py-1.5 bg-black/75 hover:bg-black text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 backdrop-blur-sm cursor-pointer shadow-lg"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Retake / Change</span>
                      </button>
                    </div>
                  ) : mode === 'camera' ? (
                    <div className="relative w-full h-full bg-black flex items-center justify-center">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={capturePhoto}
                        className="absolute bottom-4 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-2xl flex items-center gap-2 shadow-xl shadow-purple-600/30 cursor-pointer"
                      >
                        <Camera className="w-4 h-4" />
                        <span>Snap Photo</span>
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="cursor-pointer p-6 text-center space-y-3"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto shadow-sm">
                        <Upload className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                          Click to select a photo of your problem
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          PNG, JPG, or WEBP from textbook, whiteboard, or worksheet
                        </p>
                      </div>
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Problem Context & Questions (Right/Bottom) */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Academic Subject
                    </label>
                    <select
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:ring-2 focus:ring-purple-600 outline-none"
                    >
                      <option value="Mathematics">Mathematics / Calculus</option>
                      <option value="Physics">Physics / Mechanics</option>
                      <option value="Chemistry">Chemistry & Organic Chem</option>
                      <option value="Biology">Biology & Life Sciences</option>
                      <option value="Computer Science">Computer Science & Algorithms</option>
                      <option value="Economics">Economics & Accounting</option>
                      <option value="Literature">Literature & History</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Student Note or Where You Are Stuck (Optional)
                    </label>
                    <textarea
                      value={studentNote}
                      onChange={(e) => setStudentNote(e.target.value)}
                      placeholder="e.g. 'I am stuck on step 2 when finding the integral', or 'Does this reaction produce an SN1 or SN2 product?'"
                      rows={4}
                      className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-purple-600 outline-none resize-none"
                    />
                  </div>

                  <div className="p-3 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/50 rounded-xl text-xs text-purple-900 dark:text-purple-200 space-y-1">
                    <p className="font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      Multimodal Pedagogy
                    </p>
                    <p className="text-[11px] leading-relaxed text-purple-800 dark:text-purple-300">
                      Eduvia AI reads handwritten math, labels diagrams, and isolates your exact confusion rather than just regurgitating raw answers.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  id="btn-run-photo-solve"
                  onClick={handleSolve}
                  disabled={!imagePreview || isLoading}
                  className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-purple-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[44px]"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Analyzing problem with Eduvia Vision...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Solve Problem With Eduvia AI</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            /* Solution Output View */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60">
                <div className="flex items-center gap-3">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Thumbnail"
                      className="w-12 h-12 rounded-xl object-cover border border-purple-200 dark:border-purple-700 shadow-sm"
                    />
                  )}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Problem Solved & Analyzed
                    </h3>
                    <p className="text-xs text-purple-700 dark:text-purple-300">
                      {selectedSubject} • Level {user.grade.replace('grade-', 'Grade ').replace('uni-', 'University ')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSaveToNotes}
                    disabled={isSavedToNotes}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
                      isSavedToNotes
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-purple-400'
                    }`}
                  >
                    {isSavedToNotes ? <Check className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                    <span>{isSavedToNotes ? 'Saved to Notes' : 'Save to Notes'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenInEduviaAI && solutionText) {
                        onClose();
                        onOpenInEduviaAI(`Regarding this problem: ${studentNote || selectedSubject}`);
                      }
                    }}
                    className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Follow-up in Chat</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setSolutionText(null); setImagePreview(null); }}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold transition cursor-pointer"
                  >
                    New Photo
                  </button>
                </div>
              </div>

              {/* Solution Markdown */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm leading-relaxed text-sm">
                <MarkdownRenderer content={solutionText} isUser={false} />
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
