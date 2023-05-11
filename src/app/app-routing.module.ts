import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { AddVideoComponent } from './add-video/add-video.component';

const routes: Routes = [
  {path:'videos',component:VideosComponent},
  {path:'addVideo',component:AddVideoComponent},
  {path:'',redirectTo:'videos',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
