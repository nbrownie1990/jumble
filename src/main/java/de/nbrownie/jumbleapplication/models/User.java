package de.nbrownie.jumbleapplication.models;

import lombok.*;
import javax.persistence.*;
import java.util.Set;


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

    @Column(name = "user_id", nullable = false)
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
    private Long userId;

    @Column(name = "user_name", nullable = false )
    private String username;

    @Column(name = "user_email")
    private String email;

    @Column(name = "user_text")
    private String userText;

    @Column(name = "user_psw")
    private String password;

    @Column(name = "user_role")
    private String userRole;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private Set<Review> reviewList;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private Set<Jumble> jumbleList;


}