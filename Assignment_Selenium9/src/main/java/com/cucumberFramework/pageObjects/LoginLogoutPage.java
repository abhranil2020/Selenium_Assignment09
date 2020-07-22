package com.cucumberFramework.pageObjects;


import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.Reporter;

import com.aventstack.extentreports.ExtentTest;
import com.cucumberFramework.helper.LoggerHelper;
import com.cucumberFramework.helper.WaitHelper;


public class LoginLogoutPage {
	
	private WebDriver driver;

	
	@FindBy(xpath = "//li/*[text()='Log in']")	
	WebElement homeloginbutton	; // login button	
	
	@FindBy(xpath = "//li/*[text()='Sign up']")	
	WebElement Signupbutton	; // Sign up button		
		
	@FindBy(xpath = ".//*[@id='email']")	
	WebElement emailtextbox	; // Enter email text box	
	
	@FindBy(xpath = ".//*[@id='password']")	
	WebElement passwordtextbox	; // Enter password text box	
		
	@FindBy(xpath = "//div/*[text()='Log in']")	
	WebElement loginbutton	; // login button
	
	@FindBy(xpath = "//a[@id='nav-questions']/*[text()='Stack Overflow']")	
	public WebElement StackOverflowlink	; // Stack Overflow link on LHS
	
	@FindBy(xpath = "//ol/li/a[contains(text(),'Tags')]")	
	public WebElement Tagslink	; // Stack Tags link link on LHS
	
	@FindBy(xpath = "//a[@title='A list of all 177 Stack Exchange sites']")	
	WebElement logoutnav	; 

	@FindBy(xpath = "//a[text()='log out']")	
	WebElement logoutbutton	; // logout button in home page
	
	@FindBy(xpath = "//div/button[text()='Log out']")	
	WebElement Finallogout	; // logout button in next page
	
	@FindBy(xpath = "//div[1]/p[contains(text(),'The email is not a valid email address.')]")	
	WebElement ActualErrormsg	; // Error Message 
	
	
	WaitHelper waitHelper;
	Logger logger = LoggerHelper.getLogger(WaitHelper.class);
	
	public LoginLogoutPage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
	}
	

		public void homeloginbutton() throws Exception {			
				homeloginbutton.click();
				logger.info("User clicked on log-in button in Slockover flow page");				
				driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
				driver.manage().timeouts().pageLoadTimeout(5,TimeUnit.MINUTES);			}
		

		public void stackoverflowuserlogin(String username, String password) {		
			emailtextbox.clear();
			emailtextbox.sendKeys(username);
			logger.info("Entering User name in Sign-In Page");
			passwordtextbox.clear();
			passwordtextbox.sendKeys(password);		
			logger.info("Entering password in Sign-In Page");	
		}	
		
	
		public void Clicklogin() {
			loginbutton.click();
			logger.info("User Click on log-in button in Sign-In Page");			
		}
			
    	public void homepagetitle(String expectedinboxpageTitle){
				System.out.println("Verifying homepage Title");			
				String actualHomePageTitle = driver.getTitle();
				Assert.assertTrue(actualHomePageTitle.startsWith(expectedinboxpageTitle));
				driver.manage().timeouts().pageLoadTimeout(5,TimeUnit.MINUTES);			
			}
			

		public void verifyingStackOverflowlink(){			
				if(StackOverflowlink.isDisplayed()&& StackOverflowlink.isEnabled()){
					System.out.println("StackOver flow link is Present in home page"); 
					logger.info("StackOver flow link is Present in home page");}
				else{
					System.out.println("StackOver flow link is Not Present in home page");
					logger.info("StackOver flow link is Not Present in home page");}			
			     }	


		public void verifyingtaglink(){			
				if(Tagslink.isDisplayed()&& Tagslink.isEnabled()){
					System.out.println("Tags link is Present in home page");
					logger.info("Tags link is Present in home page");}
				else {
					System.out.println("Tags link is Not Present in home page");
					logger.info("Tags link is Not Present in home page");
					}											
			}	
			

		public void Clicklogout() {
				logoutnav.click();
				logoutbutton.click();
				Finallogout.click();			
				logger.info("User Click on log-Out button in Sign-In Page");				
			}
		
	
		public void logoutfrom_application() {		
				if(homeloginbutton.isDisplayed() && Signupbutton.isDisplayed())			{
					System.out.println("log out from the application and land on sign in page");
					logger.info("log out from the application and land on sign in page");	
					
				}
				else {
					System.out.println("Error page");
					logger.info("Error page");	
				}
			}
						
			/*public void verifyingerrormsg(String expectederrormsg){
				String Result=ActualErrormsg.getText();
				System.out.println(Result);	
				Assert.assertEquals(Result, expectederrormsg);
			}	*/
	
}
