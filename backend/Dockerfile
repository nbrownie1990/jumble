# define base docker image
FROM openjdk:16

ADD /target/jumblesbackend-0.0.1-SNAPSHOT.jar jumble-docker.jar
ENTRYPOINT ["java", "-jar", "jumble-docker.jar"]


