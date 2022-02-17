package com.work.office.tempconversion.service;

import org.springframework.stereotype.Service;

@Service
public class tempconvservice {
	public Double celciustofahrenheit(Double degrees) {
		return (degrees * 9 / 5) + 32;
	}

	public Double fahrenheittocelcius(Double degrees) {
		return (degrees - 32) * 5 / 9;
	}

}
