package de.nbrownie.jumblesbackend.models;

import lombok.*;
import javax.persistence.*;


@Entity
@Table(name = "users")
@Setter
@Getter
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )

    @Column(name = "id", nullable = false, unique = true)
    private Long user_id;

    @Column(name = "user_name", nullable = false )
    private String user_name;

    @Column(name = "user_email")
    private String user_email;

    @Column(name = "user_text")
    private String user_text;

    @Column(name = "user_psw")
    private String user_psw;

    @Column(name = "user_role")
    private String user_role;
}