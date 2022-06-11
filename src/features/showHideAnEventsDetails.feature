Feature: Show / Hide an Event's Details

  Scenario: An event element is collapsed by default.
    Given the user is on the main page
    When  the user has not clicked on an event element
    Then the event element is collapsed by default

  Scenario: User can expand an event to see its details
    Given 1 or more events is displayed on the page
    When the user clicks the Show Details button
    Then the event element expands to reveal more details

  Scenario:  User can collapse an event to hide its details
    Given the user is on the main page
    And an event element is currently expanded to show more details
    When the user clicks the Hide Details button
    Then the event element should collapse to hide the extra details
