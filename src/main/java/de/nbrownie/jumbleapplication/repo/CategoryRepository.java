package de.nbrownie.jumbleapplication.repo;

import de.nbrownie.jumbleapplication.models.Category;
import de.nbrownie.jumbleapplication.models.Jumble;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query("SELECT c FROM Category c WHERE c.categoryId= ?1")
    Optional<Category> getCategoryByCategoryId(Long categoryId);

}
