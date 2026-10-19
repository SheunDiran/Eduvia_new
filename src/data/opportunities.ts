import { GradeLevel } from '../types';

export type OpportunityType =
  | 'Scholarship'
  | 'Debate Competition'
  | 'STEM & Science'
  | 'Essay Contest'
  | 'Academic Olympiad'
  | 'Arts & Leadership';

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  type: OpportunityType;
  eligibleGrades: GradeLevel[];
  deadline: string; // Formatted date string or 'Rolling Basis'
  deadlineDate?: string; // YYYY-MM-DD for sorting
  award: string;
  organizer: string;
  location: string;
  link: string;
  applicationFee: string;
  requirements: string[];
  tips: string[];
  featured?: boolean;
}

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-coca-cola-scholars',
    title: 'Coca-Cola Scholars Program Scholarship',
    description: 'An achievement-based scholarship awarded to graduating high school seniors who demonstrate exceptional leadership, academic excellence, and a sustained commitment to community service.',
    type: 'Scholarship',
    eligibleGrades: ['grade-12'],
    deadline: 'October 31, 2026',
    deadlineDate: '2026-10-31',
    award: '$20,000 College Tuition Award (150 Winners)',
    organizer: 'Coca-Cola Scholars Foundation',
    location: 'United States & International Schools',
    link: 'https://www.coca-colascholarsfoundation.org/',
    applicationFee: 'Free to apply',
    requirements: [
      'Current high school senior (Grade 12) planning to pursue a post-secondary degree',
      'Minimum unweighted GPA of 3.0 on a 4.0 scale',
      'Demonstrated leadership track record in school or community initiatives'
    ],
    tips: [
      'Focus on tangible impact rather than a long list of club memberships.',
      'Quantify your community leadership outcomes (e.g., students tutored, funds raised).'
    ],
    featured: true
  },
  {
    id: 'opp-john-locke-essay',
    title: 'John Locke Institute Global Essay Competition',
    description: 'An international academic essay competition inviting young minds to explore challenging questions across Philosophy, Politics, Economics, History, Psychology, Theology, and Law.',
    type: 'Essay Contest',
    eligibleGrades: ['grade-9', 'grade-10', 'grade-11', 'grade-12'],
    deadline: 'June 30, 2026',
    deadlineDate: '2026-06-30',
    award: '$10,000 Grand Prize & Oxford Academic Fellowship',
    organizer: 'John Locke Institute (Oxford & Princeton)',
    location: 'Global / Online Submission',
    link: 'https://www.johnlockeinstitute.com/essay-competition',
    applicationFee: 'Free to enter',
    requirements: [
      'Students aged 18 or under (Junior prize for students under 15)',
      'Single essay under 2,000 words answering one of the annual prompt questions',
      'Original, rigorously argued academic thesis with proper scholarly citations'
    ],
    tips: [
      'Address the strongest counter-argument directly rather than straw-manning opposing views.',
      'Eduvia AI Rhetoric mode can assist you in verifying active voice and logical flow.'
    ],
    featured: true
  },
  {
    id: 'opp-world-schools-debate',
    title: 'International World Schools Debating Championship (WSDC)',
    description: 'The premier global parliamentary debate championship where national high school delegations compete in rapid-fire impromptu and prepared motion debates.',
    type: 'Debate Competition',
    eligibleGrades: ['grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'],
    deadline: 'December 15, 2026',
    deadlineDate: '2026-12-15',
    award: 'World Champion Trophy, Speaker Accolades & International Travel Grants',
    organizer: 'World Schools Debating Championship Council',
    location: 'Regional Qualifiers Online, Global Finals In-Person',
    link: 'https://wsdcdebate.org/',
    applicationFee: 'Funded via national debate societies',
    requirements: [
      'Teams of 3 to 5 secondary school debaters',
      'Mastery of parliamentary debate format (8-minute substantive speeches + reply speeches)',
      'Deep fluency in geopolitical, economic, and moral policy motions'
    ],
    tips: [
      'Practice 1-hour impromptu prep sessions with teammates without internet access.',
      'Review Economics and Government curriculum modules in Eduvia to master stakeholder trade-offs.'
    ],
    featured: true
  },
  {
    id: 'opp-breakthrough-junior',
    title: 'Breakthrough Junior Challenge',
    description: 'A global science video competition where high school students create an original 90-second video explaining a complex concept in Physics, Life Sciences, or Mathematics.',
    type: 'STEM & Science',
    eligibleGrades: ['grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'],
    deadline: 'June 25, 2026',
    deadlineDate: '2026-06-25',
    award: '$250,000 College Scholarship + $100,000 Modern Science Lab for Winner\'s High School',
    organizer: 'Breakthrough Prize Foundation',
    location: 'Global / Online Video Submission',
    link: 'https://breakthroughjuniorchallenge.org/',
    applicationFee: 'Free to enter',
    requirements: [
      'Ages 13 to 18 at time of entry',
      'Max 90-second video explaining a profound scientific theory',
      'Participation in Peer-to-Peer review round scoring fellow submissions'
    ],
    tips: [
      'Use relatable physical props or creative animations rather than textbook diagrams.',
      'Pick a topic you genuinely love, like relativity, CRISPR, or neural networks.'
    ],
    featured: true
  },
  {
    id: 'opp-regen-isef',
    title: 'Regeneron International Science & Engineering Fair (ISEF)',
    description: 'The world\'s largest international pre-college STEM research competition, gathering over 1,800 high school researchers from 75+ countries to showcase original science and engineering projects.',
    type: 'Academic Olympiad',
    eligibleGrades: ['grade-9', 'grade-10', 'grade-11', 'grade-12'],
    deadline: 'February 28, 2026',
    deadlineDate: '2026-02-28',
    award: '$75,000 George D. Yancopoulos Innovator Award + $5M+ in Category Grand Awards',
    organizer: 'Society for Science',
    location: 'Affiliated Regional Fairs leading to Global Finals',
    link: 'https://www.societyforscience.org/isef/',
    applicationFee: 'Free entry through affiliated fairs',
    requirements: [
      'Grades 9-12 or equivalent secondary education',
      'Individual or team (up to 3 students) independent research project',
      'Formal scientific paper, research abstract, and quad-chart presentation poster'
    ],
    tips: [
      'Start research protocols early to pass Institutional Review Board (IRB) approvals.',
      'Emphasize novel methodology and quantitative statistical error analysis.'
    ]
  },
  {
    id: 'opp-harvard-model-un',
    title: 'Harvard National Model United Nations (HNMUN & HMUN)',
    description: 'The oldest and most prestigious high school Model UN simulation, bringing together 3,000+ delegates to debate international diplomacy, peacekeeping, and global humanitarian crises.',
    type: 'Debate Competition',
    eligibleGrades: ['grade-9', 'grade-10', 'grade-11', 'grade-12'],
    deadline: 'November 10, 2026',
    deadlineDate: '2026-11-10',
    award: 'Best Delegate Gavels, Outstanding Delegation Diplomas & Harvard Certificates',
    organizer: 'Harvard International Relations Council',
    location: 'Boston, MA & Virtual High School Sessions',
    link: 'https://www.harvardmun.org/',
    applicationFee: 'School delegation registration fee (need-based aid available)',
    requirements: [
      'Enrolled secondary student represented by school delegation or independent delegation',
      'Comprehensive country position paper submitted ahead of committee sessions',
      'Mastery of UN parliamentary rules of procedure and multilateral caucus negotiation'
    ],
    tips: [
      'Draft actionable, multi-clause draft resolutions with realistic funding mechanisms.',
      'Form broad unmoderated caucus coalitions early on day 1.'
    ]
  },
  {
    id: 'opp-davidson-fellows',
    title: 'Davidson Fellows Scholarship Program',
    description: 'Named by Forbes as one of the most prestigious undergraduate scholarships in the world, honoring young people under 18 who have completed significant, graduate-level work.',
    type: 'Scholarship',
    eligibleGrades: ['grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'],
    deadline: 'February 15, 2026',
    deadlineDate: '2026-02-15',
    award: '$50,000, $25,000, and $10,000 Scholarships + Congressional Honors in Washington D.C.',
    organizer: 'Davidson Institute for Talent Development',
    location: 'United States & U.S. Citizens living abroad',
    link: 'https://www.davidsongifted.org/fellows-scholarship/',
    applicationFee: 'Free to apply',
    requirements: [
      '18 or younger as of application deadline',
      'Portfolio in Science, Technology, Engineering, Math, Literature, Music, or Philosophy',
      'Work must be recognized by experts as exemplary at an advanced or university level'
    ],
    tips: [
      'Include recommendations from university mentors who can testify to the project\'s novelty.',
      'Clearly articulate the societal benefit of your work.'
    ]
  },
  {
    id: 'opp-usamo-olympiad',
    title: 'USA Mathematical Olympiad & AMC Math Competitions',
    description: 'The pinnacle high school mathematics competition sequence (AMC 10/12 → AIME → USAMO), identifying the top mathematical problem solvers for the International Math Olympiad (IMO).',
    type: 'Academic Olympiad',
    eligibleGrades: ['grade-6', 'grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'],
    deadline: 'November 05, 2026',
    deadlineDate: '2026-11-05',
    award: 'National Math Olympiad Medals & MOSP Training Camp Invitation',
    organizer: 'Mathematical Association of America (MAA)',
    location: 'Proctored in high schools worldwide & online test centers',
    link: 'https://www.maa.org/math-competitions',
    applicationFee: '$3.50 test administration fee per student',
    requirements: [
      'AMC 10: Grades 10 and below; AMC 12: Grades 12 and below',
      '75-minute, 25-question multiple choice test focusing on geometry, algebra, and number theory',
      'No calculators permitted'
    ],
    tips: [
      'Use Eduvia Further Math and Algebra modules to practice modular arithmetic and combinatorial proofs.',
      'Review Art of Problem Solving volume 1 and past AIME qualifying papers.'
    ]
  },
  {
    id: 'opp-scholastic-art-writing',
    title: 'Scholastic Art & Writing National Awards',
    description: 'The nation\'s longest-running, most prestigious recognition program for creative teenagers, whose past alumni include Andy Warhol, Sylvia Plath, and Stephen King.',
    type: 'Arts & Leadership',
    eligibleGrades: ['grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'],
    deadline: 'December 18, 2026',
    deadlineDate: '2026-12-18',
    award: 'National Gold Medals + $12,500 Portfolio Scholarships at Carnegie Hall',
    organizer: 'Alliance for Young Artists & Writers',
    location: 'United States, Canada & American Overseas Schools',
    link: 'https://www.artandwriting.org/',
    applicationFee: '$10 per entry (fee waivers available with 1-click)',
    requirements: [
      'Students in grades 7–12 (ages 13 and up)',
      'Submissions accepted in 28 categories (Critical Essay, Short Story, Poetry, Journalism, Photography, Digital Art)',
      'Judged blind on originality, technical skill, and emergence of a personal voice'
    ],
    tips: [
      'Submit bold, experimental pieces that showcase your authentic voice.',
      'Revise thoroughly for evocative pacing and sensory detail.'
    ]
  },
  {
    id: 'opp-conrad-challenge',
    title: 'The Conrad Challenge for Student Entrepreneurs & Inventors',
    description: 'An annual innovation competition that challenges teams of high school students to use science and technology to solve pressing global challenges and commercialize viable startups.',
    type: 'STEM & Science',
    eligibleGrades: ['grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'],
    deadline: 'November 20, 2026',
    deadlineDate: '2026-11-20',
    award: 'Pete Conrad Scholar Title, Dell Innovation Grant & $20,000+ University Scholarships',
    organizer: 'The Conrad Foundation (NASA Partner)',
    location: 'Global Online Round + Astronaut Memorial Finals at Kennedy Space Center',
    link: 'https://www.conradchallenge.org/',
    applicationFee: 'Free for Investor Pitch entry round',
    requirements: [
      'Teams of 2 to 5 students aged 13–18',
      'Categories: Aerospace & Aviation, Cyber-Technology & Security, Energy & Environment, Health & Nutrition',
      'Submissions include an Investor Pitch executive summary and technical feasibility study'
    ],
    tips: [
      'Build a working low-fidelity prototype or interactive digital mockup to demonstrate viability.',
      'Conduct customer validation interviews with real potential users.'
    ]
  },
  {
    id: 'opp-taco-bell-live-mas',
    title: 'Taco Bell Live Más Scholarship for Creative Changemakers',
    description: 'Unlike traditional scholarships, this award is not based on grades or test scores — it is strictly passion-based for passionate young innovators who want to ignite change in their communities.',
    type: 'Scholarship',
    eligibleGrades: ['grade-9', 'grade-10', 'grade-11', 'grade-12'],
    deadline: 'January 10, 2027',
    deadlineDate: '2027-01-10',
    award: '$5,000 to $25,000 College Tuition Grants (Over $10 Million Awarded Annually)',
    organizer: 'Taco Bell Foundation',
    location: 'United States',
    link: 'https://www.tacobellfoundation.org/live-mas-scholarship/',
    applicationFee: 'Free to apply',
    requirements: [
      'Ages 16–26 pursuing secondary or post-secondary credentials',
      'Submit an original 2-minute video describing what you love doing and how you will use it to make an impact',
      'No GPA or test scores required'
    ],
    tips: [
      'Be 100% authentic and show, don\'t just tell, your unique passion.',
      'Explain your plan to give back to others through your chosen career path.'
    ]
  },
  {
    id: 'opp-junior-science-humanities',
    title: 'Junior Science and Humanities Symposium (JSHS)',
    description: 'A tri-service (U.S. Army, Navy, and Air Force) sponsored STEM competition that promotes original scientific research and experimentation at the high school level.',
    type: 'Academic Olympiad',
    eligibleGrades: ['grade-9', 'grade-10', 'grade-11', 'grade-12'],
    deadline: 'January 25, 2027',
    deadlineDate: '2027-01-25',
    award: '$12,000 First Place National Scholarship + DoD Laboratory Mentorship',
    organizer: 'National Science Teaching Association & Department of Defense',
    location: '49 Regional Symposia Across U.S. and Europe',
    link: 'https://jshs.org/',
    applicationFee: 'Free to enter',
    requirements: [
      'Grades 9-12 enrolled high school students',
      'Original experimental research paper in Environmental Science, Biomedical, Engineering, or Mathematics',
      'Oral presentation or poster defense before a panel of research scientists'
    ],
    tips: [
      'Structure your slides to emphasize hypothesis falsification and raw error margins.',
      'Practice answering impromptu technical defense questions with confidence.'
    ]
  }
];
