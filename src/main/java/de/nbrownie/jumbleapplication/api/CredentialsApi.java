package de.nbrownie.jumbleapplication.api;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CredentialsApi {
    private String username;
    private String password;
}