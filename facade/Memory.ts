export class Memory {
  load(position: number, data: any) {
    console.log("load", position, data);
    return { position, data };
  }
}