import api from '../config/api.js';

/**
 * Fetch all items (USER|ADMIN)
 * GET /api/v1.0/items
 */
export const fetchItems = async () => {
    return await api.get('/items');
}

/**
 * Add new item (ADMIN only)
 * POST /api/v1.0/admin/items
 * @param {FormData} item - FormData with 'item' (JSON) and 'file' (image)
 */
export const addItem = async (item) => {
    return await api.post('/admin/items', item, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
}

/**
 * Delete item by ID (ADMIN only)
 * DELETE /api/v1.0/admin/items/{itemId}
 */
export const deleteItem = async (itemId) => {
    return await api.delete(`/admin/items/${itemId}`);
}
