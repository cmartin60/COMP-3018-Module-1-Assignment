//Define interface for the function
interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {

	const profitOrLoss = currentValue - initialInvestment;
	const percentageChange = (profitOrLoss / initialInvestment) * 100;

	let performanceSummary;
	if (percentageChange > 20) {
		performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
	} else {
		performanceSummary = `The portfolio has performed poorly.`;
	}

	return {
		initialInvestment,
		currentValue,
		profitOrLoss,
		percentageChange,
		performanceSummary,
	};
}