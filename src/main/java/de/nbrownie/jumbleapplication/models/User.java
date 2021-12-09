package de.nbrownie.jumbleapplication.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;



@AllArgsConstructor
@Entity(name = "User")
@Table(name = "users")
public class User {
    @Column(name = "user_id", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @SequenceGenerator(
//            name = "user_sequence",
//            sequenceName = "user_sequence",
//            allocationSize = 1
//    )
//    @GeneratedValue(
//            generator = "user_sequence",
//            strategy = GenerationType.SEQUENCE
//    )
    private Long id;

    @NotBlank
    @Column(name = "user_name", nullable = false, unique = true)
    private String username;

    @NotBlank
    @Column(name = "user_email")
    private String email;

    @Column(name = "user_img")
    private String userImage;

    @Column(name = "user_text", columnDefinition = "TEXT")
    private String userText;

    @NotBlank
    @Column(name = "user_psw")
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(	name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();



//    @ManyToMany(fetch = FetchType.EAGER)
//    @Column(name = "user_role")
//    private String userRole;

    //One User can add many jumbles
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy="user", fetch = FetchType.EAGER)
    @JsonBackReference(value="jumbles-user")////ggf ändern
    private Set<Jumble> jumbleList;


    //One User can make many reviews
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy="user", fetch = FetchType.EAGER)
    @JsonBackReference(value="user-reviews")////ggf ändern
    private Set<Review> reviewList;


    public User deleteJumble(Jumble jumble){
        jumbleList.remove(jumble);
        jumble.setUser(null);
        jumble.setAddress(null);
        jumble.setReviewList(null);
        return this;
    }

    public User() {
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @Override
    public int hashCode() {
        return getId() == null ? getUsername().hashCode() : getId().hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User that = (User) o;
        return username.equals(that.username);
    }

    @Override
    public String toString() {
        return username + " " + userText;
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