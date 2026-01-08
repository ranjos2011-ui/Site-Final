
export interface CalculationResult {
  futureValue: number;
  totalInvested: number;
  totalInterest: number;
  economyAmount?: number;
  aiAnalysis?: string;
  sustainableMonthlyIncome?: number;
  requiredCapital4Percent?: number; // Capital necessário pela regra dos 4%
  isFeasible?: boolean;
  // Campos para ajustes sugeridos
  requiredMonthlySavings?: number;  // Quanto de aporte seria necessário para a meta original
  requiredYears?: number;           // Quanto tempo seria necessário com o aporte atual
  achievableMonthlyIncome?: number; // Renda possível com a capacidade atual
  // Campos para Usufruto
  propertyValue?: number;
  usufructValue?: number;
  barePropertyValue?: number;
  itcmdEstimate?: number;
  scenarioA?: {
    finalValue: number;
    totalInvested: number;
    totalInterest: number;
    profitability: number;
  };
  scenarioB?: {
    finalValue: number;
    totalInvested: number;
    totalInterest: number;
    profitability: number;
  };
  projections?: Array<{
    year: number;
    valueA: number;
    valueB: number;
    difference: number;
  }>;
}

export type CostType = 'CURRENCY' | 'PERCENT' | 'PROFIT_TAX';
export type CostPeriod = 'MONTHLY' | 'ANNUALLY';

export interface CostItem {
  id: string;
  label: string;
  value?: number;
  type: CostType;
  period: CostPeriod;
  frequencyYears?: number; // Frequência de apuração para impostos sobre lucro
}

export interface CalculatorInputs {
  currentAge: number;
  retirementAge: number;
  familyIncome?: number;
  desiredIncome?: number; // Renda desejada na aposentadoria
  returnPeriodType?: 'MONTHLY' | 'ANNUALLY';
  simulationYears?: number;
  initialInvestment?: number;
  monthlySavings?: number;
  expectedReturn?: number;
  // Campos para Usufruto
  propertyValue?: number;
  usufructPercent?: number;
  itcmdRate?: number;
  // Campos para Comparador de Custos
  costsA?: CostItem[];
  costsB?: CostItem[];
  scenarioNameA?: string;
  scenarioNameB?: string;
}
