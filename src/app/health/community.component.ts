import { Component, OnInit } from '@angular/core';
import { ICommunity } from './icommunity';
import { WeightService } from './weight.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  pageTitle="Home Comment List"
  communities: ICommunity[];
  constructor(private _communityService:WeightService) { }

  ngOnInit(): void {
    this.communities=this._communityService.getComment()
  }

}
