package de.nbrownie.jumbleapplication.models;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;



@Entity(name= "Jumbles")
@Table(name = "jumbles")
@Setter
@Getter
@ToString
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
    private Long jumbleId;


    @Column(name = "jumble_name", nullable = false )
    private String jumbleName;

    @Column(name = "jumble_category", nullable = false )
    private String jumbleCategory;

    @Column(name = "jumble_address")
    private String jumbleAddress;

    @Column(name = "jumble_text")
    private String jumbleText;

    @Column(name = "jumble_date")
    private String jumbleDate;

    @Column(name = "jumble_time")
    private String jumbleTime;

    @Column(name = "jumble_website")
    private String jumbleWebsite;

    @Column(name = "jumble_rating")
    private Short jumbleRating;

    @Column(name = "jumble_img")
    private String jumbleImage;

    public Jumble(String name, String address, String text, String category, String date, String time, String website, Short rating, String image) {
        this.jumbleName = name;
        this.jumbleAddress = address;
        this.jumbleText = text;
        this.jumbleCategory = category;
        this.jumbleDate= date;
        this.jumbleTime = time;
        this.jumbleWebsite = website;
        this.jumbleRating = rating;
        this.jumbleImage = image;
    }
}

