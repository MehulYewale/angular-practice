import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  private _name : string;
  constructor() { }

  getName(){
	  return this._name
  }
	
  setName(name: string){
	  this._name = name;
  }
	
}
