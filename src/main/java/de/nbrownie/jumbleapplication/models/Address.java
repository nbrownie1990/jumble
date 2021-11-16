package de.nbrownie.jumbleapplication.models;

import lombok.*;

import javax.persistence.*;


@Entity(name= "Address")
@Table(name = "address")
@Setter
@Getter
@ToString
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class Address {
    @Id
    @SequenceGenerator(
            name = "address_sequence",
            sequenceName = "address_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "address_sequence"
    )

    @Column(name = "address_id", nullable = false, unique = true)
    private Long addressId;


    @Column(name = "address_street", nullable = false )
    private String addressStreet;

    @Column(name = "address_number", nullable = false )
    private String addressNumber;

    @Column(name = "address_zip")
    private String addressZip;

    @Column(name = "address_city")
    private String addressCity;

    @Column(name = "address_country")
    private String addressCountry;


    public Address(String street, String number, String zip, String city, String country ) {
        this.addressStreet = street;
        this.addressNumber = number;
        this.addressZip = zip;
        this.addressCity = city;
        this.addressCountry= country;

    }
}

