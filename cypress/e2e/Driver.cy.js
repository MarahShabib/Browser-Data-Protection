import { actions } from './actions.cy.js'
import { assertions } from './assertions.cy';


const Url = 'https://marah-testing.cc.test.catonet.works/?#/account/186361/browserDataProtection'
const authUrl = 'https://marah-testing.auth.test.catonet.works'
const credentials = {
  username: 'marah.shabib@exalt.ps',
  password: '123456Shm@3',
  mfa: '020251'
}
export const selectors = {
  login: {
    username: '#username',
    password: '#password',
    submit: '.btn-submit',
    mfa: '#mfaCode'
  },
  UI: {
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
    tableHeaders: [
      '#', 'Name', 'Description', 'Users/Groups', 'Action'
    ],
    editButton:'button[aria-label="Edit"]',
    allowIcon: '[data-icon-name="Allow"]',
    blockIcon: '[data-icon-name="Block"]',
    overlaysIcon: '[data-icon-name="Overlays"]',
    menuButton: '[data-testid="actionscell-menu-button"]'

  },
  MockData: {
    firstRule: 'rule1',
    firstDescription: 'All Allowed',
    secondRule: 'rule2',
    secondDescription: 'All Blocked',
    thirdRule: 'rule3',
    thirdDescription: 'Allowed , Blocked , Overlays',
    Groups: 'GROUP1'
  }
};

function loginAndNavigateToBrowserDataProtection() {
  actions.navigateToBrowserDataProtection(Url)
  actions.login(authUrl, credentials, selectors)
}

function verifyUI() {
      assertions.verifymainPageContainsExpectedContent();
      assertions.verifyTableMockData();
  }

module.exports = {
  loginAndNavigateToBrowserDataProtection,
  verifyUI
}