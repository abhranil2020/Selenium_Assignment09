$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login/login_Invalidcred.feature");
formatter.feature({
  "line": 1,
  "name": "As a Stackover user I shouldnot able to login with In-valid credentials and error message should display",
  "description": "",
  "id": "as-a-stackover-user-i-shouldnot-able-to-login-with-in-valid-credentials-and-error-message-should-display",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with In-Valid Credentials",
  "description": "",
  "id": "as-a-stackover-user-i-shouldnot-able-to-login-with-in-valid-credentials-and-error-message-should-display;login-with-in-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Invoke URL\"https://stackoverflow.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Click on Log in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Enter Email address as \"\u003cEmail\u003e\" and Password as \"\u003cPassword\u003e\".",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Log in button",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "as-a-stackover-user-i-shouldnot-able-to-login-with-in-valid-credentials-and-error-message-should-display;login-with-in-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 11,
      "id": "as-a-stackover-user-i-shouldnot-able-to-login-with-in-valid-credentials-and-error-message-should-display;login-with-in-valid-credentials;;1"
    },
    {
      "cells": [
        "abhranil.blr@gmail.com",
        "March2020#"
      ],
      "line": 12,
      "id": "as-a-stackover-user-i-shouldnot-able-to-login-with-in-valid-credentials-and-error-message-should-display;login-with-in-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7761975600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login with In-Valid Credentials",
  "description": "",
  "id": "as-a-stackover-user-i-shouldnot-able-to-login-with-in-valid-credentials-and-error-message-should-display;login-with-in-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Invoke URL\"https://stackoverflow.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Click on Log in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Enter Email address as \"abhranil.blr@gmail.com\" and Password as \"March2020#\".",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Log in button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://stackoverflow.com/",
      "offset": 16
    }
  ],
  "location": "loginLogoutPageStepDefinitions.user_Invoke_URL(String)"
});
formatter.result({
  "duration": 3180262700,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.user_Click_on_Log_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "duration": 1087022300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhranil.blr@gmail.com",
      "offset": 29
    },
    {
      "val": "March2020#",
      "offset": 70
    }
  ],
  "location": "loginLogoutPageStepDefinitions.user_Enter_Email_address_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 852930000,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.click_on_Log_in_button()"
});
formatter.result({
  "duration": 3184591300,
  "status": "passed"
});
formatter.after({
  "duration": 741204400,
  "status": "passed"
});
formatter.uri("src/test/resources/features/login/login_logout_ValidCred.feature");
formatter.feature({
  "line": 1,
  "name": "As a Stackover user I should be able to login and logout with valid credentials",
  "description": "",
  "id": "as-a-stackover-user-i-should-be-able-to-login-and-logout-with-valid-credentials",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Sucessfull login with Valid Credentials",
  "description": "",
  "id": "as-a-stackover-user-i-should-be-able-to-login-and-logout-with-valid-credentials;sucessfull-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Invoke URL\"https://stackoverflow.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Click on Log in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Enter Email address as \"\u003cEmail\u003e\" and Password as \"\u003cPassword\u003e\".",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "StackOverflow link should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Tag link should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on Logout button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I got log out from the application and land on sign in page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-a-stackover-user-i-should-be-able-to-login-and-logout-with-valid-credentials;sucessfull-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 15,
      "id": "as-a-stackover-user-i-should-be-able-to-login-and-logout-with-valid-credentials;sucessfull-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "abhranil.blr@gmail.com",
        "April2020#"
      ],
      "line": 16,
      "id": "as-a-stackover-user-i-should-be-able-to-login-and-logout-with-valid-credentials;sucessfull-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6561050100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Sucessfull login with Valid Credentials",
  "description": "",
  "id": "as-a-stackover-user-i-should-be-able-to-login-and-logout-with-valid-credentials;sucessfull-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User Invoke URL\"https://stackoverflow.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Click on Log in button and wait for sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User Enter Email address as \"abhranil.blr@gmail.com\" and Password as \"April2020#\".",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "StackOverflow link should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Tag link should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on Logout button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I got log out from the application and land on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://stackoverflow.com/",
      "offset": 16
    }
  ],
  "location": "loginLogoutPageStepDefinitions.user_Invoke_URL(String)"
});
formatter.result({
  "duration": 2318169300,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.user_Click_on_Log_in_button_and_wait_for_sign_in_page()"
});
formatter.result({
  "duration": 770823200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhranil.blr@gmail.com",
      "offset": 29
    },
    {
      "val": "April2020#",
      "offset": 70
    }
  ],
  "location": "loginLogoutPageStepDefinitions.user_Enter_Email_address_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 439727000,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.click_on_Log_in_button()"
});
formatter.result({
  "duration": 3086376400,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.stackoverflow_link_should_be_displayed()"
});
formatter.result({
  "duration": 342341900,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.tag_link_should_be_displayed()"
});
formatter.result({
  "duration": 88638700,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.user_click_on_Logout_button()"
});
formatter.result({
  "duration": 3861918300,
  "status": "passed"
});
formatter.match({
  "location": "loginLogoutPageStepDefinitions.i_got_log_out_from_the_application_and_land_on_sign_in_page()"
});
formatter.result({
  "duration": 84732000,
  "status": "passed"
});
formatter.after({
  "duration": 700308500,
  "status": "passed"
});
});