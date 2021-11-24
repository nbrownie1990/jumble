package de.nbrownie.jumbleapplication.controllers;

import de.nbrownie.jumbleapplication.api.*;
import de.nbrownie.jumbleapplication.models.*;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

abstract class ControllerMapper {
///USER////
    public UserApi mapUser(User user) {
        return UserApi.builder()
                .username(user.getUsername())
                .email(user.getEmail())
                .build();
    }

    public User mapUser(SignUpApi user) {
        return User.builder()
                .username(user.getUsername())
                .email(user.getEmail())
                .build();
    }

    public List<UserApi> mapUser(List<User> userList) {
        List<UserApi> userApiList = new LinkedList<>();
        for(User user: userList){
            UserApi userApi = mapUser(user);
            userApiList.add(userApi);
        }
        return userApiList;
    }

///REVIEW///
    public Review mapReview(ReviewApi reviewApi){
        return Review.builder()
                .reviewId(reviewApi.getReviewId())
                .reviewRating(reviewApi.getReviewRating())
                .reviewText(reviewApi.getReviewText())
                .build();
    }

    public ReviewApi mapReview(Review review){
        return ReviewApi.builder()
                .reviewId(review.getReviewId())
                .reviewRating(review.getReviewRating())
                .reviewText(review.getReviewText())
                .build();
    }

    public Set<Review> mapReviewListToEntity(List<ReviewApi> reviewApiList) {
        Set<Review> reviewList = new HashSet<>();
        if (reviewApiList != null){
            for (ReviewApi reviewApi : reviewApiList) {
                Review review = mapReview(reviewApi);
                reviewList.add(review);
            }
        }
        return reviewList;
    }

    public List<ReviewApi> mapReviewListFromEntity(Set<Review> reviewList){
        List<ReviewApi> reviewApiList = new LinkedList<>();
        if (reviewList != null){
            for (Review review : reviewList){
                ReviewApi reviewApi = mapReview(review);
                reviewApiList.add(reviewApi);
            }
        }
        return reviewApiList;
    }



    ///ADDRESS///
    public Address mapAddress(AddressApi address){
        if (address == null){
            return null;
        }
        return Address.builder()
                .addressId(address.getAddressId())
                .addressStreet(address.getAddressStreet())
                .addressNumber(address.getAddressNumber())
                .addressZip(address.getAddressZip())
                .addressCity(address.getAddressCity())
                .addressCountry(address.getAddressCountry())
                .build();
    }

    public AddressApi mapAddress(Address address){
        if(address== null){
            return null;
        }
        return AddressApi.builder()
                .addressId(address.getAddressId())
                .addressStreet(address.getAddressStreet())
                .addressNumber(address.getAddressNumber())
                .addressZip(address.getAddressZip())
                .addressCity(address.getAddressCity())
                .addressCountry(address.getAddressCountry())
                .build();
    }

    private Double getLatitude(Address address){
        if (address != null){
            return address.getLatitude();
        }
        return null;
    }

    private Double getLongitude(Address address){
        if (address != null){
            return address.getLongitude();
        }
        return null;
    }


    ///JUMBLE///
    public Jumble mapJumble(JumbleApi jumbleApi) {
        return Jumble.builder()
                .jumbleText(jumbleApi.getJumbleText().toString())
                .jumbleName(jumbleApi.getJumbleName())
                .jumbleImage(jumbleApi.getJumbleImage())
                .jumbleId(jumbleApi.getJumbleId())
                .build();
    }

    public JumbleApi mapJumble(Jumble jumble) {
        return JumbleApi.builder()
                .jumbleText(jumble.getJumbleText().toString())
                .jumbleName(jumble.getJumbleName())
                .jumbleImage(jumble.getJumbleImage())
                .jumbleId(jumble.getJumbleId())
                .reviewApiList(mapReviewListFromEntity(jumble.getReviewList()))
                .build();
    }

    public List<JumbleApi> mapJumble(List<Jumble> jumbleList) {
        List<JumbleApi> jumbleApiList = new LinkedList<>();
        for (Jumble jumble : jumbleList){
            JumbleApi jumbleApi = mapJumble(jumble);
            jumbleApiList.add(jumbleApi);
        }
        return jumbleApiList;
    }
}