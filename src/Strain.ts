import * as moment from 'moment';

export interface MetrcStrain {
  Id: number | null;
  Name: string | null;
  TestingStatus: string | null;
  ThcLevel: number | null;
  CbdLevel: number | null;
  IndicaPercentage: number | null;
  SativaPercentage: number | null;
  Genetics: string | null;
}

export default class Strain {
  protected id: number | null;
  protected name: string | null;
  protected testingStatus: string | null;
  protected thcLevel: number | null;
  protected cbdLevel: number | null;
  protected indicaPercentage: number | null;
  protected sativaPercentage: number | null;
  protected genetics: string | null;

  constructor(strain: MetrcStrain) {
    this.id = strain.Id || null;
    this.name = strain.Name || null;
    this.testingStatus = strain.TestingStatus || null;
    this.thcLevel = strain.ThcLevel || null;
    this.cbdLevel = strain.CbdLevel || null;
    this.indicaPercentage = strain.IndicaPercentage || null;
    this.sativaPercentage = strain.SativaPercentage || null;
    this.genetics = strain.Genetics || null;
  }
}

export function StrainFactory(strain: MetrcStrain) {
  return new Strain(strain);
}

export function StrainCollectionFactory(harvests: MetrcStrain[]) {
  return harvests.map(StrainFactory);
}

// GET /strains/v1/active
// [
//   {
//     "Id": 201,
//     "Name": "Spring Hill Kush",
//     "TestingStatus": "ThirdParty",
//     "ThcLevel": null,
//     "CbdLevel": null,
//     "IndicaPercentage": 60.0,
//     "SativaPercentage": 40.0,
//     "Genetics": "60% Indica / 40% Sativa"
//   }
// ]
