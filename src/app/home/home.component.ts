import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //providers: [AppService]
})
export class HomeComponent {

  appServiceValue : any;

  constructor(private appService : AppService) { 
    this.appServiceValue = this.appService.getRandomNumber();
  }

}
