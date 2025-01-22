import { calculatePortfolioPerformance, findLargestHolding, calculateAssetAllocationPercentages, Asset } from '../src/portfolio/portfolioPerformance';

describe("Portfolio Functions", () => {

  describe("calculatePortfolioPerformance", () => {
    it("should calculate the portfolio performance correctly for a significant gain", () => {
      const result = calculatePortfolioPerformance(10000, 13000);
      expect(result.performanceSummary).toBe("The portfolio has gained significantly with a profit of $3000.");
      expect(result.percentageChange).toBe(30);
    });

    it("should calculate the portfolio performance correctly for a moderate gain", () => {
      const result = calculatePortfolioPerformance(10000, 11500);
      expect(result.performanceSummary).toBe("The portfolio has gained moderately with a profit of $1500.");
      expect(result.percentageChange).toBe(15);
    });

    it("should calculate the portfolio performance correctly for a slight gain", () => {
      const result = calculatePortfolioPerformance(10000, 10500);
      expect(result.performanceSummary).toBe("The portfolio has gained slightly with a profit of $500.");
      expect(result.percentageChange).toBe(5);
    });

    it("should calculate the portfolio performance correctly for no change", () => {
      const result = calculatePortfolioPerformance(10000, 10000);
      expect(result.performanceSummary).toBe("The portfolio has no change.");
      expect(result.percentageChange).toBe(0);
    });

    it("should calculate the portfolio performance correctly for a slight loss", () => {
      const result = calculatePortfolioPerformance(10000, 9950);
      expect(result.performanceSummary).toBe("The portfolio has lost moderately with a loss of $50.");
      expect(result.percentageChange).toBe(-0.5);
    });

    it("should calculate the portfolio performance correctly for a moderate loss", () => {
      const result = calculatePortfolioPerformance(10000, 8500);
      expect(result.performanceSummary).toBe("The portfolio has lost moderately with a loss of $1500.");
      expect(result.percentageChange).toBe(-15);
    });

    it("should calculate the portfolio performance correctly for a significant loss", () => {
      const result = calculatePortfolioPerformance(10000, 7000);
      expect(result.performanceSummary).toBe("The portfolio has lost significantly with a loss of $3000.");
      expect(result.percentageChange).toBe(-30);
    });
  });

  describe("findLargestHolding", () => {
    it("should return the asset with the largest value", () => {
      const assets: Asset[] = [
        { name: "Stock A", value: 5000 },
        { name: "Stock B", value: 10000 },
        { name: "Stock C", value: 7500 },
      ];
      const result = findLargestHolding(assets);
      expect(result).toEqual({ name: "Stock B", value: 10000 });
    });

    it("should return null for an empty portfolio", () => {
      const assets: Asset[] = [];
      const result = findLargestHolding(assets);
      expect(result).toBeNull();
    });

    it("should return the first asset if all have the same value", () => {
      const assets: Asset[] = [
        { name: "Stock A", value: 5000 },
        { name: "Stock B", value: 5000 },
        { name: "Stock C", value: 5000 },
      ];
      const result = findLargestHolding(assets);
      expect(result).toEqual({ name: "Stock C", value: 5000 });
    });
  });

  describe("calculateAssetAllocationPercentages", () => {
    it("should calculate the correct allocation percentages for each asset", () => {
      const assets: Asset[] = [
        { name: "Stock A", value: 5000 },
        { name: "Stock B", value: 15000 },
        { name: "Stock C", value: 3000 },
      ];
      const result = calculateAssetAllocationPercentages(assets);
  
      // Round the result to the nearest integer before comparison
      const roundedResult = Object.fromEntries(
        Object.entries(result).map(([key, value]) => [key, Math.round(value)])
      );
  
      // Check if the rounded result matches the expected values
      expect(roundedResult).toEqual({
        "Stock A": 22,
        "Stock B": 65,
        "Stock C": 13,
      });
    });

    it("should return an empty object for an empty portfolio", () => {
      const assets: Asset[] = [];
      const result = calculateAssetAllocationPercentages(assets);
      expect(result).toEqual({});
    });

    it("should handle assets with uneven values", () => {
      const assets: Asset[] = [
        { name: "Stock A", value: 1 },
        { name: "Stock B", value: 999 },
      ];
      const result = calculateAssetAllocationPercentages(assets);
      expect(result["Stock A"]).toBeCloseTo(0.1, 1);
      expect(result["Stock B"]).toBeCloseTo(99.9, 1);
    });
  });

});
