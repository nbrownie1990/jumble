package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.ERole;
import de.nbrownie.jumbleapplication.models.Role;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertFalse;

@DataJpaTest
class RoleRepositoryTest {

    @Autowired
    private RoleRepository roleRepository;

    @AfterEach
    void tearDown() {
        roleRepository.deleteAll();
    }

    @Test
    @DisplayName("Create role and check if it is found")
    void createRoleTest() {
        //GIVEN
        Role role = new Role();
        role.setName(ERole.ROLE_USER);

        //WHEN
        roleRepository.save(role);

        //THEN
        Optional<Role> result = roleRepository.findByName(ERole.ROLE_USER);
        assertFalse(result.isEmpty());
    }
}