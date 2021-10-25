package de.nbrownie.jumble;


import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Id;
import java.math.BigInteger;

public interface UserRepository extends JpaRepository <User, BigInteger> {
}
