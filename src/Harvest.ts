import * as moment from 'moment';

export interface MetricHarvest {
  Id: number;
  Name: string | null;
  HarvestType: string | null;
  DryingRoomId: number | null;
  DryingRoomName: string | number;
  CurrentWeight: number | null;
  TotalWasteWeight: number | null;
  PlantCount: number | null;
  TotalWetWeight: number | null;
  PackageCount: number | null;
  TotalPackagedWeight: number | null;
  UnitOfWeightName: string | null;
  LabTestingState: string | null;
  LabTestingStateDate: null;
  IsOnHold: boolean | null;
  HarvestStartDate: moment.Moment | null;
  FinishedDate: moment.Moment | null;
  ArchivedDate: moment.Moment | null;
  LastModified: moment.Moment | null;
  Strains: Object[];
}

export default class Harvest {
  protected id: number;
  protected name: string | null;
  protected harvestType: string | null;
  protected dryingRoomId: number | null;
  protected dryingRoomName: string | number;
  protected currentWeight: number | null;
  protected totalWasteWeight: number | null;
  protected plantCount: number | null;
  protected totalWetWeight: number | null;
  protected packageCount: number | null;
  protected totalPackagedWeight: number | null;
  protected unitOfWeightName: string | null;
  protected labTestingState: string | null;
  protected labTestingStateDate: moment.Moment | null;
  protected isOnHold: boolean | null;
  protected harvestStartDate: moment.Moment | null;
  protected finishedDate: moment.Moment | null;
  protected archivedDate: moment.Moment | null;
  protected lastModified: moment.Moment | null;
  protected strains: Object[];

  constructor(harvest: MetricHarvest) {
    this.id = harvest.Id || null;
    this.name = harvest.Name || null;
    this.harvestType = harvest.HarvestType || null;
    this.dryingRoomId = harvest.DryingRoomId || null;
    this.dryingRoomName = harvest.DryingRoomName || null;
    this.currentWeight = harvest.CurrentWeight || null;
    this.totalWasteWeight = harvest.TotalWasteWeight || null;
    this.plantCount = harvest.PlantCount || null;
    this.totalWetWeight = harvest.TotalWetWeight || null;
    this.packageCount = harvest.PackageCount || null;
    this.totalPackagedWeight = harvest.TotalPackagedWeight || null;
    this.unitOfWeightName = harvest.UnitOfWeightName || null;
    this.labTestingState = harvest.LabTestingState || null;
    this.labTestingStateDate = moment(harvest.LabTestingStateDate) || null;
    this.isOnHold = harvest.IsOnHold || null;
    this.harvestStartDate = harvest.HarvestStartDate;
    this.finishedDate = moment(harvest.FinishedDate) || null;
    this.archivedDate = moment(harvest.ArchivedDate) || null;
    this.lastModified = moment(harvest.LastModified) || null;
    this.strains = this.strains || [];
  }
}

export function HarvestFactory(harvest: MetricHarvest) {
  return new Harvest(harvest);
}

export function HarvestCollectionFactory(harvests: MetricHarvest[]) {
  return harvests.map(HarvestFactory);
}
// GET /harvests/v1/1
// {
//   "Id": 1,
//   "Name": "2014-11-19-Harvest Room-M",
//   "HarvestType": "Product",
//   "DryingRoomId": 1,
//   "DryingRoomName": "Harvest Room",
//   "CurrentWeight": 0.0,
//   "TotalWasteWeight": 0.0,
//   "PlantCount": 70,
//   "TotalWetWeight": 40.0,
//   "PackageCount": 5,
//   "TotalPackagedWeight": 0.0,
//   "UnitOfWeightName": "Ounces",
//   "LabTestingState": null,
//   "LabTestingStateDate": null,
//   "IsOnHold": false,
//   "HarvestStartDate": "2014-11-19",
//   "FinishedDate": null,
//   "ArchivedDate": null,
//   "LastModified": "0001-01-01T00:00:00+00:00",
//   "Strains": []
// }
