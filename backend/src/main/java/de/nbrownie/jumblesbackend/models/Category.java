package de.nbrownie.jumblesbackend.models;

import lombok.*;

import javax.persistence.*;


@Entity
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
    private Long category_id;

    @Column(name = "category_name", nullable = false)
    private String category_name;

    @Column(name = "category_description")
    private String category_description;

}