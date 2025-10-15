package in.bushansirgur.billingsoftware.exception;

/**
 * Exception thrown when attempting to create a resource that already exists
 * 
 * @author Sahil
 * @version 2.0.0
 */
public class ResourceAlreadyExistsException extends RuntimeException {
    
    public ResourceAlreadyExistsException(String message) {
        super(message);
    }
    
    public ResourceAlreadyExistsException(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s already exists with %s: '%s'", resourceName, fieldName, fieldValue));
    }
}
