import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components from SubModules */
import { AppComponent as ShopComponent } from 'projects/shop/src/app/app.component';
import { AppComponent as ExplainationComponent} from 'projects/explaination/src/app/app.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'explaination',
    component: ExplainationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
