import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './home/shell/shell.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent, // this is for some trick with routing..
    children: [
      { path: 'welcome', component: WelcomeComponent },
      // {
      //   path: 'items',        
      // }
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
