import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Employee {
  constructor(
    public empId: number,
    public name: string,
    public phone: string,
    public mail: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getEmployees() {
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>('http://localhost:8080/employees/' + employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>('http://localhost:8080/employees', employee);
  }
}
