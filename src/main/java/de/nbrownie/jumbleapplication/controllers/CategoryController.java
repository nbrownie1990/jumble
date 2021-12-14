package de.nbrownie.jumbleapplication.controllers;

import de.nbrownie.jumbleapplication.models.Category;
import de.nbrownie.jumbleapplication.models.Jumble;
import de.nbrownie.jumbleapplication.services.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:8080/")
@AllArgsConstructor
@RestController
@RequestMapping(path= "api/categories")
public class CategoryController {

    private final CategoryService categoryService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping(path = "/getall")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping(path = "{categoryId}")
    public Category getCategoryById(
            @PathVariable("categoryId") Long categoryId) {
        return categoryService.getCategoryById(categoryId);
    }

//   @GetMapping("/{id}")
//   public ResponseEntity<Category> GetCategoryById(@PathVariable Long id) {
//        CategoryEntity categoryEntity = CategoryService.GetCategoryById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Category with this id:" + id + "not exist..."));
//        return ResponseEntity.ok(categoryEntity);
//    }
}
    
