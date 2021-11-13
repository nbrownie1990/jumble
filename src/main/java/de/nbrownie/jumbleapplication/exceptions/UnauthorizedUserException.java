package de.nbrownie.jumbleapplication.exceptions;

public class UnauthorizedUserException extends RuntimeException {

    public UnauthorizedUserException(String message){
        super(message);
    }
}
