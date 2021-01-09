import { Component } from '@angular/core';
import {DataService} from './data.service';
import { trigger,state ,style, transition,animate, keyframes} from '@angular/animations';                                 

@Component({
  selector: 'app-root',
  template:`<h1>{{title}}</h1>
  <h1 [ngClass]="titleClasses">Ragu, Welcome to Angular 4 Project</h1>
  <p>I love Aditya so much</p>
  <p [@MyAwesomeAnimation]='state' (click)='animateMe()'>Aditya Weds Ragu</p>
  <p>{{someData}}</p>
  <p>{{myObject.name}} weds Ragu</p>
  <p>{{myObject.age}}</p>
  <ul>
  <li *ngFor="let arr of myArray">{{arr}}</li>
  </ul>
  <div *ngIf="myArray1; then otherImpl1 else otherImpl"></div>
  <ng-template #otherImpl1>Yes I do exists</ng-template>
  <ng-template #otherImpl>No I don't exists</ng-template>
  <img src="{{angularLogo}}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">
  <button (mouseenter) ="myEvent($event)" [disabled]="buttonStatus">MY BUTTON</button>
  `,
  // templateUrl: './app.component.html',
  styles: [`

  p {
    width:200px;
    backgroud :lightgray;
    margin: 100px auto;
    text-align :center;
    padding :20px,
    font-size:1.5em;
  }
  h1 {
    text-decoration:underline;
  }
  .red-title{
    color:red;
  }
  .larger-title{
    font-size:4em;
  }
  `],
  animations:[
    trigger('MyAwesomeAnimation',[
      state('small',style({
        transform:'scale(1)'
      })),

      state('larger',style({
        transform:'scale(1)'
      })),

      transition('Small => larger',animate('300ms ease-in')),
    ])
  ]
})
export class AppComponent {

  state: string='small' ;

  someData:String='';

  constructor(private dataservice:DataService){

  }

  animateMe(){
    this.state =(this.state=='small')?'larger':'small';
  }

  ngOnInit(){
    console.log(this.dataservice.cars);

    this.someData= this.dataservice.myData();
  }

  titleClasses ={
    "red-title":false,
    "larger-title":true
  }
  myEvent(event){
    console.log(event);
  }
  buttonStatus=false;
  angularLogo="https://angular.io/assets/images/logos/angular/angular.png";
  title = 'Ragu App';
  myObject={
    name:'Aditya',
    age:'27',
  }
  myArray=['Ragu','Aditya','Adi','Weds','Ragunath'];

}
