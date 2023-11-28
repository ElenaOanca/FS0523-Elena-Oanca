import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './pages/post-inattivi/post-inattivi.component';

const routes: Routes = [
  // collego la rotta home quando non c'è nessun path
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'post-attivi', component: PostAttiviComponent },
  { path: 'post-inattivi', component: PostInattiviComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
