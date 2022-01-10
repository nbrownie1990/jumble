package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.Category;
import de.nbrownie.jumbleapplication.models.Jumble;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Repository
public interface JumbleRepository extends JpaRepository<Jumble, Long> {
    @Query("SELECT j FROM Jumble j WHERE j.jumbleId= ?1")
    Optional<Jumble> getJumbleByJumbleId(Long jumbleId);

    @Query("SELECT j FROM Jumble j WHERE j.jumbleName= ?1")
    Optional<Jumble> getJumbleByJumbleName(Long jumbleId);

    @Transactional
    @Modifying
    @Query("DELETE FROM Jumble j WHERE j.jumbleId= ?1")
    void deleteJumbleByJumbleId(Long jumbleId);

    @Query("SELECT j FROM Jumble j WHERE j.address.addressId= ?1")
    Optional<Jumble> getJumbleByAddressId(Long addressId);

    @Query("SELECT j FROM Jumble j WHERE j.category= ?1")
    List<Jumble> findJumbleByCategory(Category category);
}
