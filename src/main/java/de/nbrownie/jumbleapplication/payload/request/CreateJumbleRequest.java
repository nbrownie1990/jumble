package de.nbrownie.jumbleapplication.payload.request;

import de.nbrownie.jumbleapplication.models.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Set;

import javax.validation.constraints.*;


@AllArgsConstructor
@NoArgsConstructor
public class CreateJumbleRequest {


    private Long jumbleId;

    private String jumbleName;

    private String jumbleImage;

    private String jumbleText;

    private String jumbleDate;

    private String jumbleTime;

    private String jumbleWebsite;

    private Category category;

    private Address address;

    private String addressStreet;

    private String addressNumber;

    private String addressZip;

    private String addressCity;


    private Long userId;


    public Long getJumbleId() {
        return jumbleId;
    }

    public void setJumbleId(Long jumbleId) {
        this.jumbleId = jumbleId;
    }

    public String getJumbleName() {
        return jumbleName;
    }

    public void setJumbleName(String jumbleName) {
        this.jumbleName = jumbleName;
    }

    public String getJumbleImage() {
        return jumbleImage;
    }

    public void setJumbleImage(String jumbleImage) {
        this.jumbleImage = jumbleImage;
    }

    public String getJumbleText() {
        return jumbleText;
    }

    public void setJumbleText(String jumbleText) {
        this.jumbleText = jumbleText;
    }

    public String getJumbleDate() {
        return jumbleDate;
    }

    public void setJumbleDate(String jumbleDate) {
        this.jumbleDate = jumbleDate;
    }

    public String getJumbleTime() {
        return jumbleTime;
    }

    public void setJumbleTime(String jumbleTime) {this.jumbleTime = jumbleTime;}

    public String getJumbleWebsite() {
        return jumbleWebsite;
    }

    public void setJumbleWebsite(String jumbleWebsite) {
        this.jumbleWebsite = jumbleWebsite;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {this.category = category;}

    public Address getAddress() {return address;}

    public void setAddress(Address address) {this.address = address;}

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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

}

