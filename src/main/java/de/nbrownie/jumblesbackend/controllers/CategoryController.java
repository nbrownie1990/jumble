package de.nbrownie.jumblesbackend.controllers;

import de.nbrownie.jumblesbackend.exceptions.ResourceNotFoundException;
import de.nbrownie.jumblesbackend.models.Category;
import de.nbrownie.jumblesbackend.models.Jumble;
import de.nbrownie.jumblesbackend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path= "/categories")
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<Category> GetCategories() {
        return categoryService.GetCategories();
    }

   // @GetMapping("/{id}")
  //  public ResponseEntity<Category> GetCategoryById(@PathVariable Long id) {
  //      CategoryEntity categoryEntity = CategoryService.GetCategoryById(id)
   //             .orElseThrow(() -> new ResourceNotFoundException("Category with this id:" + id + "not exist..."));
   //     return ResponseEntity.ok(categoryEntity);
    //}
}
    
