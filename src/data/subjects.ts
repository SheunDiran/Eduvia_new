import { GradeLevel, Subject, SubjectId } from '../types';

export const ALL_SUBJECTS_MAP: Record<SubjectId, Subject> = {
  math: {
    id: 'math',
    name: 'Math',
    iconName: 'Calculator',
    shortDesc: 'Numbers, arithmetic, algebra, geometry, functions, and quantitative problem-solving.',
    category: 'Sciences',
    themeColor: '#7C3AED'
  },
  'english-lang': {
    id: 'english-lang',
    name: 'English Language',
    iconName: 'PenTool',
    shortDesc: 'Grammar mechanics, reading comprehension, vocabulary, essay writing, and verbal expression.',
    category: 'Languages',
    themeColor: '#9333EA'
  },
  'english-lit': {
    id: 'english-lit',
    name: 'Literature',
    iconName: 'BookOpen',
    shortDesc: 'Prose, poetry, drama, literary devices, character arcs, and thematic interpretation.',
    category: 'Humanities',
    themeColor: '#8B5CF6'
  },
  science: {
    id: 'science',
    name: 'Science',
    iconName: 'FlaskConical',
    shortDesc: 'Exploration of living organisms, the physical environment, energy, and scientific curiosity.',
    category: 'Sciences',
    themeColor: '#059669'
  },
  'basic-science': {
    id: 'basic-science',
    name: 'Basic Science',
    iconName: 'FlaskConical',
    shortDesc: 'Foundational biology, chemistry, physics, the human body, matter, and forces.',
    category: 'Sciences',
    themeColor: '#059669'
  },
  'social-studies': {
    id: 'social-studies',
    name: 'Social Studies',
    iconName: 'Globe',
    shortDesc: 'Family, culture, communities, geography, leadership, and peaceful co-existence.',
    category: 'Humanities',
    themeColor: '#D97706'
  },
  art: {
    id: 'art',
    name: 'Art',
    iconName: 'Palette',
    shortDesc: 'Drawing, color theory, design principles, painting, traditional crafts, and creativity.',
    category: 'Humanities',
    themeColor: '#EC4899'
  },
  pe: {
    id: 'pe',
    name: 'Physical Education',
    iconName: 'Activity',
    shortDesc: 'Physical fitness, motor skills, sportsmanship, health habits, and teamwork.',
    category: 'Tech & Applied',
    themeColor: '#10B981'
  },
  phe: {
    id: 'phe',
    name: 'PHE',
    iconName: 'Activity',
    shortDesc: 'Physical and Health Education, athletics, personal hygiene, sports rules, and wellness.',
    category: 'Tech & Applied',
    themeColor: '#10B981'
  },
  'computer-science': {
    id: 'computer-science',
    name: 'Computer Studies',
    iconName: 'Code2',
    shortDesc: 'Computer systems, digital literacy, programming logic, networks, and internet safety.',
    category: 'Tech & Applied',
    themeColor: '#6366F1'
  },
  ict: {
    id: 'ict',
    name: 'ICT',
    iconName: 'Code2',
    shortDesc: 'Information and Communications Technology, applications, algorithms, and digital tools.',
    category: 'Tech & Applied',
    themeColor: '#6366F1'
  },
  music: {
    id: 'music',
    name: 'Music',
    iconName: 'Music',
    shortDesc: 'Rhythm, melody, instrument families, musical notation, singing, and cultural sounds.',
    category: 'Humanities',
    themeColor: '#F59E0B'
  },
  crs: {
    id: 'crs',
    name: 'CRS',
    iconName: 'BookOpen',
    shortDesc: 'Christian Religious Studies, biblical narratives, moral values, faith, and ethics.',
    category: 'Humanities',
    themeColor: '#3B82F6'
  },
  'civic-education': {
    id: 'civic-education',
    name: 'Civic Education',
    iconName: 'Shield',
    shortDesc: 'Constitutional rights, rule of law, good governance, community ethics, and active citizenship.',
    category: 'Humanities',
    themeColor: '#2563EB'
  },
  'basic-technology': {
    id: 'basic-technology',
    name: 'Basic Technology',
    iconName: 'Wrench',
    shortDesc: 'Workshop safety, technical drawing, materials processing, tools, and introductory mechanics.',
    category: 'Tech & Applied',
    themeColor: '#64748B'
  },
  'agricultural-science': {
    id: 'agricultural-science',
    name: 'Agricultural Science',
    iconName: 'Sprout',
    shortDesc: 'Crop production, soil science, animal husbandry, farm tools, and agricultural management.',
    category: 'Tech & Applied',
    themeColor: '#65A30D'
  },
  french: {
    id: 'french',
    name: 'French',
    iconName: 'Languages',
    shortDesc: 'French vocabulary, grammar, conjugation, conversational dialogue, and cultural reading.',
    category: 'Languages',
    themeColor: '#E11D48'
  },
  'business-studies': {
    id: 'business-studies',
    name: 'Business Studies',
    iconName: 'Briefcase',
    shortDesc: 'Office practice, bookkeeping, commerce fundamentals, banking, and consumer rights.',
    category: 'Business & Social',
    themeColor: '#0EA5E9'
  },
  biology: {
    id: 'biology',
    name: 'Biology',
    iconName: 'Dna',
    shortDesc: 'Cell biology, genetics, physiology, plant biology, ecology, and evolutionary science.',
    category: 'Sciences',
    themeColor: '#059669'
  },
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    iconName: 'FlaskConical',
    shortDesc: 'Atomic theory, periodic trends, bonding, stoichiometry, gas laws, and organic reactions.',
    category: 'Sciences',
    themeColor: '#D97706'
  },
  physics: {
    id: 'physics',
    name: 'Physics',
    iconName: 'Atom',
    shortDesc: 'Kinematics, dynamics, energy, wave motion, optics, electromagnetism, and modern physics.',
    category: 'Sciences',
    themeColor: '#2563EB'
  },
  history: {
    id: 'history',
    name: 'History',
    iconName: 'Landmark',
    shortDesc: 'Historical eras, ancient civilizations, African heritage, and world turning points.',
    category: 'Humanities',
    themeColor: '#B45309'
  },
  geography: {
    id: 'geography',
    name: 'Geography',
    iconName: 'Globe',
    shortDesc: 'Physical geomorphology, climate zones, map reading, settlement patterns, and resources.',
    category: 'Sciences',
    themeColor: '#16A34A'
  },
  government: {
    id: 'government',
    name: 'Government',
    iconName: 'Scale',
    shortDesc: 'Political systems, arms of government, public administration, and foreign policy.',
    category: 'Humanities',
    themeColor: '#DC2626'
  },
  'further-math': {
    id: 'further-math',
    name: 'Further Mathematics',
    iconName: 'Binary',
    shortDesc: 'Advanced polynomial algebra, trigonometry identities, calculus, vectors, and matrices.',
    category: 'Sciences',
    themeColor: '#4F46E5'
  },
  accounting: {
    id: 'accounting',
    name: 'Financial Accounting',
    iconName: 'FileSpreadsheet',
    shortDesc: 'Double-entry bookkeeping, trial balance, income statements, and balance sheets.',
    category: 'Business & Social',
    themeColor: '#0284C7'
  },
  commerce: {
    id: 'commerce',
    name: 'Commerce',
    iconName: 'ShoppingBag',
    shortDesc: 'Trade channels, marketing, insurance, transportation, and electronic commerce.',
    category: 'Business & Social',
    themeColor: '#059669'
  },
  economics: {
    id: 'economics',
    name: 'Economics',
    iconName: 'TrendingUp',
    shortDesc: 'Micro and macroeconomic principles, market structures, price mechanisms, and development.',
    category: 'Business & Social',
    themeColor: '#0D9488'
  }
};

