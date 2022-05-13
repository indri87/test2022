import { LocationChangeEvent } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  tipo = '';
  cercaRisultati: Location =  [];
  listaActivity: Location = [

    {

      id: 1,
      name: 'tennis' ,
      description: 'campo',
      tipo: 'torino',
  }


  ];

  ngOnInit(): void {
  }

  cercaActivity() {

    if (this.tipo !== '') {
      this.cercaActivity = 
      this.cercaActivity.
      filter(location =>
      location.tipo.toLowercase()
       === this.tipo.toLowerCase());
      
    }

  }

}
