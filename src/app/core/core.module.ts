import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declare: [NavBarComponent]
}, imports: [RouterModule],export: [NavBarComponent])

export class CoreModule {}
