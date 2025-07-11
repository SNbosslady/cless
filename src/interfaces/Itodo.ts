export interface Itodo {
    index: number;
    action: 'delete' | 'edit';
    new_value?: string;
    isDone?: boolean;
}

interface item_interface{
    index:number;
    action: 'delete' | 'edit';
    new_value?: string;
}
export default item_interface;
// This interface defines the structure for an item action in a todo list application.