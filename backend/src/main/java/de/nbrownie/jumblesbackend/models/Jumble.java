package de.nbrownie.jumblesbackend.models;

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

    @Column(name = "jumble_postalCode")
    private String jumble_postalCode;

    @Column(name = "jumble_termin")
    private String jumble_termin;

    @Column(name = "jumble_openingTime")
    private String jumble_openingTime;

    @Column(name = "jumble_website")
    private String jumble_website;

    @Column(name = "jumble_rating")
    private Short jumble_rating;
}

