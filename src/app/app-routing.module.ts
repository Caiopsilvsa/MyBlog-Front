import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/newPost/newpost.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { PreventUnsavedChangesGuard } from './guard/prevent-unsaved-changes.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'newpost', component:ContactComponent},
  {path:'post/:titulo', component:PostComponent},
  {path:'post/:author/edit', component:EditComponent, canDeactivate:[PreventUnsavedChangesGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
