package de.nbrownie.jumbleapplication.api;
import com.fasterxml.jackson.annotation.JsonInclude;
import de.nbrownie.jumbleapplication.models.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ReviewApi {
    private Long reviewId;
    private String reviewText;
    private Short reviewRating;
    private User user;
}