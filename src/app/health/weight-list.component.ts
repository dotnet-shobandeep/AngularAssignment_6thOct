import { Component, OnInit } from '@angular/core';
import { IWeight } from './IWeight';
import { WeightService } from './weight.service';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.css']
})
export class WeightListComponent implements OnInit {
  pageTitle="Weight List"
  weights: IWeight[];
  constructor(private _weightService:WeightService) { }

  ngOnInit(): void {
    this.weights=this._weightService.getWeight();
  }
  

}
