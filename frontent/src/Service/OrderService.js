import api from '../config/api.js';

/**
 * Fetch latest orders (USER|ADMIN)
 * GET /api/v1.0/orders/latest
 */
export const latestOrders = async () => {
    return await api.get('/orders/latest');
}

/**
 * Create new order (USER|ADMIN)
 * POST /api/v1.0/orders
 * @param {Object} order - Order details with cartItems, customer info, payment details
 */
export const createOrder = async (order) => {
    return await api.post('/orders', order);
}

/**
 * Delete order by ID (USER|ADMIN)
 * DELETE /api/v1.0/orders/{orderId}
 */
export const deleteOrder = async (id) => {
    return await api.delete(`/orders/${id}`);
}
