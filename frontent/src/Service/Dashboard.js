import api from '../config/api.js';

/**
 * Fetch dashboard data (USER|ADMIN)
 * GET /api/v1.0/dashboard
 * Returns: {todaySales, todayOrderCount, recentOrders}
 */
export const fetchDashboardData = async () => {
    return await api.get('/dashboard');
}
