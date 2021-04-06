import { When } from 'cucumber';
import {ToDoPage} from "../../pages/toDoPage";
import {browser, by, element} from "protractor";
import {Given} from 'cucumber'
import * as chai from 'chai';
import {Then} from 'cucumber'


const toDoPage:ToDoPage  = new ToDoPage ();

const expect = chai.expect;

const WELCOME_PAGE_URL= '/collections'

Given(/^I am at the (welcome) page$/, async (option) => {
    switch(option) {
        case ('welcome'):
            await browser.sleep(500)
            await expect(await toDoPage.getUrl()).to.equal(WELCOME_PAGE_URL)
            break
    }})


When(/^I click on ([^"]*)$/, {timeout: 10 * 1000}, async (option) => {
    switch (option){
        case ('Add a new collection'):
            await browser.sleep(500)
            await toDoPage.clickAddNewCollection()
            await browser.sleep(1500)
            break
     case ('the edit collection button'):
            await browser.sleep(1000)
            await toDoPage.clickEditCollection()
            await browser.sleep(1500)
            break
        case ('the delete collection button'):
            await browser.sleep(1000)
            await toDoPage.clickDeleteCollection()
            await browser.sleep(1500)
            break
        case ('confirm deletion'):
            await browser.sleep(1000)
            await toDoPage.clickConfirmDeletion()
            await browser.sleep(1500)
            break
        case ('the login button'):
            await browser.sleep(1000)
            await element(by.buttonText('Login')).click()
            await browser.sleep(1500)
            break

        case ('the collections button'):
            await browser.sleep(500)
            await toDoPage.clickGoToCollectionsPage()
            break

        case ('the add task button'):
            await browser.sleep(500)
            await element(by.xpath('//*[@id="root"]/div[2]/div[2]/div/button')).click()
            break

        case ('the Create Button'):
            await browser.sleep(500)
            await toDoPage.clickCreateButton()
            await browser.sleep(1000)
            break

        case ('a collection'):
            await toDoPage.clickOpenCollection()
            break
    }
});
When(/^I enter "([^"]*)" on the (collection|task) form$/, async (text, option) => {
    switch (option){
        case ('collection'):
            await toDoPage.fillTextFormField('Collection', 'Name', text);
            break
        case ('task'):
            await element(by.xpath('//*[@id="taskDataForm"]/input')).sendKeys('Test')
    }
});
Then(/^The new collection is created$/, async () => {
    await expect (await element(by.dataTest('collectionName-test 1')).getText()).to.be.equal('test 1')
});
Given(/^have an existing collection$/, async () => {
    await expect(await element.all(by.className('collectionBox__container_box__2V5Vq collectionBox__background__dIAFp false')).count()).to.be.above(0)
});
Then(/^The collection has been edited$/, async () => {
    await expect (await element(by.dataTest('collectionName-test 2')).getText()).to.be.equal('test 2')
});
When(/^I select the ([^"]*) icon on the collection form$/, async (icon) => {
    await element(by.dataTest(`Button-openIconSelection`)).click()
    await element(by.dataTest(`Button-icon-${icon}`)).click()
});

Then(/^The collection has been deleted$/, async () => {
    await expect(await element.all(by.className('collectionBox__container_box__2V5Vq collectionBox__background__dIAFp false')).count()).to.be.equal(1)
});
When(/^I enter "([^"]*)" in the (username|password) field$/, async (text, type) => {
    switch (type){
        case ('username'):
            await element(by.dataTest('Input-email')).sendKeys(text)
            await browser.sleep(3000)
            break
        case ('password'):
            await element(by.xpath('//*[@id="root"]/div/div/form/input[2]')).sendKeys(text)
            break
    }
});