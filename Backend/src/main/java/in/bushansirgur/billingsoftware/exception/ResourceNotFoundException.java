package in.bushansirgur.billingsoftware.exception;

/**
 * Exception thrown when a requested resource is not found
 * 
 * @author Sahil
 * @version 2.0.0
 */
public class ResourceNotFoundException extends RuntimeException {
    
    public ResourceNotFoundException(String message) {
        super(message);
    }
    
    public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s not found with %s: '%s'", resourceName, fieldName, fieldValue));
    }
}
