import { GradeInfo, GradeLevel } from '../types';

export const GRADES: GradeInfo[] = [
  {
    id: 'grade-1',
    number: 1,
    label: 'Grade 1 (Primary 1)',
    stage: 'Primary / Elementary',
    description: 'Foundations of reading, phonics, basic arithmetic, and sensory science.'
  },
  {
    id: 'grade-2',
    number: 2,
    label: 'Grade 2 (Primary 2)',
    stage: 'Primary / Elementary',
    description: 'Two-digit operations, reading fluency, nature, and community studies.'
  },
  {
    id: 'grade-3',
    number: 3,
    label: 'Grade 3 (Primary 3)',
    stage: 'Primary / Elementary',
    description: 'Multiplication intro, basic grammar, ecosystems, and geography basics.'
  },
  {
    id: 'grade-4',
    number: 4,
    label: 'Grade 4 (Primary 4)',
    stage: 'Primary / Elementary',
    description: 'Fractions, paragraph structure, energy & states of matter, and regional history.'
  },
  {
    id: 'grade-5',
    number: 5,
    label: 'Grade 5 (Primary 5)',
    stage: 'Primary / Elementary',
    description: 'Decimals, volume, narrative essays, Earth science, and civics.'
  },
  {
    id: 'grade-6',
    number: 6,
    label: 'Grade 6 (Primary 6)',
    stage: 'Primary / Elementary',
    description: 'Ratios, introductory pre-algebra, argumentative writing, and human body systems.'
  },
  {
    id: 'grade-7',
    number: 7,
    label: 'Grade 7 (JSS 1 / Year 8)',
    stage: 'Junior Secondary / Middle',
    description: 'Pre-algebra integers, cellular biology, ancient civilizations, and introductory coding.'
  },
  {
    id: 'grade-8',
    number: 8,
    label: 'Grade 8 (JSS 2 / Year 9)',
    stage: 'Junior Secondary / Middle',
    description: 'Linear equations, periodic table elements, world history, and literature analysis.'
  },
  {
    id: 'grade-9',
    number: 9,
    label: 'Grade 9 (JSS 3 / Freshman)',
    stage: 'Junior Secondary / Middle',
    description: 'Quadratic prep, chemical bonding, genetics, economics intro, and national exams.'
  },
  {
    id: 'grade-10',
    number: 10,
    label: 'Grade 10 (SS 1 / Sophomore)',
    stage: 'Senior Secondary / High School',
    description: 'Advanced algebra, Newtonian mechanics, stoichiometry, world literature, and macroeconomics.'
  },
  {
    id: 'grade-11',
    number: 11,
    label: 'Grade 11 (SS 2 / Junior)',
    stage: 'Senior Secondary / High School',
    description: 'Trigonometry & pre-calc, electromagnetism, organic chemistry, constitutional law, and calculus prep.'
  },
  {
    id: 'grade-12',
    number: 12,
    label: 'Grade 12 (SS 3 / Senior)',
    stage: 'Senior Secondary / High School',
    description: 'Calculus, modern physics, biochemical pathways, international trade, and college entrance.'
  }
];

export const DEFAULT_GRADE: GradeLevel = 'grade-10';
