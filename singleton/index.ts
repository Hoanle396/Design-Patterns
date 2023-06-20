class Singleton {
  static instance: Singleton;

  constructor() {}

  static getInstance = (): Singleton => {
    if (this.instance == null) {
      this.instance = new Singleton();
    }
    return this.instance;
  };
}

const single1 = Singleton.getInstance();
const single2 = Singleton.getInstance();
if (single1 == single2) {
  console.log("Unique Instance");
}
