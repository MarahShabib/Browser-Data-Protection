import { UIActions } from "./UIActions";

export class Assertions {
    public static verifyPageTitle = (text: string) => {
       UIActions.getElement('[id="page-title"]').should("contain.text", text).should("be.visible");
    };

    public static elementHasText = (selector: string, text: string) => {
       UIActions.getElement(selector).first().scrollIntoView();
       UIActions.getElement(selector).should("have.text", text).should("be.visible");
    };

    public static elementHasTextByDataTestID = (value: string, text: string) => {
       return cy.findByTestId(value).then($element => {
          cy.wrap($element).should("have.text", text).should("be.visible");
       });
    };

    public static textAppearsOnScreen = (text: string) => {
       cy.findAllByText(text).filter(":visible").should("have.length", 1);
    };

    public static inputHasTextByName = (name: string, text: string) => {
       cy.get(`input[name="${name}"]`).invoke("val").should("eq", text);
    };

    public static inputHasTextByLabelText = (value: string, text: string) => {
       return cy.findByLabelText(value).then($element => {
          cy.wrap($element).should("have.text", text).should("be.visible");
       });
    };

    public static elementContainsText = (selector: string, text: string) => {
       UIActions.getElement(selector).should("contain.text", text).should("be.visible");
    };

    public static elementNotContainsText = (selector: string, text: string) => {
       UIActions.getElement(selector).should("not.contain.text", text).should("be.visible");
    };

    public static elementIsNotChecked = (selector: string) => {
       UIActions.getElement(selector).should("not.be.checked");
    };

    public static verifyElementAttribute = (selector: string, attributeName: string, attributeValue: string) => {
       UIActions.getElement(selector).should("have.attr", attributeName, attributeValue);
    };

    public static elementHasValue = (selector: string, attributeValue: string) => {
       Assertions.verifyElementAttribute(selector, "value", attributeValue);
    };

    public static elementContainsTextByDataTestID = (value: string, text: string) => {
       return cy.findByTestId(value).then($element => {
          cy.wrap($element).should("contain.text", text).should("be.visible");
       });
    };

    public static inputContainsTextByName = (name: string, text: string) => {
       cy.get(`input[name="${name}"]`).invoke("val").should("contain.text", text);
    };

    public static inputContainsTextByLabelText = (value: string, text: string) => {
       return cy.findByLabelText(value).then($element => {
          cy.wrap($element).should("contain.text", text).should("be.visible");
       });
    };

    public static elementIsVisible = (selector: string, shouldBeVisible: boolean = true) => {
       if (!shouldBeVisible) {
          UIActions.getElement(selector).should("not.be.visible");
       } else {
          UIActions.getElement(selector).should("be.visible");
       }
    };

    public static elementIsEnabled = (selector: string) => {
       UIActions.getElement(selector).should("be.enabled");
    };

    public static elementIsEnabledByDataTestId = (dataTestId: string) => {
       cy.findByTestId(dataTestId).should("be.enabled");
    };

    public static buttonIsEnabledByText = (text: string) => {
       cy.contains("button", text).should("be.enabled");
    };

    public static buttonIsEnabledByTitle = (title: string) => {
       cy.findByRole("button", { name: title }).should("be.enabled");
    };

    public static elementIsDisabled = (selector: string) => {
       UIActions.getElement(selector).should("be.disabled");
    };

    public static elementIsDisabledByDataTestId = (dataTestId: string) => {
       cy.findByTestId(dataTestId).should("be.disabled");
    };

    public static checkboxIsDisabledByDataTestId = (dataTestId: string) => {
       cy.findByTestId(dataTestId).find('input[type="checkbox"]').should("exist").should("be.disabled");
    };

    public static checkboxIsUnCheckedByDataTestId = (dataTestId: string) => {
       cy.findByTestId(dataTestId).find('input[type="checkbox"]').should("exist").should("not.be.checked");
    };

    public static inputIsDisabledByName = (name: string) => {
       cy.get(`input[name="${name}"]`).should("be.disabled");
    };

