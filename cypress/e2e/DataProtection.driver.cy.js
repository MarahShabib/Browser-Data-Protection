import { UIActions } from './UIActions';
import { Assertions } from './Assertions';


// Ignore known app error thrown during navigation: Cannot read properties of null (reading 'postMessage')
Cypress.on('uncaught:exception', (err) => {
  if (err && err.message && err.message.includes('postMessage')) {
    return false;
  }
});


const Url = 'https://marah-testing.cc.test.catonet.works/?#/account/186361/browserDataProtection'
const authUrl = 'https://marah-testing.auth.test.catonet.works'
const credentials = {
  username: 'marah.shabib@exalt.ps',
  password: '123456Shm@3',
  mfa: '994597'
}
export const selectors = {
  // login
  username: '#username',
  password: '#password',
  submit: '.btn-submit',
  mfa: '#mfaCode',
  // UI (main page)
  pageTitle: 'p.MuiV5-Typography-body1',
  breadcrumbLink: 'a[href="#/account/186361/browserDataProtection"]',
  publishedIcon: 'svg[data-icon-name="GreenRoundCheck"]',
  publishedText: 'span.MuiV5-Chip-label',
  searchInput: 'input[placeholder="Search"]',
  searchIcon: 'svg[data-icon-name="Search2"]',
  toggleSwitch: 'input[type="checkbox"][aria-label="controlled"]',
  toggleLabel: 'span.MuiV5-FormControlLabel-label',
  exportButton: 'button[data-testid="catobutton-export"]',
  newButton: 'button[data-testid="catobutton-new"]',
  table: 'table[data-testid="awesometable-table-browser.protection.policy"]',
  tableRow: 'table[data-testid="awesometable-table-browser.protection.policy"] tbody tr',
  tableHeaders: ['#', 'Name', 'Description', 'Users/Groups', 'Action'],
  editButton:'button[aria-label="Edit"]',
  allowIcon: '[data-icon-name="Allow"]',
  blockIcon: '[data-icon-name="Block"]',
  overlaysIcon: '[data-icon-name="Overlays"]',
  menuButton: '[data-testid="actionscell-menu-button"]',
  // New Form (modal)
  modalHeaderH3: 'h3',
  modalCloseButton: 'button[aria-label="Close"]',
  modalCloseIcon: 'svg[data-icon-name="Close"]',
  expandAllTextTag: 'p',
  newRuleSections: ['General', 'Users/Groups', 'Activity'],
  saveButton: '[data-testid="catobutton-save"]',
  cancelButton: '[data-testid="catobutton-cancel"]',
  nameInput: '#name',
  descriptionInput: '#description',
  positionLabel: 'div',
  positionItem: 'li',
  positionSelectedText: '[data-testid="select-position.position"]',
  positionSelectValue: '[id^="mui-component-select-position.position"]',
  enabledToggle: 'input[name="enabled"][type="checkbox"]',
  enabledLabelText: 'Enabled',
  usersGroupsTable: '[data-testid="awesometable-table-source"]',
  roleRow: '[role="row"]',
  roleColumnHeader: '[role="columnheader"]',
  tbodyRow: 'tbody [role="row"]',
  roleCell: '[role="cell"]',
  deleteButton: 'button[aria-label="Delete"]',
  dialog: "[role='dialog']",
  usergroupSection: '[data-testid="browser-extension-sec-users-groups"]',
  activitySection: '[data-testid="browser-extension-sec-users-actions"]',
  fieldLabelRoot: '[data-testid="fieldlabel-root"]',
  copyToggle: 'input[name="browserExtRules.0.copySettings.enabled"]',
  copySwitch: '[data-testid="switch-browserExtRules.0.copySettings.enabled"]',
  pasteToggle: 'input[name="browserExtRules.0.pasteSettings.enabled"]',
  pasteSwitch: '[data-testid="switch-browserExtRules.0.pasteSettings.enabled"]',
  printToggle: 'input[name="browserExtRules.0.printSettings.enabled"]',
  printSwitch: '[data-testid="switch-browserExtRules.0.printSettings.enabled"]',
  typeToggle: 'input[name="browserExtRules.0.typingSettings.enabled"]', 
  typeSwitch: '[data-testid="switch-browserExtRules.0.typingSettings.enabled"]',
  uploadToggle: 'input[name="browserExtRules.0.uploadSettings.enabled"]',
  uploadSwitch: '[data-testid="switch-browserExtRules.0.uploadSettings.enabled"]',
  downloadToggle: 'input[name="browserExtRules.0.downloadSettings.ruleEnabled"]',
  downloadSwitch: '[data-testid="switch-browserExtRules.0.downloadSettings.ruleEnabled"]',
  waterMarkToggle: 'input[name="browserExtRules.0.waterMarkSettings.enabled"]'
};

