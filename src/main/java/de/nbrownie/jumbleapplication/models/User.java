package de.nbrownie.jumbleapplication.models;

import lombok.*;
import javax.persistence.*;



@ToString
@Setter
@Getter
@EqualsAndHashCode
@Entity
@AllArgsConstructor
@NoArgsConstructor
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