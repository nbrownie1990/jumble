package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.models.Category;
import de.nbrownie.jumbleapplication.models.User;
import de.nbrownie.jumbleapplication.repo.CategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
@AllArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

   // public CategoryEntity getCategoryById(Long id) {
   //     return categoryRepository.getCategoryById(id).orElseThrow(() -> new IllegalArgumentException("Category not found"));
   // }
}
