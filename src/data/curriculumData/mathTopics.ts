import { Topic } from '../../types';

export const MATH_TOPICS: Topic[] = [
  // ================= MATHEMATICS: PRIMARY TOPIC 1 =================
  {
    id: 'math-primary-numbers',
    subjectId: 'math',
    gradeLevels: ['grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', 'grade-6'],
    title: 'Number Base, Place Value & Counting Patterns',
    subtitle: 'Units, tens, hundreds, thousands, expanded notation, and skip counting',
    estimatedMinutes: 20,
    learnContent: {
      summary: 'Every number is made up of digits that have different values depending on their position (place value). In base ten, each column is ten times greater than the column to its right: Units (1s), Tens (10s), Hundreds (100s), and Thousands (1,000s).',
      keyConcepts: [
        {
          title: 'Place Value Columns',
          explanation: 'In the number 347, the 3 is worth 300 (hundreds), the 4 is worth 40 (tens), and the 7 is worth 7 (units).'
        },
        {
          title: 'Expanded Form',
          explanation: 'Writing a number as the sum of each digit’s value: 582 = 500 + 80 + 2.'
        },
        {
          title: 'Skip Counting & Number Sequences',
          explanation: 'Counting forward or backward by 2s, 5s, 10s, or 100s helps uncover mathematical patterns and prepares for multiplication.'
        }
      ],
      workedExamples: [
        {
          problem: 'What is the place value and total value of the digit 6 in 4,682?',
          solution: 'The digit 6 is in the hundreds column. Its value is 6 × 100 = 600.',
          takeaway: 'Count the columns from right to left: units, tens, hundreds, thousands.'
        },
        {
          problem: 'Write the number 7,205 in expanded form.',
          solution: '7,000 + 200 + 0 + 5 = 7,000 + 200 + 5.',
          takeaway: 'Zero acts as a crucial placeholder so the other digits keep their correct places.'
        }
      ],
      commonMistakes: [
        'Writing place values backwards (putting the biggest place on the right instead of the left).',
        'Dropping the zero placeholder when writing numbers with zeros, like writing 705 as 75.',
        'Confusing the digit itself with the total value represented by that digit.'
      ]
    },
    videos: [
      {
        id: 'v-math-p1',
        embedId: 'a4FXl4zb3E8',
        title: 'Place Value for Kids: Ones, Tens, and Hundreds',
        channel: 'Math Songs by NUMBEROCK',
        duration: '03:45',
        description: 'Fun animated musical introduction to units, tens, and hundreds columns.'
      },
      {
        id: 'v-math-p2',
        embedId: '1F3AycEDksY',
        title: 'Place Value: Ones and Tens',
        channel: 'Khan Academy',
        duration: '05:12',
        description: 'Sal Khan explains how grouping by tens builds all numbers in arithmetic.'
      },
      {
        id: 'v-math-p3',
        embedId: 'T5Qf0qSSJFI',
        title: 'Skip Counting by 2, 5, and 10',
        channel: 'Math Antics',
        duration: '08:20',
        description: 'Visual counting patterns on a hundred-chart to build number fluency.'
      }
    ],
    quizQuestions: [
      {
        id: 'mpq1',
        text: 'What is the place value of the digit 5 in the number 528?',
        options: ['Hundreds', 'Tens', 'Units (Ones)', 'Thousands'],
        correctIndex: 0,
        explanation: 'In 528, the 5 is in the hundreds place, meaning it represents 500.',
        topicTag: 'Place Value'
      },
      {
        id: 'mpq2',
        text: 'What is 3,450 written in expanded form?',
        options: [
          '3,000 + 400 + 50',
          '300 + 40 + 5',
          '3,000 + 40 + 50',
          '30,000 + 400 + 50'
        ],
        correctIndex: 0,
        explanation: '3 thousands (3,000) + 4 hundreds (400) + 5 tens (50) + 0 units = 3,000 + 400 + 50.',
        topicTag: 'Expanded Form'
      },
      {
        id: 'mpq3',
        text: 'Which number comes next in this skip counting pattern: 25, 30, 35, 40, ___?',
        options: ['45', '50', '42', '44'],
        correctIndex: 0,
        explanation: 'The pattern is skip counting by 5s. 40 + 5 = 45.',
        topicTag: 'Skip Counting'
      },
      {
        id: 'mpq4',
        text: 'Why is the zero important in the number 409?',
        options: [
          'It acts as a placeholder so the 4 stays in the hundreds place',
          'It can be erased without changing the number',
          'It makes the number equal to 49',
          'It means the number is negative'
        ],
        correctIndex: 0,
        explanation: 'Without the zero, 409 would become 49, completely changing its value.',
        topicTag: 'Zero Placeholder'
      },
      {
        id: 'mpq5',
        text: 'Which number has 7 hundreds, 3 tens, and 8 ones?',
        options: ['738', '378', '837', '783'],
        correctIndex: 0,
        explanation: '7 hundreds = 700, 3 tens = 30, 8 ones = 8. Combining them gives 738.',
        topicTag: 'Number Building'
      }
    ]
  },

  // ================= MATHEMATICS: PRIMARY TOPIC 2 =================
  {
    id: 'math-primary-operations',
    subjectId: 'math',
    gradeLevels: ['grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', 'grade-6'],
    title: 'Addition, Subtraction & Times Tables',
    subtitle: 'Mental math strategies, regrouping (carrying & borrowing), and multiplication facts',
    estimatedMinutes: 22,
    learnContent: {
      summary: 'Addition combines groups of items, while subtraction finds the difference between them. When numbers exceed 9 in a column, we regroup (carry to the next column). Multiplication is repeated addition.',
      keyConcepts: [
        {
          title: 'Regrouping in Addition (Carrying)',
          explanation: 'If the sum of a column is 10 or greater, write the units digit below and carry the tens digit to the next column to the left.'
        },
        {
          title: 'Regrouping in Subtraction (Borrowing)',
          explanation: 'If the top digit is smaller than the bottom digit, borrow 1 ten from the column to the left to turn the top digit into 10 + itself.'
        },
        {
          title: 'Multiplication as Repeated Addition',
          explanation: '3 × 4 means 3 groups of 4 (4 + 4 + 4 = 12). Learning times tables up to 10×10 makes mental calculation fast.'
        }
      ],
      workedExamples: [
        {
          problem: 'Calculate 47 + 38 using column addition.',
          solution: 'Units column: 7 + 8 = 15 (write 5, carry 1). Tens column: 4 + 3 + 1 (carried) = 8. Total = 85.',
          takeaway: 'Always add the carried digit to the tens column.'
        },
        {
          problem: 'Kofi has 6 boxes with 5 apples in each box. How many apples does he have in total?',
          solution: '6 groups of 5 = 6 × 5 = 30 apples.',
          takeaway: 'Word problems with equal groups signal multiplication.'
        }
      ],
      commonMistakes: [
        'Forgetting to add the carried number in the tens column.',
        'Subtracting the smaller number from the larger number even when the smaller number is on top.',
        'Confusing addition and multiplication symbols (+ vs. ×).'
      ]
    },
    videos: [
      {
        id: 'v-math-p4',
        embedId: 'mAVJKkvJkgc',
        title: 'Multi-Digit Addition with Regrouping',
        channel: 'Math Antics',
        duration: '09:15',
        description: 'Clear step-by-step column addition with carrying explained visually.'
      },
      {
        id: 'v-math-p5',
        embedId: 'Buyaqe_L5-Y',
        title: 'Multi-Digit Subtraction with Regrouping',
        channel: 'Math Antics',
        duration: '09:40',
        description: 'How borrowing works across columns with clear base-ten blocks.'
      },
      {
        id: 'v-math-p6',
        embedId: 'mvOkMYCygps',
        title: 'Multiplication Concept and Times Tables',
        channel: 'Khan Academy',
        duration: '06:30',
        description: 'Understanding equal groups, arrays, and times tables foundations.'
      }
    ],
    quizQuestions: [
      {
        id: 'mpoq1',
        text: 'What is 56 + 27?',
        options: ['83', '73', '84', '77'],
        correctIndex: 0,
        explanation: '6 + 7 = 13 (write 3, carry 1). 5 + 2 + 1 = 8. Total is 83.',
        topicTag: 'Addition with Regrouping'
      },
      {
        id: 'mpoq2',
        text: 'What is 72 - 38?',
        options: ['34', '44', '36', '46'],
        correctIndex: 0,
        explanation: 'Borrow 1 ten from 7 (becomes 6). 12 - 8 = 4. 6 - 3 = 3. Result is 34.',
        topicTag: 'Subtraction with Regrouping'
      },
      {
        id: 'mpoq3',
        text: 'Which multiplication problem is equal to 4 + 4 + 4 + 4 + 4 + 4?',
        options: ['6 × 4', '4 × 4', '5 × 4', '6 + 4'],
        correctIndex: 0,
        explanation: 'There are 6 groups of 4, which is 6 × 4 = 24.',
        topicTag: 'Repeated Addition'
      },
      {
        id: 'mpoq4',
        text: 'A teacher hands out 8 stickers to each of 7 students. How many stickers are given in total?',
        options: ['56', '48', '64', '54'],
        correctIndex: 0,
        explanation: '7 students × 8 stickers = 56 stickers.',
        topicTag: 'Word Problems'
      },
      {
        id: 'mpoq5',
        text: 'What is any number multiplied by 0?',
        options: ['0', '1', 'The number itself', '10'],
        correctIndex: 0,
        explanation: 'The zero property of multiplication states that any number multiplied by zero equals zero.',
        topicTag: 'Zero Property'
      }
    ]
  },

  // ================= MATHEMATICS: PRIMARY TOPIC 3 =================
  {
    id: 'math-primary-fractions-shapes',
    subjectId: 'math',
    gradeLevels: ['grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', 'grade-6'],
    title: 'Simple Fractions, Decimals & Everyday Shapes',
    subtitle: 'Halves, quarters, thirds, visual fraction models, 2D/3D shapes, and perimeter',
    estimatedMinutes: 24,
    learnContent: {
      summary: 'A fraction represents an equal part of a whole. The top number is the numerator (parts we have) and the bottom number is the denominator (total equal parts). Basic geometry explores 2D shapes (rectangles, triangles, circles) and 3D solids (cubes, spheres, cylinders).',
      keyConcepts: [
        {
          title: 'Numerator and Denominator',
          explanation: 'In 3/4, 3 is the numerator (3 slices eaten) and 4 is the denominator (pizza cut into 4 equal slices).'
        },
        {
          title: 'Unit Fractions & Equivalent Fractions',
          explanation: '1/2 is equal to 2/4 and 4/8. They represent the exact same amount of the whole.'
        },
        {
          title: 'Perimeter of 2D Shapes',
          explanation: 'Perimeter is the total distance around the outside of a shape. You find it by adding all outer side lengths together.'
        }
      ],
      workedExamples: [
        {
          problem: 'A chocolate bar is divided into 8 equal pieces. Amina eats 3 pieces. What fraction of the bar is left?',
          solution: 'Whole bar = 8/8. Pieces left = 8 - 3 = 5 pieces. Fraction left = 5/8.',
          takeaway: 'Subtract numerators when denominators are the same.'
        },
        {
          problem: 'Find the perimeter of a rectangle with length 6 cm and width 4 cm.',
          solution: 'Perimeter = 6 + 4 + 6 + 4 = 20 cm (or 2 × (6 + 4) = 20 cm).',
          takeaway: 'A rectangle has two pairs of equal sides.'
        }
      ],
      commonMistakes: [
        'Thinking that 1/8 is bigger than 1/2 because 8 is bigger than 2; dividing into more pieces makes each piece smaller!',
        'Adding denominators when adding fractions (writing 1/4 + 2/4 = 3/8 instead of 3/4).',
        'Confusing perimeter (distance around the boundary) with area (flat space inside).'
      ]
    },
    videos: [
      {
        id: 'v-math-p7',
        embedId: 'CA9XLJpQp3c',
        title: 'Fractions for Kids: Halves, Quarters, Thirds',
        channel: 'Math Antics',
        duration: '10:14',
        description: 'Visual guide to numerators, denominators, and equal parts.'
      },
      {
        id: 'v-math-p8',
        embedId: 'jgWqk0P_P2Y',
        title: 'Perimeter of 2D Shapes Explained',
        channel: 'Math Antics',
        duration: '08:45',
        description: 'How to calculate the perimeter of triangles, squares, and polygons.'
      },
      {
        id: 'v-math-p9',
        embedId: '24Uv8Cl58U4',
        title: '2D Shapes and 3D Solids for Elementary',
        channel: 'Khan Academy Kids',
        duration: '06:10',
        description: 'Sides, vertices, faces, and edges of everyday geometric figures.'
      }
    ],
    quizQuestions: [
      {
        id: 'mpfq1',
        text: 'What does the denominator of a fraction tell you?',
        options: [
          'The total number of equal parts the whole is divided into',
          'How many parts you have selected',
          'The perimeter of the shape',
          'The cost of the item'
        ],
        correctIndex: 0,
        explanation: 'The bottom number (denominator) names the total equal parts that make up one full whole.',
        topicTag: 'Fraction Basics'
      },
      {
        id: 'mpfq2',
        text: 'Which fraction is equivalent to 1/2?',
        options: ['2/4', '1/3', '2/6', '3/8'],
        correctIndex: 0,
        explanation: '2/4 simplifies to 1/2 by dividing top and bottom by 2.',
        topicTag: 'Equivalent Fractions'
      },
      {
        id: 'mpfq3',
        text: 'What is the perimeter of a square with sides of length 5 cm?',
        options: ['20 cm', '25 cm', '10 cm', '15 cm'],
        correctIndex: 0,
        explanation: 'A square has 4 equal sides. Perimeter = 5 + 5 + 5 + 5 = 20 cm.',
        topicTag: 'Square Perimeter'
      },
      {
        id: 'mpfq4',
        text: 'If you have 2/5 of a pie and get another 1/5, how much pie do you have now?',
        options: ['3/5', '3/10', '2/10', '1/5'],
        correctIndex: 0,
        explanation: 'When denominators are the same, add the numerators: 2/5 + 1/5 = 3/5.',
        topicTag: 'Adding Like Fractions'
      },
      {
        id: 'mpfq5',
        text: 'Which of the following is a 3D solid shape?',
        options: ['Cube', 'Square', 'Triangle', 'Circle'],
        correctIndex: 0,
        explanation: 'A cube is a 3-dimensional solid with length, width, and height. Square, triangle, and circle are 2D flat shapes.',
        topicTag: '3D Shapes'
      }
    ]
  },

  // ================= MATHEMATICS: JUNIOR TOPIC 1 =================
  {
    id: 'math-junior-integers',
    subjectId: 'math',
    gradeLevels: ['grade-7', 'grade-8', 'grade-9'],
    title: 'Directed Numbers, Integers & The Number Line',
    subtitle: 'Positive and negative numbers, rules of signs, absolute value, and coordinate planes',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Integers are whole numbers that can be positive, negative, or zero: {..., -3, -2, -1, 0, 1, 2, 3, ...}. Negative numbers represent values below zero, such as depths below sea level or debt.',
      keyConcepts: [
        {
          title: 'The Number Line & Order',
          explanation: 'Numbers to the right are greater than numbers to the left. For example, -2 is greater than -7 because it lies further right.'
        },
        {
          title: 'Addition and Subtraction Rules',
          explanation: 'Subtracting a negative number is equivalent to adding a positive number: a - (-b) = a + b.'
        },
        {
          title: 'Multiplication and Division of Signs',
          explanation: 'Like signs yield a positive product ((+) × (+) = (+), (-) × (-) = (+)). Unlike signs yield a negative product ((+) × (-) = (-)).'
        }
      ],
      workedExamples: [
        {
          problem: 'Simplify: (-8) + 14 - (-5).',
          solution: '(-8) + 14 = 6. Then 6 - (-5) = 6 + 5 = 11.',
          takeaway: 'Convert double negative signs to plus signs.'
        },
        {
          problem: 'At midnight the temperature was -4°C. By morning it dropped another 7°C. What was the morning temperature?',
          solution: 'Start at -4, subtract 7: -4 - 7 = -11°C.',
          takeaway: 'Moving further down on the thermometer increases the negative value.'
        }
      ],
      commonMistakes: [
        'Thinking -10 is greater than -2 because 10 is larger than 2.',
        'Applying the multiplication sign rule to addition (e.g. thinking -3 + (-4) = +7 instead of -7).',
        'Confusing the negative sign of subtraction with the negative sign of an integer.'
      ]
    },
    videos: [
      {
        id: 'v-math-j1',
        embedId: 'q2IW9FolV60',
        title: 'Negative Numbers & Integers Explained',
        channel: 'Math Antics',
        duration: '11:15',
        description: 'How negative numbers work on number lines and real life.'
      },
      {
        id: 'v-math-j2',
        embedId: 'x0E4vxLydNY',
        title: 'Adding and Subtracting Integers',
        channel: 'Khan Academy',
        duration: '08:30',
        description: 'Rules for combining signed numbers with visual animations.'
      },
      {
        id: 'v-math-j3',
        embedId: 'K_tPbVPfHgk',
        title: 'Multiplying and Dividing Negative Numbers',
        channel: 'The Organic Chemistry Tutor',
        duration: '10:05',
        description: 'Sign rules and why negative times negative equals positive.'
      }
    ],
    quizQuestions: [
      {
        id: 'mjiq1',
        text: 'Which of the following integers is the greatest?',
        options: ['-1', '-5', '-12', '-20'],
        correctIndex: 0,
        explanation: '-1 is closest to zero on the right side of the negative number line, so it has the highest value.',
        topicTag: 'Comparing Integers'
      },
      {
        id: 'mjiq2',
        text: 'What is the value of (-7) - (-12)?',
        options: ['5', '-19', '19', '-5'],
        correctIndex: 0,
        explanation: 'Subtracting a negative becomes addition: -7 + 12 = 5.',
        topicTag: 'Subtracting Negatives'
      },
      {
        id: 'mjiq3',
        text: 'What is (-6) × (-4)?',
        options: ['24', '-24', '-10', '10'],
        correctIndex: 0,
        explanation: 'Negative multiplied by negative gives a positive result: (-6) × (-4) = +24.',
        topicTag: 'Multiplication Signs'
      },
      {
        id: 'mjiq4',
        text: 'A diver is 15 meters below sea level (-15 m) and ascends 9 meters. What is their new depth?',
        options: ['-6 meters', '-24 meters', '6 meters', '24 meters'],
        correctIndex: 0,
        explanation: '-15 + 9 = -6 meters (6 meters below sea level).',
        topicTag: 'Word Problems'
      },
      {
        id: 'mjiq5',
        text: 'What is the absolute value of -18, written as |-18|?',
        options: ['18', '-18', '0', '1/18'],
        correctIndex: 0,
        explanation: 'Absolute value represents the distance from 0 on the number line, which is always non-negative: |-18| = 18.',
        topicTag: 'Absolute Value'
      }
    ]
  },

  // ================= MATHEMATICS: JUNIOR TOPIC 2 =================
  {
    id: 'math-junior-fractions-ratios',
    subjectId: 'math',
    gradeLevels: ['grade-7', 'grade-8', 'grade-9'],
    title: 'Fractions, Ratios, Percentages & Simple Interest',
    subtitle: 'Simplifying ratios, sharing in proportions, percentage change, and I = PRT / 100',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Fractions, decimals, and percentages are interchangeable ways to express proportional parts. Ratios compare two or more quantities of the same kind. Simple interest models financial returns or loan costs over time.',
      keyConcepts: [
        {
          title: 'Converting Between Forms',
          explanation: '3/4 = 0.75 = 75%. To convert a fraction to a percentage, multiply by 100%.'
        },
        {
          title: 'Sharing in a Given Ratio',
          explanation: 'To divide an amount into ratio a:b, add parts (a + b), find the value of 1 part by dividing total by sum of parts, then multiply by each ratio number.'
        },
        {
          title: 'Simple Interest Formula',
          explanation: 'Interest I = (P × R × T) / 100, where P is principal, R is annual rate (%), and T is time in years.'
        }
      ],
      workedExamples: [
        {
          problem: 'Share $150 between Alex and Ben in the ratio 2 : 3.',
          solution: 'Total parts = 2 + 3 = 5. Value of 1 part = $150 / 5 = $30. Alex gets 2 × $30 = $60; Ben gets 3 × $30 = $90.',
          takeaway: 'Check: $60 + $90 = $150.'
        },
        {
          problem: 'Calculate the simple interest on a principal of $2,000 invested at 5% per annum for 3 years.',
          solution: 'I = (P × R × T) / 100 = (2000 × 5 × 3) / 100 = 30000 / 100 = $300.',
          takeaway: 'Total amount after 3 years = Principal + Interest = $2,300.'
        }
      ],
      commonMistakes: [
        'Dividing the total amount by each ratio number directly instead of dividing by the sum of parts.',
        'Using time in months directly in the simple interest formula without converting to years (e.g. 6 months = 0.5 years).',
        'Confusing simple interest with compound interest.'
      ]
    },
    videos: [
      {
        id: 'v-math-j4',
        embedId: 'RQ2nYUBVvqI',
        title: 'Ratios and Proportions in Real Life',
        channel: 'Math Antics',
        duration: '10:40',
        description: 'How to simplify ratios and share amounts proportionally.'
      },
      {
        id: 'v-math-j5',
        embedId: 'WyfkNZyOcb0',
        title: 'Percentages and Fraction Conversions',
        channel: 'Khan Academy',
        duration: '08:20',
        description: 'Mastering the link between decimals, fractions, and percentages.'
      },
      {
        id: 'v-math-j6',
        embedId: 'GhyJ9Gz_3sI',
        title: 'Simple Interest Formula I = PRT',
        channel: 'The Organic Chemistry Tutor',
        duration: '12:15',
        description: 'Solving simple interest word problems with principal and rate.'
      }
    ],
    quizQuestions: [
      {
        id: 'mjfrq1',
        text: 'What is 3/5 expressed as a percentage?',
        options: ['60%', '35%', '30%', '75%'],
        correctIndex: 0,
        explanation: '(3 / 5) × 100% = 0.6 × 100% = 60%.',
        topicTag: 'Percentage Conversion'
      },
      {
        id: 'mjfrq2',
        text: 'Divide $240 in the ratio 1 : 3. What is the smaller share?',
        options: ['$60', '$80', '$40', '$120'],
        correctIndex: 0,
        explanation: 'Total parts = 1 + 3 = 4. 1 part = 240 / 4 = $60. The smaller share is 1 × $60 = $60.',
        topicTag: 'Ratio Sharing'
      },
      {
        id: 'mjfrq3',
        text: 'A jacket originally priced at $80 is offered at a 25% discount. What is the sale price?',
        options: ['$60', '$65', '$20', '$70'],
        correctIndex: 0,
        explanation: '25% of $80 = 0.25 × 80 = $20 discount. Sale price = 80 - 20 = $60.',
        topicTag: 'Discounts'
      },
      {
        id: 'mjfrq4',
        text: 'What is the simple interest on $1,000 at 4% per year for 2 years?',
        options: ['$80', '$40', '$800', '$160'],
        correctIndex: 0,
        explanation: 'I = (1000 × 4 × 2) / 100 = 8000 / 100 = $80.',
        topicTag: 'Simple Interest'
      },
      {
        id: 'mjfrq5',
        text: 'Simplify the ratio 18 : 24 to its lowest terms.',
        options: ['3 : 4', '9 : 12', '2 : 3', '6 : 8'],
        correctIndex: 0,
        explanation: 'Divide both numbers by their greatest common factor 6: 18/6 = 3, 24/6 = 4. Ratio is 3 : 4.',
        topicTag: 'Simplifying Ratios'
      }
    ]
  },

  // ================= MATHEMATICS: JUNIOR TOPIC 3 =================
  {
    id: 'math-junior-prealgebra',
    subjectId: 'math',
    gradeLevels: ['grade-7', 'grade-8', 'grade-9'],
    title: 'Introduction to Algebraic Expressions & Linear Equations',
    subtitle: 'Variables, expanding single brackets, collecting like terms, and solving 1-step and 2-step equations',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Algebra uses letters (variables) to represent unknown values. An algebraic expression contains terms separated by + or - signs. Solving a linear equation means finding the value of the variable that makes the equation true.',
      keyConcepts: [
        {
          title: 'Collecting Like Terms',
          explanation: 'Terms with the exact same variable parts can be combined by adding or subtracting their coefficients: 5x + 3x = 8x, but 5x + 3 cannot be combined.'
        },
        {
          title: 'Expanding Single Brackets',
          explanation: 'Use the distributive property: a(b + c) = ab + ac. Multiply the term outside by every term inside.'
        },
        {
          title: 'Solving 2-Step Equations',
          explanation: 'Use inverse operations in reverse order: undo addition/subtraction first, then undo multiplication/division.'
        }
      ],
      workedExamples: [
        {
          problem: 'Simplify: 4(2x - 3) + 5x.',
          solution: 'Expand brackets: 4 · 2x - 4 · 3 = 8x - 12. Combine like terms: 8x + 5x - 12 = 13x - 12.',
          takeaway: 'Always expand brackets before combining like terms.'
        },
        {
          problem: 'Solve the equation: 3x + 7 = 22.',
          solution: 'Subtract 7 from both sides: 3x = 22 - 7 => 3x = 15. Divide by 3: x = 15 / 3 = 5.',
          takeaway: 'Substitute x = 5 back into 3(5) + 7 = 15 + 7 = 22 to verify.'
        }
      ],
      commonMistakes: [
        'Combining unlike terms (such as writing 2x + 5 = 7x).',
        'Forgetting to multiply the outside term by the SECOND term inside brackets (e.g. writing 3(x + 4) = 3x + 4 instead of 3x + 12).',
        'Not performing the same operation to both sides of an equation.'
      ]
    },
    videos: [
      {
        id: 'v-math-j7',
        embedId: 'NybHckSEQBI',
        title: 'Algebra Basics: What Is Algebra?',
        channel: 'Math Antics',
        duration: '11:20',
        description: 'Why we use variables and how equations model real questions.'
      },
      {
        id: 'v-math-j8',
        embedId: 'vDqOoI-4Z6M',
        title: 'Solving 2-Step Equations Step-by-Step',
        channel: 'Khan Academy',
        duration: '09:05',
        description: 'Using inverse operations to isolate the variable cleanly.'
      },
      {
        id: 'v-math-j9',
        embedId: 'jK_bH-30eic',
        title: 'The Distributive Property & Expanding Brackets',
        channel: 'Math Antics',
        duration: '08:40',
        description: 'Visual demonstration of expanding parentheses and collecting terms.'
      }
    ],
    quizQuestions: [
      {
        id: 'mjpeq1',
        text: 'Simplify the expression: 7x + 4 - 3x + 8.',
        options: ['4x + 12', '10x + 12', '4x + 4', '16x'],
        correctIndex: 0,
        explanation: 'Combine x-terms: 7x - 3x = 4x. Combine numbers: 4 + 8 = 12. Result is 4x + 12.',
        topicTag: 'Like Terms'
      },
      {
        id: 'mjpeq2',
        text: 'What is the expansion of 5(2x - 3)?',
        options: ['10x - 15', '10x - 3', '7x - 15', '10x + 15'],
        correctIndex: 0,
        explanation: '5 × 2x = 10x, and 5 × (-3) = -15. So 10x - 15.',
        topicTag: 'Distributive Property'
      },
      {
        id: 'mjpeq3',
        text: 'Solve for x: 4x - 5 = 19.',
        options: ['6', '5', '4', '7'],
        correctIndex: 0,
        explanation: 'Add 5 to both sides: 4x = 24. Divide by 4: x = 6.',
        topicTag: 'Solving Linear Equations'
      },
      {
        id: 'mjpeq4',
        text: 'If a rectangle has length (x + 4) and width 3, what is its area expression?',
        options: ['3x + 12', '3x + 4', 'x + 7', '3x + 7'],
        correctIndex: 0,
        explanation: 'Area = width × length = 3(x + 4) = 3x + 12.',
        topicTag: 'Geometric Algebra'
      },
      {
        id: 'mjpeq5',
        text: 'What should you do to both sides to solve: x / 5 = 7?',
        options: [
          'Multiply both sides by 5',
          'Divide both sides by 5',
          'Subtract 5 from both sides',
          'Add 5 to both sides'
        ],
        correctIndex: 0,
        explanation: 'The inverse operation of dividing by 5 is multiplying by 5. x = 7 × 5 = 35.',
        topicTag: 'Inverse Operations'
      }
    ]
  },

  // ================= MATHEMATICS: SENIOR TOPIC 1 =================
  {
    id: 'math-quadratics',
    subjectId: 'math',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Quadratic Equations & The Quadratic Formula',
    subtitle: 'Factorization, completing the square, and using discriminant analysis',
    estimatedMinutes: 25,
    learnContent: {
      summary: 'A quadratic equation is a second-order polynomial equation in a single variable x with a non-zero coefficient for x²: ax² + bx + c = 0. Roots represent the points where the parabola crosses the x-axis.',
      keyConcepts: [
        {
          title: 'Standard Form',
          explanation: 'Always rearrange terms into ax² + bx + c = 0 before identifying coefficients a, b, and c.'
        },
        {
          title: 'The Quadratic Formula',
          explanation: 'x = (-b ± √(b² - 4ac)) / (2a). Notice the entire numerator is divided by 2a, not just the radical.'
        },
        {
          title: 'The Discriminant (Δ = b² - 4ac)',
          explanation: 'If Δ > 0: two distinct real roots. If Δ = 0: one repeated real root. If Δ < 0: two complex conjugate roots (no real roots).'
        }
      ],
      workedExamples: [
        {
          problem: 'Solve 2x² - 4x - 6 = 0 using the quadratic formula.',
          solution: 'Identify a=2, b=-4, c=-6. Discriminant Δ = (-4)² - 4(2)(-6) = 16 + 48 = 64. x = (-(-4) ± √64) / (2·2) = (4 ± 8)/4. Hence x = 12/4 = 3 or x = -4/4 = -1.',
          takeaway: 'Take careful note of negative signs when squaring b: (-4)² is positive 16, never -16.'
        },
        {
          problem: 'Solve x² - 5x + 6 = 0 by factoring.',
          solution: 'Find two numbers that multiply to +6 and add to -5. The numbers are -2 and -3. (x - 2)(x - 3) = 0, so x = 2 or x = 3.',
          takeaway: 'Always verify by expanding back to check the middle term sign.'
        }
      ],
      commonMistakes: [
        'Squaring negative numbers: writing -4² = -16 instead of (-4)² = 16.',
        'Dividing only the square root by 2a instead of dividing the entire (-b ± √Δ) by 2a.',
        'Forgetting to invert signs when moving terms across the equals sign to set = 0.'
      ]
    },
    videos: [
      {
        id: 'v1',
        embedId: 'IlNAJl36-10',
        title: 'Solving Quadratic Equations using the Quadratic Formula',
        channel: 'The Organic Chemistry Tutor',
        duration: '12:45',
        description: 'Comprehensive step-by-step walkthrough covering standard form, discriminant calculation, and avoiding sign traps.'
      },
      {
        id: 'v2',
        embedId: 'i7idZfS8t8w',
        title: 'How to Solve Quadratic Equations by Factoring',
        channel: 'Khan Academy',
        duration: '09:20',
        description: 'Visual intuition for factoring quadratics with a=1 and a>1, zero product property breakdown.'
      },
      {
        id: 'v3',
        embedId: '3ayhvAI3IeY',
        title: 'The Quadratic Formula Song & Derivation',
        channel: 'Numberphile & Eddie Woo',
        duration: '08:15',
        description: 'Memorable geometric proof of completing the square and deriving the formula from scratch.'
      }
    ],
    quizQuestions: [
      {
        id: 'mq1',
        text: 'For the equation 3x² - 6x + 2 = 0, what is the value of the discriminant (b² - 4ac)?',
        options: ['12', '-12', '60', '24'],
        correctIndex: 0,
        explanation: 'Δ = b² - 4ac = (-6)² - 4(3)(2) = 36 - 24 = 12.',
        topicTag: 'Discriminant Analysis'
      },
      {
        id: 'mq2',
        text: 'What is the correct root set for x² - 7x + 10 = 0?',
        options: ['x = 2 and x = 5', 'x = -2 and x = -5', 'x = 1 and x = 10', 'x = -7 and x = 10'],
        correctIndex: 0,
        explanation: 'Factoring: (x - 2)(x - 5) = 0 gives roots x = 2 and x = 5.',
        topicTag: 'Factoring Quadratics'
      },
      {
        id: 'mq3',
        text: 'If a quadratic equation has a discriminant Δ = -16, what does this tell us about its roots?',
        options: ['It has two distinct real roots', 'It has exactly one repeated real root', 'It has no real roots (two complex roots)', 'Both roots must equal zero'],
        correctIndex: 2,
        explanation: 'When Δ < 0, the square root √(b² - 4ac) yields an imaginary number, meaning no real intersections on the x-axis.',
        topicTag: 'Nature of Roots'
      },
      {
        id: 'mq4',
        text: 'A student solves x² - 6x = 0 by dividing both sides by x to obtain x - 6 = 0, concluding x = 6. What crucial root did they lose?',
        options: ['x = 0', 'x = -6', 'x = 1', 'x = 3'],
        correctIndex: 0,
        explanation: 'Dividing by the variable x loses the solution x = 0. Factorization x(x - 6) = 0 yields both x = 0 and x = 6.',
        topicTag: 'Factoring Trap'
      },
      {
        id: 'mq5',
        text: 'What is the vertex x-coordinate of the parabola given by y = 2x² - 8x + 5?',
        options: ['x = 2', 'x = -2', 'x = 4', 'x = -4'],
        correctIndex: 0,
        explanation: 'The axis of symmetry / vertex x-coordinate is given by x = -b / (2a) = -(-8) / (2·2) = 8 / 4 = 2.',
        topicTag: 'Parabola Vertex'
      }
    ]
  },

  // ================= MATHEMATICS: TOPIC 2 =================
  {
    id: 'math-pythagoras-trig',
    subjectId: 'math',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Trigonometric Ratios & The Pythagorean Theorem',
    subtitle: 'SOH-CAH-TOA, special right triangles, and angles of elevation/depression',
    estimatedMinutes: 30,
    learnContent: {
      summary: 'Right-angled triangle trigonometry connects side lengths to interior angles. The fundamental Pythagorean theorem states a² + b² = c², while the primary ratios are Sine (Opposite/Hypotenuse), Cosine (Adjacent/Hypotenuse), and Tangent (Opposite/Adjacent).',
      keyConcepts: [
        {
          title: 'The Pythagorean Theorem',
          explanation: 'In any right triangle, the square of the hypotenuse equals the sum of the squares of the two shorter legs: a² + b² = c².'
        },
        {
          title: 'SOH-CAH-TOA Ratios',
          explanation: 'sin(θ) = Opp/Hyp; cos(θ) = Adj/Hyp; tan(θ) = Opp/Adj. Always establish θ first before labeling Opposite and Adjacent.'
        },
        {
          title: 'Angles of Elevation and Depression',
          explanation: 'Both angles are measured strictly from the horizontal eye-line. By alternate interior angles, angle of elevation = angle of depression.'
        }
      ],
      workedExamples: [
        {
          problem: 'A 10-meter ladder leans against a vertical wall, making an angle of 60° with the level ground. How high up the wall does it reach?',
          solution: 'The ladder is the hypotenuse (10 m), and the wall height is the opposite side h. sin(60°) = h / 10. Since sin(60°) = √3 / 2, h = 10 · (√3 / 2) = 5√3 ≈ 8.66 meters.',
          takeaway: 'Check whether the angle is given relative to the ground or the wall.'
        },
        {
          problem: 'A right triangle has legs of lengths 6 cm and 8 cm. Find the hypotenuse c and tan(θ) where θ is opposite the 6 cm side.',
          solution: 'c² = 6² + 8² = 36 + 64 = 100 => c = 10 cm. tan(θ) = Opposite / Adjacent = 6 / 8 = 3/4 = 0.75.',
          takeaway: 'This is the standard 3-4-5 Pythagorean triple scaled by a factor of 2.'
        }
      ],
      commonMistakes: [
        'Confusing opposite and adjacent sides by ignoring which acute angle is the reference angle.',
        'Using the Pythagorean theorem on non-right triangles without verifying a 90° angle.',
        'Measuring angle of depression from the vertical cliff rather than from the horizontal eye-line.'
      ]
    },
    videos: [
      {
        id: 'v4',
        embedId: 'AA6RfgP-AHU',
        title: 'The Pythagorean Theorem Explained Visually',
        channel: 'Khan Academy',
        duration: '10:15',
        description: 'Proof of a² + b² = c² using geometric rearrangement and practical distance problems.'
      },
      {
        id: 'v5',
        embedId: '5tp74g4N8EY',
        title: 'Basic Trigonometry: SOH CAH TOA',
        channel: 'The Organic Chemistry Tutor',
        duration: '18:42',
        description: 'Comprehensive introduction covering sin, cos, tan definitions, reciprocal ratios, and solving right triangles.'
      },
      {
        id: 'v6',
        embedId: 'PUB0TaZ7bhA',
        title: 'Angles of Elevation and Depression - Real World Word Problems',
        channel: 'Brian McLogan',
        duration: '08:50',
        description: 'How to draw precise triangle diagrams from word problems and calculate heights of towers and lighthouses.'
      }
    ],
    quizQuestions: [
      {
        id: 'tq1',
        text: 'In a right-angled triangle, the side opposite angle θ is 5 cm, and the hypotenuse is 13 cm. What is sin(θ)?',
        options: ['5/13', '12/13', '5/12', '13/5'],
        correctIndex: 0,
        explanation: 'By definition, sin(θ) = Opposite / Hypotenuse = 5 / 13.',
        topicTag: 'Trig Ratios'
      },
      {
        id: 'tq2',
        text: 'Using the Pythagorean Theorem, find the missing leg b if hypotenuse c = 25 cm and leg a = 7 cm.',
        options: ['24 cm', '18 cm', '32 cm', '576 cm'],
        correctIndex: 0,
        explanation: 'b² = c² - a² = 25² - 7² = 625 - 49 = 576. b = √576 = 24 cm.',
        topicTag: 'Pythagorean Theorem'
      },
      {
        id: 'tq3',
        text: 'What is the exact value of tan(45°)?',
        options: ['1', '0', '1/2', '√3'],
        correctIndex: 0,
        explanation: 'In a 45°-45°-90° isosceles right triangle, the opposite and adjacent legs are identical in length, so tan(45°) = 1.',
        topicTag: 'Special Angles'
      },
      {
        id: 'tq4',
        text: 'An observer at the top of a 50m cliff spots a boat at an angle of depression of 30°. What is the horizontal distance to the boat?',
        options: ['50√3 m (≈ 86.6 m)', '50/√3 m (≈ 28.9 m)', '100 m', '25 m'],
        correctIndex: 0,
        explanation: 'The angle of depression equals the alternate interior angle of elevation from the boat (30°). tan(30°) = 50 / d => d = 50 / tan(30°) = 50 / (1/√3) = 50√3 m.',
        topicTag: 'Elevation & Depression'
      },
      {
        id: 'tq5',
        text: 'Which trigonometric identity is universally true for any angle θ?',
        options: ['sin²(θ) + cos²(θ) = 1', 'sin(θ) + cos(θ) = 1', 'tan²(θ) + 1 = sin²(θ)', 'sin(2θ) = 2sin(θ)'],
        correctIndex: 0,
        explanation: 'This is the fundamental Pythagorean trigonometric identity derived directly from a² + b² = c² on the unit circle.',
        topicTag: 'Trig Identities'
      }
    ]
  },

  // ================= MATHEMATICS: TOPIC 3 =================
  {
    id: 'math-linear-functions',
    subjectId: 'math',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Linear Equations, Slope & Coordinate Geometry',
    subtitle: 'Slope-intercept form (y = mx + b), systems of equations, and parallel/perpendicular lines',
    estimatedMinutes: 25,
    learnContent: {
      summary: 'A linear function represents a relationship with a constant rate of change. On a Cartesian plane, it forms a straight line defined by its slope m = (y₂ - y₁) / (x₂ - x₁) and y-intercept b in y = mx + b.',
      keyConcepts: [
        {
          title: 'Slope-Intercept Form (y = mx + b)',
          explanation: 'm represents the slope (rise over run) and b represents where the line crosses the y-axis (0, b).'
        },
        {
          title: 'Parallel vs. Perpendicular Slopes',
          explanation: 'Parallel lines have identical slopes (m₁ = m₂). Perpendicular lines have negative reciprocal slopes (m₁ · m₂ = -1).'
        },
        {
          title: 'Solving Systems of Linear Equations',
          explanation: 'A system of two equations can be solved by substitution, elimination, or finding the graphical intersection point (x, y).'
        }
      ],
      workedExamples: [
        {
          problem: 'Find the equation of the line passing through (2, 5) and (4, 11).',
          solution: 'Slope m = (11 - 5) / (4 - 2) = 6 / 2 = 3. Using point-slope y - 5 = 3(x - 2) => y - 5 = 3x - 6 => y = 3x - 1.',
          takeaway: 'Substitute either point into y = 3x - 1 to check that both points satisfy the final equation.'
        },
        {
          problem: 'Solve the system: 2x + y = 9 and x - y = 3.',
          solution: 'Add the two equations: (2x + x) + (y - y) = 9 + 3 => 3x = 12 => x = 4. Substitute x=4 into second equation: 4 - y = 3 => y = 1. Solution is (4, 1).',
          takeaway: 'Elimination is the quickest method when variable coefficients are additive opposites (+y and -y).'
        }
      ],
      commonMistakes: [
        'Calculating slope upside down: doing (x₂ - x₁) / (y₂ - y₁) instead of rise over run (Δy / Δx).',
        'Confusing the slope of horizontal lines (m = 0) with vertical lines (slope undefined).',
        'Forgetting the negative sign for perpendicular lines: taking reciprocal without negating.'
      ]
    },
    videos: [
      {
        id: 'v-math-l1',
        embedId: 'mxBoni8N70Y',
        title: 'Graphing Linear Equations in Slope-Intercept Form',
        channel: 'The Organic Chemistry Tutor',
        duration: '14:20',
        description: 'Clear breakdown of slope, y-intercept, graphing positive and negative slopes, and finding equations.'
      },
      {
        id: 'v-math-l2',
        embedId: '75m60SxFfJg',
        title: 'Solving Systems of Equations by Elimination & Substitution',
        channel: 'Khan Academy',
        duration: '11:15',
        description: 'Step-by-step techniques to find exact coordinate intersections of two lines.'
      },
      {
        id: 'v-math-l3',
        embedId: 'pwsK7VvLzJc',
        title: 'Parallel and Perpendicular Lines - Slopes & Proofs',
        channel: 'Brian McLogan',
        duration: '08:45',
        description: 'How to write equations for lines parallel and perpendicular through a given point.'
      }
    ],
    quizQuestions: [
      {
        id: 'lq1',
        text: 'What is the slope of the line passing through (1, 3) and (5, 15)?',
        options: ['3', '4', '1/3', '12'],
        correctIndex: 0,
        explanation: 'Slope m = (15 - 3) / (5 - 1) = 12 / 4 = 3.',
        topicTag: 'Slope Formula'
      },
      {
        id: 'lq2',
        text: 'If line L1 has slope m = 4, what is the slope of a line perpendicular to L1?',
        options: ['-1/4', '-4', '1/4', '4'],
        correctIndex: 0,
        explanation: 'Perpendicular lines have negative reciprocal slopes: m_perp = -1 / 4.',
        topicTag: 'Perpendicular Slopes'
      },
      {
        id: 'lq3',
        text: 'What is the y-intercept of the line 3x + 2y = 12?',
        options: ['(0, 6)', '(0, 4)', '(0, 12)', '(0, 3)'],
        correctIndex: 0,
        explanation: 'Set x = 0: 2y = 12 => y = 6. The y-intercept is (0, 6).',
        topicTag: 'Intercepts'
      },
      {
        id: 'lq4',
        text: 'For the system x + y = 10 and x - y = 4, what is the value of x?',
        options: ['7', '3', '6', '5'],
        correctIndex: 0,
        explanation: 'Add the two equations: 2x = 14 => x = 7 (and y = 3).',
        topicTag: 'Systems of Equations'
      },
      {
        id: 'lq5',
        text: 'What is the equation of a horizontal line passing through (4, -7)?',
        options: ['y = -7', 'x = 4', 'y = 4x - 7', 'x = -7'],
        correctIndex: 0,
        explanation: 'A horizontal line has slope 0, so its equation is always y = k, which is y = -7.',
        topicTag: 'Horizontal & Vertical Lines'
      }
    ]
  },

  // ================= FURTHER MATHEMATICS: TOPIC 1 =================
  {
    id: 'fmath-matrices',
    subjectId: 'further-math',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Matrices, Determinants & Linear Transformations',
    subtitle: 'Matrix multiplication, inverse 2x2 & 3x3 matrices, and solving systems with Cramer’s Rule',
    estimatedMinutes: 32,
    learnContent: {
      summary: 'Matrices are rectangular arrays of numbers used to represent linear transformations and solve systems of simultaneous equations. The determinant det(A) determines whether a matrix is invertible.',
      keyConcepts: [
        {
          title: 'Matrix Multiplication Compatibility',
          explanation: 'To multiply matrix A (size m × n) by matrix B (size p × q), the inner dimensions must match (n = p). The product AB has dimension m × q.'
        },
        {
          title: '2x2 Determinant and Inverse',
          explanation: 'For A = [[a, b], [c, d]], det(A) = ad - bc. If det(A) ≠ 0, A⁻¹ = (1 / det(A)) · [[d, -b], [-c, a]]. If det(A) = 0, the matrix is singular and has no inverse.'
        },
        {
          title: 'Linear Geometric Transformations',
          explanation: 'A 2x2 matrix transforms the unit vectors i = (1,0) and j = (0,1), representing rotations, reflections, scaling, and shears.'
        }
      ],
      workedExamples: [
        {
          problem: 'Find the determinant and inverse of A = [[3, 2], [1, 4]].',
          solution: 'det(A) = (3)(4) - (2)(1) = 12 - 2 = 10. A⁻¹ = (1/10) · [[4, -2], [-1, 3]] = [[0.4, -0.2], [-0.1, 0.3]].',
          takeaway: 'Always verify by checking A · A⁻¹ = I (the identity matrix [[1,0],[0,1]]).'
        }
      ],
      commonMistakes: [
        'Multiplying matrices element-by-element instead of using row-by-column dot products.',
        'Assuming matrix multiplication is commutative: AB is almost never equal to BA.',
        'Forgetting to switch the diagonal elements (a and d) and negate the off-diagonals (b and c) when finding the 2x2 inverse.'
      ]
    },
    videos: [
      {
        id: 'v-fmath-1',
        embedId: 'kYB8IZa5AuE',
        title: 'Essence of Linear Algebra: Vectors & Linear Combinations',
        channel: '3Blue1Brown',
        duration: '09:52',
        description: 'Grant Sanderson introduces visual intuition for vectors, basis vectors, and spanning sets.'
      },
      {
        id: 'v-fmath-2',
        embedId: 'XkY2DOUCWMU',
        title: 'Matrix Multiplication as Composition of Transformations',
        channel: '3Blue1Brown',
        duration: '10:04',
        description: 'Why matrix multiplication is defined row-by-column through geometric compositions.'
      },
      {
        id: 'v-fmath-3',
        embedId: 'Ip3X9LOh2dk',
        title: 'The Determinant and Area Scaling Factor',
        channel: '3Blue1Brown',
        duration: '10:18',
        description: 'How the determinant measures the factor by which a transformation scales areas or volumes.'
      }
    ],
    quizQuestions: [
      {
        id: 'fmq1',
        text: 'What is the determinant of the matrix [[5, 3], [2, 4]]?',
        options: ['14', '26', '7', '20'],
        correctIndex: 0,
        explanation: 'det = (5)(4) - (3)(2) = 20 - 6 = 14.',
        topicTag: 'Determinant'
      },
      {
        id: 'fmq2',
        text: 'A matrix with a determinant equal to 0 is known as what kind of matrix?',
        options: ['Singular matrix (non-invertible)', 'Identity matrix', 'Orthogonal matrix', 'Diagonal matrix'],
        correctIndex: 0,
        explanation: 'When det(A) = 0, division by zero makes A⁻¹ undefined; the matrix is singular.',
        topicTag: 'Singular Matrix'
      },
      {
        id: 'fmq3',
        text: 'Matrix A has dimension 3 × 2 and Matrix B has dimension 2 × 4. What is the dimension of product AB?',
        options: ['3 × 4', '2 × 2', '4 × 3', 'Undefined'],
        correctIndex: 0,
        explanation: 'Inner dimensions (2 and 2) match, so outer dimensions (3 and 4) form the product size: 3 × 4.',
        topicTag: 'Matrix Dimensions'
      },
      {
        id: 'fmq4',
        text: 'Is matrix multiplication generally commutative (does AB = BA)?',
        options: ['No, matrix multiplication is non-commutative in general', 'Yes, it is always commutative', 'Only for 2x2 matrices', 'Only when numbers are positive'],
        correctIndex: 0,
        explanation: 'Order matters: AB ≠ BA in general linear algebra.',
        topicTag: 'Non-commutativity'
      },
      {
        id: 'fmq5',
        text: 'What is the determinant of a 2x2 identity matrix [[1, 0], [0, 1]]?',
        options: ['1', '0', '2', '-1'],
        correctIndex: 0,
        explanation: '(1)(1) - (0)(0) = 1.',
        topicTag: 'Identity Matrix'
      }
    ]
  },

  // ================= FURTHER MATHEMATICS: TOPIC 2 =================
  {
    id: 'fmath-calculus-derivatives',
    subjectId: 'further-math',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Differential Calculus: Power, Product & Chain Rules',
    subtitle: 'Limits, tangents, instantaneous rates of change, and stationary points',
    estimatedMinutes: 30,
    learnContent: {
      summary: 'Calculus analyzes continuous change. The derivative f\'(x) = dy/dx represents the instantaneous slope of a function at any given point, found via the limit definition or differentiation rules.',
      keyConcepts: [
        {
          title: 'The Power Rule',
          explanation: 'If f(x) = xⁿ, then f\'(x) = n · xⁿ⁻¹. For example, derivative of x⁴ is 4x³.'
        },
        {
          title: 'The Chain Rule for Composite Functions',
          explanation: 'If y = f(g(x)), then dy/dx = f\'(g(x)) · g\'(x). Differentiate the outside, leave the inside alone, then multiply by the derivative of the inside.'
        },
        {
          title: 'Stationary Points and Maxima/Minima',
          explanation: 'Set f\'(x) = 0 to find critical stationary points. Use the second derivative f\'\'(x) to test concavity: f\'\'(x) > 0 is a local minimum, f\'\'(x) < 0 is a local maximum.'
        }
      ],
      workedExamples: [
        {
          problem: 'Find the derivative of f(x) = (3x² - 5)⁴.',
          solution: 'Apply Chain Rule: let u = 3x² - 5. du/dx = 6x. dy/dx = 4(3x² - 5)³ · (6x) = 24x(3x² - 5)³.',
          takeaway: 'Never forget to multiply by the inner derivative (6x).'
        }
      ],
      commonMistakes: [
        'Forgetting the chain rule on composite functions: writing derivative of sin(2x) as cos(2x) instead of 2cos(2x).',
        'Confusing stationary points (f\'(x) = 0) with points where the function equals zero (f(x) = 0).',
        'Applying the power rule to exponential functions like 2ˣ instead of using natural logarithms.'
      ]
    },
    videos: [
      {
        id: 'v-fmath-c1',
        embedId: '9vKqVkMQHKk',
        title: 'The Essence of Calculus: Chapter 1',
        channel: '3Blue1Brown',
        duration: '17:04',
        description: 'Visual geometric introduction to derivatives, limits, and finding areas under curves.'
      },
      {
        id: 'v-fmath-c2',
        embedId: 'S0_qX4VFYMQ',
        title: 'The Paradox of the Derivative',
        channel: '3Blue1Brown',
        duration: '15:20',
        description: 'How instantaneous rate of change is made mathematically rigorous with limits.'
      },
      {
        id: 'v-fmath-c3',
        embedId: 'YG15m2VwSjA',
        title: 'Derivative Rules: Power, Product, Quotient, Chain Rule',
        channel: 'The Organic Chemistry Tutor',
        duration: '21:10',
        description: 'Practice problems solving all essential differentiation rules with step-by-step solutions.'
      }
    ],
    quizQuestions: [
      {
        id: 'fmcq1',
        text: 'What is the derivative of f(x) = 5x³ - 4x² + 7x - 9?',
        options: ['15x² - 8x + 7', '15x² - 8x', '5x² - 4x + 7', '15x³ - 8x² + 7'],
        correctIndex: 0,
        explanation: 'Power rule: 3·5x² - 2·4x + 7 = 15x² - 8x + 7. Derivative of constant -9 is 0.',
        topicTag: 'Power Rule'
      },
      {
        id: 'fmcq2',
        text: 'What is the derivative of y = sin(3x)?',
        options: ['3cos(3x)', 'cos(3x)', '-3cos(3x)', '3sin(3x)'],
        correctIndex: 0,
        explanation: 'Chain rule: derivative of sin(u) is cos(u) · du/dx = cos(3x) · 3 = 3cos(3x).',
        topicTag: 'Chain Rule'
      },
      {
        id: 'fmcq3',
        text: 'If f\'(x) = 0 and f\'\'(x) = -6 at x = 2, what type of point is x = 2?',
        options: ['A local maximum', 'A local minimum', 'A point of inflection', 'An asymptote'],
        correctIndex: 0,
        explanation: 'When f\'(x) = 0 and f\'\'(x) < 0, the curve is concave down, confirming a local maximum.',
        topicTag: 'Second Derivative Test'
      },
      {
        id: 'fmcq4',
        text: 'What is the slope of the tangent line to y = x² at the point (3, 9)?',
        options: ['6', '9', '3', '18'],
        correctIndex: 0,
        explanation: 'dy/dx = 2x. At x = 3, slope = 2(3) = 6.',
        topicTag: 'Tangent Slope'
      },
      {
        id: 'fmcq5',
        text: 'What is the derivative of e^(4x)?',
        options: ['4e^(4x)', 'e^(4x)', '4xe^(4x)', 'e^(4x)/4'],
        correctIndex: 0,
        explanation: 'd/dx[e^(kx)] = k · e^(kx), so d/dx[e^(4x)] = 4e^(4x).',
        topicTag: 'Exponential Derivative'
      }
    ]
  },

  // ================= FURTHER MATHEMATICS: TOPIC 3 =================
  {
    id: 'fmath-vectors-spaces',
    subjectId: 'further-math',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Vectors in 2D & 3D, Dot Product & Orthogonality',
    subtitle: 'Magnitude, unit vectors, scalar product, angle between vectors, and projections',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Vectors have both magnitude and direction. In 3D Cartesian coordinates, a vector is expressed as v = ai + bj + ck. The dot product v · w produces a scalar that reveals geometric angles and perpendicularity.',
      keyConcepts: [
        {
          title: 'Magnitude of a 3D Vector',
          explanation: '|v| = √(a² + b² + c²). A unit vector in the direction of v is found by dividing v by its magnitude: v / |v|.'
        },
        {
          title: 'The Dot / Scalar Product',
          explanation: 'v · w = v₁w₁ + v₂w₂ + v₃w₃ = |v||w|cos(θ). If v · w = 0 for non-zero vectors, the vectors are orthogonal (perpendicular).'
        },
        {
          title: 'Vector Projection',
          explanation: 'The scalar projection of a onto b is (a · b) / |b|; the vector projection multiplies this scalar by the unit vector b / |b|.'
        }
      ],
      workedExamples: [
        {
          problem: 'Find the dot product of v = 2i + 3j - k and w = 4i - j + 2k. Are they perpendicular?',
          solution: 'v · w = (2)(4) + (3)(-1) + (-1)(2) = 8 - 3 - 2 = 3. Since the dot product is 3 (not 0), they are not perpendicular.',
          takeaway: 'Two non-zero vectors are perpendicular if and only if their dot product equals zero.'
        }
      ],
      commonMistakes: [
        'Confusing dot product (which yields a scalar) with cross product (which yields a vector).',
        'Adding coordinate components without squaring when calculating vector magnitude.',
        'Neglecting the negative signs in component multiplication.'
      ]
    },
    videos: [
      {
        id: 'v-fmath-v1',
        embedId: 'fNk_zzaMoSs',
        title: 'Dot Products and Duality',
        channel: '3Blue1Brown',
        duration: '14:32',
        description: 'Visual geometric understanding of why the dot product equals projection times length.'
      },
      {
        id: 'v-fmath-v2',
        embedId: 'eu6i7WJeinw',
        title: 'Cross Products in 3D Space',
        channel: '3Blue1Brown',
        duration: '11:40',
        description: 'Right-hand rule, perpendicular vectors, and the area of parallelograms.'
      },
      {
        id: 'v-fmath-v3',
        embedId: '0i9OCgW8OCg',
        title: 'Vectors in 3D: Magnitude, Angles & Dot Products',
        channel: 'The Organic Chemistry Tutor',
        duration: '16:25',
        description: 'Worked examples calculating angles between 3D vectors and unit vector conversions.'
      }
    ],
    quizQuestions: [
      {
        id: 'fmvq1',
        text: 'What is the magnitude of the vector v = 3i - 4j + 12k?',
        options: ['13', '19', '169', '11'],
        correctIndex: 0,
        explanation: '|v| = √(3² + (-4)² + 12²) = √(9 + 16 + 144) = √169 = 13.',
        topicTag: 'Vector Magnitude'
      },
      {
        id: 'fmvq2',
        text: 'If two non-zero vectors u and v have u · v = 0, what is the angle between them?',
        options: ['90° (π/2 radians)', '0°', '180°', '45°'],
        correctIndex: 0,
        explanation: 'u · v = |u||v|cos(θ) = 0 => cos(θ) = 0 => θ = 90° (orthogonal).',
        topicTag: 'Orthogonality'
      },
      {
        id: 'fmvq3',
        text: 'What is the dot product of a = (1, 5) and b = (3, -2)?',
        options: ['-7', '13', '7', '-13'],
        correctIndex: 0,
        explanation: '(1)(3) + (5)(-2) = 3 - 10 = -7.',
        topicTag: 'Dot Product'
      },
      {
        id: 'fmvq4',
        text: 'What is a vector with magnitude equal to 1 called?',
        options: ['Unit vector', 'Zero vector', 'Scalar vector', 'Normal vector'],
        correctIndex: 0,
        explanation: 'A vector whose length |v| = 1 is defined as a unit vector.',
        topicTag: 'Unit Vector'
      },
      {
        id: 'fmvq5',
        text: 'What is the value of i · i for standard Cartesian basis vectors?',
        options: ['1', '0', 'i', '-1'],
        correctIndex: 0,
        explanation: '|i||i|cos(0°) = 1 · 1 · 1 = 1.',
        topicTag: 'Basis Dot Product'
      }
    ]
  }
];
