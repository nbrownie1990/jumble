package de.nbrownie.jumbleapplication.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.Set;


@Entity(name = "Jumble")
@Table(name = "jumbles")
@Setter
@Getter
@ToString
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class Jumble {

    @Column(name = "jumble_id", unique = true, nullable = false)
    @Id
    @SequenceGenerator(
            name = "jumble_sequence",
            sequenceName = "jumble_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "jumble_sequence"
    )
    private Long jumbleId;

    @Column(name = "jumble_name", nullable = false, columnDefinition = "TEXT" )
    private String jumbleName;

    @Column(name = "jumble_img")
    private String jumbleImage;

    @Column(name = "jumble_text", columnDefinition = "TEXT")
    private String jumbleText;

    @Column(name = "jumble_date")
    private String jumbleDate;

    @Column(name = "jumble_time")
    private String jumbleTime;

    @Column(name = "jumble_website")
    private String jumbleWebsite;

    //Many Jumbles can be added by one user Entity
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id")
    @JsonManagedReference
    private User user;

    //Many Jumbles can be added to one category
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="category_id")
    @JsonManagedReference
    private Category category;

    //One Jumble has its own address
    @OneToOne(cascade= CascadeType.ALL)
    @JoinColumn(name="address_id")
    @JsonManagedReference
    private Address address;

    //One Jumble can have many reviews
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy="jumble", fetch = FetchType.EAGER)
    @JsonManagedReference
    private Set<Review> reviewList;

    public void addReview(Review review){
        reviewList.add(review);
        review.setJumble(this);
    }

    public Jumble removeReview(Review review){
        reviewList.remove(review);
        review.setJumble(null);
        return this;
    }

    @Override
    public int hashCode() {
        if (getJumbleId() == null){
            return getClass().hashCode();
        }
        return getJumbleId().hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Jumble that = (Jumble) o;
        return jumbleId.equals(that.jumbleId);
    }

    @Override
    public String toString() {
        return jumbleName + " " + jumbleText + ", " +
                jumbleDate + " " + jumbleTime + ", " + jumbleWebsite;
    }
}

