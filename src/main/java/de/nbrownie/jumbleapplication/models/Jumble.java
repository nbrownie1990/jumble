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

    @Column(nullable = false, unique = true)
    private Long jumble_id;


    @Column(nullable = false )
    private String jumble_name;

    @Column(nullable = false )
    private String jumble_category;

    @Column
    private String jumble_address;

    @Column
    private String jumble_text;

    @Column
    private String jumble_date;

    @Column
    private String jumble_time;

    @Column
    private String jumble_website;

    @Column
    private Short jumble_rating;

    public Jumble(String name, String address, String text, String category, String date, String time, String website, Short rating ) {
        this.jumble_name = name;
        this.jumble_address = address;
        this.jumble_text = text;
        this.jumble_category = category;
        this.jumble_date= date;
        this.jumble_time = time;
        this.jumble_website = website;
        this.jumble_rating = rating;
    }
}

