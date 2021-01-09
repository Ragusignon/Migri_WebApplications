import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars=[
    'Maruti','Posche','Tata','BMW','Tesla'
  ];

  myData(){
    return "This is my Data Man!!!!!";
  }
}
