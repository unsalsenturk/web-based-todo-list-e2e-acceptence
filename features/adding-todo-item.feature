Feature: Adding a TODO item

  Scenario: The user should be able to add an item to the to-do list.
    Given Empty ToDo list
    When I write "buy some milk" to <text box> and click to <add button>
    Then I should see "buy some milk" item in ToDo list