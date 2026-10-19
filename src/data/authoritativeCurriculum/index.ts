import { GradeLevel, SubjectId, Topic } from '../../types';
import { AuthoritativeTopicSpec, GradeAuthoritativeMap } from './types';
import { specToTopic } from './factory';
import { PRIMARY_AUTHORITATIVE_CURRICULUM } from './primary';
import { JUNIOR_AUTHORITATIVE_CURRICULUM, getJuniorAuthoritativeMap } from './junior';
import { SENIOR_AUTHORITATIVE_CURRICULUM, getSeniorAuthoritativeMap } from './senior';

export { specToTopic };
export * from './types';

// Normalized fallback map if a subject is requested across alternate aliases
function resolveSubjectAlias(subjectId: SubjectId): SubjectId {
  if (subjectId === 'ict') return 'computer-science';
  if (subjectId === 'pe') return 'phe';
  if (subjectId === 'basic-science') return 'science';
  return subjectId;
}

export function getAuthoritativeTopics(grade: GradeLevel, subjectId: SubjectId): Topic[] {
  const normalizedSubject = resolveSubjectAlias(subjectId);
  const gradeNum = parseInt(grade.replace('grade-', ''), 10) || 1;

  let gradeMap: GradeAuthoritativeMap | undefined;

  if (gradeNum <= 5) {
    gradeMap = PRIMARY_AUTHORITATIVE_CURRICULUM[grade] || PRIMARY_AUTHORITATIVE_CURRICULUM['grade-1'];
  } else if (gradeNum <= 9) {
    gradeMap = JUNIOR_AUTHORITATIVE_CURRICULUM[grade] || getJuniorAuthoritativeMap();
  } else {
    gradeMap = SENIOR_AUTHORITATIVE_CURRICULUM[grade] || getSeniorAuthoritativeMap();
  }

  // Retrieve the 3 authoritative topic specs for this subject
  let specs: [AuthoritativeTopicSpec, AuthoritativeTopicSpec, AuthoritativeTopicSpec] | undefined =
    gradeMap?.[subjectId] || gradeMap?.[normalizedSubject];

  // If not found directly, check if junior or senior maps have it
  if (!specs) {
    const juniorMap = getJuniorAuthoritativeMap();
    const seniorMap = getSeniorAuthoritativeMap();
    specs = juniorMap[subjectId] || juniorMap[normalizedSubject] || seniorMap[subjectId] || seniorMap[normalizedSubject];
  }

  // If still not found, provide a standardized 3-topic syllabus for the subject
  if (!specs) {
    const subjTitle = subjectId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    specs = [
      {
        title: `Foundations of ${subjTitle}`,
        subtitle: `Core principles, definitions, and elementary models for Grade ${gradeNum}`,
        quickInfo: `Essential syllabus coverage of introductory principles in ${subjTitle}, designed to establish foundational comprehension.`,
        keyConcepts: [
          `Fundamental concepts and standard conventions governing ${subjTitle}.`,
          `Methodical problem-solving and application of core axioms.`,
          `High-frequency exam guidelines and avoiding common pitfalls.`
        ],
        quiz: [
          { q: `What is the primary objective of studying ${subjTitle}?`, opts: [`To understand key principles and apply analytical methods`, `To memorize facts without understanding`, `To ignore scientific methods`, `None of the above`], ans: 0, exp: `Mastering foundational concepts provides analytical frameworks.` },
          { q: `Which of the following is a core principle in ${subjTitle}?`, opts: [`Evidence-based reasoning and structured application`, `Random guessing`, `Ignoring syllabus units`, `Skipping validation`], ans: 0, exp: `Rigorous reasoning is foundational to academic mastery.` },
          { q: `When approaching a standard curriculum problem in ${subjTitle}, the first step should be:`, opts: [`Carefully analyze the given conditions and identify target variables`, `Write a random conclusion`, `Skip calculations`, `Assume invalid conditions`], ans: 0, exp: `Problem breakdown is the first systematic step.` },
          { q: `How do practitioners in ${subjTitle} verify their conclusions?`, opts: [`Cross-checking against known laws and testing edge cases`, `Guessing arbitrarily`, `Ignoring errors`, `Stopping without reviewing`], ans: 0, exp: `Verification guarantees accuracy and repeatability.` },
          { q: `Why is thorough grasp of ${subjTitle} crucial for academic advancement?`, opts: [`It provides prerequisites for higher-level applications and examinations`, `It is never examined`, `It is completely isolated`, `It requires no practice`], ans: 0, exp: `Foundations underpin subsequent advanced topics.` }
        ]
      },
      {
        title: `Intermediate Applications & Techniques in ${subjTitle}`,
        subtitle: `Analytical problem solving, methods, and practical frameworks`,
        quickInfo: `Deep dive into standard operations, methodological procedures, and contextual applications in ${subjTitle}.`,
        keyConcepts: [
          `Step-by-step procedures for complex problem resolution.`,
          `Contextual interpretation of findings and data analysis.`,
          `Comparative evaluation of alternative solution pathways.`
        ],
        quiz: [
          { q: `In intermediate ${subjTitle}, why is structured methodology preferred over ad-hoc steps?`, opts: [`It guarantees reproducible, accurate, and verifiable solutions`, `It wastes time`, `It is required only for computers`, `It eliminates all thinking`], ans: 0, exp: `Structured approaches minimize procedural errors.` },
          { q: `Which tool or method is standard when evaluating data in ${subjTitle}?`, opts: [`Systematic classification and quantitative comparison`, `Subjective guessing`, `Ignoring baseline data`, `Removing anomalies blindly`], ans: 0, exp: `Systematic classification enables rigorous analysis.` },
          { q: `When comparing two competing approaches in ${subjTitle}, what criterion is paramount?`, opts: [`Correctness, efficiency, and adherence to established rules`, `Which looks more complicated`, `Which has more words`, `Which was invented first`], ans: 0, exp: `Validity and efficiency are core evaluation criteria.` },
          { q: `What is a common error encountered in intermediate ${subjTitle}?`, opts: [`Misapplying formulas without verifying boundary conditions`, `Reading instructions too carefully`, `Double-checking work`, `Drawing clear diagrams`], ans: 0, exp: `Checking boundary conditions prevents major errors.` },
          { q: `How should intermediate learners master problem solving in ${subjTitle}?`, opts: [`Consistent deliberate practice across varied problem types`, `Cramming the night before`, `Memorizing answer keys only`, `Avoiding difficult exercises`], ans: 0, exp: `Varied practice fosters adaptable conceptual mastery.` }
        ]
      },
      {
        title: `Advanced Synthesis, Problem Solving & Exam Mastery in ${subjTitle}`,
        subtitle: `Exam-level questions, integrated case studies, and critical thinking`,
        quickInfo: `Comprehensive synthesis linking multiple syllabus areas, past question patterns, and exam-readiness tactics in ${subjTitle}.`,
        keyConcepts: [
          `Integrated multi-step problems connecting distinct curriculum strands.`,
          `Precision in written responses, diagrams, and mathematical notation.`,
          `Time-management strategies and tactical review under exam conditions.`
        ],
        quiz: [
          { q: `What characterizes an advanced exam-level problem in ${subjTitle}?`, opts: [`It integrates concepts across multiple topics and demands multi-step reasoning`, `It only tests single vocabulary definitions`, `It has no answer`, `It requires no thought`], ans: 0, exp: `Synoptic problems evaluate holistic synthesis.` },
          { q: `In high-stakes examinations for ${subjTitle}, full credit typically requires:`, opts: [`Showing all necessary working steps, correct units, and logical clarity`, `Writing only a final number with no justification`, `Guessing the multiple choice`, `Leaving answers ambiguous`], ans: 0, exp: `Clear steps and units earn maximum marks.` },
          { q: `What is the most effective exam review strategy for ${subjTitle}?`, opts: [`Solving timed past examination papers and reviewing error logs`, `Passively rereading notes once`, `Ignoring marked tests`, `Studying only easy questions`], ans: 0, exp: `Active retrieval and timed simulations develop exam readiness.` },
          { q: `When encountering an unfamiliar question format in ${subjTitle}, you should:`, opts: [`Decompose the question into recognizable sub-problems and relate to known concepts`, `Immediately panic and leave it blank`, `Guess without reading`, `Complain to the invigilator`], ans: 0, exp: `Decomposition unlocks unfamiliar exam problems.` },
          { q: `Final review before submitting your exam script in ${subjTitle} should focus on:`, opts: [`Verifying arithmetic calculations, question requirements, and labeling`, `Looking around the exam room`, `Erasing correct answers`, `Closing the booklet early`], ans: 0, exp: `Final verification catches careless transcription slips.` }
        ]
      }
    ];
  }

  // Exactly 3 topics per subject per grade, strictly enforced
  return specs.slice(0, 3).map((spec, index) => specToTopic(grade, subjectId, index, spec));
}
