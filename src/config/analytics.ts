export const analyticsConfig = {
  enabled: true,
  counterVisible: true,
  demoMode: true,
  endpoint: import.meta.env.VITE_VISITS_API_URL as string | undefined,
  refreshInterval: 60000,
  demoToday: 24,
  demoMonth: 618,
};
