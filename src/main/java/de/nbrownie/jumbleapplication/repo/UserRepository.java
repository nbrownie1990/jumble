package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserRepository extends JpaRepository<User, Long> { }
