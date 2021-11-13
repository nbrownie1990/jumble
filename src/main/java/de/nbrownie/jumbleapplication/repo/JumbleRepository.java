package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.Jumble;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface JumbleRepository extends JpaRepository<Jumble, Long> { }
