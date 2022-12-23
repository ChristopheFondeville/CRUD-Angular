import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./views/home/home.component";
import {CreateComponent} from "./views/create/create.component";
import {Error404Component} from "./views/error404/error404.component";
import {EditComponent} from "./views/edit/edit.component";
import {DeleteComponent} from "./views/delete/delete.component";
import {ListEditComponent} from "./views/list-edit/list-edit.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit', component: ListEditComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'delete', component: DeleteComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: Error404Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
