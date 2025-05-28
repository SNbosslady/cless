import{ Component } from "@angular/core";

@Component
({
    selector: "nav-bare",
    templateUrl:"./nav.component.html",
    styleUrls: ["./nav.component.css"],
})
export class NavComponent{
    title: string;
    constructor() {
        this.title= "cless";
    }
}
