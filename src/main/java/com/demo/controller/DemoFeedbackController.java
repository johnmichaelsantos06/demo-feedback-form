package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.demo.models.FeedbackInfo;
import com.demo.service.DemoFeedbackService;

@Controller
public class DemoFeedbackController {
	
	@Autowired
	private DemoFeedbackService service;
	
	@GetMapping("/index")
	public String index() {
		return "index";
	}
	
	@PostMapping("/submit")
	public String submit(FeedbackInfo info) {
		service.addFeedbackInfo(info);
		return "redirect:/index";
	}
}
