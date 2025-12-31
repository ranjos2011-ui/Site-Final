
import { GoogleGenAI } from "@google/genai";
import { CalculatorInputs, CalculationResult } from "../types";

export const getFinancialAdvice = async (inputs: CalculatorInputs, results: CalculationResult, type: string = 'retirement'): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  let prompt = "";

  if (type === 'comparator') {
    const lastYear = results.projections?.[results.projections.length - 1];
    const duration = inputs.simulationYears || 30;
    const diffFinal = lastYear?.difference || 0;

    prompt = `
      Como um consultor sênior da R Anjos Consultoria, elabore um relatório técnico sofisticado baseado nesta simulação de ${duration} anos entre duas estruturas de custos (Cenários A e B).
      
      DADOS DA SIMULAÇÃO:
      - Horizonte Temporal: ${duration} anos
      - Investimento Inicial: R$ ${inputs.initialInvestment?.toLocaleString('pt-BR')}
      - Aporte Mensal: R$ ${inputs.monthlySavings?.toLocaleString('pt-BR')}
      - Retorno Bruto: ${inputs.expectedReturn}% a.a.
      - Impacto Final (Diferença de Custos): R$ ${diffFinal.toLocaleString('pt-BR')}

      DIRETRIZES PARA O RELATÓRIO:
      1. Explique como o prazo de ${duration} anos potencializa o impacto das taxas ("fee drag").
      2. Equilíbrio Estratégico: Justifique custos estruturais (como Offshore ou consultoria sênior) como investimentos em segurança jurídica e sucessória, não apenas como "despesas".
      3. Analise o diferencial de R$ ${diffFinal.toLocaleString('pt-BR')} como capital perdido ou preservado através da eficiência fiscal.
      4. Mantenha um tom profissional, exclusivo, sênior e minimalista. Use português impecável.
    `;
  } else {
    prompt = `
      Como um consultor sênior da R Anjos Consultoria, analise os seguintes dados de planejamento de aposentadoria:
      
      OBJETIVO:
      - Renda Desejada: R$ ${inputs.desiredIncome?.toLocaleString('pt-BR')} / mês
      - Capital Necessário (Regra dos 4%): R$ ${results.requiredCapital4Percent?.toLocaleString('pt-BR')}
      - Prazo: ${inputs.simulationYears} anos
      - Retorno Real Esperado: ${inputs.expectedReturn}% (${inputs.returnPeriodType === 'MONTHLY' ? 'mês' : 'ano'})
      
      CAPACIDADE E RESULTADOS:
      - Patrimônio Alcançado: R$ ${results.futureValue.toLocaleString('pt-BR')}
      - Renda Mensal Possível (Capacidade Atual): R$ ${results.sustainableMonthlyIncome?.toLocaleString('pt-BR')}
      
      AJUSTES TÉCNICOS CALCULADOS PARA ATINGIR A META:
      - Aporte Mensal Necessário (para manter o prazo): R$ ${results.requiredMonthlySavings?.toLocaleString('pt-BR')}
      - Prazo Necessário (com o aporte atual): ${results.requiredYears?.toFixed(1)} anos
      - Renda Alcançável (com capacidade e prazo atuais): R$ ${results.achievableMonthlyIncome?.toLocaleString('pt-BR')}

      DIRETRIZES PARA A ANÁLISE:
      1. Compare o Capital Necessário com o Capital Alcançado. 
      2. Utilize os dados quantitativos acima (Aporte Necessário de R$ ${results.requiredMonthlySavings?.toLocaleString('pt-BR')}, Prazo de ${results.requiredYears?.toFixed(1)} anos) para fundamentar as providências sugeridas.
      3. Reforce que retornos reais de 4% a 7% são a maior probabilidade estatística em portfólios globais e que promessas maiores são perigosas.
      4. Destaque as vantagens de custo baixo, retorno e sucessão internacional.
      5. Encerre mencionando o curso "Aposentadoria Global" como a conclusão lógica para dominar essas estratégias.
      
      Mantenha um tom sofisticado, minimalista e profissional.
    `;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });
    return response.text || "Desculpe, não foi possível gerar a análise no momento.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Erro na conexão com nossa inteligência artificial de consultoria.";
  }
};
