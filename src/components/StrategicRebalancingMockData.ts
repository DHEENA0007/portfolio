// No dynamic mock data required - all content is static text and metrics
export const strategicRebalancingData = {
  mainTitle: "My Strategic Rebalancing Act: From Paid Reliance to Organic Growth",
  
  phases: [
    {
      id: 1,
      title: "My Observation",
      subtitle: "(The Imbalance)",
      accentColor: "#f59e0b",
      metrics: [
        {
          value: "143K",
          label: "New Users",
          color: "#f59e0b"
        },
        {
          value: "High CAC",
          label: "98K New Users",
          color: "#ef4444"
        }
      ],
      description: "I identified a premature reliance on Paid Search, leading to high Customer Acquisition Cost (CAC)"
    },
    {
      id: 2,
      title: "My Insight", 
      subtitle: "(The Opportunity Gap)",
      accentColor: "#10b981",
      metrics: [
        {
          value: "98K",
          label: "New Users", 
          color: "#10b981"
        },
        {
          value: "45K",
          label: "New User Gap",
          color: "#8b5cf6"
        }
      ],
      description: "Untapped, Cost-Effective Potential",
      additionalDescription: "Engaged a data-driven strategy to strategy optimization and organic growth"
    },
    {
      id: 3,
      title: "My Projected Impact",
      subtitle: "(The Balanced Future)",
      accentColor: "#3b82f6",
      metrics: [
        {
          value: "98K",
          label: "New Users",
          color: "#3b82f6"
        }
      ],
      projectedMetrics: [
        {
          value: 15,
          prefix: "-",
          suffix: "%",
          label: "Overall CAC",
          color: "#10b981"
        },
        {
          value: 40,
          prefix: "+", 
          suffix: "%",
          label: "Organic Traffic",
          color: "#f59e0b"
        },
        {
          value: 1.2,
          prefix: "+$",
          suffix: "M",
          label: "Annual Revenue", 
          color: "#8b5cf6",
          decimals: 1
        }
      ],
      description: "My strategy projects significant cost reduction and revenue growth"
    }
  ]
} as const;

// No dynamic mock data required - all content is static text and metrics