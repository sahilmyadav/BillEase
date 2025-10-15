# BillEase Frontend

A comprehensive React + Vite application for BillEase - modern bill management system with role-based access control and real-time cart functionality.

## 👤 Maintainer
- **Name:** Sahil Yadav
- **GitHub:** [sahilmyadav](https://github.com/sahilmyadav)
- **Email:** sahilyadav@duck.com

## 🚀 Tech Stack

### Core Technologies
- **React 19.0.0** - Frontend framework
- **Vite 6.2.0** - Build tool and dev server
- **React Router Dom 7.4.1** - Client-side routing
- **Axios 1.8.4** - HTTP client for API calls

### UI & Styling
- **Bootstrap 5.3.3** - CSS framework
- **Bootstrap Icons 1.11.3** - Icon library
- **React Hot Toast 2.5.2** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **Vite Plugin React** - React integration

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── CartItems/        # Shopping cart item components
│   ├── CartSummary/      # Cart summary display
│   ├── Category/         # Category management components
│   ├── DisplayCategory/  # Category display components
│   ├── DisplayItems/     # Item display components
│   ├── Item/            # Individual item components
│   ├── Menubar/         # Navigation menu
│   ├── ReceiptPopup/    # Receipt modal
│   ├── SearchBox/       # Search functionality
│   └── UsersList/       # User management components
├── pages/               # Main application pages
│   ├── Dashboard/       # Main dashboard
│   ├── Login/          # Authentication
│   ├── ManageCategory/  # Category management (Admin)
│   ├── ManageUsers/    # User management (Admin)
│   ├── ManageItems/    # Item management (Admin)
│   ├── Explore/        # Browse items
│   ├── OrderHistory/   # Order tracking
│   └── NotFound/       # 404 page
├── Service/            # API service layer
│   ├── AuthService.js  # Authentication APIs
│   ├── CategoryService.js # Category CRUD operations
│   ├── ItemService.js     # Item management APIs
│   ├── OrderService.js    # Order processing
│   ├── PaymentService.js  # Payment integration
│   └── UserService.js     # User management APIs
├── context/            # React Context for state management
│   └── AppContext.jsx  # Global application state
├── config/             # Configuration files
│   └── api.js         # Axios configuration & interceptors
├── util/              # Utility functions
│   └── constants.js   # Application constants
├── styles/            # Custom CSS
│   └── forms.css     # Form styling
└── assets/           # Static assets
    ├── logo.png      # Application logo
    ├── profile.png   # Default profile image
    └── device.png    # Device mockups
```

## 🔑 Key Features

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (Admin/User)
- Protected routes with automatic redirection
- Token refresh and session management

### User Management (Admin)
- Create, read, update, delete users
- Role assignment and management
- User profile management

### Category Management
- Dynamic category creation and management
- Category-based item filtering
- Admin-only category operations

### Item Management
- Comprehensive item CRUD operations
- Image upload and management
- Category-wise item organization
- Real-time inventory tracking

### Shopping Cart
- Add/remove items from cart
- Quantity management
- Real-time price calculations
- Cart persistence across sessions

### Order Processing
- Order creation and tracking
- Order history for users
- Receipt generation
- Payment integration (Razorpay)

### Dashboard Analytics
- Sales overview
- User activity tracking
- Category performance metrics
- Revenue analytics

## 🌍 Environment Configuration

### Environment Variables
```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8080/api/v1.0
VITE_APP_NAME=BillEase
```

### Development Server Configuration
- **Port:** 5173
- **Auto-open:** Enabled
- **Hot Module Replacement:** Enabled

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## 🔒 Security Features

- **JWT Token Management:** Automatic token inclusion in API requests
- **Route Protection:** Role-based route access control
- **Session Handling:** Automatic logout on token expiration
- **CORS Configuration:** Secure cross-origin requests
- **Input Validation:** Client-side form validation

## 📱 Responsive Design

- Bootstrap-based responsive layout
- Mobile-first design approach
- Cross-browser compatibility
- Touch-friendly interface

## 🔌 API Integration

### Base Configuration
- **Base URL:** `http://localhost:8080/api/v1.0`
- **Content Type:** `application/json`
- **Authentication:** Bearer token

### Request/Response Interceptors
- Automatic token attachment
- Error handling and user feedback
- Session management
- Unauthorized access handling

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Backend API server running

### Installation
```bash
# Clone the repository
git clone https://github.com/sahilmyadav/BillEase-Frontend.git

# Navigate to project directory
cd frontent

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

### Build & Deployment
```bash
# Create production build
npm run build

# Serve production build locally
npm run preview
```

## 🤝 Contributing

Feel free to reach out via email or GitHub for any questions, bug reports, or feature requests.

### Development Guidelines
- Follow React best practices
- Use functional components with hooks
- Maintain consistent code formatting
- Write meaningful commit messages
- Test thoroughly before submitting PRs

---

**Built with ❤️ by Sahil Yadav**
