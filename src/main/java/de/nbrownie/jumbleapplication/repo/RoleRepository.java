package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.ERole;
import de.nbrownie.jumbleapplication.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
