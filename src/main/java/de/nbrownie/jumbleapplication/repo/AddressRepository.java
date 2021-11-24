package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.Address;
import de.nbrownie.jumbleapplication.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
    Optional<Address> getAddressByAddressId(Long addressId);

}
