package com.cucumberFramework.testRunner;
import java.io.IOException;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;



@CucumberOptions(features = {"src/test/resources/features/login/login_logout_ValidCred.feature","src/test/resources/features/login/login_Invalidcred.feature" },
glue = { "com/cucumberFramework/stepdefinitions" }, 
plugin = { "pretty", "html:target/cucumber-reports/cucumber-pretty","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/Automationreport.html",
		"json:target/cucumber-reports/CucumberTestReport.json", "rerun:target/cucumber-reports/rerun.txt" },
dryRun = false,monochrome = true)

public class TestRunner {
	
	private TestNGCucumberRunner testNGCucumberRunner;
	   
	@BeforeClass(alwaysRun = true)
	public void setUpClass() {
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}

	@Test(groups = "cucumber", description = "Runs cucmber Features", dataProvider = "features")
	public void feature(CucumberFeatureWrapper cucumberFeature) {
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}

	@DataProvider
	public Object[][] features() {
		return testNGCucumberRunner.provideFeatures();
	}


	@AfterClass(alwaysRun = true)
	public void testDownClass() throws IOException{
		Reporter.loadXMLConfig("/Stackoverflow_Assng7/extent-config.xml");
		Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
	     Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
	     Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
	     Reporter.setSystemInfo("Selenium", "3.7.0");
	     Reporter.setSystemInfo("Maven", "3.5.2");
	     Reporter.setSystemInfo("Java Version", "1.8.0_151");
		testNGCucumberRunner.finish();	
		
	}

}
