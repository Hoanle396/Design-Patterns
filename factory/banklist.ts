import { Bank } from "./interface";

export class TPBank implements Bank {
  getBankName(): string {
    return "TPBank";
  }
}

export class VCBank implements Bank {
  getBankName(): string {
    return "VCBank";
  }
}
export class VTBank implements Bank {
  getBankName(): string {
    return "VTBank";
  }
}
export class ACBank implements Bank {
  getBankName(): string {
    return "ACBank";
  }
}
