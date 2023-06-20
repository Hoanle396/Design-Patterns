import { BOOT_ADDRESS, BOOT_SECTOR, SECTOR_SIZE } from "./constants";

/* Complex parts */
class CPU {
  freeze() {
    console.log("freeze");
  }
  jump(position: number) {
    console.log("position", position);
  }
  execute() {
    console.log("executing ...");
  }
}

class HardDrive {
  read(lba: number, size: number) {
    console.log("read", lba, size);
  }
}

class Memory {
  load(position: number, data: any) {
    console.log("load", position, data);
    return { position, data };
  }
}

/* Facade */
class ComputerFacade {
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

/* Client */

const computer = new ComputerFacade();
computer.start();
