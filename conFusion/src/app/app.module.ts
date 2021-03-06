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
import { MenuComponent } from './menu/menu.component';
// End
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //  Addition
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule
    // End
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
