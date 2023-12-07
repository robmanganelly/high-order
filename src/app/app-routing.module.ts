import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResolvedComponent } from './resolved/resolved.component';
import { loadDataResolver } from './load-data.resolver';

const routes: Routes = [
  {
    path: "", pathMatch: "full", redirectTo: "main",
  },
  {
    path: "main", component: MainComponent
  },
  {
    path: "resolved", component: ResolvedComponent, resolve: { loadedData: loadDataResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
