package com.cucumberFramework.stepdefinitions;

import org.apache.log4j.Logger;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.cucumber.listener.Reporter;
import com.cucumberFramework.helper.LoggerHelper;
import com.cucumberFramework.testBase.TestBase;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.TestContext;

public class ServiceHooks {
	
	 TestContext testContext; 
	 public ServiceHooks(TestContext context) {
	 testContext = context;
	 }

	TestBase testBase;
	Logger log = LoggerHelper.getLogger(ServiceHooks.class);
	
	@Before
	public void initializeTest() {
		testBase = new TestBase();		
		testBase.initialization();
		Reporter.assignAuthor("ToolsQA - Lakshay Sharma");
	}

	@After
	public void endTest() {
		TestBase.driver.quit();

	}
	
	

	
	
	
	
}
