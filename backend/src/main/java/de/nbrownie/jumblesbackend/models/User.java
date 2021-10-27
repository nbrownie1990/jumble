package de.nbrownie.jumblesbackend.models;

import javax.persistence.*;

import java.math.BigInteger;



public class User { 
    private BigInteger user_id;
    private String user_name;
    private String user_email;
    private String user_text;
    private String user_psw;
}
