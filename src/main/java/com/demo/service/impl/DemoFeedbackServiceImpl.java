package com.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.demo.models.FeedbackInfo;
import com.demo.service.DemoFeedbackService;

@Service
public class DemoFeedbackServiceImpl implements DemoFeedbackService {

	private static final String TOPIC = "demo-feedback";
	
	@Autowired
	private KafkaTemplate<String, FeedbackInfo> template;
	
	@Override
	public void addFeedbackInfo(FeedbackInfo info) {
		template.send(TOPIC, info);
	}

}
