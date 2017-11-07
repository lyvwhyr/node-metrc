import * as moment from 'moment';

export interface MetrcFacility {
  HireDate: moment.Moment | null;
  HomePage: string | null;
  IsOwner: boolean | null;
  IsManager: boolean | null;
  Occupations: Object[];
  Name: string | null;
  Alias: string | null;
  DisplayName: string | null;
  SupportActivationDate: moment.Moment | null;
  SupportExpirationDate: moment.Moment | null;
  SupportLastPaidDate: moment.Moment | null;
  License: {
    Number: string; StartDate: moment.Moment; EndDate: moment.Moment;
    LicenseType: string;
  };
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

// GET /facilities/v1
// [
//   {
//     "HireDate": "0001-01-01",
//     "HomePage": "Plants",
//     "IsOwner": false,
//     "IsManager": true,
//     "Occupations": [],
//     "Name": "MMC CO LLC",
//     "Alias": "MMC CO LLC",
//     "DisplayName": "MMC CO LLC",
//     "SupportActivationDate": null,
//     "SupportExpirationDate": null,
//     "SupportLastPaidDate": null,
//     "License": {
//       "Number": "403-X0001",
//       "StartDate": "2013-06-28",
//       "EndDate": "2015-12-28",
//       "LicenseType": "OPC"
//     }
//   },
//   {
//     "HireDate": "0001-01-01",
//     "HomePage": "Default",
//     "IsOwner": false,
//     "IsManager": true,
//     "Occupations": [],
//     "Name": "MMC CO LLC",
//     "Alias": "MMC CO OPC B",
//     "DisplayName": "MMC CO OPC B",
//     "SupportActivationDate": null,
//     "SupportExpirationDate": null,
//     "SupportLastPaidDate": null,
//     "License": {
//       "Number": "403-X0002",
//       "StartDate": "2012-08-15",
//       "EndDate": "2015-11-15",
//       "LicenseType": "OPC"
//     }
//   }
// ]