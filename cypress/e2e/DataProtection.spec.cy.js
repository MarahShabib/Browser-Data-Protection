const { loginAndNavigateToBrowserDataProtection ,  verifymainPageUI , verifyNewFormUI,createRule,exampleRule , checkSuccessMessage, msgs ,publishRule ,deleteRule ,EnableBrowserDataProtectionAndVerify ,verifyBrowserPolicyDefaultRoleAllActionsAllowed ,RULE_ALLOW_ONE_ACTION,RULE_ALLOW_TWO_ACTION,RULE_ALLOW_THREE_ACTION,RULE_ALLOW_ALL,verifytablecontainNewRule ,RULE_BLOCK_ONE_ACTION,RULE_BLOCK_TWO_ACTION,RULE_BLOCK_THREE_ACTION,RULE_BLOCK_ALL ,RULE_MULTIPLE_USER ,RULE_WITH_WATERMARK ,EditRule ,NEW_RULE_VALUES ,NEW_RULE_VALUES_2,NEW_RULE_VALUES_3 ,EnableRule ,CheckEnableRuleStatus } = require('./DataProtection.driver.cy')



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

   it('Enable/Disable policy without rule', () => {
    EnableBrowserDataProtectionAndVerify(false);
    checkSuccessMessage(msgs.DisableBrowserDataProtection)
    EnableBrowserDataProtectionAndVerify(true);
    checkSuccessMessage(msgs.EnableBrowserDataProtection)
   
  });


  it('Enable/Disable policy with rule', () => {
    createRule(exampleRule);
    checkSuccessMessage(msgs.CREATE_SUCCESS)
    verifytablecontainNewRule(exampleRule);
    publishRule()
    checkSuccessMessage(msgs.PUBLISH_SUCCESS)
    EnableBrowserDataProtectionAndVerify(false);
    checkSuccessMessage(msgs.DisableBrowserDataProtection)
    EnableBrowserDataProtectionAndVerify(true);
    checkSuccessMessage(msgs.EnableBrowserDataProtection)

  });

  it('Check default policy Rule Action', () => {
    verifyBrowserPolicyDefaultRoleAllActionsAllowed();

  });

  it('Add New Rule Allow ONLY 1 action ', () => {
   createRule(RULE_ALLOW_ONE_ACTION);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_ALLOW_ONE_ACTION);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });



  it('Add New Rule Allow ONLY 2 action ', () => {
   createRule(RULE_ALLOW_TWO_ACTION);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_ALLOW_TWO_ACTION);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });

  it('Add New Rule Allow ONLY 3 action ', () => {
   createRule(RULE_ALLOW_THREE_ACTION);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_ALLOW_THREE_ACTION);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });

  it('Add New Rule Allow All actions ', () => {
   createRule(RULE_ALLOW_ALL);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_ALLOW_ALL);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });


    it('Add New Rule Block ONLY 1 action ', () => {
   createRule(RULE_BLOCK_ONE_ACTION);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_BLOCK_ONE_ACTION);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });



  it('Add New Rule block ONLY 2 action ', () => {
   createRule(RULE_BLOCK_TWO_ACTION);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_BLOCK_TWO_ACTION);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });

  it('Add New Rule Block ONLY 3 action ', () => {
   createRule(RULE_BLOCK_THREE_ACTION);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_BLOCK_THREE_ACTION);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });

  it('Add New Rule Block All actions ', () => {
   createRule(RULE_BLOCK_ALL);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_BLOCK_ALL);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });



  it('Add New Rule with Multiple Users', () => {
   createRule(RULE_MULTIPLE_USER);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_MULTIPLE_USER);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)

  });

    it('Add New Rule with overlays', () => {
   createRule(RULE_WITH_WATERMARK);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_WITH_WATERMARK);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)

  });
  
  
   it('Edit Existing Rule - Name', () => {
   createRule(RULE_ALLOW_ALL);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_ALLOW_ALL);
   EditRule(RULE_ALLOW_ALL ,NEW_RULE_VALUES) 
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(NEW_RULE_VALUES);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });
  
  it('Edit Existing Rule - User/Group', () => {
   createRule(RULE_ALLOW_ALL);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_ALLOW_ALL);
   EditRule(RULE_ALLOW_ALL ,NEW_RULE_VALUES_2) 
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(NEW_RULE_VALUES_2);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });

   it('Edit Existing Rule - Action', () => {
   createRule(RULE_ALLOW_ALL);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_ALLOW_ALL);
   EditRule(RULE_ALLOW_ALL ,NEW_RULE_VALUES_3) 
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(NEW_RULE_VALUES_3);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });


   it('Disable Rule from three dots', () => {
   createRule(RULE_ALLOW_ALL);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_ALLOW_ALL);
   EnableRule(RULE_ALLOW_ALL,false,'menu')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE_ALLOW_ALL,false)
  });

   it('Enable Rule after disable from three dots', () => {
   createRule(RULE_ALLOW_ALL);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_ALLOW_ALL);
   EnableRule(RULE_ALLOW_ALL,false,'menu')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE_ALLOW_ALL,false)
   EnableRule(RULE_ALLOW_ALL,true,'menu')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE_ALLOW_ALL,true)
  });

   it('Disable Rule from inside toggle', () => {
   createRule(RULE_ALLOW_ALL);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_ALLOW_ALL);
   EnableRule(RULE_ALLOW_ALL,false,'toggle')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE_ALLOW_ALL,false)
  });

  it('Enable Rule after disable from inside toggle', () => {
   createRule(RULE_ALLOW_ALL);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_ALLOW_ALL);
   EnableRule(RULE_ALLOW_ALL,false,'toggle')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE_ALLOW_ALL,false)
   EnableRule(RULE_ALLOW_ALL,true,'toggle')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE_ALLOW_ALL,true)
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