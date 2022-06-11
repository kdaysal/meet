Feature: Specify Number of Events

  Scenario: When user hasn't specified a number, make 32 the default number
    Given the user is on the main page
    When a specific number of events has not been set by the user
    Then 32 events are displayed by default

  Scenario: User can change the number of events they want to see
    Given the user is on the main page
    When the user specifies the number of events by interacting with the NumberOfEvents textbox
    Then the number of events displayed on the page should match the user-specified value - or be less if not enough events exist
