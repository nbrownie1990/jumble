package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
    @Query("SELECT a FROM Address a WHERE a.addressId= ?1")
    Optional<Address> getAddressByAddressId(Long addressId);

    @Query("SELECT a FROM Address a WHERE a.jumble.jumbleId= ?1")
    Optional<Address> getAddressByJumbleId(Long jumbleId);

    @Transactional
    @Modifying
    @Query("DELETE  FROM Address a WHERE a.addressId= ?1")
    void deleteAddressById(Long addressId);

    @Query("SELECT a FROM Address a WHERE a.jumble.jumbleName= ?1")
    Optional<Address> getAddressByJumbleName(String jumbleName);

    @Query("SELECT a FROM Address a WHERE a.addressId= ?1 AND a.jumble.jumbleId= ?2")
    List<Address> getAddressByAddressIdAndJumbleId(Long addressId, Long jumbleId);
}