const mockData = {
  firstRule: 'rule1',
  firstDescription: 'All Allowed',
  secondRule: 'rule2',
  secondDescription: 'All Blocked',
  thirdRule: 'rule3',
  thirdDescription: 'Allowed , Blocked , Overlays',
  groups: 'GROUP1'
};

function loginAndNavigateToBrowserDataProtection() {

  // UIActions.visitPage(authUrl, false)

  // UIActions.getElement(selectors.login.username).clear({ force: true }).type(credentials.username)
  // UIActions.getElement(selectors.login.password).type(credentials.password)
  // UIActions.clickOnElement(selectors.login.submit)
  // UIActions.getElement(selectors.login.mfa).type(credentials.mfa)
  // UIActions.clickOnElement(selectors.login.submit)
  // UIActions.visitPage(Url, false)
      cy.visit(`${Url}`)
      cy.origin(authUrl, { args: { credentials, selectors } }, ({ credentials, selectors }) => {
      const getElement = (selector) => cy.get(selector, { timeout: 10000 }).should('be.visible') 
      getElement(selectors.username).clear({ force: true }).type(credentials.username)
      getElement(selectors.password).type(credentials.password)
      getElement(selectors.submit).click()
      getElement(selectors.mfa).type(credentials.mfa)
      getElement(selectors.submit).click()
      cy.wait(30000)
      })
}

function  verifymainPageUI() {
      Assertions.elementContainsText(selectors.pageTitle, 'Security');
      Assertions.elementContainsText(selectors.breadcrumbLink, 'Browser Data Protection');
      Assertions.elementExists(selectors.publishedIcon);
      Assertions.elementContainsText(selectors.publishedText, 'Published Revision');

      Assertions.elementExists(selectors.searchInput);
      Assertions.verifyElementAttribute(selectors.searchInput, 'placeholder', 'Search');
      Assertions.elementExists(selectors.searchIcon);
      Assertions.elementExists(selectors.toggleSwitch);
      Assertions.elementContainsText(selectors.toggleLabel, 'Browser Data Protection Enabled');

      Assertions.elementExists(selectors.exportButton);
      Assertions.elementContainsText(selectors.exportButton, 'Export');
      Assertions.elementExists(selectors.newButton);
      Assertions.elementContainsText(selectors.newButton, 'New');

      Assertions.elementExists(selectors.table);
      selectors.tableHeaders.forEach(headerText => {
        UIActions.getElement(selectors.table).within(() => {
          Assertions.elementContainsText('th, td', headerText);
        });
      });

      verifyMockDataTableRows();
  }

function verifyMockDataTableRows() {
      // First row validations
      UIActions.getElement(selectors.tableRow).first().within(() => {
        Assertions.elementContainsText('*', mockData.firstRule);
        Assertions.elementContainsText('*', mockData.firstDescription);
        Assertions.elementContainsText('*', mockData.groups);
        Assertions.elementExists(selectors.allowIcon);
        Assertions.elementExists(selectors.blockIcon);
        Assertions.elementExists(selectors.overlaysIcon);
        Assertions.elementExists(selectors.menuButton);

        UIActions.getElement(selectors.allowIcon)
          .parent()
          .should('contain.text', 'Download')
          .and('contain.text', 'Copy')
          .and('contain.text', 'Paste')
          .and('contain.text', 'Print')
          .and('contain.text', 'Type')
          .and('contain.text', 'Upload');
      });

      // Second row (index 2) validations
      UIActions.getElement(selectors.tableRow).eq(2).within(() => {
        Assertions.elementContainsText('*', mockData.secondRule);
        Assertions.elementContainsText('*', mockData.secondDescription);
        Assertions.elementContainsText('*', mockData.groups);
        Assertions.elementExists(selectors.allowIcon);
        Assertions.elementExists(selectors.blockIcon);
        Assertions.elementExists(selectors.overlaysIcon);
        Assertions.elementExists(selectors.menuButton);

        UIActions.getElement(selectors.blockIcon)
          .parent()
          .should('contain.text', 'Download')
          .and('contain.text', 'Copy')
          .and('contain.text', 'Paste')
          .and('contain.text', 'Print')
          .and('contain.text', 'Type')
          .and('contain.text', 'Upload');
      });

      // Third row (index 4) validations
      UIActions.getElement(selectors.tableRow).eq(4).within(() => {
        Assertions.elementContainsText('*', mockData.thirdRule);
        Assertions.elementContainsText('*', mockData.thirdDescription);
        Assertions.elementContainsText('*', mockData.groups);
        Assertions.elementExists(selectors.allowIcon);
        Assertions.elementExists(selectors.blockIcon);
        Assertions.elementExists(selectors.overlaysIcon);
        Assertions.elementExists(selectors.menuButton);

        UIActions.getElement(selectors.allowIcon)
          .parent()
          .should('contain.text', 'Copy')
          .and('contain.text', 'Print')
          .and('contain.text', 'Upload');

        UIActions.getElement(selectors.blockIcon)
          .parent()
          .should('contain.text', 'Download')
          .and('contain.text', 'Paste')
          .and('contain.text', 'Type');

        UIActions.getElement(selectors.overlaysIcon)
          .parent()
          .should('contain.text', 'Watermark');
      });
}

