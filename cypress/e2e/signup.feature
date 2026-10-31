@signup

Feature: Signup

    As a visitor, I can create an account

    Background: Open the signup form
        When I click the "signup" link

    Scenario: Defaults URL and Signup button state 
        Then I assert the current url contains "/signup"
        And I assert the signup button is "enabled"

    Scenario: Required fields show validation errors
        When I blur the "firstname" field to trigger the error
        Then I assert the "firstname" error contains "First Name is required"
        And I assert the signup button is "disabled"

        When I blur the "lastname" field to trigger the error
        Then I assert the "lastname" error contains "Last Name is required"

        When I blur the "username" field to trigger the error
        Then I assert the "username" error contains "Username is required"

        When I blur the "password" field to trigger the error
        Then I assert the "password" error contains "Enter your password"

        When I blur the "confirm password" field to trigger the error
        Then I assert the "confirm password" error contains "Confirm your password"

    Scenario: Password must meet the minimum length
        When I type "123" into the "password" field
        Then I assert the "password" error contains "must contain at least 4 characters"

        When I type "Test123" into the "password" field
        Then I assert the "password" error "should not" exist
        And I assert the signup button is "disabled"

    Scenario: Confirm password must match the password
        When I type "Test123" into the "password" field
        And I blur the "confirm password" field to trigger the error
        Then I assert the "confirm password" error contains "Confirm your password"

        When I type "321" into the "confirm password" field
        Then I assert the "confirm password" error contains "Password does not match"

        When I type "Test123" into the "confirm password" field
        Then I assert the "confirm password" error "should not" exist
        And I assert the signup button is "disabled"

    Scenario: A user can sign up with valid details
        When I type "Scott" into the "firstname" field
        Then I assert the "firstname" error "should not" exist
        And I assert the signup button is "disabled"

        When I type "Fuston" into the "lastname" field
        Then I assert the "lastname" error "should not" exist
        And I assert the signup button is "disabled"

        When I type "scottfuston" into the "username" field
        Then I assert the "username" error "should not" exist
        And I assert the signup button is "disabled"

        When I type "Test123" into the "password" field
        Then I assert the "password" error "should not" exist
        And I assert the signup button is "disabled"

        When I type "Test123" into the "confirm password" field
        Then I assert the "confirm password" error "should not" exist
        And I assert the signup button is "enabled"

        When I click the Signup button
        Then I assert the signup response code is "201"
        And I assert the current url contains "/signin"
