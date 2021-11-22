package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.Jumble;
import feign.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface JumbleRepository extends JpaRepository<Jumble, Long> {

    @Query(
            value = "SELECT * FROM jumble j where j.jumble_name = :jumbleName",
            nativeQuery = true
    )
    Jumble getJumbleByName(
            @Param("jumbleName") String jumbleName
    );


    @Query(
            value = "SELECT * FROM jumble j where j.jumble_address = :addressStreet",
            nativeQuery = true
    )
    Jumble getJumbleByAddress(
            @Param("addressStreet") String addressStreet
    );

}
