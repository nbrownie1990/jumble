package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.id= ?1")
    Optional<User> getUserByUserId(Long id);

    @Query("SELECT u FROM User u WHERE u.username= ?1")
    Optional<User> getUserByUserName(String username);

    @Query("SELECT u FROM User u WHERE u.email= ?1")
    Optional<User> getUserByEmail(String email);


}
