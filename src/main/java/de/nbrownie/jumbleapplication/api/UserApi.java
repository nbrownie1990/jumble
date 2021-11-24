package de.nbrownie.jumbleapplication.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserApi {
    private String username;
    private String email;
    private String userRole;
}