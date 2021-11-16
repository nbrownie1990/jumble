package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AddressRepository extends JpaRepository<Address, Long> { }
