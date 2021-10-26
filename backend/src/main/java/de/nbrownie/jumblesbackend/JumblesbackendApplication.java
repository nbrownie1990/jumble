package de.nbrownie.jumblesbackend;

import de.nbrownie.jumblesbackend.models.User;
import de.nbrownie.jumblesbackend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class JumblesbackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(JumblesbackendApplication.class, args);
	}


}
