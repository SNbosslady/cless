import { Component, EventEmitter, input, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import  item_interface from "../../interfaces/Itodo";

@Component(
    {
    selector: "item",
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.css"],
    imports: [CommonModule],

    }
)
export class ItemComponent {

    ngOnInit() {
        this.loadData();
    }

    @Output() item_position = new EventEmitter<number>();
     @Output() item_action = new EventEmitter<item_interface>();

    // Define an interface for the item action
    @Input()
    index:number=0;

    delete(){
        this.item_position.emit(this.index);
    }
    
    @Input()
    name:string="";
     @Input()
    description?:string;
     @Input()
    date?:Date;
    classStyle='btn-success'
    classStyles=['btn-danger', 'btn-large']
    classStylesObj = {
        'btn-danger':true,
        'btn-large':true
    }
    placeholder = "Enter your name"
    stlyeobject ={
        'padding': '10px',
        'background-color': 'skyblue',
        'border-radius': '5px',
        'color': 'white'
    }
    isLoading = true;

    loadData(){
        setTimeout(() => {
       this.isLoading = false; 
    }, 10000);

    }


    danger = ()=>{
        // checks for specific params 
      return false
    }
isEdit=false;
onEdit(){
    this.isEdit = !this.isEdit;
}
    edit(){
        //alert("Edit item: " + this.name);
        this.onEdit()
        this.item_action.emit({index: this.index, action: 'edit', new_value: this.name})
    }
   onUpdate(event:any){
    this.name=event.target.value;
    }

}