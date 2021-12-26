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

    @Column(name = "user_name", nullable = false, unique = true)
    private String username;

    @Column(name = "user_email", nullable = false)
    private String email;

    @Column(name = "user_img")
    private String userImage;

    @Column(name = "user_text", columnDefinition = "TEXT")
    private String userText;

    @Column(name = "user_psw", nullable = false)
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(	name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

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


    public User(String username, String email, String password, String userImage, String userText) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.userImage = userImage;
        this.userText = userText;
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

    public String getUserImage() {
        return userImage;
    }

    public void setUserImage(String userImage) {
        this.userImage = userImage;
    }

    public String getUserText() {
        return userText;
    }

    public void setUserText(String userText) {
        this.userText = userText;
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

    public Set<Review> getReviewList() {
        return reviewList;
    }

    public void setReviewList(Set<Review> reviewList) {
        this.reviewList = reviewList;
    }

//    ///versuch
//    public void setReviewList(Set<Review> reviewList) {
//        reviewList.forEach(review -> review.setUser(this));
//        this.reviewList = reviewList;
//    }


    public Set<Jumble> getJumbleList() {
        return jumbleList;
    }

    public void setJumbleList(Set<Jumble> jumbleList) {
        this.jumbleList = jumbleList;
    }

    ///versuch
//    public void setJumbleList(Set<Jumble> jumbleList) {
//        jumbleList.forEach(jumble -> jumble.setUser(this));
//        this.jumbleList = jumbleList;
//    }
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