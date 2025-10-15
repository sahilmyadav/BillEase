# BillEase

Modern point-of-sale (POS) and billing system with React frontend and Spring Boot backend. Built for fast checkout, inventory management, and business analytics.

## What is BillEase?

BillEase is a complete billing solution that helps shops and businesses:
- ✅ Create bills quickly at the counter
- ✅ Manage inventory (categories, items, pricing)
- ✅ Process payments (cash, Razorpay integration)
- ✅ Track orders and generate receipts
- ✅ Monitor sales with dashboard analytics
- ✅ Control user access (Admin/User roles)

## Architecture

```
┌─────────────────────────────────────────┐
│              BillEase                   │
├─────────────────────────────────────────┤
│  Frontend (React + Vite)               │  ← User interface
│  Port: 5173                            │
├─────────────────────────────────────────┤
│  Backend (Spring Boot)                 │  ← REST API
│  Port: 8080/api/v1.0                  │
├─────────────────────────────────────────┤
│  Database (MySQL)                      │  ← Data storage
│  Port: 3306                           │
└─────────────────────────────────────────┘
```

## How it works

### User Flow
1. Login → JWT authentication with role-based access
2. Browse catalog → Categories and items with search/filter
3. Add to cart → Real-time quantity and price calculations
4. Checkout → Customer info + payment method selection
5. Payment → Cash or Razorpay integration
6. Receipt → Order confirmation and receipt generation

### Admin Flow
1. Dashboard → Sales metrics, recent orders, analytics
2. Manage catalog → Add/edit categories and items
3. User management → Create users, assign roles
4. Order tracking → View and manage all orders

## Tech Stack

### Frontend (`frontent/`)
- React 19, Vite 6, React Router 7
- Bootstrap 5, Bootstrap Icons
- Axios for API calls, React Hot Toast for notifications

### Backend (`Backend/`)
- Java 21, Spring Boot 3.4.x, Spring Security
- MySQL 8, JPA/Hibernate
- JWT authentication, Razorpay payments
- Swagger/OpenAPI documentation

## Quick Start

### Prerequisites
- Node.js 18+ (for frontend)
- Java 21+ (for backend)
- MySQL 8+ (for database)
- Maven (usually bundled with Java IDE)

### 1. Database Setup
```sql
CREATE DATABASE billease_db;
```

### 2. Backend Setup
```bash
cd Backend/
# Configure src/main/resources/application.properties with your DB credentials
./mvnw spring-boot:run
```
Backend runs at: http://localhost:8080/api/v1.0

### 3. Frontend Setup
```bash
cd frontent/
npm install
# Create .env with VITE_API_BASE_URL=http://localhost:8080/api/v1.0
npm run dev
```
Frontend runs at: http://localhost:5173

### 4. Access the Application
- Frontend: http://localhost:5173
- API Docs: http://localhost:8080/api/v1.0/swagger-ui.html
- Login: admin@admin.com / 12345 (change in production!)

## Project Structure

```
BillEase/
├── frontent/                    # React frontend application
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/              # Main application pages
│   │   ├── Service/            # API service layer
│   │   ├── context/            # Global state management
│   │   └── config/             # App configuration
│   └── package.json
├── Backend/                     # Spring Boot backend API
│   ├── src/main/java/
│   │   ├── controller/         # REST endpoints
│   │   ├── service/            # Business logic
│   │   ├── entity/             # Database models
│   │   ├── repository/         # Data access
│   │   └── config/             # Security, CORS, etc.
│   └── pom.xml
└── README.md                    # This file
```

## Features

### Authentication & Security
- JWT-based authentication
- Role-based access control (Admin/User)
- Protected routes and API endpoints
- Secure password encryption

### Catalog Management
- Category organization
- Item management with images
- Price and inventory tracking
- Search and filtering

### Shopping Cart & Checkout
- Add/remove items with quantity control
- Real-time total calculations
- Customer information capture
- Multiple payment methods

### Payment Integration
- Cash payments
- Razorpay gateway integration
- Payment verification and tracking
- Receipt generation

### Dashboard & Analytics
- Sales overview and metrics
- Recent orders tracking
- Revenue analytics
- Business insights

### User Management (Admin)
- Create and manage users
- Role assignment
- User activity tracking

## API Endpoints

Authentication
- POST /login — User authentication
- POST /encode — Password encoding utility

Catalog
- GET/POST/PUT/DELETE /categories — Category management
- GET/POST/PUT/DELETE /items — Item management

Orders
- GET /orders — List orders
- POST /orders — Create order
- GET /orders/{id} — Order details

Payments
- POST /payments/create-order — Initialize payment
- POST /payments/verify — Verify payment

Admin
- POST /admin/register — Create user
- GET /admin/users — List users
- GET /dashboard — Analytics data

## Configuration

### Backend (`application.properties`)
```properties
# Database
spring.datasource.url=jdbc:mysql://localhost:3306/billease_db
spring.datasource.username=YOUR_USER
spring.datasource.password=YOUR_PASS

# JWT
jwt.secret.key=your_jwt_secret_key

# Razorpay (optional)
razorpay.key.id=your_razorpay_key_id
razorpay.key.secret=your_razorpay_secret
```

### Frontend (`.env`)
```env
VITE_API_BASE_URL=http://localhost:8080/api/v1.0
VITE_APP_NAME=BillEase
```

## Development

### Backend
```bash
cd Backend/
./mvnw spring-boot:run          # Start development server
./mvnw test                     # Run tests
./mvnw clean package           # Build JAR
```

### Frontend
```bash
cd frontent/
npm run dev                     # Start development server
npm run build                  # Production build
npm run lint                   # Code linting
```

## Production Deployment

### Backend
```bash
cd Backend/
./mvnw clean package -DskipTests
java -jar target/billease-*.jar
```

### Frontend
```bash
cd frontent/
npm run build
# Deploy dist/ folder to your web server
```

## Security Notes

Before going live:
1) Change default admin credentials
2) Use strong JWT secret key
3) Configure CORS properly
4) Enable HTTPS
5) Use environment variables for secrets

## Demo

Add screenshots or GIFs here:
- Login and dashboard
- Adding items to cart
- Checkout process
- Admin panel

## Troubleshooting

Backend won't start
- Check MySQL is running
- Verify database credentials in application.properties
- Ensure port 8080 is available

Frontend can't connect to backend
- Check VITE_API_BASE_URL in .env
- Verify backend is running on port 8080
- Check CORS configuration

Database connection issues
- Confirm database exists: SHOW DATABASES;
- Check MySQL user permissions
- Verify connection details

## Contributing

1) Fork the repository
2) Create a feature branch
3) Make your changes and add tests
4) Submit a pull request

## License
MIT

## Maintainer
Sahil Yadav • GitHub: @sahilmyadav • Email: sahilyadav@duck.com
