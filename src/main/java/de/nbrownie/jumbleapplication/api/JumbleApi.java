package de.nbrownie.jumbleapplication.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import de.nbrownie.jumbleapplication.models.Address;
import de.nbrownie.jumbleapplication.models.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public class JumbleApi {
        private Long jumbleId;
        private String jumbleName;
        private String jumbleText;
        private String jumbleImage;
        private String jumbleDate;
        private String jumbleTime;
        private String jumbleWebsite;
        private Category category;
        private List<ReviewApi> reviewApiList;
        private Address address;
    }
