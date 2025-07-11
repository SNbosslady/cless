import { Injectable } from "@angular/core";

interface User {
  id: number;
  name: string;
  role?:string;
}

@Injectable({
  providedIn: "root",
})
export class UserService {

    constructor() {}

  getUsers() {
    //http call to a user api
    let response = {
        name: "John Doe",
        age: 30,
        id: 1
    }
    return response
  }
  testService() {
   console.log('user service is working');
  }
}
