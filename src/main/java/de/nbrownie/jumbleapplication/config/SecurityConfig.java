//////package de.nbrownie.jumbleapplication.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;



////// @Configuration
////// @EnableWebSecurity
////// public class SecurityConfig extends WebSecurityConfigurerAdapter {


     //     @Autowired
//     private UserDetailsServiceImpl customUserDetailsService;
//
//     @Bean
//     public PasswordEncoder passwordEncoder() {
//          return new BCryptPasswordEncoder();
//     }
//
//     @Autowired
//     public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//          auth.userDetailsService(customUserDetailsService).passwordEncoder(new BCryptPasswordEncoder());
//     }
//
//////    @Override
//////    public void configure(HttpSecurity http) throws Exception {
//////         http.authorizeRequests()
//////                 .antMatchers("/static/css/**", "/static/js/**", "/static/media/**", "/icons/**")
//////                 .permitAll()
                  //.antMatchers("/login", "/register")
                  //.permitAll()
                  //.antMatchers("/auth/**", "/user/**", "/login", "/register")
//////                 .anyRequest().authenticated()
//////                  .and()
//////                  .httpBasic();

          //http.formLogin()
          // .loginPage("/login")
          // .defaultSuccessUrl("/home", true);
          //.permitAll()
          //.antMatchers("/**")
          //.authenticated()
//////     }
//////}
//
//     @Override
//     @Bean
//     protected UserDetailsService userDetailsService(){
//          UserDetails annaSmithUser = User.builder()
//                  .username("annasmith")
//                  .password(passwordEncoder.encode("password"))
//                  .roles(STUDENT.name()) // ROLE_STUDENT
//                  .build();
//
//          UserDetails lindaUser = User.builder()
//                  .username("lindaUser")
//                  .password(passwordEncoder.encode("password123"))
//                  .roles(ADMIN.name()) // ROLE_ADMIN
//                  .build();
//
//          return new InMemoryUserDetailsManager(
//                  annaSmithUser,
//                  lindaUser
//          );
//     }
/////////////////////
//////////////////////
////////////////////////
//    private final CustomUserDetailsService detailsService;
//    private final JwtAuthFilter jwtAuthFilter;
//    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
//
//    public SecurityConfig(CustomUserDetailsService detailsService, JwtAuthFilter jwtAuthFilter, JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint) {
//        this.detailsService = detailsService;
//        this.jwtAuthFilter = jwtAuthFilter;
//        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder(){
//        return new BCryptPasswordEncoder();
//    }
//
//    @Override
//    @Bean
//    public AuthenticationManager authenticationManagerBean() throws Exception {
//        return super.authenticationManagerBean();
//    }
//
//
//
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**").allowedOrigins("*")
//                .allowedMethods("HEAD", "GET", "PUT", "POST",
//                        "DELETE", "PATCH").allowedHeaders("*");
//    }
//



