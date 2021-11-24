package de.nbrownie.jumbleapplication.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "categories")
@Setter
@Getter
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor

public class Category {

    @Column(name = "category_id", nullable = false)
    @Id
    @SequenceGenerator(
            name = "category_sequence",
            sequenceName = "category_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "category_sequence"
    )
    private Long categoryId;

    @Column(name = "category_name", nullable = false)
    private String categoryName;

    @Column(name = "category_text", columnDefinition = "TEXT")
    private String categoryText;

    @Column(name = "category_img")
    private String categoryImage;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy="category", fetch = FetchType.EAGER)
    @JsonManagedReference
    private Set<Jumble> jumbleList;


    public void addJumble(Jumble jumble){
        jumbleList.add(jumble);
        jumble.setCategory(this);
    }

    public Category remove(Jumble jumble){
        jumbleList.remove(jumble);
        jumble.setCategory(null);
        return this;
    }
    @Override
    public int hashCode() {
        if (getCategoryId() == null){
            return getClass().hashCode();
        }
        return getCategoryId().hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category that = (Category) o;
        return categoryId.equals(that.categoryId);
    }

    @Override
    public String toString() {
        return categoryName + " " + categoryText;
    }
}