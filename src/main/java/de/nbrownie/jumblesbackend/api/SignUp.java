package de.nbrownie.jumblesbackend.api;


import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SignUp {

    @ApiModelProperty(required = true, example = "klara42", notes = "The username")
    private String username;

    @ApiModelProperty(notes = "The email address")
    private String email;

    @ApiModelProperty(required = true, example = "12345", notes = "The password")
    private String password;
}