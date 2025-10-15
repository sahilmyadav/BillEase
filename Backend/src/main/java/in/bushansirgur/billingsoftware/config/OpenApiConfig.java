package in.bushansirgur.billingsoftware.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.context.annotation.Configuration;

/**
 * OpenAPI/Swagger configuration for API documentation
 * Access the documentation at: /swagger-ui/index.html
 * 
 * @author Sahil
 * @version 2.0.0
 */
@Configuration
@OpenAPIDefinition(
    info = @Info(
        title = "BillEase API",
        version = "1.0.0",
        description = """
                BillEase - Professional Invoice & Billing Management System
                
                A complete enterprise-grade REST API for managing invoices, products, orders, and payments.
                Built from scratch by Sahil using modern technologies and best practices.
                
                Key Features:
                ✓ Secure JWT Authentication & Role-Based Access Control
                ✓ Complete Product & Category Management
                ✓ Order Processing & Invoice Generation
                ✓ Razorpay Payment Gateway Integration
                ✓ Real-time Analytics Dashboard
                ✓ Cloud File Storage (AWS S3)
                ✓ Export to PDF, Excel, CSV
                ✓ Email Notifications
                
                Created by: Sahil
                """,
        contact = @Contact(
            name = "Sahil",
            email = "sahil@example.com"
        ),
        license = @License(
            name = "MIT License",
            url = "https://opensource.org/licenses/MIT"
        )
    ),
    servers = {
        @Server(
            description = "Local Development Server",
            url = "http://localhost:8080/api/v1.0"
        ),
        @Server(
            description = "Production Server",
            url = "https://api.billease.com/api/v1.0"
        )
    }
)
@SecurityScheme(
    name = "Bearer Authentication",
    description = "JWT Bearer token authentication. Obtain token from /login endpoint.",
    scheme = "bearer",
    type = SecuritySchemeType.HTTP,
    bearerFormat = "JWT",
    in = SecuritySchemeIn.HEADER
)
public class OpenApiConfig {
}
