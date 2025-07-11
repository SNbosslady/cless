import{ Component } from "@angular/core";
import{UserComponent} from "../user/user.component"
@Component
({
    selector: "nav-bare",
    templateUrl:"./nav.component.html",
    styleUrls: ["./nav.component.css"],
    imports: [UserComponent],
        
})
export class NavComponent{
    title: string;
    constructor() {
        this.title= "cless";
    }
}
