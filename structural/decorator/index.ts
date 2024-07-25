interface IComputer {
  description: () => void;
}

class Computer implements IComputer {
  description() {
    return "computer";
  }
}

interface IComputerDecorator extends IComputer {}

class Disk implements IComputerDecorator {
  computer: IComputer;

  constructor(computer: IComputer) {
    this.computer = computer;
  }

  description() {
    return this.computer.description() + " and a disk";
  }
}

class CD implements IComputerDecorator {
  computer: IComputer;

  constructor(computer: IComputer) {
    this.computer = computer;
  }

  description() {
    return this.computer.description() + " and a CD";
  }
}

class Monitor implements IComputerDecorator {
  computer: IComputer;

  constructor(computer: IComputer) {
    this.computer = computer;
  }

  description() {
    return this.computer.description() + " and a monitor";
  }
}

const computer = `Some text and => ${new Monitor(
  new CD(new Disk(new Computer()))
).description()}`;
