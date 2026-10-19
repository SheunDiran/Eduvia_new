import { Topic } from '../../types';

export const TECH_AND_CIVIC_TOPICS: Topic[] = [
  // ================= COMPUTER SCIENCE: TOPIC 1 =================
  {
    id: 'cs-algorithms-binary-search',
    subjectId: 'computer-science',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Algorithms, Time Complexity & Binary Search',
    subtitle: 'Big-O notation (O(1), O(log n), O(n), O(n²)), linear vs. binary search, and divide-and-conquer strategy',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Algorithms are unambiguous step-by-step procedures for solving computational problems. Big-O notation characterizes the efficiency of algorithms as input size (n) scales toward infinity.',
      keyConcepts: [
        {
          title: 'Big-O Time Complexity',
          explanation: 'O(1) constant time; O(log n) logarithmic time; O(n) linear time; O(n log n) linearithmic time; O(n²) quadratic time. Big-O describes worst-case asymptotic bounds.'
        },
        {
          title: 'Linear Search vs. Binary Search',
          explanation: 'Linear search scans element by element in O(n) time on unsorted data. Binary search requires a sorted array; by repeatedly halving the search window, it finds targets in O(log n) time.'
        },
        {
          title: 'The Divide-and-Conquer Paradigm',
          explanation: 'Breaking a complex problem down into sub-problems of the same type, solving each sub-problem recursively, and combining the results (e.g., merge sort, binary search).'
        }
      ],
      workedExamples: [
        {
          problem: 'In a sorted array of 1,048,576 (2²⁰) elements, what is the maximum number of comparisons binary search requires to find an element or determine it is absent?',
          solution: 'Binary search halves the search space at each comparison: log₂(1,048,576) = 20 comparisons. In contrast, linear search might require up to 1,048,576 comparisons in the worst case.',
          takeaway: 'O(log n) algorithms scale gracefully to billions of data points.'
        }
      ],
      commonMistakes: [
        'Attempting to perform binary search on an unsorted list; binary search strictly requires pre-sorted data.',
        'Confusing time complexity with actual wall-clock execution time in milliseconds; Big-O counts operations relative to input growth.',
        'Dropping lower-order terms improperly or forgetting that constants are omitted in Big-O (e.g., O(2n + 5) simplifies to O(n)).'
      ]
    },
    videos: [
      {
        id: 'v28',
        embedId: 'kPRA0W1kECg',
        title: 'Algorithms: Crash Course Computer Science #13',
        channel: 'CrashCourse',
        duration: '11:43',
        description: 'Carrie Anne Philbin explains sorting algorithms, Big-O complexity, and search efficiency.'
      },
      {
        id: 'v29',
        embedId: 'P3YID7liBug',
        title: 'Binary Search Algorithm in 5 Minutes',
        channel: 'CS Dojo',
        duration: '05:32',
        description: 'Pointer tracking (low, high, mid) and step-by-step walkthrough of binary search logic.'
      },
      {
        id: 'v30',
        embedId: '__vX2kslpFY',
        title: 'Big O Notation - Full Guide with Code Examples',
        channel: 'FreeCodeCamp',
        duration: '15:10',
        description: 'Visual graph comparisons between O(1), O(log n), O(n), O(n log n), and O(n²).'
      }
    ],
    quizQuestions: [
      {
        id: 'csq1',
        text: 'What is the worst-case time complexity of the Binary Search algorithm on a sorted list of n elements?',
        options: ['O(log n)', 'O(n)', 'O(1)', 'O(n²)'],
        correctIndex: 0,
        explanation: 'Binary search halves the search interval each step, resulting in O(log n) logarithmic time complexity.',
        topicTag: 'Time Complexity'
      },
      {
        id: 'csq2',
        text: 'What mandatory prerequisite condition must be met before binary search can be successfully executed?',
        options: ['The list must be sorted in ascending or descending order', 'The list must contain only even numbers', 'The list length must be an exact power of two', 'The array must contain fewer than 50 elements'],
        correctIndex: 0,
        explanation: 'Binary search relies on sorted ordering to discard half the elements each iteration.',
        topicTag: 'Binary Search Requirements'
      },
      {
        id: 'csq3',
        text: 'Which Big-O complexity represents an algorithm whose execution time remains identical regardless of input size n?',
        options: ['O(1) Constant time', 'O(n) Linear time', 'O(n!) Factorial time', 'O(log n) Logarithmic time'],
        correctIndex: 0,
        explanation: 'O(1) constant time means execution step count is invariant with respect to input magnitude.',
        topicTag: 'Big O Classes'
      },
      {
        id: 'csq4',
        text: 'What algorithmic paradigm breaks a problem into smaller independent subproblems, solves them, and combines the results?',
        options: ['Divide and Conquer', 'Greedy Search', 'Brute Force', 'Genetic Mutation'],
        correctIndex: 0,
        explanation: 'Divide-and-conquer partitions problems recursively (e.g. merge sort, binary search).',
        topicTag: 'Algorithmic Paradigms'
      },
      {
        id: 'csq5',
        text: 'What is the worst-case time complexity of standard Bubble Sort on an unsorted array of n elements?',
        options: ['O(n²)', 'O(n)', 'O(1)', 'O(log n)'],
        correctIndex: 0,
        explanation: 'Bubble sort requires nested loops over the array, yielding quadratic O(n²) comparisons in the worst case.',
        topicTag: 'Sorting Complexity'
      }
    ]
  },

  // ================= COMPUTER SCIENCE: TOPIC 2 =================
  {
    id: 'cs-oop-classes-objects',
    subjectId: 'computer-science',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Object-Oriented Programming: The 4 Pillars',
    subtitle: 'Encapsulation, abstraction, inheritance, polymorphism, classes, and instantiate objects',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Object-Oriented Programming (OOP) organizes software design around data, or objects, rather than functions and logic. The paradigm is governed by four core pillars: Encapsulation, Abstraction, Inheritance, and Polymorphism.',
      keyConcepts: [
        {
          title: 'Classes and Objects',
          explanation: 'A Class is a blueprint defining attributes (state) and methods (behavior). An Object is a specific concrete instance of that class created in memory with its own state.'
        },
        {
          title: 'Encapsulation & Abstraction',
          explanation: 'Encapsulation bundles data and methods while restricting direct external access to internal fields (private/protected). Abstraction hides complex underlying implementation and reveals only a clean public interface.'
        },
        {
          title: 'Inheritance & Polymorphism',
          explanation: 'Inheritance allows child classes to inherit attributes/methods from parent classes (code reuse). Polymorphism allows different classes to respond to the same method invocation in customized ways (method overriding).'
        }
      ],
      workedExamples: [
        {
          problem: 'How does Polymorphism work when you have a parent class Shape with a method calculateArea(), and child classes Circle and Rectangle?',
          solution: 'Circle overrides calculateArea() to compute πr²; Rectangle overrides calculateArea() to compute width × height. A graphics program can iterate over a list of Shape references and call calculateArea() on each without caring which specific shape subclass it is.',
          takeaway: 'Polymorphism enables interchangeable, extensible code modules.'
        }
      ],
      commonMistakes: [
        'Confusing a Class (the blueprint) with an Object (the instantiated entity in RAM).',
        'Making all class variables public, violating the fundamental principle of encapsulation.',
        'Overusing deep multi-level inheritance hierarchies instead of composition ("prefer composition over inheritance").'
      ]
    },
    videos: [
      {
        id: 'v-cs-o1',
        embedId: 'pTB0EiLXUC8',
        title: 'The Four Pillars of Object Oriented Programming',
        channel: 'Programming with Mosh',
        duration: '07:30',
        description: 'Encapsulation, abstraction, inheritance, and polymorphism explained with clear real-world examples.'
      },
      {
        id: 'v-cs-o2',
        embedId: 'SiBw7HN_138',
        title: 'Classes and Objects in Computer Science',
        channel: 'CrashCourse Computer Science',
        duration: '10:50',
        description: 'Carrie Anne Philbin on state, methods, constructors, and software architecture.'
      },
      {
        id: 'v-cs-o3',
        embedId: '8yU-a1Zc0uI',
        title: 'Polymorphism and Inheritance Step by Step',
        channel: 'Bro Code',
        duration: '08:45',
        description: 'Live code demonstration showing subclass overriding and superclass method calls.'
      }
    ],
    quizQuestions: [
      {
        id: 'coq1',
        text: 'What OOP pillar is demonstrated when a subclass provides its own specific implementation of a method defined in its parent superclass?',
        options: ['Polymorphism (Method Overriding)', 'Encapsulation', 'Compilation', 'Recursion'],
        correctIndex: 0,
        explanation: 'Polymorphism allows different child objects to execute customized behaviors for the same method call.',
        topicTag: 'Polymorphism'
      },
      {
        id: 'coq2',
        text: 'What OOP principle involves hiding private internal data fields and restricting direct access using public getters and setters?',
        options: ['Encapsulation', 'Inheritance', 'Recursion', 'Typecasting'],
        correctIndex: 0,
        explanation: 'Encapsulation bundles data and safeguards it from unauthorized external tampering.',
        topicTag: 'Encapsulation'
      },
      {
        id: 'coq3',
        text: 'What is the relationship between a Class and an Object in software engineering?',
        options: [
          'A class is the abstract template/blueprint, while an object is a concrete instance of that class',
          'A class is written in binary, while an object is written in English',
          'An object can only be created once per program',
          'They are identical terms with no distinction'
        ],
        correctIndex: 0,
        explanation: 'Classes define structure and logic; objects are instantiated instances holding specific values.',
        topicTag: 'Class vs Object'
      },
      {
        id: 'coq4',
        text: 'What keyword or mechanism allows a Dog class to automatically acquire properties and methods from an Animal parent class?',
        options: ['Inheritance', 'Compilation', 'Garbage collection', 'Serialization'],
        correctIndex: 0,
        explanation: 'Inheritance allows derived classes to inherit behaviors and attributes from a base class.',
        topicTag: 'Inheritance'
      },
      {
        id: 'coq5',
        text: 'What special method is automatically executed when a new object instance of a class is created in memory?',
        options: ['The Constructor', 'The Destructor', 'The Garbage Collector', 'The Compiler'],
        correctIndex: 0,
        explanation: 'Constructors initialize newly created objects with starting attributes.',
        topicTag: 'Constructors'
      }
    ]
  },

  // ================= COMPUTER SCIENCE: TOPIC 3 =================
  {
    id: 'cs-networking-internet-protocols',
    subjectId: 'computer-science',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Computer Networks, IP Addressing & The Internet',
    subtitle: 'The OSI and TCP/IP models, packet switching, DNS, IPv4 vs. IPv6, and cybersecurity fundamentals',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'The Internet is a global network of interconnected computer networks communicating through standardized protocol suites (TCP/IP). Information travels in discrete digital packets routed across routers and switches worldwide.',
      keyConcepts: [
        {
          title: 'Packet Switching & TCP/IP',
          explanation: 'Data is sliced into numbered packets containing payload data and routing headers (source and destination IP). Transmission Control Protocol (TCP) guarantees reliable delivery; Internet Protocol (IP) handles network addressing.'
        },
        {
          title: 'Domain Name System (DNS)',
          explanation: 'The phonebook of the Internet. Translates human-friendly domain names (e.g. google.com) into numerical IP addresses (e.g. 142.250.190.46) so routers can locate servers.'
        },
        {
          title: 'IPv4 vs. IPv6',
          explanation: 'IPv4 uses 32-bit addresses (~4.3 billion unique combinations, now exhausted). IPv6 uses 128-bit hexadecimal addresses (~3.4 × 10³⁸ addresses), ensuring infinite addressable devices.'
        }
      ],
      workedExamples: [
        {
          problem: 'What happens in the network stack when you type a web URL into your browser and press Enter?',
          solution: '1. Browser queries DNS resolver to translate domain name into an IP address. 2. A TCP 3-way handshake (SYN, SYN-ACK, ACK) establishes a connection. 3. Browser sends an HTTPS GET request encrypted via TLS. 4. Web server responds with HTML/CSS/JS packets. 5. Browser renders the web page.',
          takeaway: 'Understanding DNS, TCP handshakes, and HTTP/HTTPS is foundational to web engineering.'
        }
      ],
      commonMistakes: [
        'Confusing the World Wide Web (the web pages and multimedia served over HTTP) with the Internet (the physical global network of wires, fibers, and routers).',
        'Assuming all network traffic uses TCP; real-time video and gaming often use UDP because speed matters more than guaranteed retransmission.',
        'Believing MAC addresses route across the global Internet; MAC addresses only handle local data link (Layer 2) routing on a local LAN.'
      ]
    },
    videos: [
      {
        id: 'v-cs-n1',
        embedId: '3QhU9jd03a0',
        title: 'Computer Networks: Crash Course Computer Science #28',
        channel: 'CrashCourse',
        duration: '12:15',
        description: 'Carrie Anne Philbin covers LANs, WANs, packet switching, routing, and network hops.'
      },
      {
        id: 'v-cs-n2',
        embedId: '7_LPdttKXPc',
        title: 'How the Internet Works in 5 Minutes',
        channel: 'Aaron',
        duration: '05:00',
        description: 'Undersea fiber cables, routers, packets, IP addresses, and DNS lookups visual animation.'
      },
      {
        id: 'v-cs-n3',
        embedId: 'mpQZVYPuDGU',
        title: 'DNS Explained: Domain Name System Step-by-Step',
        channel: 'PowerCert Animated Videos',
        duration: '06:05',
        description: 'Clear visual demonstration of root servers, TLD servers, and authoritative nameservers.'
      }
    ],
    quizQuestions: [
      {
        id: 'cnq1',
        text: 'What critical internet protocol translates human-readable domain names (like wikipedia.org) into numerical IP addresses?',
        options: ['Domain Name System (DNS)', 'Hypertext Transfer Protocol (HTTP)', 'Dynamic Host Configuration Protocol (DHCP)', 'Simple Mail Transfer Protocol (SMTP)'],
        correctIndex: 0,
        explanation: 'DNS acts as the decentralized directory that resolves domain names to numerical IP addresses.',
        topicTag: 'DNS'
      },
      {
        id: 'cnq2',
        text: 'How many bits of address space does a standard IPv4 address contain?',
        options: ['32 bits (4 octets)', '128 bits', '64 bits', '16 bits'],
        correctIndex: 0,
        explanation: 'IPv4 uses 32-bit addresses formatted as 4 decimal octets (e.g. 192.168.1.1).',
        topicTag: 'IP Addressing'
      },
      {
        id: 'cnq3',
        text: 'Why does streaming live video or competitive online multiplayer gaming often use UDP instead of TCP?',
        options: [
          'UDP prioritizes low latency and continuous transmission without waiting for packet retransmission',
          'UDP is completely unhackable',
          'TCP is banned on mobile phones',
          'UDP uses optical lasers instead of cables'
        ],
        correctIndex: 0,
        explanation: 'UDP minimizes latency by omitting handshakes and retransmissions.',
        topicTag: 'TCP vs UDP'
      },
      {
        id: 'cnq4',
        text: 'What technology breaks large digital files into discrete packets that can travel along different physical network paths before being reassembled?',
        options: ['Packet switching', 'Circuit switching', 'Telegraph multiplexing', 'Analog modulation'],
        correctIndex: 0,
        explanation: 'Packet switching routes independent packets dynamically across available network pathways.',
        topicTag: 'Packet Switching'
      },
      {
        id: 'cnq5',
        text: 'What is the physical permanent hardware identifier burned into a device\'s Network Interface Card (NIC)?',
        options: ['MAC Address (Media Access Control)', 'IP Address', 'URL', 'Subnet Mask'],
        correctIndex: 0,
        explanation: 'A MAC address is a unique 48-bit hardware identifier used for Layer 2 local communications.',
        topicTag: 'MAC Address'
      }
    ]
  },

  // ================= CIVIC EDUCATION: TOPIC 1 =================
  {
    id: 'civ-human-rights-duties',
    subjectId: 'civic-education',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Fundamental Human Rights & Civic Responsibilities',
    subtitle: 'Constitutional rights, citizen duties (taxation, voting, jury service), and public interest advocacy',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Citizenship involves a dual covenant of constitutional rights guaranteed by the state and civic responsibilities owed by the citizen to sustain a safe, just, and functioning democratic society.',
      keyConcepts: [
        {
          title: 'Fundamental Rights of Citizens',
          explanation: 'Right to life, dignity of the human person, personal liberty, fair hearing, freedom of thought, conscience, religion, and peaceful assembly.'
        },
        {
          title: 'Civic Duties and Obligations',
          explanation: 'Paying lawful taxes, obeying traffic and civil laws, defending the nation during crisis, voting in elections, and serving on juries when summoned.'
        },
        {
          title: 'Public Interest Advocacy & Non-Violent Protest',
          explanation: 'Holding elected representatives accountable through peaceful petitions, freedom of information inquiries, whistleblowing, and organized civic advocacy.'
        }
      ],
      workedExamples: [
        {
          problem: 'Why is paying taxes considered a fundamental civic duty rather than a voluntary charitable donation?',
          solution: 'Taxes pool resources to fund public goods that private markets cannot equitably provide: public highways, national defense, healthcare clinics, clean water infrastructure, and free public education.',
          takeaway: 'Without tax compliance, democratic states cannot fulfill basic sovereign obligations to citizens.'
        }
      ],
      commonMistakes: [
        'Believing rights are unconditional privileges with zero corresponding responsibilities; exercising your rights must not infringe on others\' rights.',
        'Assuming voting is the only civic responsibility; everyday law-abiding behavior and community engagement are equally vital.',
        'Confusing citizenship by birth with citizenship by naturalization.'
      ]
    },
    videos: [
      {
        id: 'v-civ-r1',
        embedId: 'kbwsF-AecZk',
        title: 'Rights and Responsibilities of Citizens',
        channel: 'CrashCourse Government',
        duration: '07:45',
        description: 'The social contract, public goods, civic virtues, and obligations of democratic citizens.'
      },
      {
        id: 'v-civ-r2',
        embedId: '54xflsP7m1Q',
        title: 'The Universal Declaration of Human Rights',
        channel: 'TED-Ed',
        duration: '04:47',
        description: 'Global principles protecting civil, political, economic, and social rights worldwide.'
      },
      {
        id: 'v-civ-r3',
        embedId: 'mXw-hEB263E',
        title: 'Civic Engagement: How Citizens Influence Policy',
        channel: 'Khan Academy',
        duration: '06:30',
        description: 'Grassroots advocacy, petitions, voting turnout, and public hearings.'
      }
    ],
    quizQuestions: [
      {
        id: 'crq1',
        text: 'Which of the following is an obligatory civic duty required of adult citizens by law rather than just an optional activity?',
        options: ['Paying lawful taxes on earned income', 'Volunteering at a local animal shelter', 'Attending weekly political rallies', 'Running for governor'],
        correctIndex: 0,
        explanation: 'Paying taxes is a legally mandatory civic obligation essential for funding public services.',
        topicTag: 'Civic Duties'
      },
      {
        id: 'crq2',
        text: 'What international document proclaimed the fundamental human rights to be universally protected in 1948?',
        options: ['Universal Declaration of Human Rights (UDHR)', 'The Magna Carta', 'The Mayflower Compact', 'The Warsaw Pact'],
        correctIndex: 0,
        explanation: 'The UDHR was adopted by the United Nations General Assembly in 1948.',
        topicTag: 'Human Rights'
      },
      {
        id: 'crq3',
        text: 'What is the primary purpose of public interest advocacy and investigative journalism in a democracy?',
        options: [
          'To hold public officials accountable and promote transparent governance in society',
          'To overthrow government institutions using violence',
          'To abolish national tax laws',
          'To eliminate voting stations'
        ],
        correctIndex: 0,
        explanation: 'Advocacy and journalism ensure leaders remain accountable to citizens.',
        topicTag: 'Advocacy'
      },
      {
        id: 'crq4',
        text: 'Can a citizen\'s fundamental right to personal movement be legally curtailed during a declared state of public health emergency?',
        options: [
          'Yes, lawful quarantines can be imposed by authorized health officials to prevent deadly epidemics',
          'No, rights can never be altered under any circumstance whatsoever',
          'Only if the citizen signs a written waiver',
          'Only in foreign countries'
        ],
        correctIndex: 0,
        explanation: 'Public health emergencies permit lawful, proportionate restrictions to safeguard community lives.',
        topicTag: 'Limitations of Rights'
      },
      {
        id: 'crq5',
        text: 'What term describes citizenship obtained by a foreign national through formal legal application, residency, and oaths of allegiance?',
        options: ['Citizenship by Naturalization', 'Citizenship by Birth', 'Citizenship by Conquest', 'Dual Jurisdiction'],
        correctIndex: 0,
        explanation: 'Naturalization is the legal process by which a non-citizen acquires citizenship in a country.',
        topicTag: 'Types of Citizenship'
      }
    ]
  },

  // ================= CIVIC EDUCATION: TOPIC 2 =================
  {
    id: 'civ-democratic-participation',
    subjectId: 'civic-education',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Democratic Institutions, Free Elections & Civic Leadership',
    subtitle: 'Universal adult suffrage, secret balloting, independent electoral commissions, and peaceful power transitions',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Democracy thrives when citizens actively participate through free, fair, and periodic elections conducted by independent electoral bodies with secret balloting, multi-party competition, and peaceful transitions of power.',
      keyConcepts: [
        {
          title: 'Pillars of Democratic Governance',
          explanation: 'Majority rule coupled with minority rights, constitutional supremacy, independent judiciary, freedom of the press, and universal adult suffrage.'
        },
        {
          title: 'Electoral Integrity & Independent Commissions',
          explanation: 'Electoral bodies must operate free from executive interference to maintain transparent voter registers, secure ballot logistics, and impartial vote tallying.'
        },
        {
          title: 'The Secret Ballot & Voter Empowerment',
          explanation: 'Guarantees that voters can cast their preferences free from intimidation, vote-buying, or employer coercion.'
        }
      ],
      workedExamples: [
        {
          problem: 'Why is a peaceful transfer of power considered the gold standard benchmark of a consolidated democracy?',
          solution: 'It proves that political leaders and military forces submit unconditionally to the sovereign will of the people and the rule of constitutional law, rather than using state violence or emergency decrees to cling to office after losing an election.',
          takeaway: 'Democracy requires losing incumbents to peacefully concede defeat.'
        }
      ],
      commonMistakes: [
        'Believing democracy is simply "majority rule"; pure unchecked majority rule without constitutional protections degenerates into "tyranny of the majority".',
        'Assuming voting on election day is the end of civic duty; civic engagement requires continuous community vigilance and local council participation.',
        'Thinking electronic voting machines solve all election disputes; transparency, paper audit trails, and impartial oversight remain essential.'
      ]
    },
    videos: [
      {
        id: 'v-civ-p1',
        embedId: '0bf3CwYCxXw',
        title: 'Democratic Values and Political Participation',
        channel: 'CrashCourse Government',
        duration: '08:35',
        description: 'Voter turnout, civic organizations, town hall debates, and direct vs representative democracy.'
      },
      {
        id: 'v-civ-p2',
        embedId: 's7tWHJfhiyo',
        title: 'How Fair and Free Elections Are Safeguarded',
        channel: 'TED-Ed',
        duration: '05:10',
        description: 'Independent electoral commissions, observer missions, and secret ballot protections.'
      },
      {
        id: 'v-civ-p3',
        embedId: 'Ulkw_uNeqs0',
        title: 'Peaceful Transfer of Power in Democratic History',
        channel: 'Khan Academy',
        duration: '07:20',
        description: 'The historic precedent of voluntary presidential concessions and democratic continuity.'
      }
    ],
    quizQuestions: [
      {
        id: 'cdp1',
        text: 'What constitutional principle ensures that all adult citizens, regardless of wealth, gender, or race, have the legal right to vote in national elections?',
        options: ['Universal Adult Suffrage', 'Autocracy', 'Aristocracy', 'Laissez-faire'],
        correctIndex: 0,
        explanation: 'Universal adult suffrage guarantees equal voting rights across all adult demographics.',
        topicTag: 'Suffrage'
      },
      {
        id: 'cdp2',
        text: 'Why is the "Secret Ballot" method of voting universally mandated in free and fair democratic elections?',
        options: [
          'It shields voters from fear, intimidation, employer coercion, and vote-buying bribery',
          'It allows government leaders to change votes secretly',
          'It saves paper and printing ink',
          'It prevents voters from knowing what office they are voting for'
        ],
        correctIndex: 0,
        explanation: 'Secret balloting protects voters from coercion and retaliation.',
        topicTag: 'Secret Ballot'
      },
      {
        id: 'cdp3',
        text: 'What is the hallmark indicator of a mature, stable constitutional democracy?',
        options: [
          'The peaceful and voluntary transfer of political power following election results',
          'Having only one single political party on the ballot',
          'The military dissolving parliament every four years',
          'The indefinite cancellation of general elections'
        ],
        correctIndex: 0,
        explanation: 'A peaceful transfer of power proves that the rule of law supersedes individual politicians.',
        topicTag: 'Democratic Stability'
      },
      {
        id: 'cdp4',
        text: 'What critical institution is responsible for registering voters, printing ballots, and certifying national election outcomes impartially?',
        options: ['An Independent Electoral Commission', 'The National Chamber of Commerce', 'The Chief Executive\'s Personal Cabinet', 'The Armed Forces Command'],
        correctIndex: 0,
        explanation: 'An independent electoral body conducts free and fair elections without executive bias.',
        topicTag: 'Electoral Commission'
      },
      {
        id: 'cdp5',
        text: 'What does the political concept "Tyranny of the Majority" refer to?',
        options: [
          'A scenario where a democratic majority uses electoral power to oppress and strip rights from minority groups',
          'A military coup d\'état',
          'An election where 100% of citizens vote',
          'A monarch ruling without a constitution'
        ],
        correctIndex: 0,
        explanation: 'Constitutional checks exist to prevent majorities from violating fundamental minority rights.',
        topicTag: 'Majority Rule vs Minority Rights'
      }
    ]
  },

  // ================= CIVIC EDUCATION: TOPIC 3 =================
  {
    id: 'civ-rule-of-law-citizenship',
    subjectId: 'civic-education',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Combating Corruption, Integrity & Rule of Law',
    subtitle: 'Transparency, anti-corruption agencies (EFCC/ICPC), whistleblowing protections, and moral integrity in public service',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Corruption erodes public trust, depletes national treasuries, and paralyzes public infrastructure. A healthy civic society depends on institutional transparency, judicial impartiality, robust whistleblower protections, and moral integrity.',
      keyConcepts: [
        {
          title: 'Forms and Costs of Corruption',
          explanation: 'Bribery, embezzlement of public funds, nepotism, extortion, and electoral fraud. Corruption deprives hospitals of medicine, schools of books, and roads of maintenance.'
        },
        {
          title: 'Anti-Corruption Watchdogs and Institutions',
          explanation: 'Specialized oversight commissions (such as the EFCC, ICPC, and Code of Conduct Bureaus) tasked with auditing public expenditures, investigating financial crimes, and prosecuting illicit enrichment.'
        },
        {
          title: 'Whistleblowing and Civic Integrity',
          explanation: 'Protecting brave citizens and civil servants who expose government fraud, corporate crimes, and human rights violations from retaliation and harassment.'
        }
      ],
      workedExamples: [
        {
          problem: 'Why do anti-corruption specialists emphasize "institutional checks" over simply relying on the personal honesty of individual politicians?',
          solution: 'As James Madison wrote in Federalist No. 51, "If men were angels, no government would be necessary." Personal morality is unpredictable; robust institutional checks (independent audits, open procurement records, asset declarations, free press) make corruption detectable, risky, and punishable.',
          takeaway: 'Strong systems and transparency prevent abuses far better than good intentions.'
        }
      ],
      commonMistakes: [
        'Believing petty corruption (e.g. paying small bribes) is harmless; petty corruption normalizes systemic impunity and distorts public commerce.',
        'Assuming anti-corruption efforts are solely the job of police; civil society and public watchdogs are essential.',
        'Confusing nepotism (favoring family/relatives in public appointments) with merit-based hiring.'
      ]
    },
    videos: [
      {
        id: 'v-civ-c1',
        embedId: 'mXw-hEB263E',
        title: 'Rule of Law, Integrity and Anti-Corruption',
        channel: 'CrashCourse Government',
        duration: '08:15',
        description: 'How public oversight, judicial independence, and free speech expose illicit enrichment.'
      },
      {
        id: 'v-civ-c2',
        embedId: 'kbwsF-AecZk',
        title: 'The Costs of Corruption on Developing Economies',
        channel: 'World Bank Education',
        duration: '05:45',
        description: 'How corrupt procurement drains public budgets from healthcare, transit, and schools.'
      },
      {
        id: 'v-civ-c3',
        embedId: '54xflsP7m1Q',
        title: 'Whistleblowers: Courage in Public Service',
        channel: 'TED-Ed',
        duration: '06:12',
        description: 'Why protecting whistleblowers who uncover financial and environmental crime saves lives.'
      }
    ],
    quizQuestions: [
      {
        id: 'cac1',
        text: 'What term describes the practice among public officials of granting lucrative government jobs and contracts to family members and relatives regardless of merit?',
        options: ['Nepotism', 'Meritocracy', 'Philanthropy', 'Federalism'],
        correctIndex: 0,
        explanation: 'Nepotism is favoritism shown to relatives in professional appointments.',
        topicTag: 'Forms of Corruption'
      },
      {
        id: 'cac2',
        text: 'What legal protection is enacted to shield employees and citizens who report government waste, fraud, and illegal conduct from employer retaliation?',
        options: ['Whistleblower protection legislation', 'Eminent domain waiver', 'Double jeopardy clause', 'Gerrymandering protection'],
        correctIndex: 0,
        explanation: 'Whistleblower protections shield individuals who report illicit wrongdoing from wrongful termination or retaliation.',
        topicTag: 'Whistleblowing'
      },
      {
        id: 'cac3',
        text: 'What is the primary socio-economic consequence of systemic corruption in developing economies?',
        options: [
          'It diverts vital public funds away from schools, hospitals, roads, and clean drinking water infrastructure',
          'It automatically increases the national literacy rate',
          'It permanently lowers the cost of living for poor citizens',
          'It strengthens the rule of law'
        ],
        correctIndex: 0,
        explanation: 'Embezzlement and fraud deplete treasuries, crippling social services and infrastructure.',
        topicTag: 'Economic Impact of Corruption'
      },
      {
        id: 'cac4',
        text: 'Which constitutional body is typically tasked with ensuring public servants declare their personal assets upon entering and leaving government office?',
        options: ['A Code of Conduct Bureau / Ethics Commission', 'The Postal Service', 'The Central Weather Bureau', 'The Tourism Board'],
        correctIndex: 0,
        explanation: 'Code of Conduct and ethics bodies verify that officials do not enrich themselves illicitly in office.',
        topicTag: 'Asset Declarations'
      },
      {
        id: 'cac5',
        text: 'What principle requires public government budgets, contracts, and procurement bidding processes to be publicly published and accessible to citizen inspection?',
        options: ['Government Transparency and Open Procurement', 'Executive Immunity', 'Official State Secrecy', 'Judicial Discretion'],
        correctIndex: 0,
        explanation: 'Open budgets and transparent procurement prevent kickbacks and bid rigging.',
        topicTag: 'Transparency'
      }
    ]
  }
];
