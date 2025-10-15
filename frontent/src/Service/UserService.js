import api from '../config/api.js';

/**
 * Fetch all users (ADMIN only)
 * GET /api/v1.0/admin/users
 */
export const fetchUsers = async () => {
    return await api.get('/admin/users');
}

/**
 * Register new user (ADMIN only)
 * POST /api/v1.0/admin/register
 */
export const addUser = async (user) => {
   return await api.post('/admin/register', user);
}

/**
 * Delete user by ID (ADMIN only)
 * DELETE /api/v1.0/admin/users/{id}
 */
export const deleteUser = async (id) => {
    return await api.delete(`/admin/users/${id}`);
}
