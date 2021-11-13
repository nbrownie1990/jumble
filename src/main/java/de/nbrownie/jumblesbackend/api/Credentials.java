package de.nbrownie.jumblesbackend.api;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Credentials {
    private String username;
    private String password;
}