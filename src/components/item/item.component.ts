import{Component,Input} from "@angular/core";
import{CommonModule} from "@angular/common";
import { HighlightDirective } from "../../app/custom-directive/highlight.directive";



@Component(
    {
    selector: "item",
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.css"],
    imports: [CommonModule,HighlightDirective]
    }
)

export class ItemComponent{
    @Input()
    name: string="";
    @Input()
    description?:string;
    @Input()
    date?:Date;

    edit(){

    }
    delete(){

    }


}