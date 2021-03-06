//package de.nbrownie.jumbleapplication.repo;
//
//import de.nbrownie.jumbleapplication.models.User;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//
//
//import java.util.Optional;
//
//import static org.hamcrest.MatcherAssert.assertThat;
//import static org.hamcrest.Matchers.is;
//import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
//import static org.junit.jupiter.api.Assertions.assertTrue;
//
//@DataJpaTest
//class UserRepositoryTest {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @AfterEach
//    void tearDown() {
//        userRepository.deleteAll();
//    }
//
//    @Test
//    @DisplayName("Return true, if user is found by email")
//    void itShouldCheckByEmailIfUserExists() {
//        // GIVEN
//        String email = "trabbitina@gmail.com";
//        String password = "12345";
//        String userText = "UserBeschreibung";
//        String userImage = "imagelink";
//        User user = new User(
//                "Tina",
//                email,
//                password,
//                userText,
//                userImage
//        );
//        userRepository.save(user);
//
//        // WHEN
//        boolean expected = userRepository.existsByEmail(email);
//
//        // THEN
//        assertThat(expected).isTrue();
//    }
//
//    @Test
//    @DisplayName("Return false, if user is not found by email")
//    void itShouldCheckByEmailIfUserNotExists() {
//        // GIVEN
//        String email = "trabbitina@gmail.com";
//        // WHEN
//        boolean expected = userRepository.existsByEmail(email);
//        // THEN
//        assertThat(expected).isFalse();
//    }
//
//    @Test
//    @DisplayName("Return user, found by username")
//    public void shouldFindUserByUsername(){
//        // GIVEN
//        User newUser = new User();
//        newUser.setId(999L);
//        newUser.setUsername("ninab");
//        newUser.setPassword("12345");
//        newUser.setEmail("ninab@email.com");
//        newUser.setUserText("Text");
//        newUser.setUserImage("Image");
//        User expectedUser = userRepository.save(newUser);
//
//        // WHEN
//        Optional<User> actualUserOptional = userRepository.getUserByUserName("ninab");
//
//        // THEN
//        assertTrue(actualUserOptional.isPresent());
//        assertThat(actualUserOptional.get().getUsername(), is(expectedUser.getUsername()));
//    }
//
//    @Test
//    @DisplayName("Find user by username should return empty optional, if user is not found")
//    public void shouldNotFindUserByUserName(){
//        // GIVEN
//        User newUser = new User();
//        newUser.setId(99L);
//        newUser.setUsername("ninab");
//        newUser.setPassword("12345");
//        newUser.setEmail("ninab@email.com");
//        newUser.setUserText("Text");
//        newUser.setUserImage("Image");
//        userRepository.save(newUser);
//
//        // WHEN
//        Optional<User> actualUserOptional = userRepository.findByUsername("Ninab");
//
//        // THEN
//        assertTrue(actualUserOptional.isEmpty());
//    }
//
//    @Test
//    void shouldGetUserById() {
//        //Given
//        Long id = 2L;
//        User user = new User("Pia", "Pia@gmx.com", "12345" );
//        user.setId(id);
//        userRepository.save(user);
//        //When
//         Optional<User> optionalUser = userRepository.getUserByUserId(id);
//
//        //Then
//        assertThat(optionalUser).isPresent()
//                .hasValueSatisfying(u ->
//                    assertThat(u.getUsername()).isEqualTo(user.getUsername())
//                );
//    }
//}
//
//
