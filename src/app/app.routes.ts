import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component'; // Import your component

export const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' }, // Default route
  { path: 'calculator', component: CalculatorComponent } // Define routes for components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
