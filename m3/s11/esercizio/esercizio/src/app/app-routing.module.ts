import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //path per home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //path per preferiti quando si clicca sul cuore
  { path: 'Preferiti', redirectTo: '/preferiti', pathMatch: 'full' },
  //path per carello quando si clicca sul carrello
  { path: 'Carrello', redirectTo: '/carrello', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
