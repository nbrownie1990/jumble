package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.Review;
import de.nbrownie.jumbleapplication.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    Optional<Review> getReviewByReviewId(Long reviewId);

    List<Review> findByUser(User user);
    List<Review> findByJumble(Jumble jumble);
}
