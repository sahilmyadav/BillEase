# AI Coding Agent Instructions

## Architecture Overview

This is a Spring Boot 3.4.4 billing/POS software with React frontend (served from `localhost:5173`). Key architectural patterns:

- **Service Layer Pattern**: All business logic in `service/impl/` classes implementing interfaces from `service/`
- **Request/Response DTOs**: All API communication uses classes in `io/` package (never expose entities directly)
- **JWT-based Security**: Custom filter chain with role-based access (`USER`, `ADMIN`)
- **Embedded Payment Integration**: Razorpay payment gateway with verification flow
- **Dual File Storage**: Local filesystem (`uploads/`) + AWS S3 (currently commented out)

## Critical Patterns & Conventions

### Entity Relationships
- `OrderEntity` → `OrderItemEntity` (One-to-Many with cascade)
- `OrderEntity` embeds `PaymentDetails` and uses `PaymentMethod` enum
- All entities use `@PrePersist` for auto-generated IDs (e.g., `ORD{timestamp}`)
- Lombok `@Data`, `@Builder`, `@AllArgsConstructor`, `@NoArgsConstructor` on all entities

### Controller Pattern
```java
@RestController
@RequestMapping("/api-path")
@RequiredArgsConstructor  // Constructor injection only
public class XController {
    private final XService xService;
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)  // Explicit status codes
    public XResponse create(@RequestBody XRequest request) {
        return xService.create(request);
    }
}
```

### Security Configuration
- **JWT Secret**: `jwt.secret.key` property (10-hour expiration)
- **CORS**: Only allows `localhost:5173` with credentials
- **Public endpoints**: `/login`, `/encode`, `/uploads/**`
- **Role-based**: `/admin/**` requires `ADMIN` role
- **Auth header**: `Bearer {token}` format required

### File Upload Pattern
Current implementation bypasses AWS S3 and uses local storage:
```java
String fileName = UUID.randomUUID().toString() + "." + StringUtils.getFilenameExtension(file.getOriginalFilename());
Path uploadPath = Paths.get("uploads").toAbsolutePath().normalize();
// Files stored in project root /uploads directory
```

### Payment Flow
1. Frontend calls `/payments/create-order` → Razorpay order created
2. Frontend handles Razorpay payment UI
3. Frontend calls `/payments/verify` → Order saved with payment details

## Development Workflow

### Build & Run
```bash
# Development with auto-reload
./mvnw spring-boot:run

# Build JAR
./mvnw clean package

# Run tests (currently minimal)
./mvnw test
```

### Database Setup
- **MySQL required**: `billing_app` database on `localhost:3306`
- **Auto-DDL**: `hibernate.ddl-auto=update` (creates/updates tables automatically)
- **Default credentials**: `root/admin` (change in `application.properties`)

### Required Configuration
Update these properties for deployment:
```properties
# Database
spring.datasource.url=jdbc:mysql://localhost:3306/billing_app
spring.datasource.username=root
spring.datasource.password=admin

# AWS S3 (currently not used but configured)
aws.access.key=your_access_key
aws.secret.key=your_secret_key
aws.bucket.name=your_bucket_name

# Razorpay
razorpay.key.id=your_key_id
razorpay.key.secret=your_secret_key

# JWT
jwt.secret.key=secure_secret_key_here
```

## Key Integration Points

### Authentication Flow
1. `AuthController.login()` → JWT token generation
2. `JwtRequestFilter` validates every request
3. `AppUserDetailsService` loads user by email
4. `SecurityConfig` defines role-based endpoint access

### Order Processing
1. `OrderController.createOrder()` → Handles cart items conversion
2. `OrderService` manages order lifecycle + payment verification
3. `OrderEntity` auto-generates order ID with timestamp
4. Payment details embedded in order (not separate table)

## Common Gotchas

- **Context Path**: All endpoints prefixed with `/api/v1.0`
- **File Uploads**: Currently saves to local `uploads/` directory (S3 integration commented)
- **CORS**: Hardcoded to `localhost:5173` - update for production
- **Entity Mapping**: Always use DTOs in controllers, never return entities directly
- **JWT Library**: Uses older `io.jsonwebtoken:jjwt:0.9.1` (consider upgrading)
- **Payment Verification**: Happens in `OrderService.verifyPayment()`, not a separate payment service