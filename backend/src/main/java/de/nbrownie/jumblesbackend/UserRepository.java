package de.nbrownie.jumblesbackend;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Id;

public interface UserRepository extends JpaRepository<User, Id> {
}
