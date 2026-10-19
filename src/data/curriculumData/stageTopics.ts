import { SubjectId } from '../../types';

export interface StageTopicMeta {
  title: string;
  subtitle: string;
  summary: string;
  keyConcepts: Array<{ title: string; explanation: string }>;
  exampleProblem: string;
  exampleSolution: string;
  exampleTakeaway: string;
  commonMistakes: string[];
  questions: Array<{
    text: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    topicTag: string;
  }>;
}

export const STAGE_CURRICULUM_DATA: Partial<
  Record<
    SubjectId,
    {
      primary?: StageTopicMeta[];
      junior?: StageTopicMeta[];
      senior?: StageTopicMeta[];
    }
  >
> = {
  'math': {
    primary: [
      {
        title: 'Number Base, Place Value & Counting Patterns',
        subtitle: 'Units, tens, hundreds, thousands, expanded notation, and skip counting',
        summary: 'Every number has value based on the position of its digits. In base ten, each column to the left is 10 times larger: units (1s), tens (10s), hundreds (100s), and thousands (1,000s).',
        keyConcepts: [
          { title: 'Base Ten Columns', explanation: 'In the number 347, the 3 is worth 300, the 4 is worth 40, and the 7 is worth 7.' },
          { title: 'Expanded Notation', explanation: 'Breaking numbers apart into sums of their place values: 582 = 500 + 80 + 2.' },
          { title: 'Skip Counting', explanation: 'Counting in intervals of 2, 5, 10, or 100 builds multiplication foundations.' }
        ],
        exampleProblem: 'What is the place value of digit 6 in the number 4,682?',
        exampleSolution: 'The digit 2 is in the units place, 8 is in the tens place, 6 is in the hundreds place (worth 600), and 4 is in the thousands place.',
        exampleTakeaway: 'Always read place values from right to left starting from units.',
        commonMistakes: [
          'Confusing face value with place value (thinking 6 is just six instead of six hundred).',
          'Omitting zero as a placeholder in numbers like 504.'
        ],
        questions: [
          {
            text: 'What is the value of the digit 7 in the number 3,745?',
            options: ['700 (seven hundred)', '70 (seventy)', '7 (seven)', '7,000 (seven thousand)'],
            correctIndex: 0,
            explanation: 'The 7 is in the hundreds column, so its value is 700.',
            topicTag: 'Place Value'
          },
          {
            text: 'Which is the expanded form of 528?',
            options: ['500 + 20 + 8', '50 + 20 + 8', '500 + 2 + 8', '5 + 2 + 8'],
            correctIndex: 0,
            explanation: '500 + 20 + 8 equals 528.',
            topicTag: 'Expanded Form'
          },
          {
            text: 'If you skip count by 5s starting from 15, what are the next three numbers?',
            options: ['20, 25, 30', '16, 17, 18', '25, 35, 45', '10, 5, 0'],
            correctIndex: 0,
            explanation: 'Adding 5 repeatedly: 15 + 5 = 20, 20 + 5 = 25, 25 + 5 = 30.',
            topicTag: 'Skip Counting'
          },
          {
            text: 'What is the largest 3-digit number you can make using digits 4, 9, 2 once?',
            options: ['942', '924', '492', '294'],
            correctIndex: 0,
            explanation: 'Place the largest digit in the highest place value: 9 in hundreds, 4 in tens, 2 in units -> 942.',
            topicTag: 'Ordering Digits'
          },
          {
            text: 'What number comes immediately after 999?',
            options: ['1,000 (one thousand)', '1,001', '990', '10,000'],
            correctIndex: 0,
            explanation: '999 + 1 = 1,000.',
            topicTag: 'Sequences'
          }
        ]
      },
      {
        title: 'Addition, Subtraction & Times Tables',
        subtitle: 'Mental math strategies, regrouping, carrying, borrowing, and times tables up to 10×10',
        summary: 'Addition combines groups together while subtraction finds the difference. When numbers in a column exceed 9, we regroup (carry) to the next place value.',
        keyConcepts: [
          { title: 'Regrouping in Addition', explanation: 'When 8 + 5 = 13, write 3 in the units place and carry 1 ten to the tens place.' },
          { title: 'Borrowing in Subtraction', explanation: 'When the top digit is smaller than the bottom digit, borrow 1 ten from the column to the left.' },
          { title: 'Multiplication as Repeated Addition', explanation: '4 × 6 means 4 groups of 6, which is 6 + 6 + 6 + 6 = 24.' }
        ],
        exampleProblem: 'Calculate 347 + 285 with column addition.',
        exampleSolution: 'Units: 7 + 5 = 12 (write 2, carry 1). Tens: 4 + 8 + 1 = 13 (write 3, carry 1). Hundreds: 3 + 2 + 1 = 6. Total = 632.',
        exampleTakeaway: 'Always add the carried digit in the next column.',
        commonMistakes: [
          'Forgetting to add the carried digit.',
          'Subtracting the smaller number from the larger number regardless of which is on top.'
        ],
        questions: [
          {
            text: 'What is 38 + 45?',
            options: ['83', '73', '82', '78'],
            correctIndex: 0,
            explanation: '8 + 5 = 13; 30 + 40 + 10 = 80; 80 + 3 = 83.',
            topicTag: 'Addition'
          },
          {
            text: 'What is 72 - 38?',
            options: ['34', '44', '46', '36'],
            correctIndex: 0,
            explanation: 'Borrow 1 ten from 7 (becomes 6): 12 - 8 = 4. Then 6 - 3 = 3. Result is 34.',
            topicTag: 'Subtraction'
          },
          {
            text: 'What is 7 × 8?',
            options: ['56', '54', '48', '64'],
            correctIndex: 0,
            explanation: '7 times 8 equals 56.',
            topicTag: 'Times Tables'
          },
          {
            text: 'A farmer has 24 apples and packs them equally into 4 baskets. How many in each?',
            options: ['6 apples', '4 apples', '8 apples', '5 apples'],
            correctIndex: 0,
            explanation: '24 ÷ 4 = 6 apples per basket.',
            topicTag: 'Division'
          },
          {
            text: 'Which multiplication fact gives the same answer as 6 × 9?',
            options: ['9 × 6', '6 + 9', '9 ÷ 6', '9 - 6'],
            correctIndex: 0,
            explanation: 'Multiplication is commutative: 6 × 9 = 9 × 6 = 54.',
            topicTag: 'Properties'
          }
        ]
      },
      {
        title: 'Simple Fractions, Decimals & Everyday Shapes',
        subtitle: 'Halves, quarters, thirds, 2D/3D shapes, and perimeter basics',
        summary: 'A fraction represents an equal part of a whole. The numerator (top) shows how many parts you have, and the denominator (bottom) shows total equal parts.',
        keyConcepts: [
          { title: 'Numerator and Denominator', explanation: 'In 3/4, 3 is the parts taken and 4 is the total equal parts in the whole.' },
          { title: 'Comparing Fractions', explanation: '1/2 is larger than 1/4 because cutting into fewer pieces makes each piece bigger.' },
          { title: '2D Shapes and Perimeter', explanation: 'Perimeter is the total distance around the outside border of any flat 2D shape.' }
        ],
        exampleProblem: 'A rectangular garden has length 6 meters and width 4 meters. What is its perimeter?',
        exampleSolution: 'Perimeter = 6 + 4 + 6 + 4 = 20 meters (or 2 × (6 + 4) = 20 m).',
        exampleTakeaway: 'Perimeter measures the distance around the edge, not the space inside.',
        commonMistakes: [
          'Thinking 1/4 is bigger than 1/2 because 4 is bigger than 2.',
          'Confusing perimeter (border distance) with area (inside surface).'
        ],
        questions: [
          {
            text: 'If a pizza is sliced into 8 equal slices and you eat 3, what fraction did you eat?',
            options: ['3/8', '5/8', '3/5', '1/3'],
            correctIndex: 0,
            explanation: '3 parts eaten out of 8 total slices = 3/8.',
            topicTag: 'Fractions'
          },
          {
            text: 'Which fraction is equivalent to one half (1/2)?',
            options: ['2/4', '1/3', '3/8', '2/5'],
            correctIndex: 0,
            explanation: '2/4 simplifies to 1/2 when dividing top and bottom by 2.',
            topicTag: 'Equivalent Fractions'
          },
          {
            text: 'How many sides does a regular pentagon have?',
            options: ['5 sides', '6 sides', '4 sides', '8 sides'],
            correctIndex: 0,
            explanation: 'Penta means 5; a pentagon has 5 straight sides.',
            topicTag: '2D Shapes'
          },
          {
            text: 'What is the perimeter of a square with side length 5 cm?',
            options: ['20 cm', '25 cm', '10 cm', '15 cm'],
            correctIndex: 0,
            explanation: 'A square has 4 equal sides: 4 × 5 cm = 20 cm.',
            topicTag: 'Perimeter'
          },
          {
            text: 'What decimal represents one half (1/2)?',
            options: ['0.5', '0.2', '0.25', '0.05'],
            correctIndex: 0,
            explanation: '1 divided by 2 is 0.5.',
            topicTag: 'Decimals'
          }
        ]
      }
    ],
    junior: [
      {
        title: 'Directed Numbers, Integers & The Number Line',
        subtitle: 'Negative numbers, absolute value, and integer operations',
        summary: 'Integers include positive numbers, negative numbers, and zero. Adding a negative is the same as subtracting, and multiplying two negatives produces a positive.',
        keyConcepts: [
          { title: 'The Number Line', explanation: 'Numbers to the right of 0 are positive; numbers to the left of 0 are negative.' },
          { title: 'Multiplying Signs', explanation: '(+) × (+) = (+); (-) × (-) = (+); (+) × (-) = (-).' },
          { title: 'Absolute Value', explanation: '|x| represents distance from zero regardless of direction, so |-7| = 7.' }
        ],
        exampleProblem: 'Evaluate: -12 + (-8) - (-15)',
        exampleSolution: '-12 + (-8) = -20. Then -20 - (-15) = -20 + 15 = -5.',
        exampleTakeaway: 'Subtracting a negative turns into addition: -(-a) = +a.',
        commonMistakes: [
          'Thinking -8 is greater than -3 (on the number line, -3 is to the right of -8).',
          'Forgetting that two negative signs multiplied or subtracted make a positive.'
        ],
        questions: [
          {
            text: 'What is -7 + (-9)?',
            options: ['-16', '16', '-2', '2'],
            correctIndex: 0,
            explanation: 'Adding two negative values moves further left: -7 - 9 = -16.',
            topicTag: 'Adding Integers'
          },
          {
            text: 'What is (-6) × (-4)?',
            options: ['+24', '-24', '-10', '+10'],
            correctIndex: 0,
            explanation: 'Negative times negative is positive: (-6) × (-4) = 24.',
            topicTag: 'Multiplying Signs'
          },
          {
            text: 'Which number is the smallest?',
            options: ['-15', '-4', '0', '3'],
            correctIndex: 0,
            explanation: '-15 is farthest to the left on the number line.',
            topicTag: 'Comparing Integers'
          },
          {
            text: 'Evaluate: 18 - (-7)',
            options: ['25', '11', '-11', '-25'],
            correctIndex: 0,
            explanation: 'Subtracting a negative adds: 18 + 7 = 25.',
            topicTag: 'Subtracting Negatives'
          },
          {
            text: 'The temperature was -3°C and dropped by 5°C. What is the new temperature?',
            options: ['-8°C', '2°C', '-2°C', '8°C'],
            correctIndex: 0,
            explanation: '-3 - 5 = -8°C.',
            topicTag: 'Word Problems'
          }
        ]
      },
      {
        title: 'Fractions, Decimals, Ratios & Percentages',
        subtitle: 'Equivalent fractions, ratio dividing, percentage discounts, and simple interest formula',
        summary: 'Fractions, decimals, and percentages are different ways of expressing proportional quantities. A ratio compares two parts of a whole.',
        keyConcepts: [
          { title: 'Converting Percentages', explanation: 'To convert a percentage to a decimal, divide by 100: 35% = 0.35.' },
          { title: 'Dividing into a Ratio', explanation: 'Add the ratio terms to find total parts, divide the total quantity by total parts, then multiply by each term.' },
          { title: 'Simple Interest', explanation: 'I = (P × R × T) / 100, where P is Principal, R is Rate (%), and T is Time in years.' }
        ],
        exampleProblem: 'Divide $120 between Ama and Kojo in the ratio 3:2.',
        exampleSolution: 'Total parts = 3 + 2 = 5 parts. 1 part = $120 / 5 = $24. Ama gets 3 × 24 = $72; Kojo gets 2 × 24 = $48.',
        exampleTakeaway: 'Always verify that the sum of the parts equals the original total: 72 + 48 = 120.',
        commonMistakes: [
          'Dividing by the ratio number directly instead of the sum of the ratio parts.',
          'Forgetting to convert percentages to decimals when doing calculations.'
        ],
        questions: [
          {
            text: 'What is 25% of $80?',
            options: ['$20', '$25', '$15', '$30'],
            correctIndex: 0,
            explanation: '25% is 1/4 of $80 = $20.',
            topicTag: 'Percentages'
          },
          {
            text: 'Divide 40 candies in the ratio 1:3. How many does the second person receive?',
            options: ['30 candies', '10 candies', '20 candies', '25 candies'],
            correctIndex: 0,
            explanation: 'Total parts = 4. 1 part = 40/4 = 10. Second person gets 3 × 10 = 30.',
            topicTag: 'Ratios'
          },
          {
            text: 'What is 3/5 expressed as a percentage?',
            options: ['60%', '35%', '50%', '75%'],
            correctIndex: 0,
            explanation: '(3 / 5) × 100% = 60%.',
            topicTag: 'Fraction to Percent'
          },
          {
            text: 'Calculate the simple interest on $500 invested for 2 years at 5% per annum.',
            options: ['$50', '$25', '$100', '$75'],
            correctIndex: 0,
            explanation: 'I = (P × R × T)/100 = (500 × 5 × 2)/100 = 5000/100 = $50.',
            topicTag: 'Simple Interest'
          },
          {
            text: 'A shirt priced at $40 is discounted by 15%. What is the sale price?',
            options: ['$34', '$32', '$36', '$35'],
            correctIndex: 0,
            explanation: 'Discount = 0.15 × 40 = $6. Sale price = 40 - 6 = $34.',
            topicTag: 'Discount'
          }
        ]
      },
      {
        title: 'Introduction to Algebraic Expressions & Linear Equations',
        subtitle: 'Variables, expanding single brackets, collecting like terms, and solving 1-step and 2-step equations',
        summary: 'Algebra uses letters as placeholders for unknown quantities. Whatever mathematical operation is performed on one side of an equals sign must be balanced on the other.',
        keyConcepts: [
          { title: 'Collecting Like Terms', explanation: 'Combine terms with identical variable powers: 3x + 5x = 8x, but 3x + 2y cannot be combined.' },
          { title: 'Distributive Law', explanation: 'Multiply the term outside the bracket by every term inside: a(b + c) = ab + ac.' },
          { title: 'Balancing Equations', explanation: 'Isolate the unknown variable using inverse operations (addition cancels subtraction, multiplication cancels division).' }
        ],
        exampleProblem: 'Solve for x: 3x + 7 = 22',
        exampleSolution: 'Subtract 7 from both sides: 3x = 15. Divide both sides by 3: x = 5.',
        exampleTakeaway: 'Always substitute your solution back into the original equation to check: 3(5) + 7 = 15 + 7 = 22.',
        commonMistakes: [
          'Combining unlike terms (e.g. thinking 4x + 3 = 7x).',
          'Applying an operation to only one side of the equation.'
        ],
        questions: [
          {
            text: 'Simplify the expression: 4x + 7 + 2x - 3',
            options: ['6x + 4', '6x + 10', '8x + 4', '7x'],
            correctIndex: 0,
            explanation: 'Combine x terms (4x + 2x = 6x) and constant terms (7 - 3 = 4) -> 6x + 4.',
            topicTag: 'Like Terms'
          },
          {
            text: 'Expand: 3(2x - 5)',
            options: ['6x - 15', '6x - 5', '5x - 15', '6x + 15'],
            correctIndex: 0,
            explanation: '3 × 2x = 6x and 3 × (-5) = -15 -> 6x - 15.',
            topicTag: 'Expanding Brackets'
          },
          {
            text: 'Solve: 5x = 35',
            options: ['x = 7', 'x = 6', 'x = 8', 'x = 30'],
            correctIndex: 0,
            explanation: 'Divide both sides by 5: x = 35 / 5 = 7.',
            topicTag: 'One-step Equations'
          },
          {
            text: 'Solve for y: 2y - 4 = 10',
            options: ['y = 7', 'y = 3', 'y = 6', 'y = 8'],
            correctIndex: 0,
            explanation: 'Add 4 to both sides: 2y = 14. Divide by 2: y = 7.',
            topicTag: 'Two-step Equations'
          },
          {
            text: 'If x = 4, what is the value of 3x² - 5?',
            options: ['43', '19', '38', '48'],
            correctIndex: 0,
            explanation: '3(4)² - 5 = 3(16) - 5 = 48 - 5 = 43.',
            topicTag: 'Substitution'
          }
        ]
      }
    ],
    senior: [] // Senior math is already curated in mathTopics.ts
  },

  'biology': {
    primary: [
      {
        title: 'Living and Non-Living Things & Habitats',
        subtitle: 'Characteristics of living things: feeding, breathing, moving, growing, and reproduction',
        summary: 'All things in our world can be sorted into living or non-living things. Living organisms grow, breathe, need food and water, react to their environment, and reproduce.',
        keyConcepts: [
          { title: 'The Seven Life Processes (MRS GREN)', explanation: 'Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.' },
          { title: 'Living vs Non-Living', explanation: 'Animals and plants are alive; rocks, plastic toys, and water are non-living.' },
          { title: 'Habitats', explanation: 'A habitat is the natural home or environment where an organism finds food, water, and shelter.' }
        ],
        exampleProblem: 'Is a wooden desk living or non-living?',
        exampleSolution: 'A desk is made from wood (which once came from a tree), but the desk itself cannot grow, breathe, or reproduce. Therefore it is non-living.',
        exampleTakeaway: 'An object must exhibit all life processes to be classified as living.',
        commonMistakes: [
          'Thinking clouds or fire are living because they move and grow.',
          'Thinking plants are not alive because they do not walk around.'
        ],
        questions: [
          {
            text: 'Which of the following is a living thing?',
            options: ['A mango tree', 'A river stone', 'A bicycle', 'A plastic ruler'],
            correctIndex: 0,
            explanation: 'A mango tree breathes, grows, needs nutrients, and reproduces.',
            topicTag: 'Living Things'
          },
          {
            text: 'What do all animals need to survive?',
            options: ['Food, clean water, and oxygen', 'Electricity and sunlight only', 'Gasoline and soil', 'Sugar and candy'],
            correctIndex: 0,
            explanation: 'Animals require food for energy, water for bodily functions, and oxygen for respiration.',
            topicTag: 'Survival Needs'
          },
          {
            text: 'What is the natural home of a fish called?',
            options: ['An aquatic habitat (water)', 'A desert habitat', 'A canopy habitat', 'A burrow'],
            correctIndex: 0,
            explanation: 'Fish live in aquatic habitats such as rivers, lakes, and oceans.',
            topicTag: 'Habitats'
          },
          {
            text: 'How do plants make their own food?',
            options: ['Using sunlight, water, and air (photosynthesis)', 'By hunting small insects only', 'By drinking milk', 'By eating dirt'],
            correctIndex: 0,
            explanation: 'Green plants produce their food using sunlight, water, and carbon dioxide.',
            topicTag: 'Plant Nutrition'
          },
          {
            text: 'Which characteristic shows that a puppy is a living thing?',
            options: ['It grows into an adult dog and needs food', 'It stays the exact same size forever', 'It runs on lithium batteries', 'It is made of metal'],
            correctIndex: 0,
            explanation: 'Growth and nutritional need are essential life processes.',
            topicTag: 'Life Processes'
          }
        ]
      },
      {
        title: 'Plant Life: Seeds, Roots, Stems & Leaves',
        subtitle: 'How seeds sprout, photosynthesis basics, and parts of a flowering plant',
        summary: 'Plants are remarkable living producers that capture sunlight. Roots anchor the plant and absorb water, stems transport nutrients, and green leaves make food.',
        keyConcepts: [
          { title: 'Roots', explanation: 'Anchor the plant firmly in the soil and absorb water and vital minerals.' },
          { title: 'Stem', explanation: 'Holds the plant upright toward the sun and carries water up from the roots.' },
          { title: 'Leaves & Sunlight', explanation: 'Contain green chlorophyll to absorb sunlight for making sugar food.' }
        ],
        exampleProblem: 'What three things does a bean seed need to germinate (sprout)?',
        exampleSolution: 'Seeds need Water, Oxygen (air), and Warmth (suitable temperature). They do not need soil to begin sprouting!',
        exampleTakeaway: 'Remember WOW: Water, Oxygen, Warmth for germination.',
        commonMistakes: [
          'Thinking seeds must have soil to sprout (they sprout on wet cotton wool!).',
          'Thinking plant roots only exist to hold the plant up.'
        ],
        questions: [
          {
            text: 'Which part of a plant absorbs water and minerals from the soil?',
            options: ['The roots', 'The petals', 'The stem', 'The fruit'],
            correctIndex: 0,
            explanation: 'Roots branch into the soil to absorb moisture and nutrients.',
            topicTag: 'Plant Parts'
          },
          {
            text: 'What gives leaves their green color and traps sunlight?',
            options: ['Chlorophyll', 'Pollen', 'Bark', 'Nectar'],
            correctIndex: 0,
            explanation: 'Chlorophyll is the green pigment in plant leaves that absorbs light energy.',
            topicTag: 'Chlorophyll'
          },
          {
            text: 'What is the process of a seed beginning to grow into a young plant called?',
            options: ['Germination', 'Evaporation', 'Pollination', 'Respiration'],
            correctIndex: 0,
            explanation: 'Germination is the sprouting of a seedling from a seed.',
            topicTag: 'Germination'
          },
          {
            text: 'Which plant part produces seeds and attracts bees with colorful petals?',
            options: ['The flower', 'The root', 'The bark', 'The taproot'],
            correctIndex: 0,
            explanation: 'Flowers contain reproductive organs and attract pollinators.',
            topicTag: 'Flowers'
          },
          {
            text: 'What gas do green plants release into the air that animals breathe in?',
            options: ['Oxygen', 'Carbon dioxide', 'Methane', 'Helium'],
            correctIndex: 0,
            explanation: 'Plants release oxygen as a byproduct of photosynthesis.',
            topicTag: 'Photosynthesis'
          }
        ]
      },
      {
        title: 'The Five Human Senses & Personal Hygiene',
        subtitle: 'Sight, hearing, smell, taste, touch, clean water, and germ prevention',
        summary: 'Our five sense organs connect our brain to the world around us. Keeping our body clean by washing hands with soap prevents illness and stops germs from spreading.',
        keyConcepts: [
          { title: 'The Five Senses', explanation: 'Eyes (sight), Ears (hearing), Nose (smell), Tongue (taste), Skin (touch).' },
          { title: 'Germs & Bacteria', explanation: 'Microscopic bugs that can make us sick if transferred into our mouth, nose, or eyes.' },
          { title: 'Handwashing with Soap', explanation: 'Washing hands for 20 seconds breaks down the oily coat of germs and rinses them away.' }
        ],
        exampleProblem: 'Why is it important to wash hands before eating food?',
        exampleSolution: 'Our hands touch many surfaces with unseen germs. Washing with soap removes these germs so they are not swallowed with our food.',
        exampleTakeaway: 'Always lather with soap for at least 20 seconds before rinsing.',
        commonMistakes: [
          'Thinking hands are clean just because they look clean without soap.',
          'Thinking teeth only need to be brushed once a week.'
        ],
        questions: [
          {
            text: 'Which sense organ detects tastes like sweet, sour, salty, and bitter?',
            options: ['The tongue', 'The ear', 'The nose', 'The skin'],
            correctIndex: 0,
            explanation: 'Taste buds on the tongue detect different chemical flavors in food.',
            topicTag: 'Sense of Taste'
          },
          {
            text: 'For how long should you scrub your hands with soap and water to remove germs?',
            options: ['At least 20 seconds', '2 seconds', '1 minute without soap', 'Only when visibly muddy'],
            correctIndex: 0,
            explanation: 'Health authorities recommend scrubbing with soap for at least 20 seconds.',
            topicTag: 'Hygiene'
          },
          {
            text: 'Which body organ covers and protects your entire body and gives the sense of touch?',
            options: ['The skin', 'The liver', 'The lungs', 'The skeleton'],
            correctIndex: 0,
            explanation: 'The skin is the largest organ and provides the sense of touch, pain, and temperature.',
            topicTag: 'Skin & Touch'
          },
          {
            text: 'Why do we brush our teeth every morning and night?',
            options: ['To remove plaque and prevent cavities and tooth decay', 'To change our tooth color to blue', 'To make our tongue disappear', 'To stop breathing'],
            correctIndex: 0,
            explanation: 'Brushing removes food particles and bacteria that cause plaque and tooth decay.',
            topicTag: 'Dental Health'
          },
          {
            text: 'What should you do when you sneeze or cough?',
            options: ['Cover your mouth and nose with your elbow or tissue', 'Sneeze directly at your classmates', 'Cover your eyes only', 'Hold your breath'],
            correctIndex: 0,
            explanation: 'Sneezing into an elbow or tissue prevents droplets from spreading germs into the air.',
            topicTag: 'Germ Prevention'
          }
        ]
      }
    ],
    junior: [
      {
        title: 'Plant & Animal Cells: Organelles & Microscopic Structure',
        subtitle: 'Cell wall, cell membrane, cytoplasm, nucleus, vacuole, chloroplasts, and mitochondria',
        summary: 'All living organisms are composed of microscopic cells. Plant and animal cells share organelles like the nucleus and cell membrane, but plant cells possess a rigid cell wall, large central vacuole, and chloroplasts.',
        keyConcepts: [
          { title: 'The Nucleus', explanation: 'The control center of the cell that contains genetic material (DNA).' },
          { title: 'Mitochondria', explanation: 'The powerhouses of the cell where cellular aerobic respiration produces energy.' },
          { title: 'Plant-Only Organelles', explanation: 'Cellulose cell wall (structural rigidity) and chloroplasts (photosynthesis).' }
        ],
        exampleProblem: 'Under a microscope, you observe a cell with a cell wall and green chloroplasts. Is it a plant or animal cell?',
        exampleSolution: 'It is a plant cell. Animal cells never have cell walls or chloroplasts.',
        exampleTakeaway: 'Cell walls and chloroplasts are unique diagnostic features of plant cells.',
        commonMistakes: [
          'Confusing the cell membrane (flexible outer layer) with the rigid outer cell wall.',
          'Thinking animal cells have chloroplasts.'
        ],
        questions: [
          {
            text: 'Which organelle is known as the control center of the cell and contains DNA?',
            options: ['The nucleus', 'The ribosome', 'The cytoplasm', 'The vacuole'],
            correctIndex: 0,
            explanation: 'The nucleus controls cell activities and stores genetic instructions.',
            topicTag: 'Nucleus'
          },
          {
            text: 'Which organelle is found in plant cells but NOT in animal cells?',
            options: ['Cell wall and chloroplasts', 'Cell membrane and nucleus', 'Mitochondria and cytoplasm', 'Ribosomes and vacuoles'],
            correctIndex: 0,
            explanation: 'Plant cells have a cellulose cell wall and photosynthetic chloroplasts; animal cells do not.',
            topicTag: 'Plant vs Animal Cells'
          },
          {
            text: 'What is the function of mitochondria in living cells?',
            options: ['Releasing energy through cellular respiration', 'Storing excess salt crystals', 'Absorbing green sunlight', 'Making the cell wall rigid'],
            correctIndex: 0,
            explanation: 'Mitochondria generate cellular ATP energy from glucose and oxygen.',
            topicTag: 'Mitochondria'
          },
          {
            text: 'What is the jelly-like substance where most chemical reactions take place inside the cell?',
            options: ['Cytoplasm', 'Cell wall', 'Nuclear pore', 'Chlorophyll'],
            correctIndex: 0,
            explanation: 'The cytoplasm is the fluid matrix that suspends organelles and hosts enzymatic reactions.',
            topicTag: 'Cytoplasm'
          },
          {
            text: 'What property does the cell membrane have that allows only certain substances to pass through?',
            options: ['Selectively permeable (semi-permeable)', 'Completely impermeable', 'Solid and rigid', 'Magnetic'],
            correctIndex: 0,
            explanation: 'The cell membrane regulates molecular transit via selective permeability.',
            topicTag: 'Cell Membrane'
          }
        ]
      },
      {
        title: 'Human Digestive, Circulatory & Respiratory Systems',
        subtitle: 'Mouth to colon digestion, heart chambers, arteries, veins, and gas exchange in alveoli',
        summary: 'Major organ systems collaborate to sustain human life. The digestive system breaks down food, the circulatory system pumps nutrient-rich blood via the heart, and the respiratory system exchanges oxygen and carbon dioxide.',
        keyConcepts: [
          { title: 'The Four Heart Chambers', explanation: 'Right atrium and ventricle pump deoxygenated blood to lungs; left atrium and ventricle pump oxygenated blood to body.' },
          { title: 'Arteries vs Veins', explanation: 'Arteries carry high-pressure blood away from heart; veins carry blood back to heart with valves.' },
          { title: 'Alveoli Gas Exchange', explanation: 'Microscopic air sacs in lungs where oxygen diffuses into blood and carbon dioxide leaves.' }
        ],
        exampleProblem: 'Why do veins have valves while arteries do not?',
        exampleSolution: 'Blood in veins is at low pressure and often flows against gravity. Valves prevent backflow of blood.',
        exampleTakeaway: 'Valves maintain one-way circulation back to the heart.',
        commonMistakes: [
          'Thinking all arteries carry oxygenated blood (the pulmonary artery carries deoxygenated blood to the lungs!).',
          'Confusing mechanical digestion (chewing) with chemical digestion (enzymes).'
        ],
        questions: [
          {
            text: 'Which blood vessels carry blood AWAY from the heart under high pressure?',
            options: ['Arteries', 'Veins', 'Lymph vessels', 'Capillary beds'],
            correctIndex: 0,
            explanation: 'Arteries carry blood away from the heart with thick muscular walls.',
            topicTag: 'Circulatory System'
          },
          {
            text: 'In which organ does the majority of nutrient absorption into the bloodstream occur?',
            options: ['The small intestine', 'The stomach', 'The esophagus', 'The large intestine'],
            correctIndex: 0,
            explanation: 'Villi and microvilli in the small intestine absorb digested nutrients.',
            topicTag: 'Digestive System'
          },
          {
            text: 'What microscopic structures in the lungs facilitate oxygen and carbon dioxide exchange?',
            options: ['Alveoli', 'Bronchi', 'Trachea', 'Diaphragm'],
            correctIndex: 0,
            explanation: 'Alveoli provide a large, thin, moist surface area for gas diffusion.',
            topicTag: 'Respiratory System'
          },
          {
            text: 'Which chamber of the human heart pumps oxygenated blood to the entire body via the aorta?',
            options: ['Left ventricle', 'Right atrium', 'Right ventricle', 'Left atrium'],
            correctIndex: 0,
            explanation: 'The left ventricle has the thickest muscular wall to pump blood systemically.',
            topicTag: 'Heart Anatomy'
          },
          {
            text: 'What digestive enzyme in saliva begins breaking down starch into simple sugars in the mouth?',
            options: ['Amylase', 'Pepsin', 'Lipase', 'Trypsin'],
            correctIndex: 0,
            explanation: 'Salivary amylase hydrolyzes starch into maltose.',
            topicTag: 'Digestive Enzymes'
          }
        ]
      },
      {
        title: 'Ecology: Food Chains, Food Webs & Nutrient Cycles',
        subtitle: 'Producers, herbivores, carnivores, decomposers, trophic levels, and the carbon cycle',
        summary: 'Ecosystems represent the intricate web of interactions between living organisms and their physical environment. Energy flows from primary producers (plants) through trophic levels to apex predators and decomposers.',
        keyConcepts: [
          { title: 'Trophic Levels', explanation: 'Producer (1st level) -> Primary Consumer (Herbivore) -> Secondary Consumer (Carnivore) -> Apex Predator.' },
          { title: 'The 10% Energy Rule', explanation: 'Only approximately 10% of energy is transferred from one trophic level to the next; 90% is lost as heat.' },
          { title: 'Decomposers', explanation: 'Fungi and bacteria recycle dead organic matter back into soil nutrients.' }
        ],
        exampleProblem: 'If plants in an ecosystem produce 10,000 kJ of energy, how much energy is available to secondary consumers?',
        exampleSolution: 'Primary consumers receive ~10% = 1,000 kJ. Secondary consumers receive ~10% of that = 100 kJ.',
        exampleTakeaway: 'Energy decreases tenfold at each successive trophic step.',
        commonMistakes: [
          'Drawing food chain arrows backwards (arrows must point from what is eaten toward the consumer receiving the energy).',
          'Confusing a food chain (single linear path) with a food web (interconnected network).'
        ],
        questions: [
          {
            text: 'In a food chain, what do the arrows represent?',
            options: ['The direction of energy flow from organism to organism', 'Which animal is bigger in physical size', 'The direction animals walk', 'The water flow'],
            correctIndex: 0,
            explanation: 'Arrows point from the prey/producer to the consumer receiving the energy.',
            topicTag: 'Food Chains'
          },
          {
            text: 'Which organism functions as a primary producer in a grassland ecosystem?',
            options: ['Green grass', 'A zebra', 'A lion', 'A dung beetle'],
            correctIndex: 0,
            explanation: 'Grasses photosynthesize solar energy, initiating the food chain.',
            topicTag: 'Producers'
          },
          {
            text: 'What crucial role do decomposers like bacteria and fungi play in an ecosystem?',
            options: ['Breaking down dead matter and recycling nutrients to soil', 'Hunting apex predators', 'Consuming only living leaves', 'Producing oxygen at night'],
            correctIndex: 0,
            explanation: 'Decomposers recycle vital nitrogen, phosphorus, and minerals back into the soil.',
            topicTag: 'Decomposers'
          },
          {
            text: 'Why are food chains usually limited to 4 or 5 trophic levels?',
            options: ['Because about 90% of energy is lost as heat at each step', 'Because predators refuse to eat plants', 'Because animals run out of room', 'Because the sun turns off'],
            correctIndex: 0,
            explanation: 'Thermodynamic energy dissipation leaves insufficient energy to support higher trophic tiers.',
            topicTag: 'Energy Transfer'
          },
          {
            text: 'An animal that consumes both plants and other animals is classified as a what?',
            options: ['An omnivore', 'A herbivore', 'A carnivore', 'A detritivore'],
            correctIndex: 0,
            explanation: 'Omnivores consume both autotrophic plants and heterotrophic animals.',
            topicTag: 'Consumers'
          }
        ]
      }
    ],
    senior: [] // Curated in scienceTopics.ts
  },

  'chemistry': {
    primary: [
      {
        title: 'States of Matter: Solids, Liquids & Gases',
        subtitle: 'How ice melts into water and boils into steam; shape and volume',
        summary: 'Everything around us is made of matter. Matter comes in three common forms: solids (keep their shape), liquids (flow and take the container shape), and gases (spread out to fill any space).',
        keyConcepts: [
          { title: 'Solids', explanation: 'Have a fixed shape and volume (e.g. ice cubes, wooden pencils, stones).' },
          { title: 'Liquids', explanation: 'Have a fixed volume but change shape to match their container (e.g. water, milk, juice).' },
          { title: 'Gases', explanation: 'Have no fixed shape or volume; they expand to fill balloons or rooms (e.g. steam, air, oxygen).' }
        ],
        exampleProblem: 'What happens to liquid water when it is heated to 100°C?',
        exampleSolution: 'The liquid water boils and turns into water vapor (steam), which is a gas.',
        exampleTakeaway: 'Heating and cooling cause matter to change from one state to another.',
        commonMistakes: [
          'Thinking gases weigh nothing or are not real matter.',
          'Thinking melting and dissolving are the same thing.'
        ],
        questions: [
          {
            text: 'Which state of matter keeps its own fixed shape no matter what container it is placed in?',
            options: ['Solid', 'Liquid', 'Gas', 'Vapor'],
            correctIndex: 0,
            explanation: 'Solids have tightly packed particles that maintain a rigid shape.',
            topicTag: 'States of Matter'
          },
          {
            text: 'What state of matter is water vapor coming out of a boiling tea kettle?',
            options: ['Gas', 'Solid', 'Liquid', 'Plasma'],
            correctIndex: 0,
            explanation: 'Steam and water vapor are water in the gaseous state.',
            topicTag: 'Gases'
          },
          {
            text: 'What process changes liquid water into solid ice?',
            options: ['Freezing', 'Melting', 'Evaporating', 'Condensing'],
            correctIndex: 0,
            explanation: 'Freezing occurs when cooling liquid water below 0°C.',
            topicTag: 'Phase Change'
          },
          {
            text: 'Why does water spill and flow across a table when a glass tips over?',
            options: ['Because liquids can flow and change their shape', 'Because liquids are solids', 'Because it is magnetic', 'Because air pulls it'],
            correctIndex: 0,
            explanation: 'Liquids flow because their particles can slide over one another.',
            topicTag: 'Liquids'
          },
          {
            text: 'What happens to an ice cube left in warm sunshine?',
            options: ['It melts into liquid water', 'It freezes into a diamond', 'It turns into wood', 'It stays frozen forever'],
            correctIndex: 0,
            explanation: 'Heat energy causes the solid ice to melt into liquid water.',
            topicTag: 'Melting'
          }
        ]
      },
      {
        title: 'Everyday Materials & Physical Properties',
        subtitle: 'Wood, plastic, metal, glass, hardness, flexibility, and waterproofing',
        summary: 'Objects are made from different materials selected for their physical properties. Glass is transparent, metals are strong and conduct heat, wood floats, and plastics are lightweight and waterproof.',
        keyConcepts: [
          { title: 'Transparent vs Opaque', explanation: 'Transparent materials let light pass through (glass); opaque materials block light (wood).' },
          { title: 'Waterproof Materials', explanation: 'Materials like rubber and plastic keep liquids out (raincoats, boots).' },
          { title: 'Conductors vs Insulators', explanation: 'Metals let heat pass through quickly; plastic and wood insulate against heat.' }
        ],
        exampleProblem: 'Why are cooking pots made of metal while their handles are made of plastic or wood?',
        exampleSolution: 'Metal conducts heat to cook food quickly, while plastic/wood handles insulate heat so you can hold the pot safely without burning your hands.',
        exampleTakeaway: 'Materials are matched specifically to the functional needs of an object.',
        commonMistakes: [
          'Confusing the object itself (a spoon) with the material it is made of (stainless steel or wood).',
          'Thinking all heavy objects sink in water.'
        ],
        questions: [
          {
            text: 'Why are window panes made of glass instead of wood?',
            options: ['Because glass is transparent and lets sunlight in', 'Because glass is cheaper than sand', 'Because wood melts in the rain', 'Because glass is flexible'],
            correctIndex: 0,
            explanation: 'Glass is transparent, allowing daylight to enter buildings while keeping rain out.',
            topicTag: 'Material Properties'
          },
          {
            text: 'Which material is best for making a raincoat?',
            options: ['Waterproof plastic or rubber', 'Cotton paper', 'Wool knit', 'Cardboard'],
            correctIndex: 0,
            explanation: 'Waterproof plastics prevent water from penetrating through clothing.',
            topicTag: 'Waterproofing'
          },
          {
            text: 'Which of the following objects is attracted to a magnet?',
            options: ['An iron nail', 'A plastic ruler', 'A wooden block', 'A glass marble'],
            correctIndex: 0,
            explanation: 'Iron and steel are magnetic metals attracted to magnets.',
            topicTag: 'Magnetism'
          },
          {
            text: 'Why are electrical wires coated with a plastic layer on the outside?',
            options: ['Plastic is an electrical insulator that protects people from electric shocks', 'Plastic makes the wire heavier', 'Plastic conducts electricity faster', 'Plastic turns the wire into gold'],
            correctIndex: 0,
            explanation: 'Plastic insulation blocks electrical currents from escaping and causing shocks.',
            topicTag: 'Electrical Insulation'
          },
          {
            text: 'What property describes a rubber band that stretches and returns to its original shape?',
            options: ['Elasticity (flexible)', 'Brittleness', 'Transparency', 'Hardness'],
            correctIndex: 0,
            explanation: 'Elastic materials stretch under tension and spring back to their initial form.',
            topicTag: 'Elasticity'
          }
        ]
      },
      {
        title: 'Mixtures & Dissolving: Salt, Sugar & Water',
        subtitle: 'Soluble vs insoluble substances, stirring, temperature, and filtering',
        summary: 'When a solid dissolves in a liquid, it breaks into invisible particles and creates a clear solution. The solid is the solute, and the liquid is the solvent.',
        keyConcepts: [
          { title: 'Solute and Solvent', explanation: 'Salt (solute) dissolves in water (solvent) to form a saltwater solution.' },
          { title: 'Soluble vs Insoluble', explanation: 'Sugar dissolves in water (soluble); sand settles to the bottom (insoluble).' },
          { title: 'Filtration and Evaporation', explanation: 'Filters separate insoluble sand from water; evaporating water leaves pure salt crystals behind.' }
        ],
        exampleProblem: 'How can you separate a mixture of sand, salt, and water?',
        exampleSolution: 'First, pour the mixture through a paper filter (sand is trapped on the paper). Then heat the remaining saltwater until the water evaporates, leaving dry salt crystals.',
        exampleTakeaway: 'Use filtration for insoluble solids and evaporation for dissolved soluble solids.',
        commonMistakes: [
          'Thinking salt disappears forever when dissolved (it can be recovered by boiling off the water!).',
          'Confusing a cloudy suspension with a clear dissolved solution.'
        ],
        questions: [
          {
            text: 'What happens when a spoonful of table salt is stirred into a cup of warm water?',
            options: ['It dissolves completely to form a clear solution', 'It explodes', 'It turns into sand', 'It floats on top forever'],
            correctIndex: 0,
            explanation: 'Salt is soluble in water and dissociates into an invisible clear solution.',
            topicTag: 'Dissolving'
          },
          {
            text: 'A substance that CANNOT dissolve in water, such as sand, is called what?',
            options: ['Insoluble', 'Soluble', 'A solvent', 'A solution'],
            correctIndex: 0,
            explanation: 'Insoluble substances do not dissolve in a given solvent.',
            topicTag: 'Solubility'
          },
          {
            text: 'Which method can be used to separate sand from water?',
            options: ['Filtration using filter paper', 'Magnetic separation', 'Freezing', 'Blowing air'],
            correctIndex: 0,
            explanation: 'Filtration traps insoluble sand particles while allowing water to pass through.',
            topicTag: 'Filtration'
          },
          {
            text: 'How can you get the salt back after dissolving it in water?',
            options: ['Evaporate the water by heating it', 'Use a pair of tweezers', 'Filter it through a sieve', 'Freeze the water'],
            correctIndex: 0,
            explanation: 'Water evaporates into steam, leaving pure crystallized salt behind.',
            topicTag: 'Evaporation'
          },
          {
            text: 'What helps sugar dissolve faster in a glass of tea?',
            options: ['Using warm tea and stirring with a spoon', 'Using icy water and not stirring', 'Putting the cup in the freezer', 'Adding rocks'],
            correctIndex: 0,
            explanation: 'Higher temperature and mechanical stirring increase the rate of dissolving.',
            topicTag: 'Rate of Dissolving'
          }
        ]
      }
    ],
    junior: [
      {
        title: 'Elements, Compounds & Mixtures: Separation Techniques',
        subtitle: 'Filtration, evaporation, simple distillation, chromatography, and decantation',
        summary: 'Pure substances are either elements (single type of atom) or chemical compounds (chemically bonded atoms in fixed ratios). Mixtures contain substances physically mingled without chemical bonds and can be separated by physical techniques.',
        keyConcepts: [
          { title: 'Elements vs Compounds', explanation: 'Iron (Fe) and Oxygen (O₂) are elements; water (H₂O) and carbon dioxide (CO₂) are chemical compounds.' },
          { title: 'Distillation', explanation: 'Separates liquids based on differences in boiling points by heating and condensing vapor.' },
          { title: 'Chromatography', explanation: 'Separates dye pigments based on differential solubility in a mobile phase solvent.' }
        ],
        exampleProblem: 'How is pure water obtained from seawater for drinking on ships?',
        exampleSolution: 'By simple distillation: boil the seawater so water turns into steam, leaving salt behind. Then pass the steam through a cooled condenser to collect pure liquid drinking water.',
        exampleTakeaway: 'Distillation recovers both the solvent liquid and the dissolved solute.',
        commonMistakes: [
          'Confusing a compound (chemically joined with fixed ratios) with a physical mixture.',
          'Thinking distillation and filtration do the exact same thing.'
        ],
        questions: [
          {
            text: 'Which of the following is an elemental pure substance?',
            options: ['Pure Gold (Au)', 'Seawater', 'Air', 'Carbon dioxide (CO₂)'],
            correctIndex: 0,
            explanation: 'Gold is composed solely of gold atoms and cannot be chemically broken down further.',
            topicTag: 'Elements'
          },
          {
            text: 'Which separation technique relies on differences in boiling points to separate liquids?',
            options: ['Distillation', 'Filtration', 'Magnetic attraction', 'Centrifugation'],
            correctIndex: 0,
            explanation: 'Distillation vaporizes the more volatile liquid and re-condenses it.',
            topicTag: 'Distillation'
          },
          {
            text: 'What technique is used in forensics to separate colored dye pigments in ink?',
            options: ['Paper chromatography', 'Crystallization', 'Evaporation', 'Sieving'],
            correctIndex: 0,
            explanation: 'Chromatography separates pigments according to their relative solubility and capillary travel.',
            topicTag: 'Chromatography'
          },
          {
            text: 'What is water (H₂O) classified as chemically?',
            options: ['A compound', 'An element', 'A heterogeneous mixture', 'An alloy'],
            correctIndex: 0,
            explanation: 'Water is a compound made of hydrogen and oxygen atoms chemically bonded in a 2:1 ratio.',
            topicTag: 'Compounds'
          },
          {
            text: 'Which separation method is best for removing iron filings from dry sand?',
            options: ['Using a magnet', 'Adding boiling water', 'Filtration', 'Paper chromatography'],
            correctIndex: 0,
            explanation: 'Iron is ferromagnetic and will cling directly to the magnet, leaving sand behind.',
            topicTag: 'Magnetic Separation'
          }
        ]
      },
      {
        title: 'The Periodic Table: Groups, Periods & Chemical Symbols',
        subtitle: 'Metals, non-metals, alkali metals, halogens, noble gases, and atomic numbers 1–20',
        summary: 'Dmitri Mendeleev organized elements in order of atomic number into periods (horizontal rows) and groups (vertical columns). Elements in the same group share identical valence electrons and similar chemical reactions.',
        keyConcepts: [
          { title: 'Atomic Number (Z)', explanation: 'The number of protons in the nucleus of an atom, uniquely identifying the element.' },
          { title: 'Groups and Periods', explanation: 'Groups (columns 1–18) have similar chemical properties; periods (rows) indicate electron shells.' },
          { title: 'Group 1 Alkali Metals', explanation: 'Highly reactive soft metals (Li, Na, K) that react vigorously with water to form alkaline solutions.' }
        ],
        exampleProblem: 'What is the atomic number and symbol for Sodium?',
        exampleSolution: 'The symbol for Sodium is Na (from Latin Natrium) and its atomic number is 11 (meaning it has 11 protons).',
        exampleTakeaway: 'Always remember chemical symbols have a capitalized first letter and lowercase second letter.',
        commonMistakes: [
          'Writing chemical symbols with two capital letters (e.g. NA instead of Na).',
          'Confusing mass number (protons + neutrons) with atomic number (protons only).'
        ],
        questions: [
          {
            text: 'What is the chemical symbol for the element Potassium?',
            options: ['K', 'P', 'Po', 'Pt'],
            correctIndex: 0,
            explanation: 'K comes from the Latin name Kalium for potassium.',
            topicTag: 'Chemical Symbols'
          },
          {
            text: 'What fundamental particle determines the atomic number of an element?',
            options: ['Number of protons', 'Number of neutrons', 'Number of electron shells', 'Number of isotopes'],
            correctIndex: 0,
            explanation: 'The atomic number is strictly the number of protons in the nucleus.',
            topicTag: 'Atomic Number'
          },
          {
            text: 'Which group on the Periodic Table contains unreactive inert noble gases like Helium and Neon?',
            options: ['Group 18 (Group 0)', 'Group 1', 'Group 2', 'Group 17'],
            correctIndex: 0,
            explanation: 'Group 18 elements have complete outer electron shells, making them exceptionally stable.',
            topicTag: 'Noble Gases'
          },
          {
            text: 'Where on the Periodic Table are metals located relative to non-metals?',
            options: ['On the left and center', 'On the far upper right', 'Only in Group 18', 'Only along the staircase line'],
            correctIndex: 0,
            explanation: 'Metals occupy the left and central majority of the Periodic Table.',
            topicTag: 'Metals vs Non-Metals'
          },
          {
            text: 'How many protons does an atom of Carbon (atomic number 6) possess in its nucleus?',
            options: ['6 protons', '12 protons', '3 protons', '0 protons'],
            correctIndex: 0,
            explanation: 'Atomic number directly equals the number of protons (6).',
            topicTag: 'Subatomic Particles'
          }
        ]
      },
      {
        title: 'Acids, Bases & The pH Scale',
        subtitle: 'Properties of acids and bases, litmus paper, universal indicator, and neutralization reactions',
        summary: 'Acids produce hydrogen ions (H⁺) in solution with a sour taste and pH < 7. Bases produce hydroxide ions (OH⁻) with a bitter taste and pH > 7. When acids and bases react together, they neutralize each other to produce salt and water.',
        keyConcepts: [
          { title: 'The pH Scale', explanation: 'pH 0–6 is acidic, pH 7 is neutral (pure water), and pH 8–14 is alkaline (basic).' },
          { title: 'Indicators', explanation: 'Litmus turns red in acid and blue in alkali; universal indicator gives precise color hues across 1–14.' },
          { title: 'Neutralization Equation', explanation: 'Acid + Base → Salt + Water (e.g. HCl + NaOH → NaCl + H₂O).' }
        ],
        exampleProblem: 'What happens to blue litmus paper when dipped into freshly squeezed lemon juice?',
        exampleSolution: 'Lemon juice contains citric acid (pH ≈ 2). Acids turn blue litmus paper red.',
        exampleTakeaway: 'Remember: Acid turns litmus Red (A-R), Base turns litmus Blue (B-B).',
        commonMistakes: [
          'Thinking pure water is acidic (pure water is neutral at pH 7.0).',
          'Thinking neutral solutions turn indicator colors intensely bright.'
        ],
        questions: [
          {
            text: 'What is the pH value of pure distilled water at room temperature?',
            options: ['pH 7 (Neutral)', 'pH 1 (Strong acid)', 'pH 14 (Strong alkali)', 'pH 0'],
            correctIndex: 0,
            explanation: 'Pure water has an equal concentration of H⁺ and OH⁻ ions, yielding neutral pH 7.',
            topicTag: 'pH Scale'
          },
          {
            text: 'What color does red litmus paper turn when dipped into an alkaline soap solution?',
            options: ['Blue', 'Red', 'Yellow', 'Black'],
            correctIndex: 0,
            explanation: 'Bases/alkalis turn red litmus paper blue.',
            topicTag: 'Litmus Indicators'
          },
          {
            text: 'What are the products of a neutralization reaction between hydrochloric acid and sodium hydroxide?',
            options: ['Sodium chloride (salt) and water', 'Hydrogen gas and oxygen gas', 'Carbon dioxide and sugar', 'Pure acid and methane'],
            correctIndex: 0,
            explanation: 'Acid + Base → Salt + Water (HCl + NaOH → NaCl + H₂O).',
            topicTag: 'Neutralization'
          },
          {
            text: 'Which common household substance is acidic?',
            options: ['Vinegar (acetic acid)', 'Bleach', 'Baking soda', 'Oven cleaner'],
            correctIndex: 0,
            explanation: 'Vinegar contains acetic acid with a pH of approximately 2.5.',
            topicTag: 'Everyday Acids'
          },
          {
            text: 'Why does chewing an antacid tablet relieve heartburn / stomach acid pain?',
            options: ['The antacid is a mild base that neutralizes excess hydrochloric stomach acid', 'It freezes the stomach', 'It produces more stomach acid', 'It coats the stomach in metal'],
            correctIndex: 0,
            explanation: 'Antacids contain magnesium or calcium carbonate bases that neutralize excess stomach acid.',
            topicTag: 'Antacids'
          }
        ]
      }
    ],
    senior: [] // Curated in scienceTopics.ts
  },

  'physics': {
    primary: [
      {
        title: 'Pushes, Pulls & Everyday Forces',
        subtitle: 'How forces start, stop, speed up, slow down, and change object direction',
        summary: 'A force is a push or a pull. Forces can make stationary objects move, speed them up, slow them down, stop them, or change their direction of travel.',
        keyConcepts: [
          { title: 'Push and Pull', explanation: 'Pushing opens a door away from you; pulling brings a wagon toward you.' },
          { title: 'Gravity', explanation: 'The invisible pulling force of Earth that pulls all dropped objects down toward the ground.' },
          { title: 'Friction', explanation: 'A resisting force that slows moving objects down when two surfaces rub together.' }
        ],
        exampleProblem: 'Why does a soccer ball rolling on grassy ground gradually slow down and stop?',
        exampleSolution: 'Friction between the rough blades of grass and the surface of the ball pushes against its motion, slowing it to a complete stop.',
        exampleTakeaway: 'Friction always opposes the direction of movement.',
        commonMistakes: [
          'Thinking an object needs a constant forward push to keep moving in friction-free space.',
          'Thinking heavy objects fall faster than light objects when air resistance is ignored.'
        ],
        questions: [
          {
            text: 'What invisible force pulls a dropped apple downward toward the ground?',
            options: ['Gravity', 'Magnetism', 'Electricity', 'Buoyancy'],
            correctIndex: 0,
            explanation: 'Earth’s gravitational pull attracts mass toward the center of the planet.',
            topicTag: 'Gravity'
          },
          {
            text: 'Which surface produces the most friction to help bicycle tires stop quickly?',
            options: ['Rough dry tarmac road', 'Wet icy glass', 'Soapy smooth tile', 'Oiled metal sheet'],
            correctIndex: 0,
            explanation: 'Rough dry road surfaces generate high friction for effective braking grip.',
            topicTag: 'Friction'
          },
          {
            text: 'What action is taking place when you pull a zipper up on your jacket?',
            options: ['Applying a pulling force', 'Applying a magnetic repulsion', 'Freezing', 'Gravity only'],
            correctIndex: 0,
            explanation: 'Zipping a jacket involves pulling the zipper slider upward.',
            topicTag: 'Pushes and Pulls'
          },
          {
            text: 'How can you reduce friction on a squeaky door hinge?',
            options: ['Add lubricating oil', 'Pour sand on it', 'Scrape it with sandpaper', 'Add water and salt'],
            correctIndex: 0,
            explanation: 'Lubricants create a slick barrier that minimizes surface friction.',
            topicTag: 'Reducing Friction'
          },
          {
            text: 'What force slows down a skydiver falling with an open parachute?',
            options: ['Air resistance (drag)', 'Gravity', 'Magnetism', 'Sunlight'],
            correctIndex: 0,
            explanation: 'The wide canopy catches air, generating upward drag force.',
            topicTag: 'Air Resistance'
          }
        ]
      },
      {
        title: 'Light, Shadows & Reflection',
        subtitle: 'Light sources, transparent vs opaque materials, shadows, and reflection in mirrors',
        summary: 'Light travels in straight lines from a source. When light strikes an opaque object, it cannot pass through, casting a dark shadow behind it.',
        keyConcepts: [
          { title: 'Luminous Sources', explanation: 'Objects that create their own light: the Sun, candle flames, electric light bulbs.' },
          { title: 'Shadow Formation', explanation: 'Formed because light travels in straight lines and cannot bend around opaque obstacles.' },
          { title: 'Reflection', explanation: 'Smooth shiny surfaces like flat mirrors bounce light rays back at the same angle.' }
        ],
        exampleProblem: 'Why is your shadow longer in the early morning and late afternoon than at noon?',
        exampleSolution: 'In the morning and afternoon, the Sun is low on the horizon, creating a steep angle that casts long shadows. At noon, the Sun is overhead, creating a short shadow beneath your feet.',
        exampleTakeaway: 'The position of the light source directly governs shadow length and direction.',
        commonMistakes: [
          'Thinking the Moon produces its own light (the Moon reflects sunlight like a giant mirror).',
          'Thinking shadows exist in total complete darkness.'
        ],
        questions: [
          {
            text: 'How does light travel from a light bulb through the air?',
            options: ['In straight lines', 'In zig-zag spirals', 'In loops', 'It only travels in circles'],
            correctIndex: 0,
            explanation: 'Light propagates through uniform media in straight rays.',
            topicTag: 'Light Propagation'
          },
          {
            text: 'Why does the Moon appear bright in the night sky?',
            options: ['It reflects light from the Sun', 'It is made of glowing lava', 'It burns natural gas', 'It has giant electric lights'],
            correctIndex: 0,
            explanation: 'The Moon is non-luminous; it reflects sunlight toward Earth.',
            topicTag: 'The Moon & Light'
          },
          {
            text: 'When is your shadow on the playground shortest during a sunny day?',
            options: ['At solar noon when the Sun is directly overhead', 'At sunrise', 'At sunset', 'At midnight'],
            correctIndex: 0,
            explanation: 'When the Sun is highest overhead, light strikes almost vertically, minimizing shadow length.',
            topicTag: 'Shadows'
          },
          {
            text: 'What happens when light rays strike a flat glass mirror?',
            options: ['They reflect back smoothly at an equal angle', 'They are completely absorbed and disappear', 'They shatter into colors', 'They stop moving'],
            correctIndex: 0,
            explanation: 'Specular reflection bounces light rays according to the law of reflection.',
            topicTag: 'Reflection'
          },
          {
            text: 'Which object is a natural primary source of light?',
            options: ['The Sun', 'A mirror', 'A wooden chair', 'A metal coin'],
            correctIndex: 0,
            explanation: 'The Sun produces radiant light via nuclear fusion.',
            topicTag: 'Light Sources'
          }
        ]
      },
      {
        title: 'Sound, Vibrations & Pitch',
        subtitle: 'How vibrating strings and skins produce sounds, pitch, loudness, and echoes',
        summary: 'Sound is produced whenever an object vibrates. These vibrations travel through air, water, or solids as invisible sound waves before reaching our eardrums.',
        keyConcepts: [
          { title: 'Vibrations', explanation: 'Rapid back-and-forth movement that displaces air molecules to create sound waves.' },
          { title: 'Pitch (High vs Low)', explanation: 'Faster vibrations produce high-pitched sounds (whistle); slower vibrations produce low-pitched sounds (bass drum).' },
          { title: 'Loudness and Volume', explanation: 'Bigger vibration amplitudes carry more energy and sound louder.' }
        ],
        exampleProblem: 'What happens to the pitch of a guitar string when you tighten its tuning peg?',
        exampleSolution: 'Tightening the string increases tension, making it vibrate faster (higher frequency), which produces a higher musical pitch.',
        exampleTakeaway: 'Tighter, thinner, and shorter strings vibrate faster and produce higher pitch.',
        commonMistakes: [
          'Confusing pitch (highness or lowness of note) with volume/loudness (softness or booming sound).',
          'Thinking sound can travel through the empty vacuum of outer space (it needs a physical medium!).'
        ],
        questions: [
          {
            text: 'What must an object do in order to create sound?',
            options: ['Vibrate rapidly back and forth', 'Change its physical color', 'Become magnetic', 'Float in water'],
            correctIndex: 0,
            explanation: 'All acoustic sounds originate from mechanical vibrations.',
            topicTag: 'Vibrations'
          },
          {
            text: 'Why can sound NOT travel through the empty vacuum of outer space?',
            options: ['Because there are no air particles or matter to vibrate and carry sound waves', 'Because space is too dark', 'Because space is too hot', 'Because planets block sound'],
            correctIndex: 0,
            explanation: 'Sound is a mechanical wave requiring a physical medium (gas, liquid, solid) to propagate.',
            topicTag: 'Vacuum of Space'
          },
          {
            text: 'What is an echo?',
            options: ['A sound wave reflecting back from a distant wall or cliff', 'A musical instrument', 'A broken eardrum', 'A silent whistle'],
            correctIndex: 0,
            explanation: 'An echo is the acoustic reflection of a sound wave returning after a delay.',
            topicTag: 'Echoes'
          },
          {
            text: 'Plucking a short, thin, tightly pulled rubber band produces what kind of pitch?',
            options: ['A high pitch note', 'A very deep low bass note', 'Absolute silence', 'Only static'],
            correctIndex: 0,
            explanation: 'Short, tight objects vibrate with higher frequency, creating high-pitched notes.',
            topicTag: 'Pitch'
          },
          {
            text: 'What unit do scientists use to measure the loudness of sound?',
            options: ['Decibels (dB)', 'Kilograms (kg)', 'Meters per second', 'Liters'],
            correctIndex: 0,
            explanation: 'The decibel (dB) scale measures sound intensity/loudness.',
            topicTag: 'Decibels'
          }
        ]
      }
    ],
    junior: [
      {
        title: 'Speed, Velocity & Distance-Time Graphs',
        subtitle: 'Speed = Distance / Time, displacement-time graphs, and uniform acceleration',
        summary: 'Kinematics describes how objects move. Speed measures how fast distance is covered (s = d/t), while velocity specifies both speed and direction of travel. On a distance-time graph, the gradient represents the speed.',
        keyConcepts: [
          { title: 'Speed Formula', explanation: 'Average speed = Total Distance / Total Time (measured in m/s or km/h).' },
          { title: 'Distance-Time Graph Gradient', explanation: 'A straight diagonal line indicates constant speed; a flat horizontal line indicates the object is stationary.' },
          { title: 'Speed vs Velocity', explanation: 'Speed is scalar (magnitude only); velocity is vector (magnitude and direction).' }
        ],
        exampleProblem: 'A cyclist travels 150 meters in 25 seconds. What is their average speed in m/s?',
        exampleSolution: 'Speed = Distance / Time = 150 m / 25 s = 6 m/s.',
        exampleTakeaway: 'Always include the correct SI units (meters per second, m/s).',
        commonMistakes: [
          'Forgetting to convert units (e.g. dividing kilometers by seconds without converting).',
          'Interpreting a flat horizontal line on a distance-time graph as moving with constant speed (it means stationary at rest!).'
        ],
        questions: [
          {
            text: 'What does a horizontal flat line on a distance-time graph represent?',
            options: ['The object is stationary (at rest)', 'The object is moving at maximum speed', 'The object is accelerating', 'The object is turning around'],
            correctIndex: 0,
            explanation: 'Distance is not changing as time progresses, so the object is at rest.',
            topicTag: 'Distance-Time Graphs'
          },
          {
            text: 'A car drives 240 kilometers in 3 hours. What is its average speed?',
            options: ['80 km/h', '60 km/h', '120 km/h', '720 km/h'],
            correctIndex: 0,
            explanation: 'Speed = Distance / Time = 240 km / 3 h = 80 km/h.',
            topicTag: 'Average Speed'
          },
          {
            text: 'What is the key difference between speed and velocity in physics?',
            options: ['Velocity includes direction of motion, while speed does not', 'Speed is measured in meters, velocity in grams', 'Velocity is always faster than speed', 'They are completely identical'],
            correctIndex: 0,
            explanation: 'Velocity is a vector quantity having both magnitude and directional vector.',
            topicTag: 'Vectors vs Scalars'
          },
          {
            text: 'What does a steeper slope (gradient) on a distance-time graph indicate?',
            options: ['A higher speed', 'A lower speed', 'A heavier object', 'Zero velocity'],
            correctIndex: 0,
            explanation: 'Gradient = Δdistance / Δtime = speed. A steeper line represents faster motion.',
            topicTag: 'Graph Slopes'
          },
          {
            text: 'Convert a speed of 10 m/s into kilometers per hour (km/h).',
            options: ['36 km/h', '10 km/h', '60 km/h', '100 km/h'],
            correctIndex: 0,
            explanation: '10 m/s × 3.6 = 36 km/h.',
            topicTag: 'Unit Conversion'
          }
        ]
      },
      {
        title: 'Work, Energy & Conservation of Energy',
        subtitle: 'Work = Force × Distance, kinetic vs potential energy, and the law of conservation of energy',
        summary: 'Energy is the capacity to do work, measured in Joules (J). The fundamental Law of Conservation of Energy dictates that energy cannot be created or destroyed, only transferred from one form to another.',
        keyConcepts: [
          { title: 'Work Done', explanation: 'Work (J) = Force (N) × Distance moved in direction of force (m).' },
          { title: 'Kinetic & Gravitational Potential Energy', explanation: 'Kinetic energy is energy of motion (½mv²); Gravitational potential energy is stored height energy (mgh).' },
          { title: 'Conservation of Energy', explanation: 'Total energy remains constant; on a roller coaster, GPE converts into KE and back.' }
        ],
        exampleProblem: 'A student applies a force of 40 N to push a box across a floor for 5 meters. How much work is done?',
        exampleSolution: 'Work = Force × Distance = 40 N × 5 m = 200 Joules (J).',
        exampleTakeaway: 'Work is only done if the object moves in the direction of the applied force.',
        commonMistakes: [
          'Thinking holding a heavy bag without moving it does physical work (distance is 0, so work is 0 J!).',
          'Thinking energy is "destroyed" by friction (it is dissipated as thermal heat energy!).'
        ],
        questions: [
          {
            text: 'What is the SI unit of measurement for energy and work done?',
            options: ['Joule (J)', 'Newton (N)', 'Watt (W)', 'Pascal (Pa)'],
            correctIndex: 0,
            explanation: 'Energy and work are both quantified in Joules (J).',
            topicTag: 'Joules'
          },
          {
            text: 'What state describes the energy stored in a boulder resting atop a high cliff?',
            options: ['Gravitational potential energy', 'Kinetic energy', 'Sound energy', 'Nuclear energy'],
            correctIndex: 0,
            explanation: 'Height above ground stores gravitational potential energy: GPE = mgh.',
            topicTag: 'Potential Energy'
          },
          {
            text: 'What states the Law of Conservation of Energy?',
            options: ['Energy cannot be created or destroyed, only transformed between forms', 'Energy disappears when friction acts', 'New energy is created by electricity generators', 'Energy is constantly being destroyed'],
            correctIndex: 0,
            explanation: 'The first law of thermodynamics states total energy in an isolated system is conserved.',
            topicTag: 'Conservation of Energy'
          },
          {
            text: 'If 50 N of force moves an object 3 meters in the direction of the force, what is the work done?',
            options: ['150 J', '53 J', '16.6 J', '47 J'],
            correctIndex: 0,
            explanation: 'Work = Force × Distance = 50 N × 3 m = 150 J.',
            topicTag: 'Work Calculation'
          },
          {
            text: 'As a roller coaster cart plunges down the first steep drop, what energy transformation occurs?',
            options: ['Gravitational potential energy transforms into kinetic energy', 'Kinetic energy transforms into nuclear energy', 'Chemical energy becomes magnetic', 'Energy is destroyed'],
            correctIndex: 0,
            explanation: 'Loss in height (GPE) converts into increasing speed (KE).',
            topicTag: 'Energy Transformations'
          }
        ]
      },
      {
        title: 'Thermal Energy, Conduction & Convection',
        subtitle: 'Conduction in solids, convection in fluids, radiation, and conductors vs insulators',
        summary: 'Heat is thermal energy flowing from hotter regions to cooler regions via three mechanisms: conduction (particle collisions in solids), convection (density currents in fluids), and radiation (infrared waves).',
        keyConcepts: [
          { title: 'Conduction', explanation: 'Vibrating atoms pass kinetic energy to neighboring particles directly; metals are excellent conductors due to free delocalized electrons.' },
          { title: 'Convection', explanation: 'Heated fluids expand, become less dense, and rise; cooler dense fluids sink, setting up continuous convection currents.' },
          { title: 'Thermal Radiation', explanation: 'Heat transfer via infrared electromagnetic waves that can travel through empty vacuum without matter.' }
        ],
        exampleProblem: 'Why do sea breezes blow from the ocean toward the land on hot sunny afternoons?',
        exampleSolution: 'Land heats up faster than water, warming the air above it. The warm air rises (low pressure), and cooler, denser air over the ocean moves inland to take its place, forming a convection sea breeze.',
        exampleTakeaway: 'Convection drives global weather and coastal wind patterns.',
        commonMistakes: [
          'Thinking cold flows into objects (cold is simply the absence of thermal heat energy!).',
          'Thinking convection can happen in solid objects.'
        ],
        questions: [
          {
            text: 'By what process does heat travel through solid metals like copper and aluminum?',
            options: ['Conduction', 'Convection', 'Transpiration', 'Sublimation'],
            correctIndex: 0,
            explanation: 'Thermal conduction transfers kinetic energy via atomic lattice vibrations and free electrons.',
            topicTag: 'Conduction'
          },
          {
            text: 'Why does warm air or warm water rise above cooler fluid?',
            options: ['Warm fluids expand, become less dense, and float upward', 'Warm fluids become heavier', 'Gravity repels warm air', 'Magnetism pushes warm air up'],
            correctIndex: 0,
            explanation: 'Thermal expansion decreases density, generating buoyant convection currents.',
            topicTag: 'Convection'
          },
          {
            text: 'How does heat energy from the Sun travel across 93 million miles of empty space to warm Earth?',
            options: ['Thermal infrared radiation', 'Conduction through space particles', 'Ocean convection currents', 'Sound vibrations'],
            correctIndex: 0,
            explanation: 'Electromagnetic thermal radiation travels through the vacuum of space at the speed of light.',
            topicTag: 'Radiation'
          },
          {
            text: 'Which material makes the best thermal insulator to prevent heat loss from a water heater?',
            options: ['Fiberglass insulation (trapped air)', 'Solid copper sheet', 'Aluminum foil', 'Silver bar'],
            correctIndex: 0,
            explanation: 'Trapped air pockets prevent conduction and convection, acting as superior insulators.',
            topicTag: 'Insulators'
          },
          {
            text: 'In which direction does thermal heat energy always naturally flow?',
            options: ['From a region of higher temperature to a region of lower temperature', 'From cold regions to hot regions', 'Only from bottom to top', 'Randomly in circles'],
            correctIndex: 0,
            explanation: 'Heat naturally diffuses down a thermal gradient from warmer to cooler matter.',
            topicTag: 'Heat Flow'
          }
        ]
      }
    ],
    senior: [] // Curated in scienceTopics.ts
  }
};

