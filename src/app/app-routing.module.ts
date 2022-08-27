import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { FaComponent } from './components/fa/fa.component';
import { FbComponent } from './components/fb/fb.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
    children: [
      { path: 'fa', component: FaComponent },
      { path: 'fb', component: FbComponent },
    ],
  },
  { path: 's', component: SecondComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
