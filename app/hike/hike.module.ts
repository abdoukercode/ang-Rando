import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HikeListComponent } from './hike-list-component';
import { HikeService } from './hike.service';
import { HikeDetailsComponent } from './hike-details.component';
import { HikeFilterPipe } from './hike-filter.pipe'
import { HikeSummaryComponent} from './hike-summary.component'


@NgModule({
    imports: [CommonModule, HttpModule, RouterModule,FormsModule],
    exports: [HikeListComponent],
    declarations: [HikeListComponent,HikeDetailsComponent, HikeFilterPipe, HikeSummaryComponent],
    providers: [HikeService],
})
export class HikeModule {
   
  }
 
