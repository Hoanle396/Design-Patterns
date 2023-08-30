import { CPU } from "./CPU";
import { HardDrive } from "./HardDrive";
import { Memory } from "./Memory";
import { BOOT_ADDRESS, BOOT_SECTOR, SECTOR_SIZE } from "./constants";

export class ComputerFacade {
  processor: CPU;
  ram: Memory;
  hd: HardDrive;

  constructor() {
    this.processor = new CPU();
    this.ram = new Memory();
    this.hd = new HardDrive();
  }

  start() {
    this.processor.freeze();
    this.ram.load(BOOT_ADDRESS, this.hd.read(BOOT_SECTOR, SECTOR_SIZE));
    this.processor.jump(BOOT_ADDRESS);
    this.processor.execute();
  }
}