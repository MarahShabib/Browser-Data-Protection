import { actions } from './DataProtection.actions.cy';
import { selectors } from './DataProtection.driver.cy';


export class assertions {
  static verifymainPageContainsExpectedContent() {
    
    actions.getElement(selectors.UI.pageTitle).should('contain.text', 'Security');
    actions.getElement(selectors.UI.breadcrumbLink).should('contain.text', 'Browser Data Protection');
    actions.getElement(selectors.UI.publishedIcon).should('exist');
    actions.getElement(selectors.UI.publishedText).should('contain.text', 'Published Revision');
    actions.getElement(selectors.UI.searchInput).should('exist').and('have.attr', 'placeholder', 'Search');
    actions.getElement(selectors.UI.searchIcon).should('exist');
    actions.getElement(selectors.UI.toggleSwitch).should('exist');
    actions.getElement(selectors.UI.toggleLabel).should('contain.text', 'Browser Data Protection Enabled');
    actions.getElement(selectors.UI.exportButton).should('exist').and('contain.text', 'Export');
    actions.getElement(selectors.UI.newButton).should('exist').and('contain.text', 'New');
    actions.getElement(selectors.UI.table).should('exist');
    selectors.UI.tableHeaders.forEach(headerText => {
      actions.getElement(selectors.UI.table).within(() => {
        cy.contains('th, td', headerText).should('exist');
      });

    });



  }

  static verifyTableMockData() {
      actions.getElement(selectors.UI.tableRow).first().within(() => {
      actions.getElement(selectors.MockData.firstRule, { containsText: true }).should('exist');
      actions.getElement(selectors.MockData.firstDescription , { containsText: true }).should('exist');
      actions.getElement(selectors.MockData.Groups , { containsText: true }).should('exist');
      actions.getElement(selectors.UI.allowIcon).should('exist');
      actions.getElement(selectors.UI.blockIcon).should('exist');
      actions.getElement(selectors.UI.overlaysIcon).should('exist');
      actions.getElement(selectors.UI.menuButton).should('exist');
       actions.getElement(selectors.UI.allowIcon)
      .parent()
     .should('contain.text', 'Download')
      .and('contain.text', 'Copy')
      .and('contain.text', 'Paste')
      .and('contain.text', 'Print')
      .and('contain.text', 'Type')
      .and('contain.text', 'Upload');
    });


  //Second element 
  actions.getElement(selectors.UI.tableRow).eq(2).within(() => {
  actions.getElement(selectors.MockData.secondRule, { containsText: true }).should('exist');
  actions.getElement(selectors.MockData.secondDescription, { containsText: true }).should('exist');
  actions.getElement(selectors.MockData.Groups, { containsText: true }).should('exist');
  actions.getElement(selectors.UI.allowIcon).should('exist');
  actions.getElement(selectors.UI.blockIcon).should('exist');
  actions.getElement(selectors.UI.overlaysIcon).should('exist');
  actions.getElement(selectors.UI.menuButton).should('exist');

  actions.getElement(selectors.UI.blockIcon)
    .parent()
    .should('contain.text', 'Download')
    .and('contain.text', 'Copy')
    .and('contain.text', 'Paste')
    .and('contain.text', 'Print')
    .and('contain.text', 'Type')
    .and('contain.text', 'Upload');
});
  //third element why 4?
  actions.getElement(selectors.UI.tableRow).eq(4).within(() => {
  actions.getElement(selectors.MockData.thirdRule, { containsText: true }).should('exist');
  actions.getElement(selectors.MockData.thirdDescription, { containsText: true }).should('exist');
  actions.getElement(selectors.MockData.Groups, { containsText: true }).should('exist');
  actions.getElement(selectors.UI.allowIcon).should('exist');
  actions.getElement(selectors.UI.blockIcon).should('exist');
  actions.getElement(selectors.UI.overlaysIcon).should('exist');
  actions.getElement(selectors.UI.menuButton).should('exist');

    actions.getElement(selectors.UI.allowIcon)
    .parent()
    .should('contain.text', 'Copy')
    .and('contain.text', 'Print')
    .and('contain.text', 'Upload');

     actions.getElement(selectors.UI.blockIcon)
    .parent()
    .should('contain.text', 'Download')
    .and('contain.text', 'Paste')
    .and('contain.text', 'Type');

    actions.getElement(selectors.UI.overlaysIcon)
    .parent()
    .should('contain.text', 'Watermark');
});

  

  }
}
