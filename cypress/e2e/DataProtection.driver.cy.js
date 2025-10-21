import { UIActions } from './UIActions';
import { Assertions } from './Assertions';


const Url = 'https://marah-testing.cc.test.catonet.works/?#/account/186361/browserDataProtection'
const authUrl = 'https://marah-testing.auth.test.catonet.works'
const credentials = {
  username: 'marah.shabib@exalt.ps',
  password: '123456Shm@3',
  mfa: '431835'
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
    lastPosition: '[data-value="LAST_IN_POLICY"]',
    firstPosition: '[data-value="FIRST_IN_POLICY"]',
    beforeRule: '[data-value="BEFORE_RULE"]',
    afterRule: '[data-value="AFTER_RULE"]',
    enabledToggle: 'input[name="enabled"][type="checkbox"]',
    enabledLabelText: 'Enabled',
    usersGroupsTable: '[data-testid="awesometable-table-source"]',
    roleRow: '[role="row"]',
    roleColumnHeader: '[role="columnheader"]',
    tbodyRow: 'tbody [role="row"]',
    roleCell: '[role="cell"]',
    deleteButton: 'button[aria-label="Delete"]',
    userMenu: 'button[aria-label="Open"]',
    userlist: 'ul[role="listbox"] li',
    userSearch: 'input[placeholder="Search or select User Group"]',
    userSelect: '[role="presentation"]',
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
  waterMarkToggle: 'input[name="browserExtRules.0.waterMarkSettings.enabled"]',
  catoSnackbar: '[id^="CatoSnackbar_"]',
  catoSnackbarCloseButton: 'button:has(svg[data-icon-name="Close"])',
  publishButton: '[data-testid="pps-publish-btn"]',
  publishCatoButton: '[data-testid="catobutton-generic"]',
  browserDataProtectionToggleInput: 'input[type="checkbox"][aria-label="controlled"]',
  browserDataProtectionToggleLabel: 'label[data-testid="pps-enable-toggle"] span.MuiV5-FormControlLabel-label',
  confirmationContinueButton: 'button[label="Continue"][data-testid="catobutton-generic"]',
  confirmationDialog: '[role="dialog"]',
  browserExtensionDefaultRulesTableRow: 'table[data-testid="awesometable-table-browser.extension.policy.defaultRules"] tbody tr',
  browserExtensionDefaultRulesTable : 'table[data-testid="awesometable-table-browser.extension.policy.defaultRules"]'


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

const msgs = {

  CREATE_SUCCESS: "Changes were applied to your unpublished revision. This revision is available for editing until it’s published or discarded.",
  UNPUBLISHED_SUCCESS_PREFIX: 'Changes were applied to your unpublished revision',
  PUBLISH_SUCCESS: 'Changes published successfully',
  Duplicate_Rule: 'Rule with the same name already exists',
  EnableBrowserDataProtection: 'Browser Data Protection was enabled successfully',
  DisableBrowserDataProtection: 'Browser Data Protection was disabled successfully'
}


const exampleRule = {
  name: 'Ruletest7',
  position: 'Last',
  description: 'Created by automation',
  userGroupType: 'User Group',
  userGroupName: ['GROUP1' ,'GROUP2'],
  activities: {
    Copy: 'Blocked',
    Paste: 'Allowed',
    Print: 'Blocked',
    Type: 'Allowed',
    Upload: 'Allowed',
    Download: 'Blocked'
  }
};

const RULE_ALLOW_ONE_ACTION = {
  name: 'Rule-OneAllow',
  position: 'Last',
  description: 'Created by automation',
  userGroupType: 'User Group',
  userGroupName: ['GROUP1'],
  activities: {
    Copy: 'Allowed',
    Paste: 'Blocked',
    Print: 'Blocked',
    Type: 'Blocked',
    Upload: 'Blocked',
    Download: 'Blocked'
  }
};


const RULE_ALLOW_TWO_ACTION = {
  name: 'Rule-twoAllow',
  position: 'First',
  description: 'Created by automation',
  userGroupType: 'User Group',
  userGroupName: ['GROUP1'],
  activities: {
    Copy: 'Allowed',
    Paste: 'Blocked',
    Print: 'Blocked',
    Type: 'Allowed',
    Upload: 'Blocked',
    Download: 'Blocked'
  }
};

const RULE_ALLOW_THREE_ACTION = {
  name: 'Rule-threeAllow',
  position: 'First',
  description: 'Created by automation',
  userGroupType: 'User Group',
  userGroupName: ['GROUP1'],
  activities: {
    Copy: 'Allowed',
    Paste: 'Blocked',
    Print: 'Blocked',
    Type: 'Allowed',
    Upload: 'Blocked',
    Download: 'Allowed'
  }
};

const RULE_ALLOW_ALL = {
  name: 'Rule-Allow-All',
  position: 'First',
  description: 'Created by automation',
  userGroupType: 'User Group',
  userGroupName: ['GROUP1'],
  activities: {
    Copy: 'Allowed',
    Paste: 'Allowed',
    Print: 'Allowed',
    Type: 'Allowed',
    Upload: 'Allowed',
    Download: 'Allowed'
  }
};

const RULE_BLOCK_ONE_ACTION = {
  name: 'Rule-OneBlock',
  position: 'First',
  description: 'Created by automation',
  userGroupType: 'User Group',
  userGroupName: ['GROUP1'],
  activities: {
    Copy: 'Blocked',
    Paste: 'Allowed',
    Print: 'Allowed',
    Type: 'Allowed',
    Upload: 'Allowed',
    Download: 'Allowed'
  }
};

const RULE_BLOCK_TWO_ACTION = {
  name: 'Rule-TwoBlock',
  position: 'First',
  description: 'Created by automation',
  userGroupType: 'User Group',
  userGroupName: ['GROUP1'],
  activities: {
    Copy: 'Blocked',
    Paste: 'Blocked',
    Print: 'Allowed',
    Type: 'Allowed',
    Upload: 'Allowed',
    Download: 'Allowed'
  }
};

const RULE_BLOCK_THREE_ACTION = {
  name: 'Rule-ThreeBlock',
  position: 'First',
  description: 'Created by automation',
  userGroupType: 'User Group',
  userGroupName: ['GROUP1'],
  activities: {
    Copy: 'Blocked',
    Paste: 'Blocked',
    Print: 'Allowed',
    Type: 'Allowed',
    Upload: 'Blocked',
    Download: 'Allowed'
  }
};

const RULE_BLOCK_ALL= {
  name: 'Rule-Block-All',
  position: 'First',
  description: 'Created by automation',
  userGroupType: 'User Group',
  userGroupName: ['GROUP1'],
  activities: {
    Copy: 'Blocked',
    Paste: 'Blocked',
    Print: 'Blocked',
    Type: 'Blocked',
    Upload: 'Blocked',
    Download: 'Blocked'
  }
};

const RULE_MULTIPLE_USER = {
  name: 'Rule-multipleUser',
  position: 'Last',
  description: 'Created by automation',
  userGroupType: 'User Group',
  userGroupName: ['GROUP1' ,'GROUP2'],
  activities: {
    Copy: 'Blocked',
    Paste: 'Allowed',
    Print: 'Blocked',
    Type: 'Allowed',
    Upload: 'Allowed',
    Download: 'Blocked'
  }
};

const RULE_WITH_WATERMARK= {
  name: 'Rule-waterMark',
  position: 'First',
  description: 'Created by automation',
  userGroupType: 'User Group',
  userGroupName: ['GROUP1'],
  activities: {
    Copy: 'Blocked',
    Paste: 'Blocked',
    Print: 'Allowed',
    Type: 'Allowed',
    Upload: 'Allowed',
    Download: 'Allowed'
  },
  overlays: 'true'

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
  const rowData = [
    {
      index: 0,
      rule: mockData.firstRule,
      description: mockData.firstDescription,
      expectedAllow: ['Download', 'Copy', 'Paste', 'Print', 'Type', 'Upload']
    },
    {
      index: 2,
      rule: mockData.secondRule,
      description: mockData.secondDescription,
      expectedBlock: ['Download', 'Copy', 'Paste', 'Print', 'Type', 'Upload']
    },
    {
      index: 4,
      rule: mockData.thirdRule,
      description: mockData.thirdDescription,
      expectedAllow: ['Copy', 'Print', 'Upload'],
      expectedBlock: ['Download', 'Paste', 'Type'],
      expectedOverlays: ['Watermark']
    }
  ];

  rowData.forEach(row => {
    UIActions.getElement(selectors.tableRow).eq(row.index).within(() => {

      Assertions.elementContainsText('*', row.rule);
      Assertions.elementContainsText('*', row.description);
      Assertions.elementContainsText('*', mockData.groups);

      Assertions.elementExists(selectors.allowIcon);
      Assertions.elementExists(selectors.blockIcon);
      Assertions.elementExists(selectors.overlaysIcon);
      Assertions.elementExists(selectors.menuButton);

      if (row.expectedAllow) {
        UIActions.getElement(selectors.allowIcon)
          .parent()
          .should($el => {
            row.expectedAllow?.forEach(text => {
              expect($el.text()).to.contain(text);
            });
          });
      }


      if (row.expectedBlock) {
        UIActions.getElement(selectors.blockIcon)
          .parent()
          .should($el => {
            row.expectedBlock?.forEach(text => {
              expect($el.text()).to.contain(text);
            });
          });
      }

      if (row.expectedOverlays) {
        UIActions.getElement(selectors.overlaysIcon)
          .parent()
          .should($el => {
            row.expectedOverlays?.forEach(text => {
              expect($el.text()).to.contain(text);
            });
          });
      }
    });
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



  function createRule(rule = {}) {
  const { name, position, description, userGroupType, userGroupName, activities , overlays } = rule;

     Assertions.elementIsVisible(selectors.newButton);
      UIActions.clickOnElement(selectors.newButton);

      UIActions.typeInElement(selectors.nameInput, name);


  if (description) {
     UIActions.typeInElement(selectors.descriptionInput, description);
  }
  if (position) {
    UIActions.clickOnElement(selectors.positionSelectValue);
     if (position == 'Last') {
      UIActions.clickOnElement(selectors.lastPosition);
     }
      if (position == 'First') {
      UIActions.clickOnElement(selectors.firstPosition);
     }
      if (position == 'Before Rule') {
      UIActions.clickOnElement(selectors.beforeRule);
     }
      if (position == 'After Rule') {
      UIActions.clickOnElement(selectors.afterRule);
     }
  }

  
  if (userGroupType || userGroupName) {

      selectUserGroupType(userGroupType,userGroupName)
  }

  if (activities && typeof activities === 'object') {
     selectActivity(activities)
  
  }
  
  if (overlays) {
    if(overlays == 'true'){
     UIActions.check(selectors.waterMarkToggle);
    }
  }


  UIActions.getElement(selectors.saveButton).should('be.visible').click();

  cy.wait(3000);
  const effectivePosition = position || 'Last';
  verifyRulePosition(effectivePosition, name);
  // verifytablecontainNewRule(rule);

}



// function verifytablecontainNewRule(rule = {}) {
//   const { name, position, description, userGroupType, userGroupName, activities } = rule;

//   const row = position === 'First'
//     ? UIActions.getElement(selectors.tableRow).first()
//     : UIActions.getElement(selectors.tableRow).last();

//   row.within(() => {
//     Assertions.elementContainsText('*', name);

//     if (description) {
//       Assertions.elementContainsText('*', description);
//     }

//     if (userGroupName) {
//       Assertions.elementContainsText('*', userGroupName);
//     }

//     if (activities) {
//       const allowedActions = Object.entries(activities)
//         .filter(([, value]) => value === 'Allowed')
//         .map(([key]) => key);

//       const blockedActions = Object.entries(activities)
//         .filter(([, value]) => value === 'Blocked')
//         .map(([key]) => key);

//       if (allowedActions.length) {
//         Assertions.elementExists(selectors.allowIcon);
//         UIActions.getElement(selectors.allowIcon)
//           .parent()
//           .should($el => {
//             allowedActions.forEach(action => {
//               expect($el.text()).to.contain(action);
//             });
//           });
//       }

//       if (blockedActions.length) {
//         Assertions.elementExists(selectors.blockIcon);
//         UIActions.getElement(selectors.blockIcon)
//           .parent()
//           .should($el => {
//             blockedActions.forEach(action => {
//               expect($el.text()).to.contain(action);
//             });
//           });
//       }
//     }

//     Assertions.elementExists(selectors.menuButton);
//   });
// }



function verifytablecontainNewRule(rule = {}) {
  const { name, position, description, userGroupType, userGroupName, activities ,overlays } = rule;

  UIActions.getElement(selectors.tableRow).filter(':visible').then($rows => {
    const rowsArray = [...$rows];
    
    const matchingRow = rowsArray.find(row => row.innerText.includes(name));

    expect(matchingRow, `Row containing rule name "${name}" should exist`).to.exist;

    const rowIndex = rowsArray.indexOf(matchingRow);

    cy.wrap(matchingRow).within(() => {
      Assertions.elementContainsText('*', name);

      if (description) {
        Assertions.elementContainsText('*', description);
      }

      if (userGroupName) {
        // Assertions.elementContainsText('*', userGroupName);
           if (Array.isArray(userGroupName)) {
              userGroupName.forEach(name => {
              Assertions.elementContainsText('*', name);
             });
            } else {
                 Assertions.elementContainsText('*', userGroupName);
             }
      }

      if (activities) {
        const allowedActions = Object.entries(activities)
          .filter(([, value]) => value === 'Allowed')
          .map(([key]) => key);

        const blockedActions = Object.entries(activities)
          .filter(([, value]) => value === 'Blocked')
          .map(([key]) => key);

        if (allowedActions.length) {
          Assertions.elementExists(selectors.allowIcon);
          UIActions.getElement(selectors.allowIcon)
            .parent()
            .should($el => {
              allowedActions.forEach(action => {
                expect($el.text()).to.contain(action);
              });
            });
        }

        if (blockedActions.length) {
          Assertions.elementExists(selectors.blockIcon);
          UIActions.getElement(selectors.blockIcon)
            .parent()
            .should($el => {
              blockedActions.forEach(action => {
                expect($el.text()).to.contain(action);
              });
            });
        }
      }
      if(overlays){
           if(overlays == 'true'){
             Assertions.elementExists(selectors.overlaysIcon);
             UIActions.getElement(selectors.overlaysIcon)
            .parent()
            .should($el => {
                  expect($el.text()).to.contain("Watermark");
              });

           }
      }


      Assertions.elementExists(selectors.menuButton);
    });
  });
   
  verifyRulePosition(position,name);

}




function verifyRulePosition(position, name) {
  if (position == 'Last') {
   UIActions.getElement(selectors.tableRow).last()
      .find('td')
      .eq(2)
      .should('contain.text', name);
   
  } else if (position == 'First') {
  UIActions.getElement(selectors.tableRow).first()
      .find('td')
      .eq(2)
      .should('contain.text', name);
  }
}




function publishRule() {
  cy.get(selectors.publishButton).first().should('be.visible').click()
  cy.get(selectors.publishCatoButton).first().should('be.visible').click()
}




// function selectUserGroupType(type,name) {
//   UIActions.clickOnElement(selectors.usergroupSection);

//      UIActions.clickOnElement(selectors.userMenu);

//  UIActions.getElement(selectors.userlist)
//     .contains(type)
//     .should('be.visible')
//     .click();

//     UIActions.getElement(selectors.userSearch)
//   .should('be.visible')
//   .clear()
//   .type(name, { delay: 100 });


//    UIActions.getElement(selectors.userSelect)
//   .should('be.visible')
//   .contains(name)
//   .click();


//     UIActions.getElement(selectors.usersGroupsTable).within(() => {
//       UIActions.getElement(selectors.tbodyRow)
//           .first()
//           .within(() => {
            
//             UIActions.getElement(selectors.roleCell).eq(1).should('contain', name); 
//             UIActions.getElement(selectors.roleCell).eq(2).should('contain', type); 
//           });
//         });

    

// }


function selectUserGroupType(type, names) {
  UIActions.clickOnElement(selectors.usergroupSection);
  UIActions.clickOnElement(selectors.userMenu);

  UIActions.getElement(selectors.userlist)
    .contains(type)
    .should('be.visible')
    .click();

  names.forEach(name => {
    UIActions.getElement(selectors.userSearch)
      .should('be.visible')
      .clear()
      .type(name, { delay: 100 });

    UIActions.getElement(selectors.userSelect)
      .should('be.visible')
      .contains(name)
      .click();
  });

 
  UIActions.getElement(selectors.usersGroupsTable).within(() => {
    names.forEach(name => {
      UIActions.getElement(selectors.tbodyRow)
        .contains(name)
    });
  });




}


function selectActivity(activities) {

      UIActions.clickOnElement(selectors.activitySection);
    UIActions.clickOnElement(selectors.activitySection);
    Object.entries(activities).forEach(([label, state]) => {
      setActivityState(label, state);
    });

}


function getActivitySelectorsByLabel(labelText) {
  const map = {
    Copy: { toggle: selectors.copyToggle, switch: selectors.copySwitch },
    Paste: { toggle: selectors.pasteToggle, switch: selectors.pasteSwitch },
    Print: { toggle: selectors.printToggle, switch: selectors.printSwitch },
    Type: { toggle: selectors.typeToggle, switch: selectors.typeSwitch },
    Upload: { toggle: selectors.uploadToggle, switch: selectors.uploadSwitch },
    Download: { toggle: selectors.downloadToggle, switch: selectors.downloadSwitch }
  };
  return map[labelText];
}

function setActivityState(labelText, state) {
  const activitySelectors = getActivitySelectorsByLabel(labelText);
  if (!activitySelectors) {
    throw new Error(`Unknown activity label: ${labelText}`);
  }
  const { toggle, switch: switchSel } = activitySelectors;

  UIActions.getElement(selectors.activitySection).within(() => {

    cy.contains(selectors.fieldLabelRoot, labelText).should('exist');
    if (state === 'Blocked') {
    UIActions.getElement(toggle).then(($input) => {
      if ($input.is(':checked')) {
        cy.get(switchSel).click();
        cy.get(switchSel)
          .closest('label')
          .should('contain.text', 'Blocked');
      } 
    });
  }
  if (state === 'Allowed') {
    UIActions.getElement(toggle).then(($input) => {
      if (!$input.is(':checked')) {
        cy.get(switchSel).click();
        cy.get(switchSel)
          .closest('label')
          .should('contain.text', 'Blocked');
      } 
    });
  }

  });
}

function checkSuccessMessage(expectedText = msgs.CREATE_SUCCESS) {
  cy.get(selectors.catoSnackbar).invoke('text').then(console.log)
  cy.get(selectors.catoSnackbar)
    .should('be.visible')
    .invoke('text')
    .should('include', expectedText)

    // cy.get(selectors.catoSnackbarCloseButton).click();

  cy.get('body').then($body => {
  if ($body.find('button:has(svg[data-icon-name="Close"])').length > 0) {
    cy.get('button:has(svg[data-icon-name="Close"])').click({ force: true });
  }
});



}

function deleteRule(name) {
  UIActions.getElement(selectors.tableRow)
    .filter(`:contains(${name})`)
    .first()
    .within(() => {
      cy.get(selectors.menuButton).click();
    });

  cy.contains('span', 'Delete Rule').should('be.visible').click();
  cy.get('button[data-testid="catobutton-generic"]')
    .contains('Delete')
    .should('be.visible')
    .click();
}




function EnableBrowserDataProtectionAndVerify(shouldEnable) {
  const expectedLabel = shouldEnable
    ? "Browser Data Protection Enabled"
    : "Browser Data Protection Disabled";

  UIActions.getElement(selectors.browserDataProtectionToggleLabel).then($label => {
    const currentLabel = $label.text().trim();

    if (currentLabel !== expectedLabel) {
      UIActions.clickOnElement(selectors.browserDataProtectionToggleInput);

      UIActions.getElement(selectors.confirmationDialog, { timeout: 5000 })
        .should("be.visible")
        .within(() => {
          UIActions.clickOnElement(selectors.confirmationContinueButton);
        });


      Assertions.elementContainsText(selectors.browserDataProtectionToggleLabel, expectedLabel);
    } else {
      Assertions.elementContainsText(selectors.browserDataProtectionToggleLabel, expectedLabel);
    }
  });
}


// function verifyBrowserPolicyDefaultRoleAllActionsAllowed() {
//   const expectedAllowedActions = ['Download', 'Copy', 'Paste', 'Print', 'Type', 'Upload'];


//   cy.get('table[data-testid="awesometable-table-browser.extension.policy.defaultRules"]').should('be.visible');

//   const rowIndex = 1; 

//   cy.get(selectors.browserExtensionDefaultRulesTableRow)
//     .eq(rowIndex)
//     .should('exist') 
//     .within(() => {
//       cy.get(selectors.allowIcon, { timeout: 8000 }).should('exist');

//       expectedAllowedActions.forEach(action => {
//         cy.contains(action).should('exist');
//       });

//     });
// }


function verifyBrowserPolicyDefaultRoleAllActionsAllowed() {
  const expectedAllowedActions = ['Download', 'Copy', 'Paste', 'Print', 'Type', 'Upload'];
  const rowIndex = 1;

  Assertions.elementIsVisible(selectors.browserExtensionDefaultRulesTable);

  UIActions.getElement(selectors.browserExtensionDefaultRulesTableRow)
    .eq(rowIndex)
    .should('exist')
    .within(() => {

          UIActions.getElement(selectors.allowIcon)
          .parent()
          .should($el => {
            expectedAllowedActions?.forEach(text => {
              expect($el.text()).to.contain(text);
            });
          });

    });
}










module.exports = {
  loginAndNavigateToBrowserDataProtection,
   verifymainPageUI,
  verifyNewFormUI,
  exampleRule,
  createRule,
  checkSuccessMessage,
  publishRule,
  deleteRule,
  EnableBrowserDataProtectionAndVerify,
  verifyBrowserPolicyDefaultRoleAllActionsAllowed,
  RULE_ALLOW_ONE_ACTION,
  RULE_ALLOW_TWO_ACTION,
  RULE_ALLOW_THREE_ACTION,
  RULE_ALLOW_ALL,
  verifytablecontainNewRule,
  RULE_BLOCK_ONE_ACTION,
  RULE_BLOCK_TWO_ACTION,
  RULE_BLOCK_THREE_ACTION,
  RULE_BLOCK_ALL,
  RULE_MULTIPLE_USER ,
  RULE_WITH_WATERMARK,
  msgs
}