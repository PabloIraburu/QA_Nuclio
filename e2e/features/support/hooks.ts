import {BeforeAll, } from 'cucumber';
import {ToDoPage} from "../../pages/toDoPage";


const toDoPage:ToDoPage  = new ToDoPage ();



BeforeAll({timeout: 100 * 1000}, async () => {
    await toDoPage.go();
})