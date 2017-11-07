
import * as moment from 'moment';

export interface MetricPlant {
  Id: number | null;
  Label: string | null;
  State: string | null;
  GrowthPhase: string | null;
  PlantBatchId: number | null;
  PlantBatchName: string | null;
  PlantBatchTypeName: string | null;
  StrainId: string | null;
  StrainName: string | null;
  RoomId: number | null;
  RoomName: string | null;
  HarvestId: number | null;
  HarvestedUnitOfWeightName: string | null;
  HarvestedUnitOfWeightAbbreviation: string | null;
  HarvestedWetWeight: number | null;
  HarvestCount: number | null;
  IsOnHold: boolean | null;
  PlantedDate: moment.Moment | null;
  VegetativeDate: moment.Moment | null;
  FloweringDate: moment.Moment | null;
  HarvestedDate: moment.Moment | null;
  DestroyedDate: moment.Moment | null;
  DestroyedNote: string | null;
  DestroyedByUserName: string | null;
  LastModified: moment.Moment | null;
}

export default class Plant {
  protected id: number | null;
  protected label: string | null;
  protected state: string | null;
  protected growthPhase: string | null;
  protected plantBatchId: number | null;
  protected plantBatchName: string | null;
  protected plantBatchTypeName: string | null;
  protected strainId: string | null;
  protected strainName: string | null;
  protected roomId: number | null;
  protected roomName: string | null;
  protected harvestId: number | null;
  protected harvestedUnitOfWeightName: string | null;
  protected harvestedUnitOfWeightAbbreviation: string | null;
  protected harvestedWetWeight: number | null;
  protected harvestCount: number | null;
  protected isOnHold: boolean | null;
  protected plantedDate: moment.Moment | null;
  protected vegetativeDate: moment.Moment | null;
  protected floweringDate: moment.Moment | null;
  protected harvestedDate: moment.Moment | null;
  protected destroyedDate: moment.Moment | null;
  protected destroyedNote: string | null;
  protected destroyedByUserName: string | null;
  protected lastModified: moment.Moment | null;

  constructor(plant: MetricPlant) {
    this.id = plant.Id || null;
    this.label = plant.Label || null;
    this.state = plant.State || null;
    this.growthPhase = plant.GrowthPhase || null;
    this.plantBatchId = plant.PlantBatchId || null;
    this.plantBatchName = plant.PlantBatchName || null;
    this.plantBatchTypeName = plant.PlantBatchTypeName || null;
    this.strainId = plant.StrainId;
    this.strainName = plant.StrainName || null;
    this.roomId = plant.RoomId || null;
    this.roomName = plant.RoomName || null;
    this.harvestId = plant.HarvestId || null;
    this.harvestedUnitOfWeightName = plant.HarvestedUnitOfWeightName || null;
    this.harvestedUnitOfWeightAbbreviation =
        plant.HarvestedUnitOfWeightAbbreviation || null;
    this.harvestedWetWeight = plant.HarvestedWetWeight || null;
    this.harvestCount = plant.HarvestCount || null;
    this.isOnHold = plant.IsOnHold || null;
    this.plantedDate = moment(plant.PlantedDate) || null;
    this.vegetativeDate = momen(plant.VegetativeDate) || null;
    this.floweringDate = moment(plant.FloweringDate) || null;
    this.harvestedDate = moment(plant.HarvestedDate) || null;
    this.destroyedDate = moment(plant.DestroyedDate) || null;
    this.destroyedNote = plant.DestroyedNote || null;
    this.destroyedByUserName = plant.DestroyedByUserName || null;
    this.lastModified = moment(plant.LastModified) || null;
  }
}

export function PlantFactory(plant: MetricPlant) {
  return new Plant(plant);
}

export function PlantCollectionFactory(plants: MetricPlant[]) {
  return plants.map(PlantFactory);
}
// GET /plants/v1/flowering
// [
//   {
//     "Id": 10011,
//     "Label": "ABCDEF012345670000010011",
//     "State": "Tracked",
//     "GrowthPhase": "Flowering",
//     "PlantBatchId": 2,
//     "PlantBatchName": "Demo Plant Batch",
//     "PlantBatchTypeName": "Clone",
//     "StrainId": 1,
//     "StrainName": "Spring Hill Kush",
//     "RoomId": 2,
//     "RoomName": "Plants Room",
//     "HarvestId": null,
//     "HarvestedUnitOfWeightName": null,
//     "HarvestedUnitOfWeightAbbreviation": null,
//     "HarvestedWetWeight": null,
//     "HarvestCount": 0,
//     "IsOnHold": false,
//     "PlantedDate": "2014-10-10",
//     "VegetativeDate": "2014-10-20",
//     "FloweringDate": "2014-11-09",
//     "HarvestedDate": null,
//     "DestroyedDate": null,
//     "DestroyedNote": null,
//     "DestroyedByUserName": null,
//     "LastModified": "0001-01-01T00:00:00+00:00"
//   },
//   {
//     "Id": 10012,
//     "Label": "ABCDEF012345670000010012",
//     "State": "Tracked",
//     "GrowthPhase": "Flowering",
//     "PlantBatchId": 2,
//     "PlantBatchName": "Demo Plant Batch",
//     "PlantBatchTypeName": "Clone",
//     "StrainId": 1,
//     "StrainName": "Spring Hill Kush",
//     "RoomId": 2,
//     "RoomName": "Plants Room",
//     "HarvestId": null,
//     "HarvestedUnitOfWeightName": null,
//     "HarvestedUnitOfWeightAbbreviation": null,
//     "HarvestedWetWeight": null,
//     "HarvestCount": 0,
//     "IsOnHold": false,
//     "PlantedDate": "2014-10-10",
//     "VegetativeDate": "2014-10-20",
//     "FloweringDate": "2014-11-09",
//     "HarvestedDate": null,
//     "DestroyedDate": null,
//     "DestroyedNote": null,
//     "DestroyedByUserName": null,
//     "LastModified": "0001-01-01T00:00:00+00:00"
//   }
// ]