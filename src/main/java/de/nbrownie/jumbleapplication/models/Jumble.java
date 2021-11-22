package de.nbrownie.jumbleapplication.models;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.Set;


@Entity(name= "Jumbles")
@Table(name = "jumbles")
@Setter
@Getter
@ToString
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class Jumble {

    @Column(name = "jumble_id", nullable = false)
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
    private Long jumbleId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id")
    private User user;

    @Column(name = "jumble_name", nullable = false )
    private String jumbleName;

    @Column(name = "jumble_img")
    private String jumbleImage;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="category_id")
    private Category category;

//    @OneToOne(mappedBy = "jumble")
//    private Address address;

    @Column(name = "jumble_text")
    private String jumbleText;

    @Column(name = "jumble_date")
    private String jumbleDate;

    @Column(name = "jumble_time")
    private String jumbleTime;

    @Column(name = "jumble_website")
    private String jumbleWebsite;

//    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    @JoinColumn(name = "jumble_id")
//    private Set<Review> reviewList;

}

