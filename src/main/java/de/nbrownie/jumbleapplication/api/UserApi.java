package de.nbrownie.jumbleapplication.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserApi {
    private Long userId;
    private String username;
    private String email;
    private String userImage;
    private String userText;
    private String userRole;
    private List<ReviewApi> reviewApiList;
}