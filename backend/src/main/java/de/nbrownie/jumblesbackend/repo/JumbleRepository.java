package de.nbrownie.jumblesbackend.repo;

import de.nbrownie.jumblesbackend.models.Jumble;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface JumbleRepository extends JpaRepository<Jumble, Long> { }
