import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsComponent } from "./components/components.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { MasterThemeComponent } from "./master-theme/master-theme.component";
import { PrototypeComponent } from "./prototype/prototype.component";
import { SingInComponent } from "./sing-in/sing-in.component";

const routes:Routes = [
{path:"Sing In",component:SingInComponent},
{path:"Home",component:HomeComponent},
{path:"Header",component:HeaderComponent},
{path:"Components",component:ComponentsComponent},
{path:"Master-Theme",component:MasterThemeComponent},
{path:"Prototype",component:PrototypeComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:  [RouterModule]
})

export class AppRoutingModule  {

}
