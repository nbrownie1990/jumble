package de.nbrownie.jumbleapplication.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AddressApi {
    private Long addressId;
    private String addressStreet;
    private String addressNumber;
    private String addressZip;
    private String addressCity;
    private String addressCountry;
    private double latitude;
    private double longitude;

}