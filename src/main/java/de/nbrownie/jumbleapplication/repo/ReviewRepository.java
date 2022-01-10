package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.Review;
import de.nbrownie.jumbleapplication.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    @Query("SELECT r FROM Review r WHERE r.reviewId= ?1")
    Optional<Review> getReviewByReviewId(Long reviewId);

    @Query("SELECT r FROM Review r WHERE r.user= ?1")
    List<Review> findReviewListByUser(User user);

    @Query("SELECT r FROM Review r WHERE r.jumble= ?1")
    List<Review> findReviewListByJumble(Jumble jumble);
}
