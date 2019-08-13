import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../services/employee/employee.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  user: Object;
  employees: Object;
  EditOrSaveText: String = "Edit";

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    //Need to move this call to app component
    this.employeeService.getCurrentEmployee().subscribe(data => {
      this.user = data;
    });
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  editOrSaveClicked(i: Number) {
    let saveEditElement = <HTMLInputElement>(
      document.getElementById("edit-or-save-button-" + i)
    );
    let deleteElement = <HTMLInputElement>(
      document.getElementById("delete-button-" + i)
    );
    let inputElements = document.getElementsByClassName("employee-input-" + i);
    if (saveEditElement.innerText === "Edit") {
      saveEditElement.innerText = "Save";
      try {
        deleteElement.disabled = true;
      } catch (e) {
        //console.log(e);
      }
      for (let i = 0; i < inputElements.length; i++) {
        const inputElement = inputElements[i] as HTMLInputElement;
        inputElement.disabled = false;
        inputElement.style.color = "black";
      }
    } else {
      saveEditElement.innerText = "Edit";
      try {
        deleteElement.disabled = false;
      } catch (e) {
        //console.log(e);
      }
      for (let i = 0; i < inputElements.length; i++) {
        const inputElement = inputElements[i] as HTMLInputElement;
        inputElement.disabled = true;
        inputElement.style.color = "lightgray";
      }

      // Get values from input fields and call API to update
    }
  }

  deleteConfirm(i: Number) {
    // Delete confirmation dialog and logic
  }
}
