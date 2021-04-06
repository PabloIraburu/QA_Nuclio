import {After, Before, BeforeAll,} from 'cucumber';
import {ToDoPage} from "../../pages/toDoPage";
import {browser, by, element, ExpectedConditions as EC} from "protractor";


const toDoPage:ToDoPage  = new ToDoPage ();



BeforeAll({timeout: 100 * 1000}, async () => {
    await toDoPage.go();
})

Before({tags: '@P17-004', timeout: 100 * 1000} , async () => {
    await toDoPage.clickGoToCollectionsPage()
    await toDoPage.clickAddNewCollection()
    await toDoPage.fillTextFormField('Collection', 'Name', 'Filler');
    await toDoPage.clickCreateButton()
    await browser.sleep(2000)
    await toDoPage.go();
});

After({tags: '@P17-004', timeout: 100 * 1000}, async () => {
    await browser.actions().mouseMove(element(by.dataTest('collectionName-Filler'))).perform();
    await browser.wait(EC.elementToBeClickable(element(by.dataTest("Button-deleteCollectionButton"))));
    await element(by.dataTest("Button-deleteCollectionButton")).click();
    await toDoPage.clickConfirmDeletion()
});