function verifyNewFormUI() {

      Assertions.elementIsVisible(selectors.newButton);
      UIActions.clickOnElement(selectors.newButton);

      Assertions.elementContainsText(selectors.modalHeaderH3, 'New Rule');
      Assertions.elementExists(selectors.modalCloseButton);
      UIActions.getElement(selectors.modalCloseButton).within(() => {
        Assertions.elementExists(selectors.modalCloseIcon);
      });
      Assertions.elementContainsText(selectors.expandAllTextTag, 'Expand All');

      selectors.newRuleSections.forEach(section => {
        Assertions.elementContainsText('div', section);
      });
      
      verifyGeneralSection();

      verifyUserGroupSection();

      verifyActivitySection();

      // Buttons
      Assertions.elementExists(selectors.cancelButton);
      Assertions.elementContainsText(selectors.cancelButton, 'Cancel');
      Assertions.elementExists(selectors.saveButton);
      Assertions.elementContainsText(selectors.saveButton, 'Save');
      UIActions.getElement(selectors.saveButton).should('be.disabled');
  }

function verifyGeneralSection() {
      Assertions.elementExists(selectors.nameInput);
      Assertions.verifyElementAttribute(selectors.nameInput, 'type', 'text');
      Assertions.elementExists(selectors.enabledToggle);
      UIActions.getElement(selectors.enabledToggle).should('be.checked');
      Assertions.elementContainsText('span', selectors.enabledLabelText);
      Assertions.elementExists(selectors.descriptionInput);
      Assertions.verifyElementAttribute(selectors.descriptionInput, 'type', 'text');
      Assertions.elementExists(selectors.positionSelectedText);
      Assertions.elementContainsText(selectors.positionSelectValue, 'Last');
}

function verifyUserGroupSection() {
      UIActions.clickOnElement(selectors.usergroupSection);
      UIActions.getElement(selectors.usersGroupsTable).within(() => {
        UIActions.getElement(selectors.roleRow)
          .first()
          .within(() => {
            Assertions.elementHasText(`${selectors.roleColumnHeader}:nth-of-type(2)`, 'Name');
            Assertions.elementHasText(`${selectors.roleColumnHeader}:nth-of-type(3)`, 'Type');
          });

        UIActions.getElement(selectors.tbodyRow)
          .first()
          .within(() => {
            UIActions.getElement(selectors.roleCell).eq(1).should('contain', 'Any'); // Name
            UIActions.getElement(selectors.roleCell).eq(2).should('contain', 'Any'); // Type
          });

        Assertions.elementExists(selectors.deleteButton);
      });
}

function verifyActivitySection() {
      UIActions.clickOnElement(selectors.activitySection);
      assertToggle('Copy', selectors.copyToggle, selectors.copySwitch);
      assertToggle('Paste', selectors.pasteToggle, selectors.pasteSwitch);
      assertToggle('Print', selectors.printToggle, selectors.printSwitch);
      assertToggle('Type', selectors.typeToggle, selectors.typeSwitch);
      assertToggle('Upload', selectors.uploadToggle, selectors.uploadSwitch);
      assertToggle('Download', selectors.downloadToggle, selectors.downloadSwitch);
      Assertions.elementContainsText(selectors.activitySection, 'Overlays');
      UIActions.getElement(selectors.waterMarkToggle).should('not.be.checked');
}

  function assertToggle(labelText, toggleSelector, switchSelector) {
    UIActions.getElement(selectors.activitySection).within(() => {
      cy.contains(selectors.fieldLabelRoot, labelText).first().should('exist');
      UIActions.getElement(toggleSelector).should('be.checked');
      cy.get(switchSelector)
        .closest('label')
        .should('contain.text', 'Allowed');
    });
  }


module.exports = {
  loginAndNavigateToBrowserDataProtection,
   verifymainPageUI,
  verifyNewFormUI
}