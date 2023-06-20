import { ACBank, TPBank, VTBank } from "./banklist";
export interface Bank {
  getBankName(): string;
}

export enum BankType {
  ACBank = "AC",
  TPBank = "TP",
  VCBank = "VC",
  VTBank = "VT",
}