export const SUBJECTS: Subject[] = Object.values(ALL_SUBJECTS_MAP);

/**
 * Returns strictly the grade-specific subjects defined in Eduvia's curriculum:
 *
 * Grade 1–5 (9 subjects):
 * Math, English / Language Arts, Science, Social Studies / Basic Studies, Art, Physical Education, Computer Studies, Music, CRS
 *
 * Grade 6–8 (14 subjects):
 * Math, English Language, Literature, Basic Science, Social Studies, Civic Education, ICT, Basic Technology, Agricultural Science, French, Art, PHE, Business Studies, CRS
 *
 * Grade 9 (15 subjects):
 * Math, English Language, Literature, Biology, Chemistry, Physics, Civic Education, History, ICT / Computer Science, French, Business Studies, Agricultural Science, Art, PHE, CRS
 *
 * Grade 10–12 (16 subjects):
 * Math, English Language, Literature, Biology, Chemistry, Physics, Geography, Government, Civic Education, ICT / Computer Science, French, Further Mathematics, Financial Accounting, Commerce, Agricultural Science, CRS
 */
export function getSubjectsForGrade(grade: GradeLevel): Subject[] {
  const gradeNum = parseInt(grade.replace('grade-', ''), 10) || 10;

  if (gradeNum >= 1 && gradeNum <= 5) {
    return [
      { ...ALL_SUBJECTS_MAP['math'], name: 'Math' },
      { ...ALL_SUBJECTS_MAP['english-lang'], name: 'English / Language Arts' },
      { ...ALL_SUBJECTS_MAP['science'], name: 'Science' },
      { ...ALL_SUBJECTS_MAP['social-studies'], name: 'Social Studies / Basic Studies' },
      { ...ALL_SUBJECTS_MAP['art'], name: 'Art' },
      { ...ALL_SUBJECTS_MAP['pe'], name: 'Physical Education' },
      { ...ALL_SUBJECTS_MAP['computer-science'], name: 'Computer Studies' },
      { ...ALL_SUBJECTS_MAP['music'], name: 'Music' },
      { ...ALL_SUBJECTS_MAP['crs'], name: 'CRS' }
    ];
  }

  if (gradeNum >= 6 && gradeNum <= 8) {
    return [
      { ...ALL_SUBJECTS_MAP['math'], name: 'Math' },
      { ...ALL_SUBJECTS_MAP['english-lang'], name: 'English Language' },
      { ...ALL_SUBJECTS_MAP['english-lit'], name: 'Literature' },
      { ...ALL_SUBJECTS_MAP['basic-science'], name: 'Basic Science' },
      { ...ALL_SUBJECTS_MAP['social-studies'], name: 'Social Studies' },
      { ...ALL_SUBJECTS_MAP['civic-education'], name: 'Civic Education' },
      { ...ALL_SUBJECTS_MAP['ict'], name: 'ICT' },
      { ...ALL_SUBJECTS_MAP['basic-technology'], name: 'Basic Technology' },
      { ...ALL_SUBJECTS_MAP['agricultural-science'], name: 'Agricultural Science' },
      { ...ALL_SUBJECTS_MAP['french'], name: 'French' },
      { ...ALL_SUBJECTS_MAP['art'], name: 'Art' },
      { ...ALL_SUBJECTS_MAP['phe'], name: 'PHE' },
      { ...ALL_SUBJECTS_MAP['business-studies'], name: 'Business Studies' },
      { ...ALL_SUBJECTS_MAP['crs'], name: 'CRS' }
    ];
  }

  if (gradeNum === 9) {
    return [
      { ...ALL_SUBJECTS_MAP['math'], name: 'Math' },
      { ...ALL_SUBJECTS_MAP['english-lang'], name: 'English Language' },
      { ...ALL_SUBJECTS_MAP['english-lit'], name: 'Literature' },
      { ...ALL_SUBJECTS_MAP['biology'], name: 'Biology' },
      { ...ALL_SUBJECTS_MAP['chemistry'], name: 'Chemistry' },
      { ...ALL_SUBJECTS_MAP['physics'], name: 'Physics' },
      { ...ALL_SUBJECTS_MAP['civic-education'], name: 'Civic Education' },
      { ...ALL_SUBJECTS_MAP['history'], name: 'History' },
      { ...ALL_SUBJECTS_MAP['computer-science'], name: 'ICT / Computer Science' },
      { ...ALL_SUBJECTS_MAP['french'], name: 'French' },
      { ...ALL_SUBJECTS_MAP['business-studies'], name: 'Business Studies' },
      { ...ALL_SUBJECTS_MAP['agricultural-science'], name: 'Agricultural Science' },
      { ...ALL_SUBJECTS_MAP['art'], name: 'Art' },
      { ...ALL_SUBJECTS_MAP['phe'], name: 'PHE' },
      { ...ALL_SUBJECTS_MAP['crs'], name: 'CRS' }
    ];
  }

  // Grade 10 - 12 (16 subjects)
  return [
    { ...ALL_SUBJECTS_MAP['math'], name: 'Math' },
    { ...ALL_SUBJECTS_MAP['english-lang'], name: 'English Language' },
    { ...ALL_SUBJECTS_MAP['english-lit'], name: 'Literature' },
    { ...ALL_SUBJECTS_MAP['biology'], name: 'Biology' },
    { ...ALL_SUBJECTS_MAP['chemistry'], name: 'Chemistry' },
    { ...ALL_SUBJECTS_MAP['physics'], name: 'Physics' },
    { ...ALL_SUBJECTS_MAP['geography'], name: 'Geography' },
    { ...ALL_SUBJECTS_MAP['government'], name: 'Government' },
    { ...ALL_SUBJECTS_MAP['civic-education'], name: 'Civic Education' },
    { ...ALL_SUBJECTS_MAP['computer-science'], name: 'ICT / Computer Science' },
    { ...ALL_SUBJECTS_MAP['french'], name: 'French' },
    { ...ALL_SUBJECTS_MAP['further-math'], name: 'Further Mathematics' },
    { ...ALL_SUBJECTS_MAP['accounting'], name: 'Financial Accounting' },
    { ...ALL_SUBJECTS_MAP['commerce'], name: 'Commerce' },
    { ...ALL_SUBJECTS_MAP['agricultural-science'], name: 'Agricultural Science' },
    { ...ALL_SUBJECTS_MAP['crs'], name: 'CRS' }
  ];
}

