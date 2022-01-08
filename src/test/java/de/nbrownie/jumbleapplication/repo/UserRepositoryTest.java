package de.nbrownie.jumbleapplication.repo;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository underTest;

    @AfterEach
    void tearDown(){
        underTest.deleteAll();
    }

    @Test
    void itShouldFindUserByUsername() {
        //GIVEN
        //WHEN
        //THEN
    }

    @Test
    void itShouldCheckIfUserExistsByUsername() {
        //GIVEN
        //WHEN
        //THEN
    }

    @Test
    void itShouldCheckIfUserExistsByEmail() {
        //GIVEN
        //WHEN
        //THEN
    }

    @Test
    void itShouldGetUserByUserId() {
        //GIVEN
        //WHEN
        //THEN
    }

    @Test
    void itShouldGetUserByUserName() {
        //GIVEN
        //WHEN
        //THEN
    }
}