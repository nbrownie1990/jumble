//package de.nbrownie.jumbleapplication.services;
//
//import de.nbrownie.jumbleapplication.models.Address;
//import de.nbrownie.jumbleapplication.repo.AddressRepository;

//import com.mapbox.api.geocoding.v5.MapboxGeocoding;
//import com.mapbox.api.geocoding.v5.models.CarmenFeature;
//import com.mapbox.api.geocoding.v5.models.GeocodingResponse;
//import de.nbrownie.jumbleapplication.config.MapboxConfigProperties;

//import lombok.Getter;
//import lombok.Setter;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
////import retrofit2.Call;
////import retrofit2.Callback;
////import retrofit2.Response;
//
//import javax.persistence.EntityNotFoundException;
//import java.util.List;
//
//@Slf4j
//@Getter
//@Setter
//@Service
//public class MapboxService {
//    private final MapboxConfigProperties mapboxConfigProperties;
//    private final AddressRepository addressRepository;
//
//    @Autowired
//    public MapboxService(MapboxConfigProperties mapboxConfigProperties, AddressRepository addressRepository) {
//        this.mapboxConfigProperties = mapboxConfigProperties;
//        this.addressRepository = addressRepository;
//    }
//
//
//    public void getGeoLocation(Long id, String addressString){
//
//        String mapboxToken = mapboxConfigProperties.getAccessToken();
//
//        MapboxGeocoding mapboxGeocoding = MapboxGeocoding.builder()
//                .accessToken(mapboxToken)
//                .query(addressString)
//                .build();
//
//        mapboxGeocoding.enqueueCall(new Callback<GeocodingResponse>() {
//            @Override
//            public void onResponse(Call<GeocodingResponse> call, Response<GeocodingResponse> response) {
//                List<CarmenFeature> results = response.body().features();
//
//                List<Double> coordinates;
//                if (results.size() > 0) {
//
//                    coordinates = results.get(0).center().coordinates();
//
//                    Address existingAddress = addressRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Address with id not found"));
//                    existingAddress.setLongitude(coordinates.get(0));
//                    existingAddress.setLatitude(coordinates.get(1));
//
//                    addressRepository.save(existingAddress);
//
//                    log.info("mapbox onResponse: coordinates added to address");
//
//                } else {
//                    log.info("mapbox onResponse: No coordinates found for this address");
//                }
//
//            }
//
//            @Override
//            public void onFailure(Call<GeocodingResponse> call, Throwable throwable) {
//                log.info("mapbox onFailure: some problem....");
//                throwable.printStackTrace();
//            }
//        });
//    }
//
//}
