package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.userId= ?1")
    Optional<User> getUserByUserId(Long userId);

    @Query("SELECT u FROM User u WHERE u.email= ?1")
    Optional<User> getUserByEmail(String email);

}
