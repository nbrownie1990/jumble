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

@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = "*")
@AllArgsConstructor
@RestController
@RequestMapping(path= "api/categories")
public class CategoryController {

    private final CategoryService categoryService;

    @PreAuthorize("hasRole('USER')")
    @GetMapping(path = "/getall")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping(path = "{categoryId}")
    public Category getCategoryById(
            @PathVariable("categoryId") Long categoryId) {
        return categoryService.getCategoryById(categoryId);
    }


}
    
