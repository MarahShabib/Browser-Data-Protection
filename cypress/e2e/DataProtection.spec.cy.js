const { loginAndNavigateToBrowserDataProtection ,  verifymainPageUI , verifyNewFormUI,createRule,exampleRule , checkSuccessMessage, msgs ,publishRule ,deleteRule} = require('./DataProtection.driver.cy')



describe('Browser Data Protection Tests', () => {
  beforeEach(() => {
    loginAndNavigateToBrowserDataProtection()
  })

  it('Browser Data Protection UI is rendered correctly', () => {
    verifymainPageUI();
  });

  it('New Rule Form UI is rendered correctly', () => {
    verifyNewFormUI();
  }); 

  it('Create New Rule', () => {
   createRule(exampleRule);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });

  
  it('Create Duplicate Rule', () => {
   createRule(exampleRule);
   checkSuccessMessage(msgs.Duplicate_Rule)
  });

    it('Delete Existing Rule', () => {
   deleteRule(exampleRule.name);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
  });



  
})