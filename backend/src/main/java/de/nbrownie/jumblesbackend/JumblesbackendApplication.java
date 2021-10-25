package de.nbrownie.jumblesbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class JumblesbackendApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(JumblesbackendApplication.class, args);
	}

	@Override
	public void run (String... args) throws Exception{
		List<User> users = userRepository.findAll();
		users.forEach(System.out :: println);
	}
}
