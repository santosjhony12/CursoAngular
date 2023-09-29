import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirtComponentComponent } from './fomponents/firt-component/firt-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

const routes: Routes = [
  {path: '', component: FirtComponentComponent},
  {path: 'list', component: ListRenderComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
