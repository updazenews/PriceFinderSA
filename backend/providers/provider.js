/** Implement only with authorised, lawful sources. Never bypass access controls. */
export class RetailerProvider { async searchProducts(){throw new Error('Not implemented')} async getProduct(){throw new Error('Not implemented')} async getPrices(){throw new Error('Not implemented')} async getStores(){throw new Error('Not implemented')} async getAvailability(){throw new Error('Not implemented')} }
export class MockRetailerProvider extends RetailerProvider { constructor(retailer){super();this.retailer=retailer;} }
