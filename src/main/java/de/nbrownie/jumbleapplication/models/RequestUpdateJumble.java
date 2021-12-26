package de.nbrownie.jumbleapplication.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RequestUpdateJumble {

    private Long jumbleId;

    private String jumbleName;

    private String jumbleImage;

    private String jumbleText;

    private String jumbleDate;

    private String jumbleTime;

    private String jumbleWebsite;

    private Category category;

    private Address address;

    private User user;

    private Set<Review> reviewList;

    @Override
    public int hashCode() {
        if (getJumbleId() == null) {
            return getClass().hashCode();
        }
        return getJumbleId().hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RequestUpdateJumble that = (RequestUpdateJumble) o;
        return jumbleId.equals(that.jumbleId);
    }

    @Override
    public String toString() {
        return jumbleName + " " + jumbleText + ", " +
                jumbleDate + " " + jumbleTime + ", " + jumbleWebsite;
    }
}

