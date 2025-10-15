-- =============================================
-- Advanced Billing & Invoice Management System
-- Initial Database Schema
-- Author: Sahil
-- Version: 2.0.0
-- =============================================

-- Create users table
CREATE TABLE IF NOT EXISTS tbl_users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(255),
    updated_by VARCHAR(255),
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at TIMESTAMP NULL,
    deleted_by VARCHAR(255),
    version BIGINT DEFAULT 0,
    INDEX idx_email (email),
    INDEX idx_user_id (user_id),
    INDEX idx_is_deleted (is_deleted)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create categories table
CREATE TABLE IF NOT EXISTS tbl_category (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    category_id VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    bg_color VARCHAR(50),
    img_url VARCHAR(500),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(255),
    updated_by VARCHAR(255),
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at TIMESTAMP NULL,
    deleted_by VARCHAR(255),
    version BIGINT DEFAULT 0,
    INDEX idx_category_id (category_id),
    INDEX idx_name (name),
    INDEX idx_is_deleted (is_deleted)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create items table
CREATE TABLE IF NOT EXISTS tbl_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    item_id VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(19, 2) NOT NULL,
    img_url VARCHAR(500),
    category_id BIGINT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(255),
    updated_by VARCHAR(255),
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
    deleted_at TIMESTAMP NULL,
    deleted_by VARCHAR(255),
    version BIGINT DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES tbl_category(id) ON DELETE RESTRICT,
    INDEX idx_item_id (item_id),
    INDEX idx_name (name),
    INDEX idx_category_id (category_id),
    INDEX idx_is_deleted (is_deleted)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create orders table
CREATE TABLE IF NOT EXISTS tbl_orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(255) UNIQUE NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50),
    subtotal DOUBLE NOT NULL,
    tax DOUBLE NOT NULL,
    grand_total DOUBLE NOT NULL,
    payment_method VARCHAR(50),
    payment_id VARCHAR(255),
    payment_signature VARCHAR(500),
    payment_status VARCHAR(50),
    created_at DATETIME NOT NULL,
    INDEX idx_order_id (order_id),
    INDEX idx_customer_name (customer_name),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create order items table
CREATE TABLE IF NOT EXISTS tbl_order_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    item_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES tbl_orders(id) ON DELETE CASCADE,
    INDEX idx_order_id (order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default admin user (password: 12345)
INSERT INTO tbl_users (user_id, name, email, password, role, created_by) 
VALUES (
    UUID(),
    'Administrator',
    'admin@admin.com',
    '$2a$10$HzANr1zXf5PzFqj3nRZZgOZj3wSFVDVGhXXjNLzQxKxOkZgXVY7uC',
    'ROLE_ADMIN',
    'SYSTEM'
) ON DUPLICATE KEY UPDATE email = email;
