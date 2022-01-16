package de.nbrownie.jumbleapplication.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;

@Entity(name = "Review")
@Table(name = "reviews")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Review {

    @Column(name = "review_id", unique = true, nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long reviewId;

    @Column(name = "review_text", columnDefinition = "TEXT")
    private String reviewText;

    @Column(name = "review_rating",  nullable = false)
    private Short reviewRating;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="jumble_id",
            foreignKey = @ForeignKey(name= "jumble_id_fk"))
    @JsonBackReference(value="jumble-reviews")
    private Jumble jumble;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id",
            foreignKey = @ForeignKey(name= "user_id_fk"))
    @JsonManagedReference(value="user-reviews")
    @JsonIgnore
    private User user;


    @Override
    public int hashCode() {
        if (getReviewId() == null){
            return getClass().hashCode();
        }
        return getReviewId().hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Review that = (Review) o;
        return reviewId.equals(that.reviewId);
    }

    @Override
    public String toString() {
        return "Reviews: " + reviewText;
    }
}

