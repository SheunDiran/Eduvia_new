import { GradeLevel, SubjectId, Topic } from '../../types';
import { CompactTopicSpec, createTopicFromSpec } from './builder';

type SeniorSpecs = Partial<Record<SubjectId, [CompactTopicSpec, CompactTopicSpec, CompactTopicSpec]>>;

const SENIOR_SPECS: SeniorSpecs = {
  math: [
    {
      title: 'Trigonometric Identities & Sine/Cosine Laws',
      subtitle: 'Non-right triangles, ambiguous case, compound angles, and unit circle',
      quickInfo: 'Trigonometry extends to general triangles using the Law of Sines (a/sin A = b/sin B = c/sin C) and Law of Cosines (c² = a² + b² - 2ab cos C). Pythagorean identities form the cornerstone of calculus prep.',
      keyConcepts: ['Fundamental identity: sin²(θ) + cos²(θ) = 1.', 'Law of Sines applies when an angle and its opposite side are known.', 'Law of Cosines calculates the third side from two sides and the included angle.'],
      quiz: [
        { q: 'In any triangle, what formula relates three sides and one angle?', opts: ['c² = a² + b² - 2ab cos(C)', 'a² + b² = c²', 'sin(A) = cos(B)', 'tan(θ) = sin(θ)cos(θ)'], ans: 0, exp: 'The Law of Cosines generalises Pythagoras for any triangle: c² = a² + b² - 2ab cos(C).' },
        { q: 'What is the exact value of sin²(37°) + cos²(37°)?', opts: ['0', '0.5', '1', '1.414'], ans: 2, exp: 'For any real angle θ, sin²(θ) + cos²(θ) = 1.' },
        { q: 'What is sin(90°)?', opts: ['0', '0.5', '1', '-1'], ans: 2, exp: 'On the unit circle, the y-coordinate at 90° (π/2 radians) is 1.' },
        { q: 'When is the Law of Cosines necessary instead of the Law of Sines?', opts: ['When given 3 angles', 'When given two sides and the included angle (SAS) or all three sides (SSS)', 'Only in right triangles', 'Never'], ans: 1, exp: 'SAS and SSS cases have no known opposite angle-side pair, requiring the Law of Cosines.' },
        { q: 'What is the period of the standard sine function y = sin(x)?', opts: ['90° (π/2)', '180° (π)', '360° (2π)', '720° (4π)'], ans: 2, exp: 'The trigonometric sine wave repeats every 360 degrees or 2π radians.' }
      ]
    },
    {
      title: 'Polynomial Functions & Quadratic Formula Derivation',
      subtitle: 'Discriminant analysis, synthetic division, and remainder theorem',
      quickInfo: 'Higher-degree polynomials are analyzed using factor and remainder theorems. The discriminant Δ = b² - 4ac characterizes quadratic roots as real distinct, repeated, or complex conjugates.',
      keyConcepts: ['Quadratic formula: x = (-b ± √(b² - 4ac)) / (2a).', 'If Δ > 0: two distinct real roots; Δ = 0: one repeated root; Δ < 0: two complex conjugate roots.', 'The Remainder Theorem: dividing P(x) by (x - c) yields remainder P(c).'],
      quiz: [
        { q: 'What does a negative discriminant (b² - 4ac < 0) indicate about quadratic roots?', opts: ['Two distinct real roots', 'One real repeated root', 'Two complex conjugate roots (no real intercepts)', 'Roots are zero'], ans: 2, exp: 'Square roots of negative numbers yield imaginary/complex numbers.' },
        { q: 'Solve x² - 4x - 5 = 0 using factorization or the quadratic formula', opts: ['x = 5 and x = -1', 'x = -5 and x = 1', 'x = 2 and x = -2', 'x = 4 and x = 5'], ans: 0, exp: '(x - 5)(x + 1) = 0 => x = 5 or x = -1.' },
        { q: 'According to the Factor Theorem, (x - 2) is a factor of P(x) if and only if:', opts: ['P(2) = 0', 'P(-2) = 0', 'P(0) = 2', 'P(2) = 2'], ans: 0, exp: 'A linear term is a factor if evaluating the polynomial at the root gives zero.' },
        { q: 'What is the vertex x-coordinate of the parabola y = ax² + bx + c?', opts: ['x = -b / (2a)', 'x = b / a', 'x = -c / a', 'x = √(b² - 4ac)'], ans: 0, exp: 'The axis of symmetry occurs at x = -b / (2a).' },
        { q: 'What is the degree of the polynomial P(x) = 5x⁴ - 3x² + 7x - 12?', opts: ['2', '3', '4', '5'], ans: 2, exp: 'The degree is the highest exponent of the variable, which is 4.' }
      ]
    },
    {
      title: 'Differential Calculus: Limits & Derivatives',
      subtitle: 'Power rule, product rule, chain rule, and finding stationary points',
      quickInfo: 'Calculus investigates rates of change. The derivative f\'(x) defines the instantaneous slope of a curve. The power rule d/dx[xⁿ] = n·xⁿ⁻¹ powers velocity and optimization problems.',
      keyConcepts: ['The derivative represents the instantaneous rate of change and tangent slope.', 'Power rule: d/dx [a·xⁿ] = n·a·xⁿ⁻¹.', 'At local maxima and minima (stationary points), f\'(x) = 0.'],
      quiz: [
        { q: 'What is the derivative of f(x) = 4x³ with respect to x?', opts: ['12x²', '12x³', '4x²', '7x²'], ans: 0, exp: 'Power rule: 3 × 4x^(3-1) = 12x².' },
        { q: 'What is the derivative of a constant number, such as d/dx [7]?', opts: ['7', '1', '0', 'undefined'], ans: 2, exp: 'Constants have zero rate of change; slope of a horizontal line is 0.' },
        { q: 'If position s(t) = 5t², what is the instantaneous velocity v(t) = s\'(t)?', opts: ['5t', '10t', '10', '25t'], ans: 1, exp: 'd/dt [5t²] = 2 × 5t = 10t.' },
        { q: 'How do you find stationary turning points on a smooth curve y = f(x)?', opts: ['Set y = 0', 'Set f\'(x) = 0 and solve for x', 'Square the equation', 'Divide by x'], ans: 1, exp: 'Stationary points have zero gradient: f\'(x) = 0.' },
        { q: 'What is the product rule for differentiating u(x) · v(x)?', opts: ['u\'v\'', 'u\'v + uv\'', 'u\' / v\'', '(uv)\' = u + v'], ans: 1, exp: 'Product rule: (uv)\' = u\'v + uv\'.' }
      ]
    }
  ],
  'further-math': [
    {
      title: 'Matrix Algebra, Determinants & Inverse Matrices',
      subtitle: 'Matrix multiplication, Cramer\'s rule for 3x3 systems, and eigenvalues',
      quickInfo: 'Matrices represent linear transformations and systems of equations. A square matrix possesses a multiplicative inverse A⁻¹ = (1/det A) · adj(A) provided its determinant is non-zero.',
      keyConcepts: ['Matrix multiplication AB is valid only when columns of A equal rows of B.', 'A matrix with det(A) = 0 is singular and has no inverse.', 'Determinant of 2x2 matrix [a b; c d] is ad - bc.'],
      quiz: [
        { q: 'What is the determinant of matrix [[3, 2], [1, 4]]?', opts: ['10', '14', '12', '8'], ans: 0, exp: 'det = (3)(4) - (2)(1) = 12 - 2 = 10.' },
        { q: 'If the determinant of a matrix is 0, what is that matrix called?', opts: ['Identity matrix', 'Singular matrix', 'Symmetric matrix', 'Diagonal matrix'], ans: 1, exp: 'A singular matrix has det = 0 and cannot be inverted.' },
        { q: 'What is the product of matrix A and its inverse A⁻¹?', opts: ['Null matrix 0', 'Identity matrix I', 'Transpose A^T', 'Scalar 1'], ans: 1, exp: 'A · A⁻¹ = I (the identity matrix).' },
        { q: 'Can you multiply a 2x3 matrix by another 2x3 matrix?', opts: ['Yes, directly', 'No, inner dimensions must match (columns of A must equal rows of B)', 'Only if all entries are positive', 'Yes, by transposing both'], ans: 1, exp: '(2x3) × (2x3) is invalid because 3 ≠ 2.' },
        { q: 'What is the trace of a square matrix?', opts: ['The determinant', 'The sum of elements along the main diagonal', 'The largest eigenvalue', 'The rank'], ans: 1, exp: 'The trace is the sum of main diagonal entries.' }
      ]
    },
    {
      title: 'Vectors in 3-Dimensional Space & Dot/Cross Products',
      subtitle: 'Magnitude, unit vectors, scalar dot product, and vector cross product',
      quickInfo: 'Vectors have magnitude and direction. The scalar dot product (u · v = |u||v|cos θ) tests orthogonality, while the vector cross product (u × v) computes an orthogonal normal vector.',
      keyConcepts: ['Two non-zero vectors are perpendicular if their dot product equals 0.', 'The magnitude of vector v = ai + bj + ck is |v| = √(a² + b² + c²).', 'Cross product magnitude |u × v| equals the area of the spanned parallelogram.'],
      quiz: [
        { q: 'If two non-zero vectors u and v are orthogonal (perpendicular), their dot product u · v is:', opts: ['1', '0', '-1', 'Infinity'], ans: 1, exp: 'cos(90°) = 0, so the dot product is exactly 0.' },
        { q: 'Calculate the magnitude of vector v = 3i + 4j + 0k', opts: ['5', '7', '12', '25'], ans: 0, exp: '√(3² + 4²) = √(9 + 16) = √25 = 5.' },
        { q: 'What is the geometric result of the cross product u × v of two 3D vectors?', opts: ['A scalar number', 'A vector perpendicular to both u and v', 'A parallel vector', 'An angle'], ans: 1, exp: 'The cross product generates a vector normal to the plane of u and v.' },
        { q: 'What is the dot product of (2i + 3j) and (4i - 1j)?', opts: ['5', '8', '11', '14'], ans: 0, exp: '(2)(4) + (3)(-1) = 8 - 3 = 5.' },
        { q: 'What is the cross product of any vector with itself: v × v?', opts: ['|v|²', 'The zero vector 0', '2v', '1'], ans: 1, exp: 'The angle is 0°; sin(0°) = 0, yielding the zero vector.' }
      ]
    },
    {
      title: 'Integration Techniques: Substitution & By Parts',
      subtitle: 'Definite integrals, u-substitution, ∫u dv = uv - ∫v du, and areas',
      quickInfo: 'Integration is anti-differentiation. Definite integrals compute the net area bounded beneath curves. Advanced techniques include substitution (reverse chain rule) and integration by parts.',
      keyConcepts: ['Fundamental Theorem of Calculus: ∫[a to b] f(x) dx = F(b) - F(a).', 'Integration by parts formula: ∫ u dv = u·v - ∫ v du.', 'Power rule for integration: ∫ xⁿ dx = (xⁿ⁺¹)/(n + 1) + C (for n ≠ -1).'],
      quiz: [
        { q: 'What is the indefinite integral ∫ 3x² dx?', opts: ['x³ + C', '6x + C', 'x⁴ + C', '3x³ + C'], ans: 0, exp: '3(x³/3) + C = x³ + C.' },
        { q: 'What is the integration by parts formula?', opts: ['∫ u dv = uv - ∫ v du', '∫ u dv = u\'v\'', '∫ u dv = u/v + C', '∫ u dv = uv + ∫ v du'], ans: 0, exp: 'Integration by parts is ∫ u dv = uv - ∫ v du.' },
        { q: 'What is ∫ (1/x) dx for x > 0?', opts: ['-1/x² + C', 'ln(x) + C', 'x⁰ + C', 'e^x + C'], ans: 1, exp: 'The derivative of ln(x) is 1/x, so its anti-derivative is ln(x) + C.' },
        { q: 'What represents the constant "C" added to an indefinite integral?', opts: ['Constant of integration', 'Speed of light', 'Celsius temperature', 'Circumference'], ans: 0, exp: 'Indefinite integrals include an arbitrary constant of integration C.' },
        { q: 'Evaluate the definite integral ∫[0 to 2] 2x dx', opts: ['2', '4', '8', '16'], ans: 1, exp: '[x²] evaluated from 0 to 2 = 2² - 0² = 4.' }
      ]
    }
  ],
  accounting: [
    {
      title: 'Double-Entry Bookkeeping & General Ledger Accounts',
      subtitle: 'Debit vs Credit rules, asset/liability accounting equation, and journals',
      quickInfo: 'The fundamental accounting equation is Assets = Liabilities + Equity. Under double-entry bookkeeping, every financial transaction impacts at least two accounts with total Debits equaling total Credits.',
      keyConcepts: ['Assets and expenses increase with Debits (Dr); decrease with Credits (Cr).', 'Liabilities, equity, and revenues increase with Credits (Cr); decrease with Debits (Dr).', 'The general ledger compiles individual T-accounts summarizing balances.'],
      quiz: [
        { q: 'What is the fundamental accounting equation?', opts: ['Assets = Liabilities + Owner\'s Equity', 'Assets + Revenue = Expenses', 'Profit = Sales - Assets', 'Cash = Capital - Debt'], ans: 0, exp: 'Assets = Liabilities + Owner\'s Equity is the bedrock of balance sheets.' },
        { q: 'When a business purchases inventory with cash, what is the double entry?', opts: ['Debit Inventory, Credit Cash', 'Debit Cash, Credit Inventory', 'Debit Capital, Credit Cash', 'Debit Sales, Credit Bank'], ans: 0, exp: 'Asset inventory increases (Dr), and asset cash decreases (Cr).' },
        { q: 'Which types of accounts are increased by a DEBIT entry?', opts: ['Assets and Expenses', 'Liabilities and Revenues', 'Equity and Capital', 'Sales and Loans'], ans: 0, exp: 'The acronym DEAL: Dividends, Expenses, Assets, Losses increase with Debits.' },
        { q: 'What financial book records transactions in chronological order before posting to ledgers?', opts: ['Balance Sheet', 'General Journal (Book of Original Entry)', 'Trial Balance', 'Income Statement'], ans: 1, exp: 'Journals record chronological original entries.' },
        { q: 'If total debits do not equal total credits in a journal entry, what is violated?', opts: ['Tax law only', 'The double-entry principle', 'Depreciation schedule', 'Inflation rate'], ans: 1, exp: 'Double entry strictly requires total Debits = total Credits.' }
      ]
    },
    {
      title: 'Trial Balance Preparation & Suspense Accounts',
      subtitle: 'Balancing verification, errors of omission, commission, and correcting entries',
      quickInfo: 'A trial balance tests the mathematical equality of debit and credit balances. Errors that do not affect trial balance agreement include errors of omission, commission, and principle.',
      keyConcepts: ['A trial balance confirms that total debits equal total credits.', 'Errors of omission (transaction completely forgotten) do not unbalance the trial balance.', 'A Suspense Account temporarily holds differences until errors are traced.'],
      quiz: [
        { q: 'What is the primary purpose of preparing a Trial Balance?', opts: ['To calculate net profit', 'To verify the arithmetic accuracy of double-entry ledger postings', 'To submit taxes', 'To pay dividends'], ans: 1, exp: 'It proves whether total debits equal total credits across all ledgers.' },
        { q: 'Which error will cause a Trial Balance to be out of balance?', opts: ['Error of omission', 'Error of principle', 'Single-sided posting or mathematical addition error in a ledger', 'Compensating error'], ans: 2, exp: 'A one-sided debit with no corresponding credit causes an imbalance.' },
        { q: 'What temporary account is created when a trial balance debit and credit column do not match?', opts: ['Suspense Account', 'Capital Account', 'Drawings Account', 'Reserve Fund'], ans: 0, exp: 'Differences are placed in a suspense account pending reconciliation.' },
        { q: 'What is an "error of principle"?', opts: ['Entering the wrong spelling', 'Violating fundamental accounting principles (e.g., treating capital expenditure as revenue expense)', 'Omitting an invoice', 'Typing a transposed number'], ans: 1, exp: 'Treating a fixed asset purchase as a routine repair expense is an error of principle.' },
        { q: 'Does a balanced trial balance guarantee that the accounts are 100% free of errors?', opts: ['Yes, always', 'No, balanced errors like omission, principle, and reversal can still exist', 'Only if approved by bank', 'Yes, legally'], ans: 1, exp: 'Many compensating errors do not disrupt the debit-credit total equality.' }
      ]
    },
    {
      title: 'Financial Statements: Income Statement & Balance Sheet',
      subtitle: 'Gross profit, net profit, accruals, depreciation, and working capital',
      quickInfo: 'The Income Statement calculates gross and net profit across a trading period. The Balance Sheet presents the financial position—assets, liabilities, and equity—at a specific date.',
      keyConcepts: ['Gross Profit = Revenue - Cost of Goods Sold (COGS).', 'Net Profit = Gross Profit - Operating Expenses.', 'Working Capital = Current Assets - Current Liabilities.'],
      quiz: [
        { q: 'How is Gross Profit calculated on the trading account?', opts: ['Revenue - Cost of Goods Sold (COGS)', 'Net Sales - Total Expenses', 'Assets - Liabilities', 'Cash in Bank - Debt'], ans: 0, exp: 'Gross Profit = Sales Revenue - Cost of Goods Sold.' },
        { q: 'What financial statement shows the assets, liabilities, and capital of a business at a specific point in time?', opts: ['Income Statement', 'Statement of Financial Position (Balance Sheet)', 'Cash Flow Statement', 'Bank Statement'], ans: 1, exp: 'The balance sheet snapshots financial position at a single date.' },
        { q: 'What is "depreciation" in accounting?', opts: ['Cash lost in transit', 'The systematic allocation of the cost of a tangible fixed asset over its useful life', 'Bank interest charges', 'Tax penalties'], ans: 1, exp: 'Depreciation expenses wear and tear of long-term capital assets.' },
        { q: 'What is the formula for Working Capital?', opts: ['Fixed Assets - Loans', 'Current Assets - Current Liabilities', 'Total Sales - Cost of Sales', 'Equity / Debt'], ans: 1, exp: 'Working Capital = Current Assets - Current Liabilities.' },
        { q: 'Which item is classified as a Current Liability on a balance sheet?', opts: ['Factory building', 'Trade accounts payable (creditors due in 30 days)', 'Common shares', 'Machinery'], ans: 1, exp: 'Debts due within one operating cycle (1 year) are current liabilities.' }
      ]
    }
  ]
};

export function getSeniorTopics(grade: GradeLevel, subjectId: SubjectId): Topic[] {
  const gradeNum = parseInt(grade.replace('grade-', ''), 10) || 10;
  const baseSpecs = SENIOR_SPECS[subjectId] || SENIOR_SPECS['math']!;

  return baseSpecs.map((spec, idx) => {
    return createTopicFromSpec(grade, subjectId, idx, {
      ...spec,
      title: gradeNum === 10 ? spec.title : `Grade ${gradeNum}: ${spec.title}`,
      subtitle: `Senior Secondary (Grade ${gradeNum} / SS ${gradeNum - 9}) syllabus.`,
      quickInfo: `Senior Secondary Grade ${gradeNum}: ${spec.quickInfo}`
    });
  });
}
