import { LoadingCyDriver } from "./Loading";
export class UIActions {
    public static visitPage = (url: string, mustDisplayLoading = true) => {
       cy.visit(url);
       LoadingCyDriver.waitForLoadingComplete("", 60000, mustDisplayLoading);
       // Some projects don't register the custom command `waitForNetworkIdle`.
       // Guard the call so tests don't fail if it's missing.
       const anyCy: any = cy as unknown as any;
       if (typeof anyCy.waitForNetworkIdle === "function") {
          anyCy.waitForNetworkIdle();
       }
    };

    public static getElement(
       selector: string,
       options?: Partial<Cypress.Loggable & Cypress.Timeoutable>
    ): Cypress.Chainable<JQuery<HTMLElement>> {
       return cy.get(selector, options);
    }

    private static findByAttribute(attribute: string, value: string) {
       return cy.get(`[${attribute}="${value}"]`);
    }

    public static typeInElementByLabel = (
       label: string,
       text: string,
       clearInput?: boolean
    ): Cypress.Chainable<JQuery<HTMLElement>> => {
       return cy.findByLabelText(label).then($element => {
          return UIActions.typeInElementLogic(cy.wrap($element), text, clearInput);
       });
    };

    public static typeInElementByTestID = (
       label: string,
       text: string,
       clearInput?: boolean
    ): Cypress.Chainable<JQuery<HTMLElement>> => {
       return cy.findByTestId(label).then($element => {
          return UIActions.typeInElementLogic(cy.wrap($element), text, clearInput);
       });
    };

    public static typeInElementByName = (
       name: string,
       text: string,
       clearInput?: boolean
    ): Cypress.Chainable<JQuery<HTMLElement>> => {
       return UIActions.findByAttribute("name", name).then($element => {
          return UIActions.typeInElementLogic(cy.wrap($element), text, clearInput);
       });
    };

    public static typeInElement = (
       selector: string,
       text: string,
       clearInput?: boolean
    ): Cypress.Chainable<JQuery<HTMLElement>> => {
       return cy.get(selector).then($element => {
          return UIActions.typeInElementLogic(cy.wrap($element), text, clearInput);
       });
    };

    private static typeInElementLogic = (
       element: Cypress.Chainable<JQuery<HTMLElement>>,
       text: string,
       clearInput?: boolean
    ): Cypress.Chainable<JQuery<HTMLElement>> => {
       if (clearInput) {
          return element.type(`{selectAll}{backspace}${text}`, { delay: 0 });
       } else {
          return element.type(text, { delay: 0 });
       }
    };

    public static SelectItemFromSelectBoxByText = (currentValue: string, newValue: string) => {
       UIActions.clickElementByText(currentValue);
       cy.get(`li[data-value="${newValue}"]`).click();
    };

    public static selectItemFromSelectBoxByName = (name: string, newValue: string) => {
       cy.get(`[name='${name}']`).parent().click();
       cy.get(`li[data-value="${newValue}"]`).click();
    };

    public static selectItemFromDropdown = (
       dropdownSelector: string,
       optionsContainerSelector: string,
       itemToSelect: string
    ) => {
       //Click on the dropdown
       UIActions.clickOnElement(dropdownSelector);
       //Get the options container
       UIActions.getElement(optionsContainerSelector).within(() => {
          //Click item
          UIActions.clickElementByText(itemToSelect);
       });
    };

    public static clickInputByValue = (value: string) => {
       cy.get("input").contains(value).click();
    };

    public static clickElementByName = (name: string) => {
       cy.get(`[name='${name}']`).click();
    };

    public static clickElementByText = (text: string) => {
       cy.findByText(text).click();
    };

    public static clickButtonByText = (text: string) => {
       cy.contains("button", text).click();
    };

    public static clickButtonByTitle = (title: string) => {
       cy.findByRole("button", { name: title }).click();
    };

    public static clickLinkByText = (text: string) => {
       cy.findByRole("link", { name: text }).click();
    };

    public static clickOnElementByDataTestID = (text: string, force?: boolean) => {
       return cy.findByTestId(text).then($element => {
          if (force) {
             cy.wrap($element).click({ force: true });
          } else {
             cy.wrap($element).click();
          }
       });
    };

    public static clickOnElement = (selector: string) => {
       UIActions.getElement(selector).click();
    };

    public static checkCheckboxByText = (text: string) => {
       cy.findByRole("checkbox", { name: text }).check();
    };

    public static checkCheckboxByLabel = (text: string) => {
       cy.findByLabelText(text).check();
    };

    public static unCheckCheckboxByLable = (text: string) => {
       cy.findByRole("checkbox", { name: text }).uncheck();
    };

    public static unCheckCheckboxByText = (text: string) => {
       cy.findByLabelText(text).uncheck();
    };

    public static check = (selector: string) => {
       UIActions.getElement(selector).check();
    };

    public static unCheck = (selector: string) => {
       UIActions.getElement(selector).uncheck();
    };

    public static blurElement = (selector: string) => {
       UIActions.getElement(selector).blur();
    };

    public static chooseFromMultiSelect = (selector: string, items: string[], clear?: boolean) => {
       if (clear) {
          UIActions.removeAllItemsFromMultiSelect(selector);
       }
       UIActions.clickOnElement(selector);
       UIActions.getElement("li").then(li => {
          for (let i = 0; i < items.length; i++) {
             cy.wrap(li).contains(items[i]).click();
          }
       });
    };

    public static removeAllItemsFromMultiSelect = (selector: string) => {
       cy.get(selector).then(combobox => {
          cy.wrap(combobox).find('button[title="Clear"]').click({ force: true });
       });
    };

    public static removeFromMultiSelect = (selector: string, itemsToRemove: string[]) => {
       UIActions.getElement(selector).click();
       UIActions.getElement("li").then(li => {
          for (let i = 0; i < itemsToRemove.length; i++) {
             cy.wrap(li).contains(itemsToRemove[i]).click();
          }
       });
    };

    public static clickElementByAttributeAndValue = (attribute: string, value: string) => {
       cy.get(`[${attribute}="${value}"]`).click();
    };

    public static scrollElementIntoView = (selector: string) => {
       cy.get(selector).scrollIntoView();
    };

    public static scrollElementIntoViewByName = (name: string) => {
       cy.get(`[name=${name}]`).scrollIntoView();
    };

    public static scrollElementIntoViewByText = (text: string) => {
       cy.findByText(text).scrollIntoView();
    };

    public static pressOnEsc = () => {
       UIActions.getElement("body").type("{esc}");
    };
}
 