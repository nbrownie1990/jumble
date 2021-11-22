package de.nbrownie.jumbleapplication.models;

import lombok.*;

import javax.persistence.*;
import java.util.Set;


@Entity(name = "Categories")
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

    @Column(name = "category_text")
    private String categoryText;

    @Column(name = "category_img")
    private String categoryImage;

//    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    @JoinColumn(name = "category_id")
//    private Set<Jumble> jumbleList;

}