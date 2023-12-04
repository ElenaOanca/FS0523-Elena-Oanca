import { iPizza } from "./ipizza";

export class Pizza implements iPizza {
  constructor(public gusto: string,
  public prezzo: number,
  public active: boolean|string, public id?:string){}
}
