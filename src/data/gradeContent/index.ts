import { GradeLevel, SubjectId, Topic } from '../../types';
import { getAuthoritativeTopics } from '../authoritativeCurriculum';

/**
 * Returns strictly the 3 grade-appropriate authoritative topics for a given grade and subject.
 * Each topic has 3 curated verified videos, quickInfo, and a 5-question quiz.
 */
export function getTopicsForGradeAndSubject(grade: GradeLevel, subjectId: SubjectId): Topic[] {
  return getAuthoritativeTopics(grade, subjectId);
}

/**
 * Grade-Content Proxy / Registry structure:
 * Allows accessing content via:
 * gradeContent[grade][subject].topics
 */
export const gradeContent: Record<GradeLevel, Record<string, { topics: Topic[] }>> = new Proxy(
  {} as Record<GradeLevel, Record<string, { topics: Topic[] }>>,
  {
    get(_target, gradeKey: string) {
      return new Proxy(
        {},
        {
          get(_subjectTarget, subjectKey: string) {
            const topics = getTopicsForGradeAndSubject(gradeKey as GradeLevel, subjectKey as SubjectId);
            return { topics };
          }
        }
      );
    }
  }
);
