import {Before, BeforeAll,} from 'cucumber';
import {ToDoPage} from "../../pages/toDoPage";


const toDoPage:ToDoPage  = new ToDoPage ();



BeforeAll({timeout: 100 * 1000}, async () => {
    await toDoPage.go();
})

Before('@P17-004', async () => {
    await toDoPage.clickGoToCollectionsPage()
    await toDoPage.clickAddNewCollection()
    await toDoPage.fillTextFormField('Collection', 'Name', 'Filler');
    await toDoPage.clickCreateButton()
    await toDoPage.go();
});