package de.nbrownie.jumbleapplication.models;

import lombok.*;
import javax.persistence.*;


@ToString
@Setter
@Getter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Entity (name = "Users")
@Table(name = "users")
@Builder(toBuilder = true)

public class User {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "user_sequence",
            strategy = GenerationType.SEQUENCE
    )

    @Column(name = "user_id", nullable = false, unique = true)
    private Long userId;

    @Column(name = "user_name", nullable = false )
    private String userName;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "user_text")
    private String userText;

    @Column(name = "user_psw")
    private String userPassword;

    @Column(name = "user_role")
    private String userRole;

    public User(String name, String email, String text, String password, String role ) {
        this.userName = name;
        this.userEmail = email;
        this.userText = text;
        this.userPassword = password;
        this.userRole= role;

    }
}