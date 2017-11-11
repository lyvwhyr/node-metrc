import * as moment from 'moment';

export interface MetrcTransaction {
  PackageId: number | null;
  PackageLabel: string | null;
  ProductName: string | null;
  QuantitySold: number | null;
  UnitOfMeasureName: string | null;
  UnitOfMeasureAbbreviation: string | null;
  TotalPrice: number | null;
  SalesDeliveryState: string | null;
}

export interface MetrcReceipt {
  Id: number | null;
  ReceiptNumber: string | null;
  SalesDateTime: moment.Moment | null;
  SalesCustomerType: string | null;
  PatientLicenseNumber: number | null;
  CaregiverLicenseNumber: number | null;
  TotalPackages: number | null;
  TotalPrice: number | null;
  Transactions: MetrcTransaction[];
  ArchivedDate: moment.Moment | null;
  LastModified: moment.Moment | null;
}

export class Transaction {
  protected packageId: number | null;
  protected packageLabel: string | null;
  protected productName: string | null;
  protected quantitySold: number | null;
  protected unitOfMeasureName: string | null;
  protected unitOfMeasureAbbreviation: string | null;
  protected totalPrice: number | null;
  protected salesDeliveryState: string | null;

  constructor(transaction: MetrcTransaction) {
    this.packageId = transaction.PackageId;
    this.packageLabel = transaction.PackageLabel;
    this.productName = transaction.ProductName;
    this.quantitySold = transaction.QuantitySold;
    this.unitOfMeasureName = transaction.UnitOfMeasureName;
    this.unitOfMeasureAbbreviation = transaction.UnitOfMeasureAbbreviation;
    this.totalPrice = transaction.TotalPrice;
    this.salesDeliveryState = transaction.SalesDeliveryState;
  }
}

export default class Receipt {
  protected id: number | null;
  protected receiptNumber: string | null;
  protected salesDateTime: moment.Moment | null;
  protected salesCustomerType: string | null;
  protected patientLicenseNumber: number | null;
  protected caregiverLicenseNumber: number | null;
  protected totalPackages: number | null;
  protected totalPrice: number | null;
  protected transactions: MetrcTransaction[];
  protected archivedDate: moment.Moment | null;
  protected lastModified: moment.Moment | null;

  constructor(receipt: MetrcReceipt) {
    this.id = receipt.Id || null;
    this.receiptNumber = receipt.ReceiptNumber || null;
    this.salesDateTime = receipt.SalesDateTime || null;
    this.salesCustomerType = receipt.SalesCustomerType || null;
    this.patientLicenseNumber = receipt.PatientLicenseNumber || null;
    this.caregiverLicenseNumber = receipt.CaregiverLicenseNumber || null;
    this.totalPackages = receipt.TotalPackages || null;
    this.totalPrice = receipt.TotalPrice || null;
    this.transactions = receipt.Transactions || null;
    this.archivedDate = moment(receipt.ArchivedDate) || null;
    this.lastModified = moment(receipt.LastModified) || null;
  }
}

export function ReceiptFactory(sale: MetrcReceipt) {
  return new Receipt(sale);
}

export function ReceiptCollectionFactory(receipts: MetrcReceipt[]) {
  return receipts.map(ReceiptFactory);
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
