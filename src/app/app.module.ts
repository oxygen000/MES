import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { MasterThemeComponent } from './master-theme/master-theme.component';
import { ComponentsComponent } from './components/components.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    MasterThemeComponent,
    ComponentsComponent,
    PrototypeComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
