package de.nbrownie.jumblesbackend.repo;

import de.nbrownie.jumblesbackend.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> { }
