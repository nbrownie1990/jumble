package de.nbrownie.jumblesbackend.services;

import de.nbrownie.jumblesbackend.models.Category;
import de.nbrownie.jumblesbackend.repo.CategoryRepository;
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
}
