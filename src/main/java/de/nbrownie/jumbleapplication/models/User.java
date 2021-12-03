package de.nbrownie.jumbleapplication.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@ToString
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "User")
@Table(name = "users")
@Builder(toBuilder = true)

public class User {

    @Column(name = "user_id",  unique = true, nullable = false)
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

    @Column(name = "user_name", nullable = false, columnDefinition = "TEXT" )
    private String username;

    @Column(name = "user_email", unique = true)
    private String email;

    @Column(name = "user_img")
    private String userImage;

    @Column(name = "user_text", columnDefinition = "TEXT")
    private String userText;

    @Column(name = "user_psw")
    private String password;

    @Column(name = "user_role")
    private String userRole;


    //One User can make many reviews
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy="user", fetch = FetchType.EAGER)
    @JsonBackReference
    private Set<Review> reviewList;


    //One User can add many jumbles
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy="user", fetch = FetchType.EAGER)
    @JsonBackReference
    private Set<Jumble> jumbleList;

    public User deleteJumble(Jumble jumble){
        jumbleList.remove(jumble);
        jumble.setUser(null);
        jumble.setAddress(null);
        jumble.setReviewList(null);
        return this;
    }

    @Override
    public int hashCode() {
        if (getUserId() == null){
            return getClass().hashCode();
        }
        return getUserId().hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User that = (User) o;
        return userId.equals(that.userId);
    }

    @Override
    public String toString() {
        return username + " " + userText + ", " + userRole;
    }
}


//@ManyToMany(
//        cascade={CascadeType.PERSIST, CascadeType.REMOVE}
//)
//@JoinTable(
//        name= "reviewing",
//        joinColumns = @JoinColumn(
//                name= "user_id",
//        foreignKey = @ForeignKey(name= "reviewing_user_id_fk")
//        ),
//        inverseJoinColumns = @JoinColumn(
//                name= "jumble_id",
//                foreignKey = @ForeignKey(name= "reviewing_jumble_id_fk")
//        ),
//)
//)