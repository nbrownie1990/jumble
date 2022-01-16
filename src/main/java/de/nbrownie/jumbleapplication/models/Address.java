package de.nbrownie.jumbleapplication.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity(name = "Address")
@Table(name = "addresses")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Address {

    @Column(name = "address_id", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    @Column(name = "longitude")
    private double longitude;

    @Column(name = "latitude")
    private double latitude;

    @OneToOne(mappedBy= "address", orphanRemoval = true)
    @JsonBackReference(value="address-jumble")
    private Jumble jumble;


    @Override
    public int hashCode() {
        if (getAddressId() == null){
            return getClass().hashCode();
        }
        return getAddressId().hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Address that = (Address) o;
        return addressId.equals(that.addressId);
    }

    @Override
    public String toString() {
        return addressStreet + " " + addressNumber + ", " +
                addressZip + " " + addressCity + ", " + addressCountry;
    }
}

