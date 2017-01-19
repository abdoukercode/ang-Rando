import { Component, OnInit } from '@angular/core';
import { Hike } from './hike';
import { HikeService } from './hike.service';

@Component({
    moduleId: module.id,
    selector: 'hike-list',
    templateUrl: 'hike-list.component.html'
})
export class HikeListComponent implements OnInit {
    hikes: Hike[];
    searchTerm: string;
    constructor(private _hikeService:HikeService) { }

    
 ngOnInit(){

    //this.hikes = this._hikeService.getHikes();
    this._hikeService.getHikesFromAPI()
                      .subscribe(
                        res=> this.hikes = res, 
                        err => console.error(err.status)
                        
                        );
        //console.log(this.hikes);
  
  }
  addToMyTodoHike(hikeToAdd: Hike) {
      console.log(`rando ${hikeToAdd.name} ajoutée`);
  }
}
