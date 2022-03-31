import { Column } from './column.modal';

export class Board {
  constructor(public name: string, public columns: Column[]) {}
}
