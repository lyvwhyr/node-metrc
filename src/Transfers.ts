import * as moment from 'moment';

export interface MetrcTransfer {
  Id: number;
  ManifestNumber: string | null;
  ShipperFacilityLicenseNumber: string | null;
  ShipperFacilityName: string | null;
  TransporterFacilityLicenseNumber: string | null;
  TransporterFacilityName: string | null;
  DriverName: string | null;
  DriverOccupationalLicenseNumber: string | null;
  DriverVehicleLicenseNumber: string | null;
  VehicleMake: string | null;
  VehicleModel: string | null;
  VehicleLicensePlateNumber: string | null;
  DeliveryCount: number | null;
  ReceivedDeliveryCount: number | null;
  PackageCount: number | null;
  ReceivedPackageCount: number | null;
  CreatedDateTime: moment.Moment | null;
  CreatedByUserName: string | null;
  LastModified: moment.Moment | null;
  DeliveryId: number | null;
  RecipientFacilityLicenseNumber: string | null;
  RecipientFacilityName: string | null;
  ShipmentTypeName: string | null;
  ShipmentTransactionType: string | null;
  EstimatedDepartureDateTime: moment.Moment | null;
  ActualDepartureDateTime: moment.Moment | null;
  EstimatedArrivalDateTime: moment.Moment | null;
  ActualArrivalDateTime: moment.Moment | null;
  DeliveryPackageCount: number | null;
  DeliveryReceivedPackageCount: number | null;
  ReceivedDateTime: moment.Moment | null;
}

export default class Transfer {
  protected id: number;
  protected manifestNumber: string | null;
  protected shipperFacilityLicenseNumber: string | null;
  protected shipperFacilityName: string | null;
  protected transporterFacilityLicenseNumber: string | null;
  protected transporterFacilityName: string | null;
  protected driverName: string | null;
  protected driverOccupationalLicenseNumber: string | null;
  protected driverVehicleLicenseNumber: string | null;
  protected vehicleMake: string | null;
  protected vehicleModel: string | null;
  protected vehicleLicensePlateNumber: string | null;
  protected deliveryCount: number | null;
  protected receivedDeliveryCount: number | null;
  protected packageCount: number | null;
  protected receivedPackageCount: number | null;
  protected createdDateTime: moment.Moment | null;
  protected createdByUserName: string | null;
  protected lastModified: moment.Moment | null;
  protected deliveryId: number | null;
  protected recipientFacilityLicenseNumber: string | null;
  protected recipientFacilityName: string | null;
  protected shipmentTypeName: string | null;
  protected shipmentTransactionType: string | null;
  protected estimatedDepartureDateTime: moment.Moment | null;
  protected actualDepartureDateTime: moment.Moment | null;
  protected estimatedArrivalDateTime: moment.Moment | null;
  protected actualArrivalDateTime: moment.Moment | null;
  protected deliveryPackageCount: number | null;
  protected deliveryReceivedPackageCount: number | null;
  protected receivedDateTime: moment.Moment | null;

  constructor(transfer: MetrcTransfer) {
    this.id = transfer.Id || null;
    this.manifestNumber = transfer.ManifestNumber || null;
    this.shipperFacilityLicenseNumber =
        transfer.ShipperFacilityLicenseNumber || null;
    this.shipperFacilityName = transfer.ShipperFacilityName || null;
    this.transporterFacilityLicenseNumber =
        transfer.TransporterFacilityLicenseNumber || null;
    this.transporterFacilityName = transfer.TransporterFacilityName || null;
    this.driverName = transfer.DriverName;
    this.driverOccupationalLicenseNumber =
        transfer.DriverOccupationalLicenseNumber;
    this.driverVehicleLicenseNumber =
        transfer.DriverOccupationalLicenseNumber || null;
    this.vehicleMake = transfer.VehicleMake || null;
    this.vehicleModel = transfer.VehicleModel || null;
    this.vehicleLicensePlateNumber = transfer.VehicleLicensePlateNumber || null;
    this.deliveryCount = transfer.DeliveryCount || null;
    this.receivedDeliveryCount = transfer.ReceivedDeliveryCount || null;
    this.packageCount = transfer.PackageCount || null;
    this.receivedPackageCount = transfer.ReceivedPackageCount || null;
    this.createdDateTime = moment(transfer.CreatedDateTime) || null;
    this.createdByUserName = transfer.CreatedByUserName || null;
    this.lastModified = moment(transfer.LastModified) || null;
    this.deliveryId = transfer.DeliveryId || null;
    this.recipientFacilityLicenseNumber =
        transfer.RecipientFacilityLicenseNumber || null;
    this.recipientFacilityName = transfer.RecipientFacilityName || null;
    this.shipmentTypeName = transfer.ShipmentTypeName || null;
    this.shipmentTransactionType = transfer.ShipmentTransactionType || null;
    this.estimatedDepartureDateTime =
        moment(transfer.EstimatedDepartureDateTime) || null;
    this.actualDepartureDateTime =
        moment(transfer.ActualDepartureDateTime) || null;
    this.estimatedArrivalDateTime =
        moment(transfer.EstimatedArrivalDateTime) || null;
    this.actualArrivalDateTime = moment(transfer.ActualArrivalDateTime) || null;
    this.deliveryPackageCount = transfer.DeliveryPackageCount || null;
    this.deliveryReceivedPackageCount =
        this.deliveryReceivedPackageCount || null;
    this.receivedDateTime = moment(transfer.ReceivedDateTime) || null;
  }
}

export function TransferFactory(transfer: MetrcTransfer) {
  return new Transfer(transfer);
}

export function TransferCollectionFactory(transfers: MetrcTransfer[]) {
  return transfers.map(TransferFactory);
}

// GET /transfers/v1/rejected?licenseNumber=123-ABC
// [
//   {
//     "Id": 2,
//     "ManifestNumber": "0000000002",
//     "ShipperFacilityLicenseNumber": "123-ABC",
//     "ShipperFacilityName": "Lofty Med-Cultivation B",
//     "TransporterFacilityLicenseNumber": "123-ABC",
//     "TransporterFacilityName": "Lofty Med-Dispensary",
//     "DriverName": "X",
//     "DriverOccupationalLicenseNumber": "",
//     "DriverVehicleLicenseNumber": "",
//     "VehicleMake": "X",
//     "VehicleModel": "X",
//     "VehicleLicensePlateNumber": "X",
//     "DeliveryCount": 0,
//     "ReceivedDeliveryCount": 0,
//     "PackageCount": 7,
//     "ReceivedPackageCount": 6,
//     "CreatedDateTime": "2016-10-10T08:20:45-06:00",
//     "CreatedByUserName": null,
//     "LastModified": "0001-01-01T00:00:00+00:00",
//     "DeliveryId": 2,
//     "RecipientFacilityLicenseNumber": "123-ABC",
//     "RecipientFacilityName": "Lofty Med-Cultivation A",
//     "ShipmentTypeName": "Transfer",
//     "ShipmentTransactionType": "Standard",
//     "EstimatedDepartureDateTime": "2016-10-11T14:48:30.000",
//     "ActualDepartureDateTime": null,
//     "EstimatedArrivalDateTime": "2016-10-11T16:50:00.000",
//     "ActualArrivalDateTime": null,
//     "DeliveryPackageCount": 7,
//     "DeliveryReceivedPackageCount": 6,
//     "ReceivedDateTime": "2016-10-11T16:42:19-06:00"
//   }
// ]
