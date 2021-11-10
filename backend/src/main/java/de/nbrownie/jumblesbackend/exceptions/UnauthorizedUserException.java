package de.nbrownie.jumblesbackend.exceptions;

public class UnauthorizedUserException extends RuntimeException {

    public UnauthorizedUserException(String message){
        super(message);
    }
}
