@login

Feature: Login
    # TODO: assert logged in.
    As a user I can log in

    Scenario: Login form validation
        Then I assert the current url contains "/signin"
        Then I assert the remember me cookie "has not" been set
        Then I assert the signin button is "enabled"

        When I "check" the remember me checkbox
        Then I assert the signin button is "disabled"
        And I "uncheck" the remember me checkbox

        When I blur the username field to trigger the error
        Then I assert the "username" error contains "Username is required"
        And I assert the signin button is "disabled"

        When I type "invalid pass" into the "password" field
        Then I assert the signin button is "disabled"

        When I type "invalid username" into the "username" field
        Then I assert the "username" error "should not" exist
        And I assert the signin button is "enabled"

        When I type "123" into the "password" field
        Then I assert the "password" error contains "must contain at least 4 characters"

        When I type "invalid pass" into the "password" field
        Then I assert the "password" error "should not" exist

    Scenario: Login with invalid credentials
        When I type "invalid username" into the "username" field
        And I type "invalid pass" into the "password" field
        And I click the signin button
        Then I assert the login response code is "401"
        And I assert the "submit" error contains "Username or password is invalid"

    Scenario: Signup link works
        When I click the "Signup" link
        Then I assert the current url contains "/signup"
        When I click the "Signin" link
        Then I assert the current url contains "/signin"

    Scenario: Login with remember me enabled
        When I type the configured username into the username field
        And I type the configured password into the password field
        And I "check" the remember me checkbox
        And I click the signin button
        Then I assert the login response code is "200"
        And I assert the remember me cookie "has" been set
        And I assert the remember me cookie "has" an expiration

    Scenario: Login with remember me disabled
        When I type the configured username into the username field
        And I type the configured password into the password field
        And I click the signin button
        Then I assert the login response code is "200"
        And I assert the remember me cookie "has" been set
        And I assert the remember me cookie "does not have" an expiration