package de.nbrownie.jumbleapplication.payload.request;

import de.nbrownie.jumbleapplication.models.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.util.Set;


@AllArgsConstructor
@NoArgsConstructor
public class CreateAddressRequest {

    @NotBlank
    private Long addressId;

   // @NotBlank
    private String addressStreet;

    @NotBlank
    private String addressNumber;

    @NotBlank
    private String addressZip;

    @NotBlank
    private String addressCity;

    @NotBlank
    private String addressCountry;

    private double longitude;

    private double latitude;

    @NotBlank
    private Jumble jumble;



    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public String getAddressStreet() {
        return addressStreet;
    }

    public void setAddressStreet(String addressStreet) {
        this.addressStreet = addressStreet;
    }

    public String getAddressNumber() {
        return addressNumber;
    }

    public void setAddressNumber(String addressNumber) {
        this.addressNumber = addressNumber;
    }

    public String getAddressZip() {
        return addressZip;
    }

    public void setAddressZip(String addressZip) {
        this.addressZip = addressZip;
    }

    public String getAddressCity() {
        return addressCity;
    }

    public void setAddressCity(String addressCity) {
        this.addressCity = addressCity;
    }

    public String getAddressCountry() {return addressCountry;}

    public void setAddressCountry(String addressCountry) {this.addressCountry = addressCountry;}

    public double getLongitude() {return longitude;}

    public void setLongitude(double longitude) {this.longitude = longitude;}

    public double getLatitude() {return latitude; }

    public void setLatitude(double latitude) {this.latitude = latitude;}

    public Jumble getJumble() {
        return jumble;
    }

    public void setJumble(Jumble jumble) {this.jumble = jumble;}


}

