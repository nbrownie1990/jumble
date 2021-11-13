package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.models.Category;
import de.nbrownie.jumbleapplication.repo.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> GetCategories() {
        return categoryRepository.findAll();
    }

   // public CategoryEntity GetCategoryById(Long id) {
   //     return categoryRepository.GetCategoryById(id).orElseThrow(() -> new IllegalArgumentException("Category not found"));
   // }
}
