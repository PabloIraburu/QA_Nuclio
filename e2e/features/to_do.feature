@add_leads
@all
Feature: QA masterclass tests

  Background: Given I have a set of valid credentials
    Given I click on the collections button

  @smoke
  @P17-001
  Scenario: User enters login credentials
    When I enter "Pablo" in the username field
    And I enter "test_password" in the password field
    And I click on the login button
    Then I am logged in

  @smoke
  @P17-002
  Scenario: User creates a collection
    Given I am at the welcome page
    When I click on Add a new collection
    And I enter "test 1" on the collection form
    And I click on the Create Button
    Then The new collection is created

  @smoke
  @P17-003
  Scenario: User edits a collection
    Given I am at the welcome page
    And have an existing collection
    When I click on the edit collection button
    And I enter "test 2" on the collection form
    And I click on the Create Button
    Then The collection has been edited


  @smoke
  @P17-004
  Scenario: User deletes a collection
    Given I am at the welcome page
    And have an existing collection
    When I click on the delete collection button
    And I click on confirm deletion
    Then The collection has been deleted

#  @smoke
#  @P17-005
#  Scenario: User adds tasks to a collection
#    Given I am at the welcome page
#    And have an existing collection
#    When I click on a collection
#    And I click on the add task button
#    And I fill the task form
#    Then The new task is created
#    And The counter is updated

  @smoke
  @P17-005
  Scenario: User adds tasks to a collection
    Given I am at the welcome page
    And have an existing collection
    When I click on a collection
    And I click on the add task button
    And I enter "Task 1" on the task form
    And I click on the Create Button



#  @smoke
#  @P21-283
#  Scenario: User edits a task
#    Given I am at the welcome page
#    And have an existing collection
#    And the collection has an existing task
#    When I click on the edit task icon
#    And I update the name
#    And I click the ok button
#    Then The task is updated
#    And The counter is updated
#
#  @smoke
#  @P21-283
#  Scenario: User deletes a task
#    Given I am at the welcome page
#    And have an existing collection
#    And the collection has an existing task
#    When I click on the delete task icon
#    And I click the ok button
#    Then The task is deleted
#
#  @P21-283
#  Scenario: User completes a task
#    Given I am at the welcome page
#    And have an existing collection
#    And the collection has an existing task
#    When I click on the name of a task
#    Then The task is marked as completed
#    And The counter is updated
#




