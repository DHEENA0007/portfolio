// Mock data for second Google Analytics acquisition overview dashboard

export const mockRootProps2 = {
  activeUsers: "183K",
  newUsers: "181K",
  activeUsersLast30Min: 24,
  timeSeriesData: [
    { month: "01 Oct", value: 400 },
    { month: "01 Jan", value: 1200 },
    { month: "01 Apr", value: 800 },
    { month: "01 Jul", value: 1000 }
  ],
  activeUsersPerMinute: [
    { time: 1, users: 10 },
    { time: 2, users: 12 },
    { time: 3, users: 5 },
    { time: 4, users: 8 },
    { time: 5, users: 14 },
    { time: 6, users: 16 },
    { time: 7, users: 18 },
    { time: 8, users: 20 }
  ],
  topCountries: [
    { country: "India" as const, users: 12 },
    { country: "China" as const, users: 2 },
    { country: "Ireland" as const, users: 2 },
    { country: "Netherlands" as const, users: 2 },
    { country: "Singapore" as const, users: 2 }
  ]
};