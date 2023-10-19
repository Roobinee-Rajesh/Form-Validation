import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenceComponent } from './components/reference/reference.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [ { path: '', component: ReferenceComponent },
{ path: 'form', component: FormComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
