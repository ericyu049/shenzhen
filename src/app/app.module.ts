import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusComponent } from './component/bus/bus.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ETaxiComponent } from './component/etaxi/etaxi.component';
import { SubwayComponent } from './component/subway/subway.component';
import { SimComponent } from './component/sim/sim.component';

@NgModule({
  declarations: [
    AppComponent,
    BusComponent,
    ETaxiComponent,
    SubwayComponent,
    SimComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
