import * as moment from 'moment';

export interface MetrcSale {
  Id: number | null, ReceiptNumber: null,
      SalesDateTime: 2016 - 01 - 01T17: 35: 45.000, SalesCustomerType: Consumer,
      PatientLicenseNumber: null, CaregiverLicenseNumber: null,
      TotalPackages: 0, TotalPrice: 0.0, Transactions: [{
        PackageId: 71,
        PackageLabel: ABCDEF012345670000010331,
        ProductName: Shake,
        QuantitySold: 1.0,
        UnitOfMeasureName: Ounces,
        UnitOfMeasureAbbreviation: oz,
        TotalPrice: 9.99,
        SalesDeliveryState: null,
        ArchivedDate: null,
        LastModified: 0001 - 01 - 01T00: 00: 00 + 00: 00
      }],
      ArchivedDate: null, LastModified: 0001 - 01 - 01T00: 00: 00 + 00: 00
}

interface FacilityLicense {
  number: string | null;
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
  licenseType: string | null;
}

export default class Facility {
  protected hireDate: moment.Moment | null;
  protected homePage: string | null;
  protected isOwner: boolean | null;
  protected isManager: boolean | null;
  protected occupations: Object[];
  protected name: string | null;
  protected alias: string | null;
  protected displayName: string | null;
  protected supportActivationDate: moment.Moment | null;
  protected supportExpirationDate: moment.Moment | null;
  protected supportLastPaidDate: moment.Moment | null;
  protected license: FacilityLicense;

  constructor(facility: MetrcFacility) {
    this.hireDate = moment(facility.HireDate) || null;
    this.homePage = facility.HomePage || null;
    this.isOwner = facility.IsOwner || null;
    this.isManager = facility.IsManager || null;
    this.occupations = facility.Occupations || null;
    this.name = facility.Name || null;
    this.alias = facility.Alias || null;
    this.displayName = facility.DisplayName || null;
    this.supportActivationDate = moment(facility.SupportActivationDate) || null;
    this.supportExpirationDate = moment(facility.SupportExpirationDate) || null;
    this.supportLastPaidDate = moment(facility.SupportLastPaidDate) || null;
    this.license = {
      number: facility.License.Number || null,
      startDate: moment(facility.License.StartDate) || null,
      endDate: moment(facility.License.EndDate) || null,
      licenseType: facility.License.LicenseType || null,
    };
  }
}

export function FacilityFactory(facility: MetrcFacility) {
  return new Facility(facility);
}

export function FacilityCollectionFactory(facilities: MetrcFacility[]) {
  return facilities.map(FacilityFactory)
}

// GET /sales/v1/receipts
// [
//   {
//     Id: 1,
//     ReceiptNumber: null,
//     SalesDateTime: 2016-01-01T17:35:45.000,
//     SalesCustomerType: Consumer,
//     PatientLicenseNumber: null,
//     CaregiverLicenseNumber: null,
//     TotalPackages: 0,
//     TotalPrice: 0.0,
//     Transactions: [
//       {
//         PackageId: 71,
//         PackageLabel: ABCDEF012345670000010331,
//         ProductName: Shake,
//         QuantitySold: 1.0,
//         UnitOfMeasureName: Ounces,
//         UnitOfMeasureAbbreviation: oz,
//         TotalPrice: 9.99,
//         SalesDeliveryState: null,
//         ArchivedDate: null,
//         LastModified: 0001-01-01T00:00:00+00:00
//       }
//     ],
//     ArchivedDate: null,
//     LastModified: 0001-01-01T00:00:00+00:00
//   },
//   {
//     Id: 2,
//     ReceiptNumber: null,
//     SalesDateTime: 2016-01-02T17:37:23.000,
//     SalesCustomerType: Consumer,
//     PatientLicenseNumber: null,
//     CaregiverLicenseNumber: null,
//     TotalPackages: 0,
//     TotalPrice: 0.0,
//     Transactions: [
//       {
//         PackageId: 72,
//         PackageLabel: ABCDEF012345670000010332,
//         ProductName: Shake,
//         QuantitySold: 3.0,
//         UnitOfMeasureName: Ounces,
//         UnitOfMeasureAbbreviation: oz,
//         TotalPrice: 29.97,
//         SalesDeliveryState: null,
//         ArchivedDate: null,
//         LastModified: 0001-01-01T00:00:00+00:00
//       }
//     ],
//     ArchivedDate: null,
//     LastModified: 0001-01-01T00:00:00+00:00
//   }
// ]