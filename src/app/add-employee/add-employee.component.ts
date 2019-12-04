import {Component, OnInit} from '@angular/core';
import {HttpClientService, Employee} from '../service/httpclient.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  user: Employee = new Employee(null, '', '', '');
  nameError: boolean = false;
  phoneError: boolean = false;
  mailError: boolean = false;

  constructor(
    private httpClientService: HttpClientService
  ) {
  }

  ngOnInit() {
  }

  createEmployee(): void {
    if (!this.user.name.includes(' ')) {
      this.nameError = true;
    } else {
      this.nameError = false;
    }
    if (!this.user.phone.includes('+212') || !this.user.phone.includes('+212')) {
      this.phoneError = true;
    } else {
      this.phoneError = false;
    }
    if (!this.user.mail.includes('@') || !this.user.mail.includes('.com')) {
      this.mailError = true;
    } else {
      this.mailError = false;
    }
    if (this.nameError === false && this.phoneError === false && this.mailError === false) {
      this.httpClientService.createEmployee(this.user)
        .subscribe(data => {
          alert('Employee created successfully.');
        });
    }
  }

}
