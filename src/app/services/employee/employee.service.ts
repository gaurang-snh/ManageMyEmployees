import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getCurrentEmployee() {
    return this.http.get("https://uinames.com/api/");
  }

  getEmployeeList() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
