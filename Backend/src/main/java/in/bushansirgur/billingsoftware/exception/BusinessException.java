package in.bushansirgur.billingsoftware.exception;

/**
 * Exception thrown for business logic violations
 * 
 * @author Sahil
 * @version 2.0.0
 */
public class BusinessException extends RuntimeException {
    
    public BusinessException(String message) {
        super(message);
    }
    
    public BusinessException(String message, Throwable cause) {
        super(message, cause);
    }
}
