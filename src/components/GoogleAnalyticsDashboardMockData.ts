// Mock data for Google Analytics acquisition overview dashboard

export const mockRootProps = {
  activeUsers: "299K",
  newUsers: "300K",
  activeUsersLast30Min: 23,
  timeSeriesData: [
    { month: "Oct", value: 1100 },
    { month: "Nov", value: 1200 },
    { month: "Dec", value: 1050 },
    { month: "Jan", value: 3200 },
    { month: "Feb", value: 2800 },
    { month: "Apr", value: 2700 },
    { month: "Jul", value: 1500 }
  ],
  activeUsersPerMinute: [
    { time: 1, users: 8 },
    { time: 2, users: 12 },
    { time: 3, users: 6 },
    { time: 4, users: 15 },
    { time: 5, users: 4 },
    { time: 6, users: 18 },
    { time: 7, users: 14 }
  ],
  topCountries: [
    { country: "India" as const, users: 11 },
    { country: "China" as const, users: 2 },
    { country: "Ireland" as const, users: 2 },
    { country: "Netherlands" as const, users: 2 },
    { country: "Singapore" as const, users: 2 }
  ]
};