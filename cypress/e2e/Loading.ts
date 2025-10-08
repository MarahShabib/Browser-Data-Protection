export const LOADING_LOCATORS = {
	loadingComponent: "[data-testid='loading-loading']",
};
export const LoadingCyDriver = {
	waitForLoadingComplete: function (container: string = "", timeout: number = 10000, mustDisplayLoading = true) {
		const selector = `${container ? container + " > " : ""} ${LOADING_LOCATORS.loadingComponent}`;
		if (mustDisplayLoading) {
			cy.get(selector).should("be.visible");
		}
		cy.get(selector, { timeout }).should("not.exist");
	},
	isLoading: function () {
		return cy.get("body").then($body => {
			return !!$body.find(LOADING_LOCATORS.loadingComponent).length;
		});
	},
};
