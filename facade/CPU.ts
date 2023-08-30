export class CPU {
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