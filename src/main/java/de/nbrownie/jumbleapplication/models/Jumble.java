package de.nbrownie.jumbleapplication.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.Set;


@Entity(name = "Jumble")
@Table(name = "jumbles")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Jumble {

    @Column(name = "jumble_id", unique = true, nullable = false)
    @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
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

    //Many Jumbles can be added to one category
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="category_id",
            foreignKey = @ForeignKey(name= "category_id_fk"))
    @JsonManagedReference(value="category-jumbles") ////ggf ändern
    @JsonIgnore ///ggf löschen
    private Category category;

    //One Jumble has its own address
    @OneToOne(cascade= CascadeType.MERGE, orphanRemoval = true)
    @JoinColumn(name="address_id",
            foreignKey = @ForeignKey(name= "address_id_fk"))
    @JsonManagedReference(value="address-jumble")
    private Address address;

    //Many Jumbles can be added by one user Entity
    @ManyToOne(cascade= CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name="user_id",
            foreignKey = @ForeignKey(name= "user_id_fk"))
    @JsonManagedReference(value="jumbles-user") ////ggf ändern
    @JsonIgnore
    private User user;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy="jumble", fetch = FetchType.EAGER)
    @JsonManagedReference(value="jumble-reviews")
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

