

export class API {
  protected licenseNumber: string;
  private baseUrl: string;
  constructor(licenseNumber: string) {
    this.licenseNumber = licenseNumber;
    this.baseUrl = 'api.metrc.com';
  }

  public getReceipt() {}


  public getActiveStrains() {
    const url = `${this.baseUrl}/strains/v1/active`;
    return;
  }

  // FACILITIES

  public getFacilities() {
    const url = `${this.baseUrl}/facilities/v1`;
    return;
  }

  // HARVESTS

  public getHarvestById(harvestID: number) {
    const url = `${this.baseUrl}/harvests/v1/${harvestID}`;
    return;
  }

  public getActiveHarvests() {
    const url = `${this.baseUrl}/harvests/v1/active`;
    return;
  }

  public getOnHoldHarvests() {
    const url = `${this.baseUrl}/harvests/v1/onhold`;
    return;
  }

  public getInactiveHarvests() {
    const url = `${this.baseUrl}/harvests/v1/inactive`;
    return;
  }

  public createHarvest() {
    // POST
    const url = `${this.baseUrl}/harvests/v1/createpackages`;
    return;
  }

  // STRAINS

  public getStrainById(strainId: number) {
    const url = `${this.baseUrl}/strains/v1/${strainId}`;
    return;
  }

  public createStrain() {
    const url = `${this.baseUrl}/strains/v1/create?licenseNumber=${this.licenseNumber}`;
    return;
  }

  // Transfers
  public getIncomingTransfers() {
    const url =
        `${this.baseUrl}/transfers/v1/incoming?licenseNumber=${this.licenseNumber}`;
    return;
  }

  public getOutgoingTransfers() {
    const url =
        `${this.baseUrl}/transfers/v1/outgoing?licenseNumber=${this.licenseNumber}`;
    return;
  }

  public getRejectedTransfers() {
    const url =
        `${this.baseUrl}/transfers/v1/rejected?licenseNumber=${this.licenseNumber}`;
    return;
  }

  public getDeliveryTransfersById(transferId: number) {
    const url = `${this.baseUrl}/transfers/v1/${transferId}/deliveries`;
    return;
  }

  public getTransferPackagesByDeliveryId(deliveryId: number) {
    const url = `${this.baseUrl}/transfers/v1/delivery/${deliveryId}/packages`;
    return;
  }

  public getPackagesStates() {
    const url = `${this.baseUrl}/transfers/v1/delivery/packages/states`;
    return;
  }

  // UNIT OF MEASURE
  public getActiveUnitsOfMeasure() {
    const url = `${this.baseUrl}/unitsofmeasure/v1/active`;
    return;
  }
}