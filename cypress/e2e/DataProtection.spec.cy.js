const { loginAndNavigateToBrowserDataProtection ,  verifymainPageUI , verifyNewFormUI,createRule,exampleRule , checkSuccessMessage, msgs ,publishRule ,deleteRule ,EnableBrowserDataProtectionAndVerify ,verifyBrowserPolicyDefaultRoleAllActionsAllowed ,RULE_ALLOW_ONE_ACTION,RULE_ALLOW_TWO_ACTION,RULE_ALLOW_THREE_ACTION,RULE_ALLOW_ALL,verifytablecontainNewRule ,clickCancel,RULE_BLOCK_ONE_ACTION,RULE_BLOCK_TWO_ACTION,RULE_BLOCK_THREE_ACTION,RULE_BLOCK_ALL ,RULE_MULTIPLE_USER ,RULE_WITH_WATERMARK ,EditRule ,NEW_RULE_VALUES ,NEW_RULE_VALUES_2,NEW_RULE_VALUES_3 ,EnableRule ,CheckEnableRuleStatus ,RULE_Before ,RULE_After ,  RULE1,RULE2,RULE3,RULE4,RULE5,RULE6,RULE7,RULE8,RULE9} = require('./DataProtection.driver.cy')



describe('Browser Data Protection Tests', () => {
  beforeEach(() => {
    loginAndNavigateToBrowserDataProtection();
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
   createRule(RULE1);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE1);
   EditRule(RULE1 ,NEW_RULE_VALUES) 
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(NEW_RULE_VALUES);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });
  
  it('Edit Existing Rule - User/Group', () => {
   createRule(RULE2);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE2);
   EditRule(RULE2 ,NEW_RULE_VALUES_2) 
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(NEW_RULE_VALUES_2);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });

   it('Edit Existing Rule - Action', () => {
   createRule(RULE3);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE3);
   EditRule(RULE3 ,NEW_RULE_VALUES_3) 
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(NEW_RULE_VALUES_3);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
  });

   
   it('Disable Rule from three dots', () => {
   createRule(RULE4);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE4);
   EnableRule(RULE4,false,'menu')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE4,false)
  });

   it('Enable Rule after disable from three dots', () => {
   createRule(RULE5);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE5);
   EnableRule(RULE5,false,'menu')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE5,false)
   EnableRule(RULE5,true,'menu')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE5,true)
  });

   it('Disable Rule from inside toggle', () => {
   createRule(RULE6);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE6);
   EnableRule(RULE6,false,'toggle')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE6,false)
  });

  it('Enable Rule after disable from inside toggle', () => {
   createRule(RULE7);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE7);
   EnableRule(RULE7,false,'toggle')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE7,false)
   EnableRule(RULE7,true,'toggle')
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   CheckEnableRuleStatus(RULE7,true)
  });

  it('Add Rule with position Before rule ', () => {
   createRule(RULE_Before);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_Before);
    publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)

  });


  
  it('Add Rule with position after rule ', () => {
   createRule(RULE_After);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE_After);
    publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)

  });


  it('Create Duplicate Rule', () => {
   createRule(RULE8);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE8);
   publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
   createRule(RULE8);
   clickCancel();
   checkSuccessMessage(msgs.Duplicate_Rule)
  });


   it('Delete Existing Rule', () => {
    createRule(RULE9);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
   verifytablecontainNewRule(RULE9);
    publishRule()
   checkSuccessMessage(msgs.PUBLISH_SUCCESS)
   deleteRule(RULE9.name);
   checkSuccessMessage(msgs.CREATE_SUCCESS)
  });
 
 



  
})