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

    //used nested ternary operators
    const performanceSummary = 
        percentageChange > 20
            ? "Gained Significantly"
            : percentageChange > 10
            ? "Gained Moderately"
            : percentageChange > 0.1
            ? "Gained Slightly"
            : percentageChange === 0
            ? "No Change"
            : percentageChange > -10
            ? "Lost Slightly"
            : percentageChange > -20
            ? "Lost Moderately"
            : "Lost Significantly";

	return {
		initialInvestment,
		currentValue,
		profitOrLoss,
		percentageChange,
		performanceSummary,
	};
}