import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Peticion de listado de empleados del sptringboot
  private baseURL = "http://127.0.0.1:8080/api/v1/empleados"

  constructor(private httpClient : HttpClient) { }

  // metodo para obtener la lista de empelados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(this.baseURL);
  }

  // metodo para registrar un empleado
  registrarEmpleado(empleado:Empleado): Observable<Object>{
    return this.httpClient.post(this.baseURL, empleado);
  }

  // metodo para actualizar un empleado
  actualizarEmpleado(id:number, empleado:Empleado): Observable<Object>{
    return this.httpClient.put<Object>(this.baseURL + `/${id}`, empleado);
  }

  obtenerEmpleadoPorId(id:number): Observable<Empleado>{
    return this.httpClient.get<Empleado>(this.baseURL + `/${id}`);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(this.baseURL + `/${id}`);
  }
}
