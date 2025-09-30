export interface CampaignData {
  name: string;
  roas: number;
}

export interface GoogleAdsPortfolioData {
  totalBudget: string;
  totalRevenue: string;
  overallROAS: string;
  campaigns: CampaignData[];
}

export const mockGoogleAdsPortfolioData: GoogleAdsPortfolioData = {
  totalBudget: '₹27,812,351.10',
  totalRevenue: '₹318,600,000',
  overallROAS: '11.45x',
  campaigns: [
    {
      name: 'GoIreland',
      roas: 16.4
    },
    {
      name: 'GoFrance', 
      roas: 8.6
    },
    {
      name: 'GoUK',
      roas: 7.0
    }
  ]
};