import{ Component } from "@angular/core";

@Component
({
    selector: "footer-c",
    templateUrl:"./footer.component.html",
    styleUrls: ["./footer.component.css"],
})
export class footerComponent{
    title: string;
    constructor() {
        this.title= "cless";
    }
}