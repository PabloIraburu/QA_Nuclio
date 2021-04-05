import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import {browser, by} from "protractor";
import { Reporter } from "../features/support/reporter";

const jsonReports = process.cwd() + "/reports/json";

module.exports = {
  allScriptsTimeout: 50000,
  seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: "http://localhost:3000",

  capabilities: {
    browserName: "chrome",
  },

  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  specs: [
    "e2e/features/to_do.feature",
  ],

  getPageTimeout: 50000,

  onPrepare: () => {
    require("ts-node").register({
      project: "tsconfig.json"
    })
    ;


    by.addLocator('dataTest', function (value,parentElement){
      parentElement=parentElement || document;
      var nodes = parentElement.querySelectorAll('[data-test]');
      return Array.prototype.filter.call(nodes, function(node) {
        return (node.getAttribute('data-test') === value);
      })
    })


    chai.use(chaiAsPromised);

    browser.waitForAngularEnabled(false);

    browser
        .manage()
        .timeouts()
        .implicitlyWait(30000);
    browser.driver
        .manage()
        .window()
        .maximize();
    Reporter.createDirectory(jsonReports);
  },

  cucumberOpts: {
    format: [
      require.resolve("cucumber-pretty"),
      "json:./reports/json/cucumber_report.json"
    ],
    compiler: "ts:ts-node/register",
    require: [
      "typeScript/features/step_definitions/*.js",
      "typeScript/features/support/*.js"
    ],
    strict: true,
    tags: `${process.env.tags}`
  },


  onComplete: () => {
    Reporter.createHTMLReport();
  }
};
