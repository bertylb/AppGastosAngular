export class ItemListado {
  importe: number;
  descripcion: string;
  date: any;

  constructor(importe: number, descripcion: string, date: any) {
    this.importe = importe;
    this.descripcion = descripcion;
    this.date = date;
  }
}
