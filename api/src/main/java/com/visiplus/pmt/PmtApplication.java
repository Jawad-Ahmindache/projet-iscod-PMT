package com.visiplus.pmt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class PmtApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(PmtApplication.class, args);	
	}

}
