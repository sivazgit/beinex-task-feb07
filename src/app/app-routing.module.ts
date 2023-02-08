import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { DetailsComponent } from './layout/details/details.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [{
  path:'home',component:HomeComponent
},
{
  path:'gallery',component:GalleryComponent
},
{
  path:'about',component:AboutComponent
},
{
  path:'contact',component:ContactComponent
},
{
  path:'details/:book',component:DetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
