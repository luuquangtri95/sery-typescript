import { hasPrint } from "./interfaceForClass";

export class Invoice implements hasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}

  print(): string {
    return `${this.client} nợ ${this.amount} dollar từ ${this.work}`;
  }
}

export class Payment implements hasPrint {
  constructor(
    readonly recipiend: string,
    private job: string,
    public amount: number
  ) {}

  print(): string {
    return `tôi nợ ${this.recipiend} ${this.amount} dollar`;
  }
}
