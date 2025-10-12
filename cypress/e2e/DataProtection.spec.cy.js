const { loginAndNavigateToBrowserDataProtection ,  verifymainPageUI , verifyNewFormUI,createRule,exampleRule } = require('./DataProtection.driver.cy')
import { selectors } from './DataProtection.driver.cy';



describe('Browser Data Protection Tests', () => {
  beforeEach(() => {
    loginAndNavigateToBrowserDataProtection()
  })

  // it('Browser Data Protection UI is rendered correctly', () => {
  //   verifymainPageUI();
  // });

  // it('New Rule Form UI is rendered correctly', () => {
  //   verifyNewFormUI();
  // });

  it('Create New Rule', () => {
   createRule(exampleRule);
  });
  
})