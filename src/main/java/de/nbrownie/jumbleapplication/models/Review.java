package de.nbrownie.jumbleapplication.models;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity(name= "Reviews")
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

    @Column(name = "review_text")
    private String reviewText;

    @Column(name = "review_rating",  nullable = false)
    private Short reviewRating;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="jumble_id")
    private Jumble jumble;

    @ManyToOne(
            fetch = FetchType.EAGER)
    @JoinColumn(name="user_id")
    private User user;

}

