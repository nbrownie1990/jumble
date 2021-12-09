package de.nbrownie.jumbleapplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class JumbleApplication {

//	@Autowired
//	private UserRepository userRepository;

	public static void main(String[] args) { SpringApplication.run(JumbleApplication.class, args); }

//	@Bean
//	CommandLineRunner runner() {
//		return args -> {
//			userRepository.save(new User(6L, "lulu", "test@testde", "bild", "beschreibung", "$2a$04$KNLUwOWHVQZVpXyMBNc7JOzbLiBjb9Tk9bP7KNcPI12ICuvzXQQKG", null, null));
//
//		};
//	}
}
