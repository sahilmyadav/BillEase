# 💼 InvoiceMaster

### Professional Invoice & Billing Management System

[![Java](https://img.shields.io/badge/Java-21-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.4-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue.svg)](https://www.mysql.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](https://github.com/sahil/invoicemaster)

> A complete enterprise solution for managing invoices, products, orders, and payments. Built from scratch with modern technologies and industry best practices.

**💻 Created & Developed by:** [Sahil](https://github.com/sahil)  
**📅 Project Started:** 2025  
**🎯 Purpose:** Professional billing and invoice management for businesses

---

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Configuration](#configuration)
- [Database](#database)
- [Security](#security)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### 🎯 What is InvoiceMaster?

InvoiceMaster is a powerful, enterprise-grade billing management system I built to handle all aspects of invoicing and order management. It's designed for businesses that need a reliable, scalable solution for managing their billing operations.

### ✨ Core Features

#### 🔐 Security & Authentication
- JWT-based authentication with secure token management
- Role-based access control (Admin & User roles)
- Password encryption with BCrypt
- Protected API endpoints

#### 📦 Product Management
- Complete product catalog with categories
- Product CRUD operations with image support
- Category-based organization
- Real-time inventory tracking

#### 🛒 Order & Invoice System
- Full order lifecycle management
- Automatic invoice generation
- Order tracking with unique IDs
- Customer information management

#### 💳 Payment Processing
- Razorpay payment gateway integration
- Multiple payment methods support
- Payment status tracking
- Secure transaction handling

#### 📊 Analytics & Reporting
- Real-time dashboard with business metrics
- Sales analytics and trends
- Revenue tracking
- Export reports to PDF, Excel, CSV

#### ☁️ Cloud Integration
- AWS S3 for file storage
- Image upload and management
- Scalable storage solution

#### 📧 Communication
- Automated email notifications
- Invoice delivery via email
- Order confirmation emails
- SMTP integration

### Technical Features
- 🔄 **RESTful API** - Well-structured REST API with proper HTTP methods
- 📚 **API Documentation** - Interactive Swagger/OpenAPI documentation
- 🚀 **Caching** - Caffeine cache for improved performance
- 🔒 **Security** - Rate limiting, CORS configuration, SQL injection prevention
- 📝 **Audit Logging** - Comprehensive audit trail with user tracking
- 🗄️ **Database Migration** - Flyway for version-controlled schema management
- ⚡ **Performance** - Connection pooling, query optimization, pagination support
- 🎯 **Exception Handling** - Global exception handling with consistent error responses
- ✅ **Validation** - Bean validation with Jakarta Validation API
- 🔍 **Monitoring** - Spring Boot Actuator endpoints for health and metrics

---

## 🛠️ Technology Stack

### Backend
- **Java 21** - Latest LTS version with modern language features
- **Spring Boot 3.4.4** - Comprehensive framework for building production-ready applications
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Data access layer with Hibernate
- **MySQL 8.0** - Relational database
- **Flyway** - Database migration tool

### Libraries & Tools
- **Lombok** - Reduce boilerplate code
- **MapStruct** - Type-safe bean mapping
- **Caffeine** - High-performance caching
- **Bucket4j** - Rate limiting
- **JJWT** - JWT token generation and validation
- **Apache POI** - Excel file generation
- **iText7** - PDF generation
- **SpringDoc OpenAPI** - API documentation

### Cloud & External Services
- **AWS S3** - File storage
- **Razorpay** - Payment processing
- **Gmail SMTP** - Email delivery

---

## 🏭️ Project Architecture

InvoiceMaster follows a clean, layered architecture:

```
invoicemaster/
├── src/main/java/com/sahil/invoicemaster/
│   ├── config/              # Configuration classes
│   │   ├── CacheConfig.java
│   │   ├── DataInitializer.java
│   │   ├── JpaAuditingConfig.java
│   │   ├── OpenApiConfig.java
│   │   └── SecurityConfig.java
│   ├── controller/          # REST controllers
│   │   ├── AuthController.java
│   │   ├── CategoryController.java
│   │   ├── DashboardController.java
│   │   ├── ItemController.java
│   │   ├── OrderController.java
│   │   ├── PaymentController.java
│   │   └── UserController.java
│   ├── entity/              # JPA entities
│   │   ├── BaseEntity.java
│   │   ├── CategoryEntity.java
│   │   ├── ItemEntity.java
│   │   ├── OrderEntity.java
│   │   ├── OrderItemEntity.java
│   │   └── UserEntity.java
│   ├── repository/          # Data repositories
│   ├── service/             # Business logic
│   │   └── impl/            # Service implementations
│   ├── dto/                 # Data Transfer Objects
│   ├── exception/           # Custom exceptions
│   ├── filter/              # Security filters
│   ├── util/                # Utility classes
│   └── InvoiceMasterApplication.java
├── src/main/resources/
│   ├── application.properties
│   ├── application-dev.properties
│   ├── application-prod.properties
│   └── db/migration/        # Flyway migration scripts
└── pom.xml
```

---

## 🚀 Getting Started

### Prerequisites

- **Java 21** or higher
- **Maven 3.8+**
- **MySQL 8.0+**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sahil/invoicemaster.git
   cd invoicemaster
   ```

2. **Configure MySQL Database**
   ```sql
   CREATE DATABASE invoicemaster_db;
   CREATE USER 'sahil'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON invoicemaster_db.* TO 'sahil'@'localhost';
   FLUSH PRIVILEGES;
   ```

3. **Update application.properties**
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/invoicemaster_db
   spring.datasource.username=sahil
   spring.datasource.password=your_password
   ```

4. **Build the project**
   ```bash
   ./mvnw clean package
   ```

5. **Run the application**
   ```bash
   ./mvnw spring-boot:run
   ```

6. **Access the application**
   - API Base URL: `http://localhost:8080/api/v1.0`
   - Swagger UI: `http://localhost:8080/api/v1.0/swagger-ui.html`
   - Health Check: `http://localhost:8080/api/v1.0/actuator/health`

### Default Admin Account

```
Email: admin@admin.com
Password: 12345
```

**⚠️ Important:** Change the default admin password in production!

---

## 📚 API Documentation

### Interactive Documentation

Access the interactive Swagger UI at:
```
http://localhost:8080/api/v1.0/swagger-ui.html
```

### Key Endpoints

#### Authentication
- `POST /login` - User login
- `POST /encode` - Encode password (utility)

#### User Management (Admin Only)
- `POST /admin/register` - Create new user
- `GET /admin/users` - List all users
- `DELETE /admin/users/{id}` - Delete user

#### Categories
- `GET /categories` - List all categories
- `POST /categories` - Create category
- `PUT /categories/{id}` - Update category
- `DELETE /categories/{id}` - Delete category

#### Items
- `GET /items` - List all items
- `POST /items` - Create item
- `PUT /items/{id}` - Update item
- `DELETE /items/{id}` - Delete item

#### Orders
- `GET /orders` - List all orders
- `POST /orders` - Create order
- `GET /orders/{id}` - Get order details
- `DELETE /orders/{id}` - Delete order

#### Dashboard
- `GET /dashboard` - Get dashboard analytics

### Authentication

All protected endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

---

## ⚙️ Configuration

### Profiles

The application supports multiple profiles:

- **dev** - Development environment (detailed logging, auto-reload)
- **prod** - Production environment (optimized settings, security hardened)

Switch profiles:
```bash
./mvnw spring-boot:run -Dspring-boot.run.profiles=prod
```

### Environment Variables

Key environment variables:

```bash
# Database
DB_HOST=localhost
DB_PORT=3306
DB_NAME=invoicemaster_db
DB_USERNAME=sahil
DB_PASSWORD=your_secure_password

# AWS S3
AWS_ACCESS_KEY=your_access_key
AWS_SECRET_KEY=your_secret_key
AWS_REGION=ap-south-1
AWS_BUCKET_NAME=your_bucket_name

# JWT
JWT_SECRET_KEY=your_secret_key_here
JWT_EXPIRATION_MS=36000000

# Razorpay
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_secret_key

# Email
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
```

---

## 🗄️ Database

### Schema Management

The application uses **Flyway** for database migrations. Migration scripts are located in:
```
src/main/resources/db/migration/
```

### Migration Commands

```bash
# Run migrations
./mvnw flyway:migrate

# Get migration info
./mvnw flyway:info

# Clean database (⚠️ USE WITH CAUTION)
./mvnw flyway:clean
```

---

## 🔒 Security

### Features

- JWT-based stateless authentication
- Password encryption with BCrypt
- Role-based access control (RBAC)
- CORS configuration
- SQL injection prevention
- Rate limiting
- Input validation
- Audit logging

### Security Best Practices

1. **Change default credentials** in production
2. **Use strong JWT secret keys** (256-bit minimum)
3. **Enable HTTPS** in production
4. **Configure proper CORS** origins
5. **Regular security audits** and dependency updates
6. **Implement rate limiting** on sensitive endpoints
7. **Use environment variables** for secrets

---

## 🧪 Testing

### Run Tests

```bash
# Run all tests
./mvnw test

# Run with coverage
./mvnw test jacoco:report

# Run integration tests
./mvnw verify
```

---

## 🚢 Deployment

### JAR Deployment

```bash
# Build JAR
./mvnw clean package -DskipTests

# Run JAR
java -jar target/invoicemaster-1.0.0.jar
```

### Docker Deployment

```dockerfile
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY target/invoicemaster-1.0.0.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

```bash
# Build and run
docker build -t invoicemaster .
docker run -p 8080:8080 invoicemaster
```

### Cloud Deployment

Compatible with:
- AWS Elastic Beanstalk
- Google Cloud Platform
- Microsoft Azure
- Heroku
- Digital Ocean

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sahil**
- Email: sahil@example.com
- GitHub: [@sahil](https://github.com/sahil)

---

## 🙏 Acknowledgments

- Spring Boot Team for the amazing framework
- All open-source contributors
- The Java community

---

## 📞 Support

For support, email sahil@example.com or open an issue in the repository.

---

<div align="center">
  <sub>Built with ❤️ by Sahil</sub>
</div>
