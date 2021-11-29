import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SutraCoverViewerComponent } from './sutra-cover-viewer/sutra-cover-viewer.component';
import { SutraViewerComponent } from './sutra-viewer/sutra-viewer.component';

const routes: Routes = [{
  path: 'sutra-cover', component: SutraCoverViewerComponent
},{
  path: '', component: SutraViewerComponent
},{
  path: 'sutras/:uid', component: SutraViewerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
