export class HardDrive {
  read(lba: number, size: number) {
    console.log("read", lba, size);
  }
}