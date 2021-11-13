package de.nbrownie.jumblesbackend.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EntityScan(basePackages = {"de.nbrownie.jumblesbackend.models"})
@EnableJpaRepositories(basePackages = {"de.nbrownie.jumblesbackend.repo"})
@EnableTransactionManagement
public class JpaConfig {
}
