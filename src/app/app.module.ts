import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { MasterThemeComponent } from './master-theme/master-theme.component';
import { ComponentsComponent } from './components/components.component';
import { PrototypeComponent } from './prototype/prototype.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourcesComponent } from './resources/resources.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { MachinesComponent } from './machines/machines.component';
import { PlanningComponent } from './planning/planning.component';
import { NavComponent } from './nav/nav.component';






const appRoute: Routes =[
  {path: 'Home', component:HomeComponent},
  {path: 'singin', component:SingInComponent},
  {path: 'MasterTheme', component:MasterThemeComponent},
  {path: 'Components', component:ComponentsComponent},
  {path: 'Prototype', component:PrototypeComponent},
  {path: 'Header', component:HeaderComponent},
  {path: 'Dashboard', component:DashboardComponent},
  {path: 'Resources', component:ResourcesComponent},
  {path: 'Manufacturing', component:ManufacturingComponent},
  {path: 'Machines', component:MachinesComponent},
  {path: '', redirectTo:'Home', pathMatch:'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    MasterThemeComponent,
    ComponentsComponent,
    PrototypeComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    ResourcesComponent,
    ManufacturingComponent,
    MachinesComponent,
    PlanningComponent,
    NavComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
