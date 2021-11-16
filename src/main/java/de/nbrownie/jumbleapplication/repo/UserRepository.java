package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("" +
            "SELECT CASE WHEN COUNT(u) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Users u " +
            "WHERE u.userEmail = ?1"
    )
    Boolean selectExistsEmail(String userEmail);

}
