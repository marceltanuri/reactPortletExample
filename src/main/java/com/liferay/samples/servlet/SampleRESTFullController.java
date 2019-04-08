package com.liferay.samples.servlet;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.liferay.portal.kernel.exception.SystemException;

@Controller
public class SampleRESTFullController {

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody String hello() throws SystemException {
		
		return System.currentTimeMillis()-((1000*60)*60)+"";
	}
}
