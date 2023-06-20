import { BankFactory } from "./factory";
import { BankType } from "./interface";

const bank = BankFactory.getBank(BankType.ACBank);
console.log(bank.getBankName());
