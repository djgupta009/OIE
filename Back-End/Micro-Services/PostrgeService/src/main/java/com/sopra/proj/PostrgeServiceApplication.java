package com.sopra.proj;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.ApplicationPidFileWriter;
import org.springframework.context.annotation.Configuration;

@Configuration
@SpringBootApplication
public class PostrgeServiceApplication {

	public static void main(String[] args) {
		SpringApplication springApplication = new SpringApplication(PostrgeServiceApplication.class);
		springApplication.addListeners(new ApplicationPidFileWriter());     // register PID write to spring boot. It will write PID to file
		springApplication.run(args);
	}
}
