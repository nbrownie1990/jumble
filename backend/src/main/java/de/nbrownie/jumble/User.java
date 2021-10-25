package de.nbrownie.jumble;

import javax.persistence.*;
import javax.print.DocFlavor;
import java.awt.*;
import java.math.BigInteger;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private BigInteger user_id;
    private String user_name;
    private DocFlavor.BYTE_ARRAY user_img;
    private String user_email;
    private String user_text;

    public BigInteger getUser_id() {
        return user_id;
    }

    public void setUser_id(BigInteger user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public DocFlavor.BYTE_ARRAY getUser_img() {
        return user_img;
    }

    public void setUser_img(DocFlavor.BYTE_ARRAY user_img) {
        this.user_img = user_img;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_text() {
        return user_text;
    }

    public void setUser_text(String user_text) {
        this.user_text = user_text;
    }

    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", user_name='" + user_name + '\'' +
                ", user_img=" + user_img +
                ", user_email='" + user_email + '\'' +
                ", user_text='" + user_text + '\'' +
                '}';
    }
}


