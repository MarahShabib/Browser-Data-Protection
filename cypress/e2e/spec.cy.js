const { loginAndNavigateToBrowserDataProtection , verifyUI } = require('./Driver.cy')



describe('Browser Data Protection Tests', () => {
  beforeEach(() => {
    loginAndNavigateToBrowserDataProtection()
  })

  it('Browser Data Protection UI is rendered correctly', () => {
    verifyUI();
  });
})