import api from '../config/api.js';

/**
 * Fetch all categories (USER|ADMIN)
 * GET /api/v1.0/categories
 */
export const fetchCategories = async () => {
    return await api.get('/categories');
}

/**
 * Add new category (ADMIN only)
 * POST /api/v1.0/admin/categories
 * @param {FormData} category - FormData with 'category' (JSON) and 'file' (image)
 */
export const addCategory = async (category) => {
    return await api.post('/admin/categories', category, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
}

/**
 * Delete category by ID (ADMIN only)
 * DELETE /api/v1.0/admin/categories/{categoryId}
 */
export const deleteCategory = async (categoryId) => {
    return await api.delete(`/admin/categories/${categoryId}`);
}
