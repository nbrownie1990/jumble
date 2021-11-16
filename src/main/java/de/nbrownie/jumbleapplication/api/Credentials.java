package de.nbrownie.jumbleapplication.api;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Credentials {
    private String userName;
    private String userPassword;
}