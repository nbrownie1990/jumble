package de.nbrownie.jumbleapplication.models;

import lombok.*;

import javax.persistence.*;



@Entity
@Table(name = "jumbles")
@Setter
@Getter
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class Jumble {
    @Id
    @SequenceGenerator(
            name = "jumble_sequence",
            sequenceName = "jumble_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "jumble_sequence"
    )

    @Column(name = "jumble_id", nullable = false, unique = true)
    private Long jumble_id;

    @Column(name = "jumble_name", nullable = false )
    private String jumble_name;

    @Column(name = "jumble_category", nullable = false )
    private String jumble_category;

    @Column(name = "jumble_address")
    private String jumble_address;

    @Column(name = "jumble_text")
    private String jumble_text;

    @Column(name = "jumble_date")
    private String jumble_date;

    @Column(name = "jumble_time")
    private String jumble_time;

    @Column(name = "jumble_website")
    private String jumble_website;

    @Column(name = "jumble_rating")
    private Short jumble_rating;
}

