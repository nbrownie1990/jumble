package de.nbrownie.jumbleapplication.models;

import lombok.*;

import javax.persistence.*;


@Entity(name = "Categories")
@Table(name = "categories")
@Setter
@Getter
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class Category {
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
    @Column(name = "category_id", nullable = false,  unique = true)
    private Long categoryId;

    @Column(name = "category_name", nullable = false)
    private String categoryName;

    @Column(name = "category_text")
    private String categoryText;

    @Column(name = "category_img")
    private String categoryImage;

    public Category(String name, String text, String image ) {
        this.categoryName = name;
        this.categoryText = text;
        this.categoryImage = image;
    }
}