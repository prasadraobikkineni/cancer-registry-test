import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { VariablesService } from './variables.service';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(
          [
              {
                  path: '',
                  component: HomeComponent
              },
              {
                  path: 'variables/:id',
                  component: ItemComponent
              },
              { path: '**', redirectTo: '' }
          ]
  )],
  declarations: [ AppComponent, HomeComponent, ItemComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ VariablesService ]
})
export class AppModule { }
