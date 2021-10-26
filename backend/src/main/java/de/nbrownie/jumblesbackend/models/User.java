package de.nbrownie.jumblesbackend.models;

import javax.persistence.*;

import lombok.Data;

import java.math.BigInteger;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger user_id;
    private String user_name;
    private String user_email;
    private String user_text;
    private String user_psw;
}
