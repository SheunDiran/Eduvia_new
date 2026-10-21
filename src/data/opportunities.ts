import { GradeLevel } from '../types';

export type OpportunityType =
  | 'Scholarship'
  | 'STEM & Science'
  | 'Debate & Essay'
  | 'Academic Olympiad'
  | 'Tech & Innovation';

export type EducationLevel =
  | 'All Students'
  | 'High School'
  | 'Undergraduate'
  | 'University & Graduate';

export type Region =
  | 'All'
  | 'Nigeria & Africa'
  | 'Global'
  | 'UK & Europe'
  | 'North America';

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  type: OpportunityType;
  eligibleGrades: GradeLevel[];
  educationLevel: EducationLevel;
  region: Region;
  deadline: string; // Formatted date string
  deadlineDate?: string; // YYYY-MM-DD for sorting
  award: string;
  coverage: string[]; // Key perks: Full Tuition, Flights, Monthly Stipend, etc.
  organizer: string;
  location: string;
  link: string; // Official portal URL
  googleQuery: string; // Search query for verification
  applicationFee: string;
  requirements: string[];
  tips: string[];
  featured?: boolean;
  status: 'Open Now' | 'Rolling' | 'Opening Soon';
}

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-mastercard-foundation',
    title: 'Mastercard Foundation Scholars Program',
    description: 'One of the largest, most prestigious full-ride scholarship initiatives globally for academically talented African students with leadership potential to study at world-class partner universities.',
    type: 'Scholarship',
    eligibleGrades: ['grade-12', 'uni-freshman', 'uni-sophomore', 'uni-junior', 'uni-senior'],
    educationLevel: 'Undergraduate',
    region: 'Nigeria & Africa',
    deadline: 'December 15, 2026',
    deadlineDate: '2026-12-15',
    award: 'Full Ride: 100% Tuition, Return Airfare, Monthly Living Stipend, Books, Laptop, Visa & Health Coverage',
    coverage: ['100% Tuition', 'Monthly Stipend', 'Return Airfare', 'Housing & Meals', 'Laptop & Books'],
    organizer: 'Mastercard Foundation (Partners: McGill, Edinburgh, Toronto, UC Berkeley, KNUST, Ashesi)',
    location: 'Global (North America, UK, Europe, Africa)',
    link: 'https://mastercardfdn.org/all/scholars/becoming-a-scholar/',
    googleQuery: 'Mastercard Foundation Scholars Program undergraduate eligibility apply',
    applicationFee: '100% Free to apply (partner fee waivers provided)',
    requirements: [
      'Citizen of an African country with high academic achievement',
      'Demonstrated commitment to giving back and transforming African communities',
      'Applying for undergraduate or master\'s degree at a designated partner university',
      'Facing financial barriers that would otherwise prevent university study'
    ],
    tips: [
      'Apply early directly through individual partner university portals (e.g., University of Edinburgh or McGill Mastercard portal).',
      'Write compelling personal statements emphasizing community impact and service projects rather than just grades.'
    ],
    featured: true,
    status: 'Open Now'
  },
  {
    id: 'opp-chevening-scholarship',
    title: 'Chevening UK Government Scholarships',
    description: 'The UK government\'s global scholarship programme, funded by the Foreign, Commonwealth and Development Office (FCDO), enabling future leaders to pursue a one-year fully-funded master’s degree in the United Kingdom.',
    type: 'Scholarship',
    eligibleGrades: ['uni-junior', 'uni-senior'],
    educationLevel: 'University & Graduate',
    region: 'UK & Europe',
    deadline: 'November 05, 2026',
    deadlineDate: '2026-11-05',
    award: 'Full UK University Tuition, Monthly Living Allowance, Economy Flights, Visa & Arrival Allowance',
    coverage: ['Full Tuition', 'Monthly Allowance', 'Return Flights', 'UK Visa', 'Arrival Grant'],
    organizer: 'Foreign, Commonwealth and Development Office (FCDO), UK',
    location: 'United Kingdom (Any UK University)',
    link: 'https://www.chevening.org/scholarships/',
    googleQuery: 'Chevening Scholarships UK application requirements eligible courses',
    applicationFee: 'Free to apply',
    requirements: [
      'Undergraduate degree with upper second-class (2:1) honors equivalent',
      'Minimum two years (2,800 hours) of work or leadership experience (internships and volunteering count)',
      'Apply to three different eligible UK university courses',
      'Commitment to return to home country for minimum of two years post-graduation'
    ],
    tips: [
      'Craft four 500-word essays focusing strictly on: Leadership/Influence, Networking, Studying in the UK, and Career Goals.',
      'Clearly connect your proposed UK degree to solving critical development bottlenecks in your home nation.'
    ],
    featured: true,
    status: 'Open Now'
  },
  {
    id: 'opp-daad-germany',
    title: 'DAAD Helmut-Schmidt & Study Scholarships (Germany)',
    description: 'The German Academic Exchange Service (DAAD) offers fully-funded scholarships for international students and scholars to complete undergraduate study and master’s programs in English or German in Germany.',
    type: 'Scholarship',
    eligibleGrades: ['uni-sophomore', 'uni-junior', 'uni-senior'],
    educationLevel: 'University & Graduate',
    region: 'UK & Europe',
    deadline: 'October 31, 2026',
    deadlineDate: '2026-10-31',
    award: '€934 to €1,300 Monthly Stipend, Travel Subsidy, Health Insurance, Study Research Allowances',
    coverage: ['Zero Tuition in Germany', 'Monthly Stipend (€934/mo)', 'Health Insurance', 'Travel Flights', 'German Language Course'],
    organizer: 'German Academic Exchange Service (DAAD)',
    location: 'Germany (Top Public Universities)',
    link: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
    googleQuery: 'DAAD scholarship Germany requirements English master bachelor',
    applicationFee: 'Free to apply',
    requirements: [
      'Above-average bachelor or secondary school academic transcripts',
      'Proof of English proficiency (IELTS/TOEFL) or German proficiency (depending on course language)',
      'Detailed letter of motivation and academic reference letters from professors'
    ],
    tips: [
      'Public universities in Germany have tuition-free education; DAAD covers your entire living cost, travel, and health insurance.',
      'Search the DAAD International Programmes database for 100% English-taught degree courses.'
    ],
    featured: true,
    status: 'Open Now'
  },
  {
    id: 'opp-erasmus-mundus',
    title: 'Erasmus Mundus Joint Masters Scholarships (EU)',
    description: 'Prestigious, high-level integrated study programmes designed and delivered by an international partnership of European higher education institutions across at least two EU countries.',
    type: 'Scholarship',
    eligibleGrades: ['uni-junior', 'uni-senior'],
    educationLevel: 'University & Graduate',
    region: 'UK & Europe',
    deadline: 'January 15, 2027',
    deadlineDate: '2027-01-15',
    award: '€1,400 Monthly Living Allowance, Full Tuition Participation Costs, Global Travel & Insurance',
    coverage: ['Full Tuition', '€1,400/month Stipend', 'Travel Allowance', 'Worldwide Insurance', 'Multi-Country Degree'],
    organizer: 'European Commission (European Union)',
    location: 'European Union (Minimum 2 different European countries)',
    link: 'https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters',
    googleQuery: 'Erasmus Mundus catalogue scholarships application deadline',
    applicationFee: 'Free to apply to up to 3 programs',
    requirements: [
      'Bachelor’s degree or currently enrolled in the final year of undergraduate studies',
      'Academic transcripts showing strong subject foundation',
      'CV in Europass format and two academic recommendation letters'
    ],
    tips: [
      'You study in at least 2 different European countries and receive a joint or double degree.',
      'Check the Erasmus Mundus Catalogue (EMJMD) to apply to up to 3 separate consortia programs simultaneously.'
    ],
    featured: true,
    status: 'Open Now'
  },
  {
    id: 'opp-ptdf-scholarship',
    title: 'PTDF Overseas & Local Scholarship Scheme',
    description: 'The Petroleum Technology Development Fund (PTDF) provides full funding for Nigerian undergraduate, master’s, and PhD students in Engineering, Geology, Computing, Renewable Energy, and Environmental Sciences.',
    type: 'Scholarship',
    eligibleGrades: ['uni-freshman', 'uni-sophomore', 'uni-junior', 'uni-senior'],
    educationLevel: 'Undergraduate',
    region: 'Nigeria & Africa',
    deadline: 'March 24, 2027',
    deadlineDate: '2027-03-24',
    award: 'Full Tuition Fees, Accommodation, Return Flight Tickets, Living Allowances in UK, France, Germany & Malaysia',
    coverage: ['Full Tuition Fees', 'Living Allowances', 'Flight Tickets', 'Health Insurance', 'Laptop Allowance'],
    organizer: 'Petroleum Technology Development Fund (Federal Government of Nigeria)',
    location: 'Nigeria, United Kingdom, France, Germany & Malaysia',
    link: 'https://scholarship.ptdf.gov.ng/',
    googleQuery: 'PTDF scholarship overseas local application portal requirements',
    applicationFee: 'Free to apply online',
    requirements: [
      'Nigerian citizenship with valid National Identity Number (NIN)',
      'For Undergraduate/Local: Enrolled in accredited Federal/State university in relevant discipline',
      'For Overseas: Minimum Second Class Upper (2:1) or 2:2 with extensive relevant experience',
      'Statement of Purpose demonstrating link to energy, technology, or industrialization'
    ],
    tips: [
      'Ensure your NIN details match your WAEC/Degree certificates exactly.',
      'Focus your statement of purpose on sustainable energy transition, data engineering, or national infrastructure development.'
    ],
    featured: true,
    status: 'Opening Soon'
  },
  {
    id: 'opp-bea-scholarship',
    title: 'Federal Government Bilateral Education Agreement (BEA) Scholarship',
    description: 'The Federal Ministry of Education, Nigeria awards full bilateral scholarships for undergraduate and postgraduate studies in Russia, Morocco, Hungary, China, Romania, Serbia, and Algeria.',
    type: 'Scholarship',
    eligibleGrades: ['grade-12', 'uni-senior'],
    educationLevel: 'Undergraduate',
    region: 'Nigeria & Africa',
    deadline: 'January 20, 2027',
    deadlineDate: '2027-01-20',
    award: 'Free Tuition, Free Accommodation, Monthly Supplemental Allowances & Annual Medical Aid',
    coverage: ['Host Country Free Tuition', 'Host Country Housing', 'FGN Monthly Allowance ($500/mo)', 'Annual Health Allowance'],
    organizer: 'Federal Ministry of Education (Federal Scholarship Board), Nigeria',
    location: 'Russia, Morocco, Hungary, China, Romania, Algeria',
    link: 'https://education.gov.ng/federal-scholarship-board/',
    googleQuery: 'Federal Government Bilateral Education Agreement BEA scholarship portal Nigeria',
    applicationFee: '100% Free official government portal',
    requirements: [
      'Undergraduate: Five Distinctions (A & B) in WAEC/NECO in relevant subjects including English and Mathematics',
      'Certificates must not be older than 2 years',
      'Age limit: 17 to 20 years for Undergraduate; under 35 for Masters',
      'Postgraduate: Minimum of First Class or Second Class Upper (2:1) degree'
    ],
    tips: [
      'Computer-Based Tests (CBT) are conducted across designated regional centers in Nigeria.',
      'Brush up on general mathematics and current affairs before the CBT screening.'
    ],
    featured: true,
    status: 'Open Now'
  },
  {
    id: 'opp-shell-scholarship',
    title: 'Shell Nigeria University & Secondary Student Scholarships',
    description: 'Shell Petroleum Development Company (SPDC) awards annual merit scholarships for university undergraduates in Nigerian universities and secondary school students in host communities.',
    type: 'Scholarship',
    eligibleGrades: ['grade-9', 'grade-10', 'grade-11', 'grade-12', 'uni-freshman', 'uni-sophomore'],
    educationLevel: 'Undergraduate',
    region: 'Nigeria & Africa',
    deadline: 'February 28, 2027',
    deadlineDate: '2027-02-28',
    award: 'Annual Cash Grant Covering Full Academic Expenses Throughout Degree Duration',
    coverage: ['Annual Educational Grant', 'Internship Priority at Shell', 'Academic Mentorship'],
    organizer: 'Shell Petroleum Development Company of Nigeria Limited (SPDC)',
    location: 'Nigeria (Federal & State Universities / Secondary Schools)',
    link: 'https://www.shell.com.ng/sustainability/communities/education-programmes/scholarships.html',
    googleQuery: 'Shell Nigeria undergraduate scholarship application requirements SPDC',
    applicationFee: 'Free official application',
    requirements: [
      'Nigerian citizen currently in 100 level in an accredited Nigerian university',
      'Minimum of 5 credits in WAEC/NECO in one sitting including English and Mathematics',
      'Scored 200+ in UTME (JAMB)',
      'Categories include National Merit Scholarship (open to all states) and Host Community awards'
    ],
    tips: [
      'Prepare for an aptitude test covering numerical reasoning, verbal logic, and spatial problem solving.',
      'Upload high-quality scanned copies of your JAMB result slip and university admission letter.'
    ],
    status: 'Rolling'
  },
  {
    id: 'opp-google-generation',
    title: 'Generation Google Scholarship (EMEA & North America)',
    description: 'Established to help aspiring computer scientists excel in technology and become leaders in the field. Selected students receive scholarship funding and exclusive access to the Google Student Retreat.',
    type: 'Tech & Innovation',
    eligibleGrades: ['uni-freshman', 'uni-sophomore', 'uni-junior'],
    educationLevel: 'Undergraduate',
    region: 'Global',
    deadline: 'April 23, 2027',
    deadlineDate: '2027-04-23',
    award: '€7,000 / $10,000 Academic Award + Invitation to Google Virtual Student Retreat & Mentorship',
    coverage: ['Tuition Grant (€7,000)', 'Google Engineering Mentorship', 'Virtual Retreat Access', 'Resume Review with Google Recruiters'],
    organizer: 'Google Inc.',
    location: 'Global (EMEA & North America)',
    link: 'https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-emea',
    googleQuery: 'Generation Google Scholarship EMEA application deadline computer science',
    applicationFee: 'Free to apply',
    requirements: [
      'Enrolled as a full-time student in a Bachelors degree program at an accredited university',
      'Studying Computer Science, Computer Engineering, Software Engineering, or closely related tech field',
      'Demonstrated passion for improving representation of underrepresented groups in computer science',
      'Strong academic record and coding foundation'
    ],
    tips: [
      'The short answer questions carry the highest weight. Be concrete about how you introduced others to coding or solved technical challenges.',
      'Highlight real projects you have built on GitHub or community initiatives you founded.'
    ],
    featured: true,
    status: 'Open Now'
  },
  {
    id: 'opp-microsoft-imagine-cup',
    title: 'Microsoft Imagine Cup Global Student Competition',
    description: 'The premier global student technology and startup competition, dubbed the "Olympics of Technology", giving university and high school founders the platform to build game-changing AI and cloud solutions.',
    type: 'Tech & Innovation',
    eligibleGrades: ['grade-11', 'grade-12', 'uni-freshman', 'uni-sophomore', 'uni-junior', 'uni-senior'],
    educationLevel: 'All Students',
    region: 'Global',
    deadline: 'January 22, 2027',
    deadlineDate: '2027-01-22',
    award: '$100,000 USD Grand Prize + Mentorship Session with Microsoft CEO Satya Nadella + $50,000 Azure Grants',
    coverage: ['$100,000 Cash Prize', '$50,000 Azure Cloud Credits', '1-on-1 Mentorship with Satya Nadella', 'Global Finals Trip to Microsoft HQ'],
    organizer: 'Microsoft',
    location: 'Global Online Rounds + World Championship at Microsoft Redmond HQ',
    link: 'https://imaginecup.microsoft.com/',
    googleQuery: 'Microsoft Imagine Cup student competition rules registration',
    applicationFee: 'Free to register team',
    requirements: [
      'Open to students aged 16 and older enrolled in high school or university',
      'Teams of 1 to 4 students',
      'Build a working tech prototype leveraging Microsoft Azure cloud or AI APIs',
      'Submit video pitch, architecture diagram, and live software demo'
    ],
    tips: [
      'Focus on addressing United Nations Sustainable Development Goals (education, climate, healthcare accessibility).',
      'Utilize GitHub Copilot, OpenAI on Azure, and modern web frameworks to demonstrate rapid execution.'
    ],
    featured: true,
    status: 'Open Now'
  },
  {
    id: 'opp-gates-cambridge',
    title: 'Gates Cambridge Scholarship (University of Cambridge)',
    description: 'Established through a $210m donation from the Bill and Melinda Gates Foundation, awarding full funding to outstanding applicants from countries outside the UK to pursue full-time postgraduate study at Cambridge.',
    type: 'Scholarship',
    eligibleGrades: ['uni-junior', 'uni-senior'],
    educationLevel: 'University & Graduate',
    region: 'UK & Europe',
    deadline: 'December 03, 2026',
    deadlineDate: '2026-12-03',
    award: 'Full Cost of Studying at Cambridge: Tuition, £20,000 Annual Living Stipend, Flights, Inbound Visa',
    coverage: ['Full Cambridge Tuition', '£20,000/year Stipend', 'Airfare & Visa Costs', 'Academic Development Funding (£2,000)', 'Family Allowance'],
    organizer: 'Gates Cambridge Trust & University of Cambridge',
    location: 'Cambridge, United Kingdom',
    link: 'https://www.gatescambridge.org/',
    googleQuery: 'Gates Cambridge Scholarship application requirements international students',
    applicationFee: 'University course application fee (waiver available for eligible countries)',
    requirements: [
      'Citizen of any country outside the United Kingdom',
      'Outstanding intellectual ability (top 5-10% of graduating university class)',
      'Compelling commitment to improving the lives of others',
      'Applying for full-time PhD, MSc, MLitt, or one-year postgraduate course at Cambridge'
    ],
    tips: [
      'Your referee must speak directly to your character and social commitment, not just your exam scores.',
      'Show clear synergy between your proposed Cambridge research lab and your lifelong humanitarian vision.'
    ],
    featured: true,
    status: 'Open Now'
  },
  {
    id: 'opp-rhodes-scholarship',
    title: 'Rhodes Scholarship at Oxford University',
    description: 'The oldest and perhaps the most prestigious international scholarship in the world, bringing energetic, courageous young leaders from across the globe to study at the University of Oxford.',
    type: 'Scholarship',
    eligibleGrades: ['uni-senior'],
    educationLevel: 'University & Graduate',
    region: 'UK & Europe',
    deadline: 'August 01, 2027',
    deadlineDate: '2027-08-01',
    award: 'Full Oxford University & College Fees, Annual Stipend (£19,092/yr), Flights, Medical Insurance',
    coverage: ['100% Oxford Tuition', '£19,092/yr Living Stipend', 'Two Economy Flights', 'UK Tier 4 Visa & IHS', 'Arrival Allowance'],
    organizer: 'The Rhodes Trust, Oxford',
    location: 'Oxford, United Kingdom',
    link: 'https://www.rhodeshouse.ox.ac.uk/scholarships/the-rhodes-scholarship/',
    googleQuery: 'Rhodes Scholarship Oxford West Africa Nigeria requirements apply',
    applicationFee: 'Free to apply',
    requirements: [
      'Completed undergraduate degree with First Class Honors or GPA minimum 3.7/4.0',
      'Ages 19 to 25 at time of application',
      'Energy to use one’s talents to the full (demonstrated via sports, arts, entrepreneurship)',
      'Moral force of character, instinct to lead, and compassion for the protection of the weak'
    ],
    tips: [
      'Rhodes committees value moral courage and active empathy as much as sheer academic firepower.',
      'Prepare meticulously for the rigorous multi-stage interview panel.'
    ],
    status: 'Opening Soon'
  },
  {
    id: 'opp-breakthrough-junior',
    title: 'Breakthrough Junior Challenge',
    description: 'A global science video competition founded by tech visionaries (Mark Zuckerberg, Priscilla Chan, Yuri Milner) where students create an original 90-second video explaining a profound concept in Physics, Life Sciences, or Math.',
    type: 'STEM & Science',
    eligibleGrades: ['grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'],
    educationLevel: 'High School',
    region: 'Global',
    deadline: 'June 25, 2027',
    deadlineDate: '2027-06-25',
    award: '$250,000 College Scholarship + $100,000 Science Lab for Winner\'s High School + $50,000 Inspiring Teacher Award',
    coverage: ['$250,000 University Scholarship', '$100,000 High School Science Lab', '$50,000 Teacher Prize', 'Hollywood Gala Broadcast Ceremony'],
    organizer: 'Breakthrough Prize Foundation',
    location: 'Global / Online Video Submission',
    link: 'https://breakthroughjuniorchallenge.org/',
    googleQuery: 'Breakthrough Junior Challenge video rules rubrics winner criteria',
    applicationFee: 'Free to enter',
    requirements: [
      'Ages 13 to 18 at time of entry',
      'Maximum 90-second video explaining a complex scientific theory with clarity and humor',
      'Participation in Peer-to-Peer review scoring round'
    ],
    tips: [
      'Use relatable physical props, stop-motion, or creative everyday analogies rather than reading slides.',
      'Hook the viewer in the first 5 seconds with a mind-bending question.'
    ],
    featured: true,
    status: 'Open Now'
  },
  {
    id: 'opp-john-locke-essay',
    title: 'John Locke Institute Global Essay Competition',
    description: 'An international academic essay competition inviting independent thinkers to explore deep questions across Philosophy, Politics, Economics, History, Psychology, Theology, and Law.',
    type: 'Debate & Essay',
    eligibleGrades: ['grade-9', 'grade-10', 'grade-11', 'grade-12'],
    educationLevel: 'High School',
    region: 'Global',
    deadline: 'June 30, 2027',
    deadlineDate: '2027-06-30',
    award: '$10,000 Grand Prize & Oxford Academic Fellowship Awards',
    coverage: ['$10,000 Grand Prize', 'Oxford Gala Dinner Invitation', 'Publication in Academic Review', 'Oxford Seminar Bursaries'],
    organizer: 'John Locke Institute (Oxford & Princeton)',
    location: 'Global / Online Submission',
    link: 'https://www.johnlockeinstitute.com/essay-competition',
    googleQuery: 'John Locke Institute essay competition prompts winners tips',
    applicationFee: 'Free to enter before standard deadline',
    requirements: [
      'Students aged 18 or under (Junior prize for students under 15)',
      'Single essay under 2,000 words answering one of the annual prompt questions',
      'Original, rigorously argued academic thesis with scholarly references'
    ],
    tips: [
      'Confront the strongest counter-argument directly with steel-manned logic.',
      'Use active voice, clear definitions, and eliminate empty rhetorical filler.'
    ],
    featured: true,
    status: 'Open Now'
  },
  {
    id: 'opp-pamo-math-olympiad',
    title: 'Pan-African Mathematics Olympiad (PAMO) & IMO',
    description: 'The official continental high school mathematical competition organized by the African Mathematical Union (AMU), qualifying top youth for the International Mathematical Olympiad (IMO).',
    type: 'Academic Olympiad',
    eligibleGrades: ['grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'],
    educationLevel: 'High School',
    region: 'Nigeria & Africa',
    deadline: 'May 12, 2027',
    deadlineDate: '2027-05-12',
    award: 'Gold, Silver & Bronze Continental Medals + International University Scholarships',
    coverage: ['Fully Funded International Travel to Host Nation', 'Olympic Medals & Citations', 'Direct Admission Track to Elite Math Universities'],
    organizer: 'African Mathematical Union & National Mathematical Centre (NMC Abuja)',
    location: 'African Host Nations (e.g., South Africa, Rwanda, Senegal, Nigeria)',
    link: 'https://pamo-official.org/',
    googleQuery: 'Pan African Mathematics Olympiad PAMO qualification past papers NMC Abuja',
    applicationFee: 'Funded by National Mathematical Centre',
    requirements: [
      'Secondary school students under 20 years old',
      'Pass national olympiad stages 1, 2, and 3 conducted by the National Mathematical Centre',
      'Solve rigorous proof-based problems in Number Theory, Combinatorics, Geometry, and Functional Equations'
    ],
    tips: [
      'Review Euclidean geometry transformations, modular congruence, and Pigeonhole principle.',
      'Eduvia Further Math and Algebra curriculum topics cover foundational olympiad proofs.'
    ],
    status: 'Open Now'
  },
  {
    id: 'opp-coca-cola-scholars',
    title: 'Coca-Cola Scholars Program Scholarship',
    description: 'An achievement-based scholarship awarded to graduating high school seniors who demonstrate visionary leadership, academic excellence, and continuous service to their communities.',
    type: 'Scholarship',
    eligibleGrades: ['grade-12'],
    educationLevel: 'High School',
    region: 'North America',
    deadline: 'October 31, 2026',
    deadlineDate: '2026-10-31',
    award: '$20,000 College Tuition Award (150 Winners Selected Annually)',
    coverage: ['$20,000 College Tuition Award', 'Coca-Cola Scholars Weekend in Atlanta', 'Lifelong Alumni Network of 7,000+ Leaders'],
    organizer: 'Coca-Cola Scholars Foundation',
    location: 'United States & American International Schools',
    link: 'https://www.coca-colascholarsfoundation.org/',
    googleQuery: 'Coca Cola Scholars Foundation scholarship eligibility application dates',
    applicationFee: 'Free to apply',
    requirements: [
      'Current high school senior planning to pursue a degree at an accredited post-secondary institution',
      'Minimum unweighted GPA of 3.0 on a 4.0 scale',
      'Demonstrated track record of leading grassroots community initiatives'
    ],
    tips: [
      'Focus on measurable impact (e.g., number of students mentored, policy changes enacted).',
      'Highlight perseverance and how you rallied peers to solve local challenges.'
    ],
    status: 'Open Now'
  }
];
