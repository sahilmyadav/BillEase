<div align="center">

# 🧾 BillEase

### Professional Invoice & Billing Management System

[![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.4-brightgreen?style=for-the-badge&logo=spring)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?style=for-the-badge&logo=mysql)](https://www.mysql.com/)
[![AWS](https://img.shields.io/badge/AWS-S3-orange?style=for-the-badge&logo=amazon-aws)](https://aws.amazon.com/s3/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**A full-stack, enterprise-grade billing solution with modern UI/UX, secure payments, and cloud integration**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Screenshots](#-screenshots) • [API Docs](#-api-documentation)

---

</div>

## 📖 About

**BillEase** is a comprehensive invoice and billing management system designed from the ground up to handle enterprise-level operations. Built with cutting-edge technologies, it provides an intuitive interface for managing products, categories, orders, customers, and payments—all in one place.

### ✨ Highlights

- 🎨 **Modern UI/UX** - Sleek, gradient-based design with smooth animations
- 🔐 **Secure Authentication** - JWT-based auth with role-based access control (ADMIN/USER)
- 💳 **Payment Integration** - Razorpay integration for seamless online payments
- ☁️ **Cloud Storage** - AWS S3 for scalable image/file management
- 📊 **Real-time Dashboard** - Live sales metrics and order tracking
- 📱 **Responsive Design** - Works flawlessly on desktop, tablet, and mobile
- 🚀 **Production Ready** - Rate limiting, caching, validation, and monitoring

---

## 🎯 Features

### 🛒 Core Functionality

| Feature | Description |
|---------|-------------|
| **Item Management** | Add, edit, delete items with images and categorization |
| **Category Management** | Organize products into customizable categories |
| **Order Processing** | Create orders with multiple items, apply discounts, manage payments |
| **User Management** | Admin controls for user roles and permissions |
| **Invoice Generation** | Auto-generate professional invoices (PDF/Excel export ready) |
| **Payment Tracking** | Monitor payment status (PENDING, COMPLETED, FAILED) |
| **Search & Filter** | Fast search across items, orders, and customers |
| **Order History** | Complete audit trail of all transactions |

### 🔒 Security & Performance

- 🔑 **JWT Authentication** - Secure token-based sessions
- 🛡️ **Spring Security** - Protected endpoints with role-based authorization
- ⚡ **Caching** - Caffeine cache for lightning-fast responses
- 🚦 **Rate Limiting** - Bucket4j integration to prevent abuse
- ✅ **Input Validation** - Comprehensive validation at all layers
- 📝 **Audit Logging** - Track all critical operations

### 📤 Advanced Features

- 📧 **Email Notifications** - Automated order confirmations
- 📊 **Analytics Dashboard** - Today's sales, order counts, and trends
- 🗄️ **Database Migration** - Flyway for version-controlled schema updates
- 📄 **API Documentation** - Interactive Swagger/OpenAPI docs
- 🔄 **Actuator Monitoring** - Health checks and metrics endpoints

---

## 🛠️ Tech Stack

### Backend

```yaml
Framework:        Spring Boot 3.4.4
Language:         Java 21
Database:         MySQL 8.0
ORM:              Spring Data JPA / Hibernate
Security:         Spring Security + JWT
Cloud Storage:    AWS S3 SDK
Payment Gateway:  Razorpay
Caching:          Caffeine
Rate Limiting:    Bucket4j
Validation:       Hibernate Validator
Migration:        Flyway
Documentation:    SpringDoc OpenAPI
Monitoring:       Spring Boot Actuator
Build Tool:       Maven
```

### Frontend

```yaml
Framework:        React 19.0
Routing:          React Router DOM v7
HTTP Client:      Axios
Styling:          Bootstrap 5.3 + Custom CSS
Icons:            Bootstrap Icons
Notifications:    React Hot Toast
Build Tool:       Vite
```

---

## 🚀 Getting Started

### Prerequisites

- ☕ **Java 21** or higher
- 🗄️ **MySQL 8.0** or higher
- 🟢 **Node.js 18+** and npm
- 🔑 **AWS Account** (for S3 bucket)
- 💳 **Razorpay Account** (for payments)

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/billease.git
cd billease
```

#### 2️⃣ Setup Backend

```bash
cd billingsoftware

# Configure database in src/main/resources/application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/billease
spring.datasource.username=your_db_user
spring.datasource.password=your_db_password

# Add AWS credentials
aws.s3.access-key=YOUR_ACCESS_KEY
aws.s3.secret-key=YOUR_SECRET_KEY
aws.s3.bucket-name=YOUR_BUCKET_NAME
aws.s3.region=us-east-1

# Add Razorpay credentials
razorpay.key.id=YOUR_RAZORPAY_KEY_ID
razorpay.key.secret=YOUR_RAZORPAY_KEY_SECRET

# Run the application
./mvnw spring-boot:run
```

Backend will start at: `http://localhost:8080`

#### 3️⃣ Setup Frontend

```bash
cd ../client

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will start at: `http://localhost:5173`

### 🗄️ Database Setup

The application uses **Flyway** for automatic database migrations. Tables will be created automatically on first run.

**Manual Setup (Optional):**
```sql
CREATE DATABASE billease;
USE billease;
-- Tables will be auto-created by Flyway
```

---

## 📸 Screenshots

### 🏠 Dashboard
<div align="center">
  <img src="docs/screenshots/dashboard.gif" alt="Dashboard" width="800px">
  <p><i>Real-time sales metrics and recent orders</i></p>
</div>

### 🛍️ Item Management
<div align="center">
  <img src="docs/screenshots/items.gif" alt="Items" width="800px">
  <p><i>Modern card-based item display with search and filters</i></p>
</div>

### 🛒 Order Processing
<div align="center">
  <img src="docs/screenshots/order.gif" alt="Orders" width="800px">
  <p><i>Intuitive order creation with real-time cart updates</i></p>
</div>

### 📱 Responsive Design
<div align="center">
  <img src="docs/screenshots/responsive.gif" alt="Responsive" width="800px">
  <p><i>Seamless experience across all devices</i></p>
</div>

---

## 📡 API Documentation

Once the backend is running, access interactive API documentation at:

```
http://localhost:8080/swagger-ui.html
```

### 🔑 Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | User login (returns JWT token) |
| POST | `/api/auth/register` | Register new user |

### 📦 Item Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all items |
| POST | `/api/items` | Create new item (ADMIN) |
| PUT | `/api/items/{id}` | Update item (ADMIN) |
| DELETE | `/api/items/{id}` | Delete item (ADMIN) |

### 🏷️ Category Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| POST | `/api/categories` | Create category (ADMIN) |
| PUT | `/api/categories/{id}` | Update category (ADMIN) |
| DELETE | `/api/categories/{id}` | Delete category (ADMIN) |

### 🧾 Order Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | Get all orders |
| POST | `/api/orders` | Create new order |
| GET | `/api/orders/{id}` | Get order details |
| GET | `/api/orders/history` | Get order history |

---

## 🎨 Design System

### Color Palette

```css
--primary: #6366F1      /* Indigo */
--success: #10B981      /* Green */
--warning: #F59E0B      /* Amber */
--danger: #EF4444       /* Red */
--bg-dark: #1F2937      /* Dark Gray */
--bg-card: #374151      /* Card Background */
--text-primary: #F9FAFB /* Light Text */
--text-secondary: #9CA3AF /* Muted Text */
```

### Typography

- **Font Family**: System fonts (native look & feel)
- **Headings**: 600-700 weight with gradient effects
- **Body**: 400 weight, 1.5 line-height for readability

---

## 📂 Project Structure

```
billease/
├── billingsoftware/          # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/sahil/billease/
│   │   │   │   ├── config/      # Security, AWS, CORS configs
│   │   │   │   ├── controller/  # REST Controllers
│   │   │   │   ├── dto/         # Data Transfer Objects
│   │   │   │   ├── entity/      # JPA Entities
│   │   │   │   ├── exception/   # Custom exceptions
│   │   │   │   ├── repository/  # JPA Repositories
│   │   │   │   ├── security/    # JWT & Auth
│   │   │   │   └── service/     # Business logic
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── db/migration/  # Flyway scripts
│   │   └── test/
│   ├── uploads/                # Local file storage
│   └── pom.xml
│
└── client/                     # React Frontend
    ├── src/
    │   ├── components/         # Reusable components
    │   │   ├── ItemForm/
    │   │   ├── CategoryForm/
    │   │   ├── ItemList/
    │   │   └── Menubar/
    │   ├── context/           # React Context (Auth, Cart)
    │   ├── pages/             # Page components
    │   │   ├── Dashboard/
    │   │   ├── ManageItems/
    │   │   ├── ManageCategory/
    │   │   ├── Explore/
    │   │   └── OrderHistory/
    │   ├── Service/           # API services
    │   └── App.jsx            # Root component
    └── package.json
```

---

## 🧪 Testing

### Backend Tests

```bash
cd billingsoftware
./mvnw test
```

### Frontend Tests

```bash
cd client
npm run test
```

---

## 🚀 Deployment

### Backend (Spring Boot)

```bash
# Build JAR
./mvnw clean package

# Run production build
java -jar target/billease-1.0.0.jar
```

### Frontend (React)

```bash
# Build for production
npm run build

# Preview build
npm run preview
```

**Deploy to:**
- Backend: AWS EC2, Heroku, Railway, Render
- Frontend: Vercel, Netlify, AWS Amplify
- Database: AWS RDS, DigitalOcean, PlanetScale

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sahil Yadav**

- GitHub: [@sahilyadav](https://github.com/yourusername)
- Email: yadavsahil1836@gmail.com

---

## 🙏 Acknowledgments

- [Spring Boot](https://spring.io/projects/spring-boot) - Backend framework
- [React](https://react.dev/) - Frontend library
- [Bootstrap](https://getbootstrap.com/) - UI components
- [Razorpay](https://razorpay.com/) - Payment gateway
- [AWS](https://aws.amazon.com/) - Cloud infrastructure

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ by Sahil Yadav**

</div>
# BillEase
