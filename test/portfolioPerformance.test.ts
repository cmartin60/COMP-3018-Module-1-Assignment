import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
    it("should correctly calculate for significant gain (> 20%)", () => {
      const result = calculatePortfolioPerformance(10000, 12500);
      expect(result).toEqual({
        initialInvestment: 10000,
        currentValue: 12500,
        profitOrLoss: 2500,
        percentageChange: 25,
        performanceSummary: "Gained Significantly",
      });
    });
  
    it("should correctly calculate for moderate gain (10% to 20%)", () => {
      const result = calculatePortfolioPerformance(10000, 11500);
      expect(result).toEqual({
        initialInvestment: 10000,
        currentValue: 11500,
        profitOrLoss: 1500,
        percentageChange: 15,
        performanceSummary: "Gained Moderately",
      });
    });
  
    it("should correctly calculate for slight gain (0.1% to 10%)", () => {
      const result = calculatePortfolioPerformance(10000, 10500);
      expect(result).toEqual({
        initialInvestment: 10000,
        currentValue: 10500,
        profitOrLoss: 500,
        percentageChange: 5,
        performanceSummary: "Gained Slightly",
      });
    });
  
    it("should correctly calculate for no change (0%)", () => {
      const result = calculatePortfolioPerformance(10000, 10000);
      expect(result).toEqual({
        initialInvestment: 10000,
        currentValue: 10000,
        profitOrLoss: 0,
        percentageChange: 0,
        performanceSummary: "No Change",
      });
    });
  
    it("should correctly calculate for slight loss (-0.1% to -10%)", () => {
      const result = calculatePortfolioPerformance(10000, 9500);
      expect(result).toEqual({
        initialInvestment: 10000,
        currentValue: 9500,
        profitOrLoss: -500,
        percentageChange: -5,
        performanceSummary: "Lost Slightly",
      });
    });
  
    it("should correctly calculate for moderate loss (-10% to -20%)", () => {
      const result = calculatePortfolioPerformance(10000, 8500);
      expect(result).toEqual({
        initialInvestment: 10000,
        currentValue: 8500,
        profitOrLoss: -1500,
        percentageChange: -15,
        performanceSummary: "Lost Moderately",
      });
    });
  
    it("should correctly calculate for significant loss (< -20%)", () => {
      const result = calculatePortfolioPerformance(10000, 7000);
      expect(result).toEqual({
        initialInvestment: 10000,
        currentValue: 7000,
        profitOrLoss: -3000,
        percentageChange: -30,
        performanceSummary: "Lost Significantly",
      });
    });
  });