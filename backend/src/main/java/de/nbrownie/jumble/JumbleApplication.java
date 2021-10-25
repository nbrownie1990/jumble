package de.nbrownie.jumble;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@SpringBootApplication

public class JumbleApplication implements CommandLineRunner {

@Autowired
	private UserRepository userRepository;
	public static void main(String[] args) {

		SpringApplication.run(JumbleApplication.class, args);
	}

	@Override
	public void run (String... args) throws Exception {
	List<User> users= userRepository.findAll();
	users.forEach(System.out ::println);
		}
	}

