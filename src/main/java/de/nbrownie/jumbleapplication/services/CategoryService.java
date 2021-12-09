package de.nbrownie.jumbleapplication.services;

import de.nbrownie.jumbleapplication.models.Category;
import de.nbrownie.jumbleapplication.repo.CategoryRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Getter
@Setter
@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategoryById(Long categoryId) {
        return categoryRepository.getCategoryByCategoryId(categoryId).orElseThrow(() -> new IllegalArgumentException("Category not found"));
    }
}
