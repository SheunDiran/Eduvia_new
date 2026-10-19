import { Topic } from '../../types';

export const COMMERCIAL_TOPICS: Topic[] = [
  // ================= ECONOMICS: TOPIC 1 =================
  {
    id: 'econ-supply-demand-market',
    subjectId: 'economics',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Market Equilibrium: Supply, Demand & Elasticity',
    subtitle: 'Law of demand, law of supply, market equilibrium price, price ceilings, and price elasticity (PED)',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Microeconomics studies how scarce resources are allocated through market price mechanisms. Equilibrium occurs where the quantity demanded by consumers equals the quantity supplied by producers at a market-clearing price.',
      keyConcepts: [
        {
          title: 'The Law of Demand & Supply',
          explanation: 'Law of Demand: Ceteris paribus, as price rises, quantity demanded falls (downward slope). Law of Supply: As price rises, quantity supplied increases (upward slope).'
        },
        {
          title: 'Market Equilibrium & Disequilibrium',
          explanation: 'Equilibrium (Qd = Qs). If price is set above equilibrium, an excess supply (surplus) occurs. If price is set below equilibrium, an excess demand (shortage) occurs.'
        },
        {
          title: 'Price Elasticity of Demand (PED)',
          explanation: 'Measures consumer responsiveness to price changes: PED = (% change in Qd) / (% change in Price). If |PED| > 1, demand is elastic; if |PED| < 1, demand is inelastic.'
        }
      ],
      workedExamples: [
        {
          problem: 'If a 10% increase in the price of coffee leads to a 20% decline in quantity demanded, what is the price elasticity of demand (PED)?',
          solution: 'PED = (-20%) / (+10%) = -2.0. Taking the absolute magnitude |PED| = 2.0. Because 2.0 > 1, coffee demand is highly elastic in this market.',
          takeaway: 'Goods with easy substitutes usually have high price elasticity.'
        }
      ],
      commonMistakes: [
        'Confusing a "change in quantity demanded" (movement along the curve caused by price) with a "change in demand" (shift of the whole curve caused by income, tastes, substitutes).',
        'Believing price ceilings (maximum legal prices, like rent control) prevent shortages; if set below equilibrium, ceilings guarantee chronic shortages.',
        'Assuming inelastic goods have zero price sensitivity; elasticity is a spectrum.'
      ]
    },
    videos: [
      {
        id: 'v16',
        embedId: 'g9aDizJpd_s',
        title: 'Supply and Demand: Crash Course Economics #4',
        channel: 'CrashCourse',
        duration: '10:21',
        description: 'Adriene Hill and Jacob Clifford explain equilibrium price, market clearing, shortages, and surpluses.'
      },
      {
        id: 'v17',
        embedId: '4py_W_02k4o',
        title: 'Shifts in Demand vs. Changes in Quantity Demanded',
        channel: 'Jacob Clifford',
        duration: '06:15',
        description: 'Visual graphing walkthrough of what shifts demand curves (TRIBE: tastes, related goods, income, buyers, expectations).'
      },
      {
        id: 'v18',
        embedId: '26f1pE30Z5g',
        title: 'Price Elasticity of Demand (PED) Explained',
        channel: 'Khan Academy',
        duration: '08:45',
        description: 'Calculating percentage changes, elasticity formulas, and revenue maximization.'
      }
    ],
    quizQuestions: [
      {
        id: 'eqq1',
        text: 'What market condition arises when the prevailing market price is held below the equilibrium price?',
        options: ['A shortage (excess demand)', 'A surplus (excess supply)', 'A hyperinflation shock', 'A budget surplus'],
        correctIndex: 0,
        explanation: 'At below-equilibrium prices, quantity demanded exceeds quantity supplied, creating a shortage.',
        topicTag: 'Market Equilibrium'
      },
      {
        id: 'eqq2',
        text: 'If a 5% increase in the price of gasoline leads to only a 1% decrease in quantity consumed, gasoline demand is described as what?',
        options: ['Inelastic (|PED| < 1)', 'Elastic (|PED| > 1)', 'Unit elastic', 'Perfectively competitive'],
        correctIndex: 0,
        explanation: '|PED| = 1% / 5% = 0.2 < 1. Inelastic goods have few immediate substitutes.',
        topicTag: 'Price Elasticity'
      },
      {
        id: 'eqq3',
        text: 'Which factor causes a shift in the entire market demand curve for electric cars rather than a movement along it?',
        options: [
          'A nationwide government tax rebate for buyers of electric vehicles',
          'A decrease in the sale price of the electric car itself',
          'An increase in the sale price of the electric car itself',
          'Factory workers demanding higher wages'
        ],
        correctIndex: 0,
        explanation: 'Subsidies and consumer incentives shift the entire demand curve outward.',
        topicTag: 'Demand Shifts'
      },
      {
        id: 'eqq4',
        text: 'What does the Latin phrase "ceteris paribus" mean in economic analysis?',
        options: ['All other factors remaining constant or equal', 'The buyer must beware', 'Money is the root of trade', 'To each according to their need'],
        correctIndex: 0,
        explanation: 'Ceteris paribus allows economists to isolate the relationship between two specific variables.',
        topicTag: 'Economic Methodology'
      },
      {
        id: 'eqq5',
        text: 'What type of goods experience an INCREASE in demand when consumer income rises?',
        options: ['Normal goods', 'Inferior goods', 'Giffen goods', 'Public goods'],
        correctIndex: 0,
        explanation: 'Normal goods have a positive income elasticity of demand (income up -> demand up).',
        topicTag: 'Income Elasticity'
      }
    ]
  },

  // ================= ECONOMICS: TOPIC 2 =================
  {
    id: 'econ-inflation-monetary-policy',
    subjectId: 'economics',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Inflation, Central Banks & Monetary Policy',
    subtitle: 'Demand-pull vs. cost-push inflation, Consumer Price Index (CPI), interest rates, and quantitative easing',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Macroeconomics examines nationwide economic aggregates. Central banks use monetary policy tools (interest rates, reserve requirements, open market operations) to manage inflation, maintain price stability, and foster employment.',
      keyConcepts: [
        {
          title: 'Demand-Pull vs. Cost-Push Inflation',
          explanation: 'Demand-pull: "Too much money chasing too few goods" (aggregate demand shifts right). Cost-push: Rising input costs (e.g. oil shocks, raw material spikes) reduce aggregate supply and raise prices.'
        },
        {
          title: 'The Consumer Price Index (CPI)',
          explanation: 'Measures weighted changes in the price of a standard representative basket of consumer goods and services over time to quantify inflation rates.'
        },
        {
          title: 'Contractionary vs. Expansionary Monetary Policy',
          explanation: 'To fight high inflation, central banks raise interest rates, making borrowing expensive and cooling consumer spending. To stimulate a recessionary economy, central banks lower rates.'
        }
      ],
      workedExamples: [
        {
          problem: 'Why do central banks raise benchmark interest rates when nationwide inflation exceeds target levels (e.g. 8% vs. 2% target)?',
          solution: 'Higher interest rates increase borrowing costs for mortgages, auto loans, and business credit lines. Consumers spend less and save more; firms pause capital expansions. Reduced aggregate demand slows price increases across the economy.',
          takeaway: 'Raising interest rates cools excess demand to stabilize the currency.'
        }
      ],
      commonMistakes: [
        'Assuming printing more currency makes a country richer; without increasing output of goods, printing currency merely fuels hyperinflation.',
        'Confusing disinflation (a slowing in the rate of inflation, prices still rising but more slowly) with deflation (an outright drop in general price levels).',
        'Believing all inflation is evil; modest predictable inflation (1-2%) lubricates wage adjustments and encourages investment.'
      ]
    },
    videos: [
      {
        id: 'v-econ-m1',
        embedId: '1U4y_jV8B1I',
        title: 'Inflation and Bubbles: Crash Course Economics #7',
        channel: 'CrashCourse',
        duration: '10:15',
        description: 'Demand-pull, cost-push, the Consumer Price Index, and historical hyperinflation.'
      },
      {
        id: 'v-econ-m2',
        embedId: 'sKxU5_z3Kz8',
        title: 'Monetary Policy and the Central Bank Explained',
        channel: 'Jacob Clifford',
        duration: '08:30',
        description: 'How central banks control discount rates, open market bond sales, and banking reserves.'
      },
      {
        id: 'v-econ-m3',
        embedId: 'w5k2_K9bL6s',
        title: 'How The Economic Machine Works by Ray Dalio',
        channel: 'Bridgewater Associates',
        duration: '15:20',
        description: 'Visual breakdown of credit cycles, debt deleveraging, interest rate levers, and money printing.'
      }
    ],
    quizQuestions: [
      {
        id: 'emp1',
        text: 'What type of inflation is caused when rapid aggregate spending outpaces an economy\'s productive capacity ("too much money chasing too few goods")?',
        options: ['Demand-pull inflation', 'Cost-push inflation', 'Stagflation', 'Deflation'],
        correctIndex: 0,
        explanation: 'Demand-pull inflation occurs when aggregate consumer/government demand shifts rapidly to the right.',
        topicTag: 'Inflation Types'
      },
      {
        id: 'emp2',
        text: 'What primary tool does a central bank use to curb high nationwide inflation?',
        options: [
          'Raising the benchmark interest rate to discourage borrowing and cool spending',
          'Lowering the reserve requirement to zero',
          'Printing physical banknotes and distributing them to citizens',
          'Decreasing corporate income tax rates'
        ],
        correctIndex: 0,
        explanation: 'Higher rates make credit more costly, tempering excessive borrowing and aggregate demand.',
        topicTag: 'Central Bank Policy'
      },
      {
        id: 'emp3',
        text: 'What is the term for an economic condition characterized by stagnant economic growth, high unemployment, and high inflation simultaneously?',
        options: ['Stagflation', 'Hyperinflation', 'Disinflation', 'Recessionary surplus'],
        correctIndex: 0,
        explanation: 'Stagflation combines stagnation (high unemployment/recession) with high inflation.',
        topicTag: 'Stagflation'
      },
      {
        id: 'emp4',
        text: 'What statistical index measures changes in the price level of a market basket of consumer goods and services purchased by households?',
        options: ['Consumer Price Index (CPI)', 'Gross Domestic Product (GDP)', 'Gini Coefficient', 'Purchasing Power Parity (PPP)'],
        correctIndex: 0,
        explanation: 'CPI tracks consumer inflation by monitoring price changes of a standardized basket.',
        topicTag: 'CPI Metric'
      },
      {
        id: 'emp5',
        text: 'What is the key difference between deflation and disinflation?',
        options: [
          'Deflation is a decrease in the general price level; disinflation is a slowdown in the inflation rate',
          'Deflation only happens with food; disinflation only happens with electronics',
          'Deflation is always intentional; disinflation is accidental',
          'They are identical synonyms'
        ],
        correctIndex: 0,
        explanation: 'Deflation means negative inflation (prices falling); disinflation means prices are still rising, but at a slower rate.',
        topicTag: 'Deflation vs Disinflation'
      }
    ]
  },

  // ================= ECONOMICS: TOPIC 3 =================
  {
    id: 'econ-fiscal-gdp',
    subjectId: 'economics',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Gross Domestic Product (GDP) & Fiscal Policy',
    subtitle: 'Calculating GDP (C + I + G + (X - M)), real vs. nominal GDP, budget deficits, and Keynesian stimulus',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Gross Domestic Product measures the total monetary value of all final goods and services produced within a nation during a given year. Governments use fiscal policy (taxation and public spending) to influence national output and stabilize business cycles.',
      keyConcepts: [
        {
          title: 'The Expenditure Approach: GDP = C + I + G + (X - M)',
          explanation: 'C = Consumer Spending (typically 60-70%), I = Business Investment, G = Government Spending, (X - M) = Net Exports (Exports minus Imports).'
        },
        {
          title: 'Nominal GDP vs. Real GDP',
          explanation: 'Nominal GDP uses current market prices; Real GDP is adjusted for inflation using constant base-year prices, reflecting actual changes in physical economic output.'
        },
        {
          title: 'Fiscal Policy & Government Deficits',
          explanation: 'Expansionary fiscal policy (cutting taxes or boosting government infrastructure spending) stimulates GDP during recessions but can create budget deficits and national debt.'
        }
      ],
      workedExamples: [
        {
          problem: 'If country A has Consumption = $500B, Investment = $120B, Government spending = $150B, Exports = $80B, and Imports = $100B, what is its GDP?',
          solution: 'Apply formula: GDP = C + I + G + (X - M) = 500 + 120 + 150 + (80 - 100) = 770 - 20 = $750 Billion.',
          takeaway: 'Because imports exceed exports, net exports subtract $20B from total output.'
        }
      ],
      commonMistakes: [
        'Counting intermediate goods (e.g. tires sold to car manufacturers) in GDP; only final finished consumer products are counted to prevent double-counting.',
        'Assuming high nominal GDP growth guarantees higher standard of living without checking if it was caused purely by inflation.',
        'Confusing national debt (cumulative total borrowed over history) with annual deficit (the shortfall in a single fiscal year).'
      ]
    },
    videos: [
      {
        id: 'v-econ-f1',
        embedId: 'yUiU_x9p4Q4',
        title: 'Macroeconomics: Crash Course Economics #5',
        channel: 'CrashCourse',
        duration: '10:35',
        description: 'GDP calculation, real vs nominal GDP, and why GDP doesn\'t measure happiness.'
      },
      {
        id: 'v-econ-f2',
        embedId: 'otrgN_eX0k8',
        title: 'Fiscal Policy and Stimulus Explained',
        channel: 'Jacob Clifford',
        duration: '08:22',
        description: 'Tax cuts, government spending multipliers, national debt, and Keynesian vs Classical economics.'
      },
      {
        id: 'v-econ-f3',
        embedId: '18VqV_d8cM0',
        title: 'Real GDP vs Nominal GDP Practice Calculations',
        channel: 'Khan Academy',
        duration: '07:15',
        description: 'Step-by-step GDP deflator calculations and understanding real purchasing power.'
      }
    ],
    quizQuestions: [
      {
        id: 'efp1',
        text: 'What is the standard formula for calculating GDP using the expenditure approach?',
        options: ['GDP = C + I + G + (X - M)', 'GDP = Taxes - Spending + Debt', 'GDP = Revenue / Total Population', 'GDP = Exports × Interest Rates'],
        correctIndex: 0,
        explanation: 'Consumption (C) + Investment (I) + Government (G) + Net Exports (X - M).',
        topicTag: 'GDP Formula'
      },
      {
        id: 'efp2',
        text: 'Why do economists prefer REAL GDP over NOMINAL GDP when evaluating long-term economic growth?',
        options: [
          'Real GDP is adjusted to remove the distortionary effects of inflation',
          'Real GDP includes underground barter trade',
          'Real GDP is calculated in gold bullion',
          'Nominal GDP only measures government jobs'
        ],
        correctIndex: 0,
        explanation: 'Real GDP holds prices constant, isolating actual increases in physical goods and services produced.',
        topicTag: 'Real vs Nominal GDP'
      },
      {
        id: 'efp3',
        text: 'What fiscal policy action is typically recommended during a severe economic recession to stimulate aggregate demand?',
        options: [
          'Increasing government spending on infrastructure and cutting income taxes',
          'Raising income taxes and drastically cutting government spending',
          'Outlawing foreign exports',
          'Shutting down central banks'
        ],
        correctIndex: 0,
        explanation: 'Expansionary fiscal policy injects cash into the circular flow to boost aggregate demand.',
        topicTag: 'Fiscal Stimulus'
      },
      {
        id: 'efp4',
        text: 'Why are sales of used cars excluded from current-year GDP calculations?',
        options: [
          'Used cars were already counted in the GDP of the year they were manufactured (avoids double counting)',
          'Used cars have zero market value',
          'Only public transit is tracked in GDP',
          'The government does not tax used cars'
        ],
        correctIndex: 0,
        explanation: 'GDP measures current new production; resales of previously produced assets do not represent new output.',
        topicTag: 'GDP Exclusions'
      },
      {
        id: 'efp5',
        text: 'What is the difference between an annual federal budget deficit and the national debt?',
        options: [
          'The deficit is the annual shortfall in a single year; national debt is the cumulative total owed from all past deficits',
          'They are identical accounting terms',
          'Deficits are owed to foreign nations; debt is owed only to citizens',
          'National debt refers only to state governments'
        ],
        correctIndex: 0,
        explanation: 'Deficit = annual spending exceeding annual tax revenue; Debt = total accumulated unpaid debt obligations.',
        topicTag: 'Deficit vs Debt'
      }
    ]
  },

  // ================= ACCOUNTING: TOPIC 1 =================
  {
    id: 'acc-double-entry-debits-credits',
    subjectId: 'accounting',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'The Accounting Equation & Double-Entry Bookkeeping',
    subtitle: 'Assets = Liabilities + Equity, rules of Debit and Credit (DEAD CLIC), and journal entries',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Every financial transaction impacts at least two accounts in opposing, equal measures. The bedrock of modern financial accounting is the accounting equation: Assets = Liabilities + Owner\'s Equity.',
      keyConcepts: [
        {
          title: 'The Core Accounting Equation',
          explanation: 'Assets (what the company owns) = Liabilities (what it owes to creditors) + Owner\'s Equity (residual interest of owners/shareholders).'
        },
        {
          title: 'Debits (Dr) vs. Credits (Cr)',
          explanation: 'Debit refers to the left side of an account; Credit refers to the right side. Total debits must always equal total credits in every transaction.'
        },
        {
          title: 'The DEAD CLIC Rule',
          explanation: 'Debits increase: Expenses, Assets, Drawings (DEAD). Credits increase: Liabilities, Income/Revenue, Capital/Equity (CLIC).'
        }
      ],
      workedExamples: [
        {
          problem: 'A business buys $5,000 of office equipment with cash. Record the journal entry and explain the effect on the accounting equation.',
          solution: 'Debit Equipment (Asset increases) $5,000; Credit Cash (Asset decreases) $5,000. Net effect on total Assets is $0. Liabilities and Equity are unaffected.',
          takeaway: 'Assets simply transform from liquid cash into operational equipment; the equation remains in balance.'
        }
      ],
      commonMistakes: [
        'Confusing accounting debits/credits with bank statement cards; to a bank, your deposit is their liability (credit), but to you, it is an asset (debit).',
        'Failing to keep total debits equal to total credits in compound journal entries.',
        'Recording expenses as credits instead of debits.'
      ]
    },
    videos: [
      {
        id: 'v22',
        embedId: 'V_C6T_1xGms',
        title: 'Accounting Basics Explained Through a Story',
        channel: 'Accounting Stuff',
        duration: '09:45',
        description: 'James explains the basic accounting equation: Assets = Liabilities + Equity with clear visuals.'
      },
      {
        id: 'v23',
        embedId: 'j71Kmxv7smk',
        title: 'Debits and Credits Made Easy: The DEAD CLIC Rule',
        channel: 'Accounting Stuff',
        duration: '11:20',
        description: 'Mnemonic to always remember what gets debited and what gets credited.'
      },
      {
        id: 'v24',
        embedId: '4B3R-F0X9gY',
        title: 'How to Prepare Journal Entries in Double Entry Bookkeeping',
        channel: 'Farhat\'s Accounting Lectures',
        duration: '13:10',
        description: 'Practical examples analyzing purchase of inventory, revenue on credit, and bank loans.'
      }
    ],
    quizQuestions: [
      {
        id: 'aq1',
        text: 'What is the fundamental accounting equation upon which all double-entry balance sheets are constructed?',
        options: ['Assets = Liabilities + Owner\'s Equity', 'Assets + Liabilities = Equity', 'Assets = Revenue - Expenses', 'Equity = Assets + Liabilities'],
        correctIndex: 0,
        explanation: 'Assets are funded either by borrowing (Liabilities) or owner investment (Equity).',
        topicTag: 'Accounting Equation'
      },
      {
        id: 'aq2',
        text: 'According to standard bookkeeping rules (DEAD CLIC), which of the following accounts increases with a DEBIT entry?',
        options: ['Cash / Asset accounts', 'Accounts Payable / Liabilities', 'Sales Revenue / Income', 'Owner\'s Capital account'],
        correctIndex: 0,
        explanation: 'Assets, Expenses, and Drawings increase with Debits (DEAD).',
        topicTag: 'Debit and Credit Rules'
      },
      {
        id: 'aq3',
        text: 'When a firm receives a $10,000 cash loan from a commercial bank, how is the transaction recorded?',
        options: [
          'Debit Cash $10,000 (Asset ↑); Credit Bank Loan Payable $10,000 (Liability ↑)',
          'Credit Cash $10,000; Debit Loan Payable $10,000',
          'Debit Cash $10,000; Credit Equity $10,000',
          'Debit Accounts Receivable $10,000; Credit Sales $10,000'
        ],
        correctIndex: 0,
        explanation: 'Cash increases as an asset (Debit) and loan obligations increase as a liability (Credit).',
        topicTag: 'Journal Entries'
      },
      {
        id: 'aq4',
        text: 'What is the chronological primary record where financial transactions are first analyzed and entered before ledger posting?',
        options: ['General Journal', 'Trial Balance', 'Balance Sheet', 'Income Statement'],
        correctIndex: 0,
        explanation: 'Transactions are first recorded chronologically in the general journal before being posted to ledgers.',
        topicTag: 'Journalizing'
      },
      {
        id: 'aq5',
        text: 'If a company has $150,000 in total assets and $60,000 in total liabilities, what is the owner\'s equity?',
        options: ['$90,000', '$210,000', '$60,000', '$150,000'],
        correctIndex: 0,
        explanation: 'Equity = Assets - Liabilities = $150,000 - $60,000 = $90,000.',
        topicTag: 'Equity Calculation'
      }
    ]
  },

  // ================= ACCOUNTING: TOPIC 2 =================
  {
    id: 'acc-balance-sheet-income',
    subjectId: 'accounting',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Financial Statements: Balance Sheet & Income Statement',
    subtitle: 'Revenue, Cost of Goods Sold (COGS), gross profit, operating expenses, current vs. non-current assets, and retained earnings',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Financial statements communicate an organization\'s economic status. The Income Statement measures profitability over a period of time (Net Income = Revenues - Expenses). The Balance Sheet provides a snapshot of financial position on a specific date.',
      keyConcepts: [
        {
          title: 'The Income Statement (Profit & Loss)',
          explanation: 'Revenues minus Cost of Goods Sold (COGS) yields Gross Profit. Subtracting Operating Expenses (selling, general, and administrative) gives Operating Profit (EBIT). Subtracting interest and taxes yields Net Income.'
        },
        {
          title: 'The Balance Sheet (Statement of Financial Position)',
          explanation: 'Organized into Current Assets (cash, receivables, inventory to be converted within 1 year), Non-Current Assets (property, plant, equipment), Current Liabilities, Long-Term Debt, and Shareholder Equity.'
        },
        {
          title: 'Retained Earnings Linkage',
          explanation: 'Net income from the income statement flows into the balance sheet as Retained Earnings within Owner\'s Equity, minus any dividends paid to owners.'
        }
      ],
      workedExamples: [
        {
          problem: 'A retail store has $500,000 in sales revenue, $300,000 in Cost of Goods Sold, and $120,000 in rent/salary operating expenses. What is its Gross Profit and Net Income (before taxes)?',
          solution: 'Gross Profit = Sales - COGS = $500,000 - $300,000 = $200,000. Net Income = Gross Profit - Operating Expenses = $200,000 - $120,000 = $80,000.',
          takeaway: 'Gross profit measures product markup efficiency; net income reflects overall corporate profitability.'
        }
      ],
      commonMistakes: [
        'Confusing revenue with cash; under accrual accounting, revenue is recognized when earned, regardless of when cash is collected.',
        'Treating balance sheets as measuring a period of time; balance sheets represent a snapshot on an exact date.',
        'Forgetting that depreciation expense lowers net income while accumulated depreciation lowers non-current asset book value.'
      ]
    },
    videos: [
      {
        id: 'v-acc-b1',
        embedId: 'm43Z9C2b3zI',
        title: 'How to Read an Income Statement (Profit & Loss)',
        channel: 'Accounting Stuff',
        duration: '11:45',
        description: 'Revenue, COGS, Gross Profit, Operating Expenses, EBIT, and Net Income explained step-by-step.'
      },
      {
        id: 'v-acc-b2',
        embedId: '1w4_s4hE0xM',
        title: 'The Balance Sheet Explained Simply',
        channel: 'Learn Accounting with James',
        duration: '12:10',
        description: 'Current vs fixed assets, current liabilities vs long term notes, and shareholder equity.'
      },
      {
        id: 'v-acc-b3',
        embedId: '9L1N_x9v4cQ',
        title: 'How Financial Statements Connect: Income, Balance Sheet & Cash Flow',
        channel: 'Farhat\'s Accounting Lectures',
        duration: '14:30',
        description: 'Tracing how net profit migrates to retained earnings on the balance sheet.'
      }
    ],
    quizQuestions: [
      {
        id: 'abs1',
        text: 'What is calculated by subtracting the Cost of Goods Sold (COGS) directly from Sales Revenue?',
        options: ['Gross Profit', 'Net Income', 'Retained Earnings', 'Operating Cash Flow'],
        correctIndex: 0,
        explanation: 'Gross Profit = Revenue - Cost of Goods Sold.',
        topicTag: 'Income Statement'
      },
      {
        id: 'abs2',
        text: 'Which of the following items is classified as a CURRENT ASSET on a corporate balance sheet?',
        options: ['Accounts Receivable (due in 30 days)', 'Factory manufacturing equipment', 'Trademarks and patents', 'Long-term corporate bonds payable'],
        correctIndex: 0,
        explanation: 'Current assets are expected to be converted into cash within one fiscal year or operating cycle.',
        topicTag: 'Current Assets'
      },
      {
        id: 'abs3',
        text: 'Where does the net income calculated on the Income Statement flow into on the Balance Sheet?',
        options: ['Retained Earnings (within Equity)', 'Accounts Payable', 'Accumulated Depreciation', 'Inventory'],
        correctIndex: 0,
        explanation: 'Undistributed profits accumulate in Retained Earnings under Shareholders\' Equity.',
        topicTag: 'Financial Statement Link'
      },
      {
        id: 'abs4',
        text: 'Under the Accrual Principle of accounting, when should revenue be recognized in financial records?',
        options: [
          'When goods or services are delivered and earned, regardless of when cash is collected',
          'Only after physical cash bills are deposited in the bank vault',
          'At the very end of the calendar year',
          'When the customer first considers placing an order'
        ],
        correctIndex: 0,
        explanation: 'Accrual accounting matches revenue to the period in which the performance obligation is satisfied.',
        topicTag: 'Accrual Accounting'
      },
      {
        id: 'abs5',
        text: 'What financial statement reports an organization\'s financial condition at a single specific point in time (snapshot)?',
        options: ['The Balance Sheet', 'The Income Statement', 'The Statement of Cash Flows', 'The Trial Balance Worksheet'],
        correctIndex: 0,
        explanation: 'A Balance Sheet states assets, liabilities, and equity on a specific date (e.g. December 31).',
        topicTag: 'Balance Sheet Nature'
      }
    ]
  },

  // ================= ACCOUNTING: TOPIC 3 =================
  {
    id: 'acc-trial-balance-adjustments',
    subjectId: 'accounting',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'The Trial Balance, Adjusting Entries & Error Correction',
    subtitle: 'Extracting trial balances, accruals, prepayments, depreciation, and correcting suspense accounts',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'Before financial statements can be published, a Trial Balance is extracted from general ledgers to test whether total debits equal total credits. Adjusting entries (accruals, prepayments, depreciation) ensure revenues and expenses match the appropriate accounting period.',
      keyConcepts: [
        {
          title: 'Purpose and Limitations of the Trial Balance',
          explanation: 'Verifies mathematical equality of debits and credits. However, errors of omission, commission, principle, and compensating errors can exist even if the trial balance balances.'
        },
        {
          title: 'Prepayments and Accruals',
          explanation: 'Prepaid expenses (paid before used = asset); Accrued expenses (used before paid = liability); Unearned revenue (cash collected before services rendered = liability); Accrued revenue (services delivered before billing = asset).'
        },
        {
          title: 'Depreciation of Fixed Assets',
          explanation: 'Allocating the depreciable cost of an asset over its useful life (e.g. Straight-Line: (Cost - Salvage Value) / Useful Life). Debit Depreciation Expense; Credit Accumulated Depreciation (contra-asset).'
        }
      ],
      workedExamples: [
        {
          problem: 'On January 1, a firm pays $12,000 for a 12-month building insurance policy. On March 31 (end of Q1), what adjusting entry is required?',
          solution: 'Insurance used during Q1 = $12,000 × (3 / 12) = $3,000. Entry: Debit Insurance Expense $3,000; Credit Prepaid Insurance $3,000. Remaining prepaid asset balance is $9,000.',
          takeaway: 'Adjusting entries reflect consumption of economic benefits during the period.'
        }
      ],
      commonMistakes: [
        'Believing a balanced trial balance proves no accounting mistakes exist; errors of principle (e.g. capitalizing an expense) still balance mathematically.',
        'Crediting the equipment asset directly for depreciation instead of crediting the Accumulated Depreciation contra-account.',
        'Recording unearned customer prepayments as earned revenue prematurely.'
      ]
    },
    videos: [
      {
        id: 'v-acc-t1',
        embedId: '3m2N_w9m6bY',
        title: 'How to Prepare a Trial Balance Step-by-Step',
        channel: 'Accounting Stuff',
        duration: '10:05',
        description: 'Transferring ledger balances into debit/credit columns and verifying equality.'
      },
      {
        id: 'v-acc-t2',
        embedId: 'k7F1_x0bA2g',
        title: 'Adjusting Entries: Prepayments and Accruals Made Simple',
        channel: 'Farhat\'s Accounting Lectures',
        duration: '15:18',
        description: 'Walkthrough of prepaid rent, accrued wages payable, and unearned revenue adjusting entries.'
      },
      {
        id: 'v-acc-t3',
        embedId: '2mN_w8p4xQY',
        title: 'Types of Accounting Errors That Do NOT Affect the Trial Balance',
        channel: 'Accounting Geek',
        duration: '07:45',
        description: 'Errors of omission, commission, principle, and reversal of entries explained.'
      }
    ],
    quizQuestions: [
      {
        id: 'atb1',
        text: 'What type of error occurs when a transaction is completely left out of the journals and ledgers, leaving the trial balance in balance?',
        options: ['Error of omission', 'Error of principle', 'Compensating error', 'Error of transposition'],
        correctIndex: 0,
        explanation: 'An error of omission leaves both debit and credit entries out entirely, so totals remain equal.',
        topicTag: 'Bookkeeping Errors'
      },
      {
        id: 'atb2',
        text: 'When a customer pays $3,000 in advance for consulting services that will be delivered next month, how is the $3,000 classified on the balance sheet today?',
        options: ['Unearned Revenue (a Liability)', 'Sales Revenue (Income)', 'Accounts Receivable', 'Owner\'s Equity'],
        correctIndex: 0,
        explanation: 'Because services are not yet delivered, the company has an obligation (liability) to provide them.',
        topicTag: 'Unearned Revenue'
      },
      {
        id: 'atb3',
        text: 'Using the straight-line method, what is the annual depreciation expense for a delivery van purchased for $30,000, with an estimated salvage value of $5,000 and useful life of 5 years?',
        options: ['$5,000 per year', '$6,000 per year', '$1,000 per year', '$25,000 per year'],
        correctIndex: 0,
        explanation: 'Annual Depreciation = ($30,000 - $5,000) / 5 = $25,000 / 5 = $5,000 per year.',
        topicTag: 'Depreciation'
      },
      {
        id: 'atb4',
        text: 'What is Accumulated Depreciation categorized as on the balance sheet?',
        options: ['A Contra-Asset account (reduces asset value)', 'A Current Liability', 'Operating Revenue', 'Intangible Asset'],
        correctIndex: 0,
        explanation: 'Accumulated Depreciation is a contra-asset account with a credit balance that offsets the cost of fixed assets.',
        topicTag: 'Contra Assets'
      },
      {
        id: 'atb5',
        text: 'What temporary account is created by bookkeepers to record discrepancies while searching for errors when a trial balance does not balance?',
        options: ['Suspense Account', 'Drawing Account', 'Petty Cash', 'Escrow Reserve'],
        correctIndex: 0,
        explanation: 'A suspense account temporarily holds the difference until errors are located and corrected.',
        topicTag: 'Suspense Account'
      }
    ]
  },

  // ================= COMMERCE: TOPIC 1 =================
  {
    id: 'comm-channels-distribution',
    subjectId: 'commerce',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Channels of Distribution & Supply Chain Logistics',
    subtitle: 'Wholesalers, retailers, middlemen, direct-to-consumer (D2C), warehousing, and inventory management',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Commerce encompasses all activities facilitating the exchange of goods and services from original producers to ultimate consumers. Distribution channels bridge geographic, temporal, and possession gaps through wholesalers, retailers, and modern e-commerce.',
      keyConcepts: [
        {
          title: 'The Traditional Distribution Channel',
          explanation: 'Manufacturer → Wholesaler → Retailer → Consumer. Wholesalers buy in bulk and break bulk; retailers provide convenience, display, and individual sales.'
        },
        {
          title: 'Direct-to-Consumer (D2C) & Disintermediation',
          explanation: 'Modern e-commerce allows manufacturers to bypass middlemen, selling directly via websites, lowering retail prices and capturing consumer behavior data.'
        },
        {
          title: 'Aids to Trade',
          explanation: 'Auxiliary commercial services that facilitate trade: Banking (finance), Insurance (risk mitigation), Warehousing (storage), Transportation (movement), and Advertising (information).'
        }
      ],
      workedExamples: [
        {
          problem: 'Why do wholesalers continue to play a critical role in agriculture and perishable goods despite modern e-commerce trends?',
          solution: 'Wholesalers provide warehousing, cold-storage facilities, bulk-breaking, grading, credit extension to small neighborhood markets, and assume price fluctuation risks that small farmers cannot handle.',
          takeaway: 'Middlemen provide value through logistics, risk absorption, and localized distribution.'
        }
      ],
      commonMistakes: [
        'Believing eliminating middlemen always reduces prices; without middlemen, manufacturers must absorb logistics and warehousing costs themselves.',
        'Confusing commerce with trade; trade is the actual buying and selling, while commerce includes trade PLUS all aids to trade.',
        'Overlooking inventory holding costs (storage, insurance, obsolescence) in supply chain analysis.'
      ]
    },
    videos: [
      {
        id: 'v-comm-c1',
        embedId: 'mN3Z_w8bA6c',
        title: 'Channels of Distribution in Marketing and Business',
        channel: 'Two Minute Classroom',
        duration: '05:40',
        description: 'Direct vs indirect channels, wholesalers, retailers, brokers, and channel length.'
      },
      {
        id: 'v-comm-c2',
        embedId: '8oF2a_w8hM0',
        title: 'What is Logistics and Supply Chain Management?',
        channel: 'CrashCourse Business',
        duration: '10:12',
        description: 'Warehousing, inventory control, just-in-time logistics, and global freight containerization.'
      },
      {
        id: 'v-comm-c3',
        embedId: '1p4N_x0cM3s',
        title: 'Aids to Trade: Banking, Insurance, Transport & Warehousing',
        channel: 'Study IQ Commerce',
        duration: '08:35',
        description: 'Comprehensive review of the 5 essential commercial aids facilitating exchange of merchandise.'
      }
    ],
    quizQuestions: [
      {
        id: 'cdq1',
        text: 'What essential commercial function is performed by wholesalers in traditional distribution channels?',
        options: [
          'Purchasing in bulk from manufacturers and breaking bulk for smaller retailers',
          'Selling single items directly to household consumers on street corners',
          'Manufacturing physical raw steel from ore',
          'Issuing national currency notes'
        ],
        correctIndex: 0,
        explanation: 'Wholesalers purchase in large quantities and repackage into smaller lots for retail merchants.',
        topicTag: 'Wholesaler Roles'
      },
      {
        id: 'cdq2',
        text: 'Which of the following is considered an primary "Aid to Trade" that protects merchants against financial catastrophe from lost or damaged cargo?',
        options: ['Insurance', 'Advertising', 'Telemarketing', 'Wholesaling'],
        correctIndex: 0,
        explanation: 'Marine and commercial insurance hedges against risks of fire, theft, and shipwreck.',
        topicTag: 'Aids to Trade'
      },
      {
        id: 'cdq3',
        text: 'What term describes the process of eliminating intermediaries (middlemen) from a supply chain to sell directly to consumers?',
        options: ['Disintermediation', 'Diversification', 'Decentralization', 'Depreciation'],
        correctIndex: 0,
        explanation: 'Disintermediation cuts out wholesalers and distributors, enabling direct consumer sales.',
        topicTag: 'Supply Chain Models'
      },
      {
        id: 'cdq4',
        text: 'What is the primary difference between "Trade" and "Commerce"?',
        options: [
          'Trade is the buying and selling of goods; Commerce consists of trade PLUS all aids to trade (banking, insurance, transport, warehousing)',
          'Trade only involves international currency; Commerce only involves local coins',
          'Commerce is illegal without government ownership',
          'There is no difference'
        ],
        correctIndex: 0,
        explanation: 'Commerce is the overarching ecosystem encompassing trade and the supporting infrastructure that enables it.',
        topicTag: 'Commerce Scope'
      },
      {
        id: 'cdq5',
        text: 'What inventory management strategy minimizes holding costs by having parts and merchandise arrive exactly as needed for assembly or sales?',
        options: ['Just-in-Time (JIT) inventory', 'Speculative stockpiling', 'Safety stock surplus', 'Bulk warehousing'],
        correctIndex: 0,
        explanation: 'Just-in-Time aligns inventory orders directly with production schedules, cutting storage overhead.',
        topicTag: 'Inventory Management'
      }
    ]
  },

  // ================= COMMERCE: TOPIC 2 =================
  {
    id: 'comm-international-trade',
    subjectId: 'commerce',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'International Trade, Tariffs & Exchange Rates',
    subtitle: 'Comparative advantage, balance of payments (BOP), tariffs vs. quotas, trade barriers, and WTO regulations',
    estimatedMinutes: 28,
    learnContent: {
      summary: 'International trade allows nations to exchange goods across borders, capitalizing on comparative advantage. Governments manage international commerce through trade agreements, tariffs, exchange rates, and balance of payment accounts.',
      keyConcepts: [
        {
          title: 'Comparative Advantage (David Ricardo)',
          explanation: 'A country should specialize in producing goods that it can produce at a lower opportunity cost, trading for other goods to achieve mutual prosperity beyond their individual production frontiers.'
        },
        {
          title: 'Trade Protectionism (Tariffs and Quotas)',
          explanation: 'Tariffs are taxes on imported merchandise; Quotas place physical numerical limits on imports. Both protect domestic infant industries but raise consumer prices and provoke retaliatory tariffs.'
        },
        {
          title: 'Balance of Trade & Balance of Payments (BOP)',
          explanation: 'Balance of Trade = Visible Exports minus Visible Imports. The Balance of Payments records all economic transactions (current account, capital account, financial account) between a country and the world.'
        }
      ],
      workedExamples: [
        {
          problem: 'Country A can produce 1 ton of cocoa at an opportunity cost of 2 bicycles. Country B can produce 1 ton of cocoa at an opportunity cost of 5 bicycles. Who has the comparative advantage in cocoa?',
          solution: 'Country A has the comparative advantage in cocoa because it sacrifices fewer bicycles (2 vs 5) to produce 1 ton. Country A should specialize in cocoa and export it to Country B.',
          takeaway: 'Comparative advantage is decided by lowest opportunity cost, not absolute efficiency.'
        }
      ],
      commonMistakes: [
        'Confusing absolute advantage (being able to produce more units with the same inputs) with comparative advantage (producing at lowest opportunity cost).',
        'Believing trade is a zero-sum game where one nation must lose for another to gain; trade creates mutual economic surplus.',
        'Confusing trade deficits with national insolvency; a trade deficit simply means imported merchandise value exceeds exported merchandise value.'
      ]
    },
    videos: [
      {
        id: 'v-comm-i1',
        embedId: 'geoe-6NBy10',
        title: 'Comparative Advantage and Trade: Crash Course Economics #11',
        channel: 'CrashCourse',
        duration: '10:45',
        description: 'David Ricardo’s theory, opportunity costs, specialization, and mutual trade gains.'
      },
      {
        id: 'v-comm-i2',
        embedId: '2mN9_a8bK4c',
        title: 'Tariffs, Quotas, and Protectionism Explained',
        channel: 'Jacob Clifford',
        duration: '08:15',
        description: 'Deadweight loss, domestic producer surplus, and trade war retaliation analyzed.'
      },
      {
        id: 'v-comm-i3',
        embedId: '4k7L_w0cM1g',
        title: 'Balance of Payments and Foreign Exchange Rates',
        channel: 'Khan Academy',
        duration: '11:20',
        description: 'Current account vs capital account, currency appreciation and export competitiveness.'
      }
    ],
    quizQuestions: [
      {
        id: 'cit1',
        text: 'According to David Ricardo\'s economic principle, what determines whether a country should specialize in producing a specific good?',
        options: [
          'Having a lower opportunity cost in producing it compared to trading partners',
          'Having the largest physical landmass in the region',
          'Having the highest minimum wage in the hemisphere',
          'Having the most gold reserves'
        ],
        correctIndex: 0,
        explanation: 'Comparative advantage is defined as the ability to produce at a lower opportunity cost.',
        topicTag: 'Comparative Advantage'
      },
      {
        id: 'cit2',
        text: 'What is a tax or custom duty imposed specifically on foreign imported goods entering a country called?',
        options: ['A Tariff', 'An Excise Tax', 'A Subsidy', 'A Capital Gains Tax'],
        correctIndex: 0,
        explanation: 'Tariffs are import taxes used to raise revenue and protect domestic industries.',
        topicTag: 'Trade Barriers'
      },
      {
        id: 'cit3',
        text: 'What international body acts as the global forum for negotiating trade agreements and resolving trade disputes between nations?',
        options: ['The World Trade Organization (WTO)', 'The United Nations Educational Council (UNESCO)', 'The International Red Cross', 'The European Central Bank'],
        correctIndex: 0,
        explanation: 'The WTO regulates rules of international trade and adjudicates disputes among member states.',
        topicTag: 'WTO'
      },
      {
        id: 'cit4',
        text: 'When a nation\'s currency depreciates (weakens) against foreign currencies, what is the typical effect on its international trade?',
        options: [
          'Its exports become cheaper and more competitive abroad, while imports become more expensive',
          'All exports and imports cease instantly',
          'Imports become extremely cheap for domestic buyers',
          'Foreign travelers refuse to visit'
        ],
        correctIndex: 0,
        explanation: 'A weaker currency makes domestic exports cheaper for foreign buyers, stimulating export sales.',
        topicTag: 'Exchange Rates'
      },
      {
        id: 'cit5',
        text: 'What is a legal restriction that places a maximum physical numerical quota on the quantity of a specific product that can be imported in a year?',
        options: ['An Import Quota', 'A Tariff', 'An Embargo', 'A Currency Peg'],
        correctIndex: 0,
        explanation: 'Quotas place a strict ceiling on the physical volume of imported goods.',
        topicTag: 'Import Quotas'
      }
    ]
  },

  // ================= COMMERCE: TOPIC 3 =================
  {
    id: 'comm-business-ownership-structures',
    subjectId: 'commerce',
    gradeLevels: ['grade-10', 'grade-11', 'grade-12'],
    title: 'Business Ownership: Sole Proprietorships to Public Corporations',
    subtitle: 'Sole traders, partnerships, private limited companies (Ltd), public corporations (Plc), and limited liability',
    estimatedMinutes: 26,
    learnContent: {
      summary: 'Businesses are organized under distinct legal frameworks based on ownership, funding needs, and risk tolerance. Key legal distinctions include unlimited liability (personal assets at risk) versus limited liability (shareholder loss limited to invested capital).',
      keyConcepts: [
        {
          title: 'Sole Proprietorship & Partnership',
          explanation: 'Owned by one or more individuals. Easy to form with pass-through taxation, but owners suffer unlimited personal liability for business debts and lawsuits.'
        },
        {
          title: 'Limited Liability Companies (Ltd / LLC)',
          explanation: 'The company is a separate legal entity from its owners. Shareholders have limited liability—their personal homes and savings cannot be seized to satisfy company debts.'
        },
        {
          title: 'Public Limited Companies (Plc / Corporations)',
          explanation: 'Shares can be traded publicly on a stock exchange. Can raise immense capital by issuing equity and corporate bonds, but subject to stringent public auditing and regulatory scrutiny.'
        }
      ],
      workedExamples: [
        {
          problem: 'A sole proprietor defaults on a $200,000 commercial bank loan after their shop goes bankrupt. Can the bank take the owner\'s personal family house to satisfy the debt?',
          solution: 'Yes. A sole proprietorship has unlimited liability; the law treats the business and the individual as one legal entity. Personal assets can be liquidated to pay business liabilities.',
          takeaway: 'Incorporation protects personal wealth by creating a separate corporate veil.'
        }
      ],
      commonMistakes: [
        'Believing shareholders in a corporation can be sued personally if a company product fails; limited liability shields shareholders.',
        'Confusing private limited companies (shares sold privately by invitation) with public corporations (shares sold on public stock exchanges).',
        'Overlooking the "double taxation" corporate risk in jurisdictions where profits are taxed at corporate level and dividends at individual level.'
      ]
    },
    videos: [
      {
        id: 'v-comm-o1',
        embedId: 'mN3Z_w8bA6c',
        title: 'Types of Business Ownership: Sole Proprietorship, LLC, Corporation',
        channel: 'Two Minute Classroom',
        duration: '06:15',
        description: 'Compare sole proprietorships, partnerships, LLCs, and corporations with pros and cons.'
      },
      {
        id: 'v-comm-o2',
        embedId: '7mK2_w0hK4g',
        title: 'What is Limited Liability? - Legal Entities Explained',
        channel: 'BBC Bitesize',
        duration: '04:30',
        description: 'Why limited liability revolutionized capitalism by encouraging investment without personal ruin.'
      },
      {
        id: 'v-comm-o3',
        embedId: '1p4N_x0cM3s',
        title: 'Going Public: How Initial Public Offerings (IPOs) Work',
        channel: 'CrashCourse Business',
        duration: '10:40',
        description: 'How private companies issue shares to the public on the stock exchange to raise expansion capital.'
      }
    ],
    quizQuestions: [
      {
        id: 'cbo1',
        text: 'What major financial risk is borne by an entrepreneur running a Sole Proprietorship?',
        options: [
          'Unlimited liability (personal savings and property can be seized to satisfy business debts)',
          'Strict federal disclosure of personal tax returns',
          'Requirement to hold annual shareholder meetings',
          'Forbidden from hiring employees'
        ],
        correctIndex: 0,
        explanation: 'Sole proprietors have no separate legal entity; their personal assets back all business debts.',
        topicTag: 'Sole Proprietorship'
      },
      {
        id: 'cbo2',
        text: 'What does "Limited Liability" mean for shareholders of a corporation or private limited company?',
        options: [
          'Shareholders can only lose the financial capital they personally invested in their shares; personal assets are protected',
          'The company is only allowed to make limited profit per year',
          'The company cannot hire more than 10 employees',
          'The company pays zero taxes'
        ],
        correctIndex: 0,
        explanation: 'Limited liability separates owner personal assets from corporate debts.',
        topicTag: 'Limited Liability'
      },
      {
        id: 'cbo3',
        text: 'What key characteristic distinguishes a Public Limited Company (Plc) from a Private Limited Company (Ltd)?',
        options: [
          'A Public Company can sell its shares publicly to general investors on a regulated stock exchange',
          'A Public Company is owned and run by the military',
          'A Public Company cannot earn commercial profit',
          'A Public Company has only one single shareholder'
        ],
        correctIndex: 0,
        explanation: 'Public companies can raise capital from the general public via stock market listings.',
        topicTag: 'Public vs Private Corp'
      },
      {
        id: 'cbo4',
        text: 'What formal founding document outlines a corporation\'s internal operating rules, voting rights, and directors\' governance duties?',
        options: ['Articles of Association / Incorporation Bylaws', 'Trial Balance', 'Income Statement', 'Writ of Habeas Corpus'],
        correctIndex: 0,
        explanation: 'Articles of Association define internal corporate governance rules and powers.',
        topicTag: 'Corporate Governance'
      },
      {
        id: 'cbo5',
        text: 'What is an Initial Public Offering (IPO)?',
        options: [
          'The first sale of stock by a private company to the public to raise investment capital',
          'A government takeover of private bankrupt firms',
          'An annual dividend check mailed to workers',
          'A discount sale during festival seasons'
        ],
        correctIndex: 0,
        explanation: 'An IPO marks the milestone where a private firm transitions to a publicly listed corporation.',
        topicTag: 'IPOs'
      }
    ]
  }
];