    public static inputIsEnabledByName = (name: string) => {
       cy.get(`input[name="${name}"]`).should("be.enabled");
    };

    public static buttonIsDisabledByTitle = (title: string) => {
       cy.findByRole("button", { name: title }).should("be.disabled");
    };

    public static buttonIsDisabledByText = (text: string) => {
       cy.contains("button", text).should("be.disabled");
    };

    public static elementHasAttribute = (selector: string, value: string, match?: string) => {
       UIActions.getElement(selector).should("have.attr", value, match);
    };

    public static radioIsCheckedByText = (text: string) => {
       cy.findByLabelText(text).should("be.checked");
    };

    public static radioIsUnCheckedByText = (text: string) => {
       cy.findByLabelText(text).should("not.be.checked");
    };

    public static elementIsCheckedByDataTestID = (testID: string) => {
       cy.findByTestId(testID).should("be.checked");
    };

    public static elementIsUnCheckedByDataTestID = (testID: string) => {
       cy.findByTestId(testID).should("not.be.checked");
    };

    public static elementDoesNotExist = (selector: string) => {
       UIActions.getElement(selector).should("not.exist");
    };

    public static elementExists = (selector: string) => {
       UIActions.getElement(selector).should("exist");
    };

    public static elementCountIs = (selector: string, length: number) => {
       UIActions.getElement(selector).should("have.length", length);
    };

    public static verifyToolTip = (text: string) => {
       const toolTipSelector = "[role='tooltip']";
       Assertions.elementHasText(toolTipSelector, text);
    };

    public static hoverTooltip = (selector: string, tooltipText: string) => {
       const tooltipSelector = "[role=tooltip]";
       Assertions.elementDoesNotExist(tooltipSelector);
       UIActions.getElement(selector).trigger("mouseover");
       Assertions.verifyToolTip(tooltipText);
       UIActions.getElement(selector).trigger("mouseout");
    };

    public static verifyDialogExists = () => {
       const dialogSelector = "[role='dialog']";
       Assertions.elementIsVisible(dialogSelector);
    };

    public static verifyButtonCounterTextByTitle = (title: string, counter: number) => {
       cy.findByText(title).findByText(counter).should("exist");
    };

    public static verifyButtonDescriptionByTitle = (title: string, description: string) => {
       cy.findByText(title).parent().should("contain", description);
    };

    public static wrapElementAndVerifyItHasText = (element: JQuery<HTMLElement>, text: string) => {
       cy.wrap(element).should("have.text", text);
    };

    public static verifyListsIdentical = (
       actualListContent: Array<string>,
       expectedListContent: Array<string>,
       errorMsgTitle?: string,
       ignoreDuplicateValues?: boolean
    ) => {
       if (ignoreDuplicateValues) {
          actualListContent = [...new Set(actualListContent)];
          expectedListContent = [...new Set(expectedListContent)];
       }

       actualListContent = actualListContent.sort();
       expectedListContent = expectedListContent.sort();

       const ERROR_MESSAGE = `${errorMsgTitle ? `${errorMsgTitle}\n` : ""}List content not as expected!
  Actual list content: ${actualListContent.join(", ")}
  Expected list content: ${expectedListContent.join(", ")}`;

       expect(actualListContent, ERROR_MESSAGE).to.deep.equal(expectedListContent);
    };

    public static verifyListContent = (
       listItemsSelector: string,
       expectedListContent: Array<string>,
       errorMsgTitle?: string,
       timeout?: number,
       ignoreDuplicateValues?: boolean
    ) => {
       const selectorOptions = timeout ? { timeout } : undefined;
       //get the actual list content
       let actualListContent: Array<string> = [];
       cy.get(listItemsSelector, selectorOptions).each($listItem => {
          // log set to false, to decrease the number of logs and the test running time
          cy.wrap($listItem, { log: false })
             .invoke("text")
             .then(listItemText => {
                actualListContent.push(listItemText);
             });
       });

       cy.then(() => {
          Assertions.verifyListsIdentical(actualListContent, expectedListContent, errorMsgTitle, ignoreDuplicateValues);
       });
    };
}
 