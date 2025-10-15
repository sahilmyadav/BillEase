import api from '../config/api.js';

/**
 * Create Razorpay order for UPI payment
 * POST /api/v1.0/payments/create-order
 */
export const createRazorpayOrder = async (data) => {
    return await api.post('/payments/create-order', data);
}

/**
 * Verify Razorpay payment signature
 * POST /api/v1.0/payments/verify
 */
export const verifyPayment = async (paymentData) => {
    return await api.post('/payments/verify', paymentData);
}
