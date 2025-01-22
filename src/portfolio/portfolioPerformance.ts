//Define interface for the PortfolioPerformance function
export interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {

	const profitOrLoss = currentValue - initialInvestment;
	const percentageChange = (profitOrLoss / initialInvestment) * 100;

    //used nested ternary operators and added proper comment.
    const performanceSummary = 
      percentageChange > 20
        ? `The portfolio has gained significantly with a profit of $${profitOrLoss}.`
        : percentageChange > 10
        ? `The portfolio has gained moderately with a profit of $${profitOrLoss}.`
        : percentageChange > 0.1
        ? `The portfolio has gained slightly with a profit of $${profitOrLoss}.`
        : percentageChange === 0
        ? `The portfolio has no change.`
        : percentageChange > -0.1
        ? `The portfolio has lost slightly with a loss of $${-profitOrLoss}.`
        : percentageChange > -20
        ? `The portfolio has lost moderately with a loss of $${-profitOrLoss}.`
        : `The portfolio has lost significantly with a loss of $${-profitOrLoss}.`;

	return {
		initialInvestment,
		currentValue,
		profitOrLoss,
		percentageChange,
		performanceSummary,
	};
}

// Additional finance-related functions
export interface Asset {
  name: string;
  value: number;
}

// Function to find the largest holding
export function findLargestHolding(assets: Asset[]): Asset | null {
  if (assets.length === 0) return null;
  return assets.reduce((largest, asset) => (largest.value > asset.value ? largest : asset));
}

  // Function to calculate asset allocation percentages
  export function calculateAssetAllocationPercentages(assets: Asset[]): { [key: string]: number } {
    const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
    return assets.reduce((percentages, asset) => {
      percentages[asset.name] = (asset.value / totalValue) * 100;
      return percentages;
    }, {} as { [key: string]: number });
  }
  