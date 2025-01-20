//Define interface for the PortfolioPerformance function
interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

// Define the Asset interface
interface Asset {
    name: string;
    value: number;
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

// Function to find the largest holding
export function findLargestHolding(assets: Asset[]): Asset | null {
    if (assets.length === 0) {
      return null;
    }
  
    // Used reduce to find the asset with the highest value
    return assets.reduce((largest, current) =>
      current.value > largest.value ? current : largest
    );
  }

  // Function to calculate asset allocation percentages
export function calculateAssetAllocation(assets: Asset[]): { name: string; allocationPercentage: number }[] {
    const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  
    // Return allocation percentages for each asset
    return assets.map((asset) => ({
      name: asset.name,
      allocationPercentage: totalValue === 0 ? 0 : (asset.value / totalValue) * 100,
    }));
  }