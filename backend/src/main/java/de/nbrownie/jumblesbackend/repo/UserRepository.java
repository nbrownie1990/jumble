package de.nbrownie.jumblesbackend.repo;

import de.nbrownie.jumblesbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Id;

@Repository
public interface UserRepository extends JpaRepository<User, Id> {
}
