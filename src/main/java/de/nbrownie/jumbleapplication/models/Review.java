package de.nbrownie.jumbleapplication.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "reviews")
@Builder
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Review {

    @Column(name = "review_id", nullable = false)
    @Id
    @SequenceGenerator(
            name = "review_sequence",
            sequenceName = "review_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "review_sequence"
    )
    private Long reviewId;

    @Column(name = "review_text", columnDefinition = "TEXT")
    private String reviewText;

    @Column(name = "review_rating",  nullable = false)
    private Short reviewRating;

    //Many reviews can be added to one Jumble Entity
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="jumble_id")
    @JsonBackReference
    private Jumble jumble;

    //Many reviews can be added by one User Entity
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id")
    @JsonBackReference
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
        return "Review: " + reviewText;
    }
}

