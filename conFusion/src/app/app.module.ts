import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//  Addition
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
// End
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//  Addition
import 'hammerjs';
// End
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //  Addition
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
    // End
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
