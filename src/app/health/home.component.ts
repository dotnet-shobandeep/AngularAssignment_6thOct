import { Component, OnInit } from '@angular/core';
import { IWeight } from './IWeight';
import { WeightService } from './weight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle="Home Weight List"
  weights: IWeight[];
  constructor(private _weightService:WeightService) { }

  ngOnInit(): void {
    this.weights=this._weightService.getWeight();
  }

}
