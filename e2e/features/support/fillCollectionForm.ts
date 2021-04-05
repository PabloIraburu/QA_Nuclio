import {browser, by, element, ExpectedConditions as EC} from "protractor";
import {ToDoPage} from "../../pages/toDoPage";

const toDoPage:ToDoPage  = new ToDoPage ();

export async function fillCollectionForm({name, iconPosition}) {
    const type= 'COMPANY'
    await toDoPage.fillTextFormField('NAME', name, type);
    await toDoPage.selectIcon(iconPosition); //ArrayFinder
    await toDoPage.clickCreateButton();
    await browser.sleep(1000)
}