package com.work.office.tempconversion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.work.office.tempconversion.service.tempconvservice;

@RestController
public class TempController {
	
	@Autowired
	tempconvservice convservice;
	
	@GetMapping("/health-check")
	public String healthcheck()
	{
		return "Hello this application is running up and fine";
		
	}
	
	@GetMapping("/ctf/{degree}")
	public Double getdegreeinfahrenheit(@PathVariable Double degree) {
		return convservice.celciustofahrenheit(degree);
	}
	
	@GetMapping("/ftc/{degree}")
	public Double getdegreeincelcius(@PathVariable Double degree) {
		return convservice.fahrenheittocelcius(degree);
	}

}
