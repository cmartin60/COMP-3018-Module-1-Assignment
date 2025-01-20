import { calculatePortfolioPerformance } from '../src/portfolio/portfolioPerformance';
import { findLargestHolding, calculateAssetAllocation } from '../src/portfolio/portfolioPerformance';
import { Asset } from '../src/portfolio/portfolioPerformance';  // Import Asset interface

describe("Portfolio Functions", () => {

  describe("calculatePortfolioPerformance", () => {
    it("should calculate the portfolio performance correctly for a significant gain", () => {
      const result = calculatePortfolioPerformance(10000, 13000);
      expect(result.performanceSummary).toBe("Gained Significantly");
      expect(result.percentageChange).toBe(30);
    });

    it("should calculate the portfolio performance correctly for a moderate gain", () => {
      const result = calculatePortfolioPerformance(10000, 11500);
      expect(result.performanceSummary).toBe("Gained Moderately");
      expect(result.percentageChange).toBe(15);
    });

    it("should calculate the portfolio performance correctly for a slight gain", () => {
      const result = calculatePortfolioPerformance(10000, 10500);
      expect(result.performanceSummary).toBe("Gained Slightly");
      expect(result.percentageChange).toBe(5);
    });

    it("should calculate the portfolio performance correctly for no change", () => {
      const result = calculatePortfolioPerformance(10000, 10000);
      expect(result.performanceSummary).toBe("No Change");
      expect(result.percentageChange).toBe(0);
    });

    it("should calculate the portfolio performance correctly for a slight loss", () => {
      const result = calculatePortfolioPerformance(10000, 9500);
      expect(result.performanceSummary).toBe("Lost Slightly");
      expect(result.percentageChange).toBe(-5);
    });

    it("should calculate the portfolio performance correctly for a moderate loss", () => {
      const result = calculatePortfolioPerformance(10000, 8500);
      expect(result.performanceSummary).toBe("Lost Moderately");
      expect(result.percentageChange).toBe(-15);
    });

    it("should calculate the portfolio performance correctly for a significant loss", () => {
      const result = calculatePortfolioPerformance(10000, 7000);
      expect(result.performanceSummary).toBe("Lost Significantly");
      expect(result.percentageChange).toBe(-30);
    });
  });

  describe("findLargestHolding", () => {
    it("should return the asset with the highest value", () => {
      const assets: Asset[] = [
        { name: "Stocks", value: 5000 },
        { name: "Bonds", value: 3000 },
        { name: "Real Estate", value: 7000 },
      ];
      expect(findLargestHolding(assets)).toEqual({ name: "Real Estate", value: 7000 });
    });

    it("should return the first asset when multiple have the same highest value", () => {
      const assets: Asset[] = [
        { name: "Stocks", value: 5000 },
        { name: "Bonds", value: 5000 },
        { name: "Real Estate", value: 2000 },
      ];
      expect(findLargestHolding(assets)).toEqual({ name: "Stocks", value: 5000 });
    });

    it("should return null for an empty portfolio", () => {
      const assets: Asset[] = [];
      expect(findLargestHolding(assets)).toBeNull();
    });

    it("should return the only asset when the portfolio has one asset", () => {
      const assets: Asset[] = [{ name: "Stocks", value: 5000 }];
      expect(findLargestHolding(assets)).toEqual({ name: "Stocks", value: 5000 });
    });
  });

  describe("calculateAssetAllocation", () => {
    it("should calculate allocation percentages correctly for a portfolio with different values", () => {
      const assets: Asset[] = [
        { name: "Stocks", value: 5000 },
        { name: "Bonds", value: 3000 },
        { name: "Real Estate", value: 2000 },
      ];
      expect(calculateAssetAllocation(assets)).toEqual([
        { name: "Stocks", allocationPercentage: 50 },
        { name: "Bonds", allocationPercentage: 30 },
        { name: "Real Estate", allocationPercentage: 20 },
      ]);
    });

    it("should calculate allocation percentages correctly for a portfolio with equal values", () => {
      const assets: Asset[] = [
        { name: "Stocks", value: 1000 },
        { name: "Bonds", value: 1000 },
        { name: "Real Estate", value: 1000 },
      ];
      expect(calculateAssetAllocation(assets)).toEqual([
        { name: "Stocks", allocationPercentage: 33.333333333333336 },
        { name: "Bonds", allocationPercentage: 33.333333333333336 },
        { name: "Real Estate", allocationPercentage: 33.333333333333336 },
      ]);
    });

    it("should handle a portfolio with one asset", () => {
      const assets: Asset[] = [{ name: "Stocks", value: 5000 }];
      expect(calculateAssetAllocation(assets)).toEqual([
        { name: "Stocks", allocationPercentage: 100 },
      ]);
    });

    it("should return an empty array for an empty portfolio", () => {
      const assets: Asset[] = [];
      expect(calculateAssetAllocation(assets)).toEqual([]);
    });

    it("should handle a portfolio with all zero values", () => {
      const assets: Asset[] = [
        { name: "Stocks", value: 0 },
        { name: "Bonds", value: 0 },
        { name: "Real Estate", value: 0 },
      ];
      expect(calculateAssetAllocation(assets)).toEqual([
        { name: "Stocks", allocationPercentage: 0 },
        { name: "Bonds", allocationPercentage: 0 },
        { name: "Real Estate", allocationPercentage: 0 },
      ]);
    });
  });

});
