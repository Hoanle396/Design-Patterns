import { ACBank, TPBank, VCBank, VTBank } from "./banklist";
import { Bank, BankType } from "./interface";
export class BankFactory {
  public static getBank(bankType: BankType): Bank {
    switch (bankType) {
      case BankType.ACBank:
        return new ACBank();

      case BankType.TPBank:
        return new TPBank();

      case BankType.VCBank:
        return new VCBank();

      case BankType.VTBank:
        return new VTBank();

      default:
        throw "This bank type is unsupported";
    }
  }
}
