import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hike } from './hike';
@Component({
    moduleId: module.id,
    selector: 'hike-summary',
    templateUrl: 'hike-summary.component.html',
    styles:[`a {text-decoration:none} 
            a:hover { color= #999}`
            ],
})
export class HikeSummaryComponent  {
    @Input() hike: Hike ;

    @Output() addhikeasfavorite = new EventEmitter<Hike>();


    toggleAsTodoHike(isAdded:any){
        
        //console.log(isAdded);
        if(isAdded){
            this.addhikeasfavorite.emit(this.hike)
        }
    }
    
}