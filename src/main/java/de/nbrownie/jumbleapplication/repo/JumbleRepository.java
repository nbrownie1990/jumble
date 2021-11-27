package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.models.User;
import feign.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface JumbleRepository extends JpaRepository<Jumble, Long> {
    @Query("SELECT j FROM Jumble j WHERE j.jumbleId= ?1")
    Optional<Jumble> getJumbleByJumbleId(Long jumbleId);

    @Query("SELECT j FROM Jumble j WHERE j.jumbleName= ?1")
    Optional<Jumble> getJumbleByJumbleName(Long jumbleId);

    @Query("SELECT j FROM Jumble j WHERE j.address.addressId= ?1")
    Optional<Jumble> getJumbleByAddressId(Long addressId);

}
