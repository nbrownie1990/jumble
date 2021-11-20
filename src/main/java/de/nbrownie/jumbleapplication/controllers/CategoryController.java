package de.nbrownie.jumbleapplication.controllers;

import de.nbrownie.jumbleapplication.exceptions.ResourceNotFoundException;
import de.nbrownie.jumbleapplication.models.Category;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.services.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:8080/")
@AllArgsConstructor
@RestController
@RequestMapping(path= "api/categories")
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @GetMapping(path = "{categoryId}")
    public ResponseEntity<Category> getJumbleById(
            @PathVariable Long categoryId) {
        Category category = categoryService.getCategoryById(categoryId);
        return ResponseEntity.ok(category);
    }


//   @GetMapping("/{id}")
//   public ResponseEntity<Category> GetCategoryById(@PathVariable Long id) {
//        CategoryEntity categoryEntity = CategoryService.GetCategoryById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Category with this id:" + id + "not exist..."));
//        return ResponseEntity.ok(categoryEntity);
//    }
}
    
