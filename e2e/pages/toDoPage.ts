import {
    browser,
    by,
    element, ElementArrayFinder,
    ElementFinder,
    ExpectedConditions as EC, Key,
} from "protractor";
import {log} from "util";

export class ToDoPage {
    private addNewCollectionButton: ElementFinder;
    private editCollectionButton: ElementFinder;
    private hoverEditCompanyButton: ElementFinder;



    constructor() {
        this.addNewCollectionButton = element(by.dataTest("Button-addNewCollection"));
        this.editCollectionButton = element(by.dataTest("Button-editCollectionButton"));
        this.hoverEditCompanyButton = element(by.dataTest('collectionName-test 1'))

    }

    public go() {
        return browser.get("/");
    }

    public async clickAddNewCollection() {
        await browser.wait(EC.elementToBeClickable(this.addNewCollectionButton));
        return this.addNewCollectionButton.click();
    }

    public async clickEditCollection() {
        await browser.actions().mouseMove(this.hoverEditCompanyButton).perform();
        await browser.wait(EC.elementToBeClickable(this.editCollectionButton));
        return this.editCollectionButton.click();
    }
    public async clickCreateButton() {
        await browser.wait(EC.elementToBeClickable(element(by.buttonText('Create'))));
        return element(by.buttonText('Create')).click();
    }

    public async clickOpenCollection() {
        await browser.wait(EC.elementToBeClickable(element(by.dataTest('collectionName-test 1'))));
        return element(by.dataTest('collectionName-test 1')).click();
    }

    public async clickGoToCollectionsPage() {
        await browser.sleep(1000)
        await browser.wait(EC.elementToBeClickable(element(by.dataTest('Button-collectionsLoginPage'))));
        return element(by.dataTest('Button-collectionsLoginPage')).click();
    }

    public async fillTextFormField(type, content, text) {
        console.log(`Input-${type}${content}InputField`)
        await browser.wait(EC.elementToBeClickable(element(by.dataTest(`Input-${type}${content}InputField`))));
        await element(by.dataTest(`Input-${type}${content}InputField`)).sendKeys(Key.chord(Key.CONTROL, "a"))
        await element(by.dataTest(`Input-${type}${content}InputField`)).sendKeys(text)
        await browser.sleep(2000)
    }

    public async selectIcon(position) {
        await browser.wait(EC.elementToBeClickable(element.all(by.className('selectIcons__button__30m4r')).get(position)));
        return element.all(by.className('selectIcons__button__30m4r')).get(position).click();
    }

    // public async clickAddTaskButton() {
    //     await browser.wait(EC.elementToBeClickable(element(by.buttonText('Add Task'))))
    //     await element(by.buttonText('Add Task')).click();
    //     await browser.sleep(2000)
    // }


    public async getUrl() {
        await browser.sleep(500);
        return browser.getCurrentUrl().then(url => {
            return url.replace(browser.baseUrl, "");
        });
    }
}