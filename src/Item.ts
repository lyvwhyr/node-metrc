import * as moment from 'moment';

export interface MetrcItem {
  Id: number | null;
  Name: string | null;
  ProductCategoryName: string | null;
  ProductCategoryType: string | null;
  QuantityType: string | null;
  UnitOfMeasureId: number | null;
  UnitOfMeasureName: string | null;
  UnitOfMeasureAbbreviation: string | null;
  StrainId: number | null;
  StrainName: string | null;
  UnitThcContent: number | null;
  UnitThcContentUnitOfMeasureId: number | null;
  UnitThcContentUnitOfMeasureName: string | null;
  UnitThcContentUnitOfMeasureAbbreviation: string | null;
  UnitWeight: number | null;
  UnitWeightUnitOfMeasureId: number | null;
  unitWeightUnitOfMeasureName: string | null;
  UnitWeightUnitOfMeasureAbbreviation: string | null;
}

export default class Item {
  protected id: number | null;
  protected name: string | null;
  protected productCategoryName: string | null;
  protected productCategoryType: string | null;
  protected quantityType: string | null;
  protected unitOfMeasureId: number | null;
  protected unitOfMeasureName: string | null;
  protected unitOfMeasureAbbreviation: string | null;
  protected strainId: number | null;
  protected strainName: string | null;
  protected unitThcContent: number | null;
  protected unitThcContentUnitOfMeasureId: number | null;
  protected unitThcContentUnitOfMeasureName: string | null;
  protected unitThcContentUnitOfMeasureAbbreviation: string | null;
  protected unitWeight: number | null;
  protected unitWeightUnitOfMeasureId: number | null;
  protected unitWeightUnitOfMeasureName: string | null;
  protected unitWeightUnitOfMeasureAbbreviation: string | null;

  constructor(item: MetrcItem) {
    this.id = item.Id || null;
    this.name = item.Name || null;
    this.productCategoryName = item.ProductCategoryName || null;
    this.productCategoryType = item.ProductCategoryType || null;
    this.quantityType = item.QuantityType || null;
    this.unitOfMeasureId = item.UnitOfMeasureId || null;
    this.unitOfMeasureName = item.UnitOfMeasureName || null;
    this.unitOfMeasureAbbreviation = item.UnitOfMeasureAbbreviation || null;
    this.strainId = item.StrainId || null;
    this.strainName = item.StrainName || null;
    this.unitThcContent = item.UnitThcContent || null;
    this.unitThcContentUnitOfMeasureId =
        this.unitThcContentUnitOfMeasureId || null;
    this.unitThcContentUnitOfMeasureName =
        item.UnitThcContentUnitOfMeasureName || null;
    this.unitThcContentUnitOfMeasureAbbreviation =
        item.UnitThcContentUnitOfMeasureAbbreviation || null;
    this.unitWeight = item.UnitWeight || null;
    this.unitWeightUnitOfMeasureId = item.UnitWeightUnitOfMeasureId || null;
    this.unitWeightUnitOfMeasureName = item.unitWeightUnitOfMeasureName || null;
    this.unitWeightUnitOfMeasureAbbreviation =
        item.UnitWeightUnitOfMeasureAbbreviation || null;
  }
}

export function ItemFactory(harvest: MetrcItem) {
  return new Item(harvest);
}

export function ItemCollectionFactory(harvests: MetrcItem[]) {
  return harvests.map(ItemFactory);
}
// GET /items/v1/1
// {
//   "Id": 1,
//   "Name": "Buds",
//   "ProductCategoryName": "Buds",
//   "ProductCategoryType": "Buds",
//   "QuantityType": "WeightBased",
//   "UnitOfMeasureId": 0,
//   "UnitOfMeasureName": "Ounces",
//   "UnitOfMeasureAbbreviation": "oz",
//   "StrainId": 1,
//   "StrainName": "Spring Hill Kush",
//   "UnitThcContent": null,
//   "UnitThcContentUnitOfMeasureId": null,
//   "UnitThcContentUnitOfMeasureName": null,
//   "UnitThcContentUnitOfMeasureAbbreviation": null,
//   "UnitWeight": null,
//   "UnitWeightUnitOfMeasureId": null,
//   "UnitWeightUnitOfMeasureName": null,
//   "UnitWeightUnitOfMeasureAbbreviation": null
// }