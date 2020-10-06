import { Injectable } from '@angular/core';
import { ICommunity } from './icommunity';
import { IWeight } from './IWeight';

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  weights:IWeight[]=[
     
    {
    "id": 1,
    "date": "1996-01-01T07:00:00.000Z",
    "weight": 165,
    "bodyfat": 0.2
    },
    {
    "id": 2,
    "date": "1996-01-02T07:00:00.000Z",
    "weight": 164,
    "bodyfat": 0.19 
    },
    {
      "id": 3,
      "date": "1996-01-03T07:00:00.000Z",
      "weight": 164,
      "bodyfat": 0.19
      },
      {
      "id": 4,
      "date": "1996-01-12T07:00:00.000Z",
      "weight": 161,
      "bodyfat": 0.18
      },
      {
      "id": 5,
      "date": "1995-12-31T07:00:00.000Z",
      "weight": 167,
      "bodyfat": 0.2
      },
      {
      "id": 6,
      "date": "1995-12-01T07:00:00.000Z",
      "weight": 161,
      "bodyfat": 0.18
      } 
     
]
communities:ICommunity[]=[
  {
    "id": 0,
    "commenter": "Bob",
    "comment": "Great job!!"
    },
    {
    "id": 1,
    "commenter": "Alex",
    "comment": "Your progress is inspiring!"
    },
    {
    "id": 2,
    "commenter": "Sherry",
    "comment": "Way to go so far!"
    },
    {
    "id": 3,
    "commenter": "Nicole",
    "comment": "Keep it up!"
    },
    {
    "id": 4,
    "commenter": "John",
    "comment": "How is the diet going?"
    } 
   
]
getWeight():IWeight[]{
  return this.weights;
}
getComment():ICommunity[]{
  return this.communities;
}
  constructor() { }
}
