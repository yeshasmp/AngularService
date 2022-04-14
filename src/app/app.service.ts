import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  sharednumber:any;

  constructor() { 
    this.sharednumber = Math.floor(Math.random() * 5);
    console.info("AppService instance has been created!")
  }

  getRandomNumber(){
    return this.sharednumber;
  }
}