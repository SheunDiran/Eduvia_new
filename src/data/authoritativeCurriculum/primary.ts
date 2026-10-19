import { GradeAuthoritativeMap } from './types';
import { GRADE_1_CURRICULUM } from './primaryGrade1';
import { GRADE_2_CURRICULUM } from './primaryGrade2';
import { GRADE_3_CURRICULUM } from './primaryGrade3';
import { GRADE_4_CURRICULUM } from './primaryGrade4';
import { GRADE_5_CURRICULUM } from './primaryGrade5';

export {
  GRADE_1_CURRICULUM,
  GRADE_2_CURRICULUM,
  GRADE_3_CURRICULUM,
  GRADE_4_CURRICULUM,
  GRADE_5_CURRICULUM
};

export const PRIMARY_AUTHORITATIVE_CURRICULUM: Record<string, GradeAuthoritativeMap> = {
  'grade-1': GRADE_1_CURRICULUM,
  'grade-2': GRADE_2_CURRICULUM,
  'grade-3': GRADE_3_CURRICULUM,
  'grade-4': GRADE_4_CURRICULUM,
  'grade-5': GRADE_5_CURRICULUM
};
