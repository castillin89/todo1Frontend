import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KardexComponent } from './components/kardex/kardex.component';


const routes: Routes = [
  { path: '', redirectTo:'/todo1/kardex', pathMatch: 'full'},
  {path: 'todo1/kardex', component: KardexComponent}, 

  { path: '**', redirectTo: '/todo1/kardex', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
