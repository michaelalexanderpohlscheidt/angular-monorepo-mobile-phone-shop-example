import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
/* SubModules */
import { AppModule as ShopModule } from 'projects/shop/src/app/app.module';
import { AppModule as ExplainationModule} from 'projects/explaination/src/app/app.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,

    ShopModule,
    ExplainationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
