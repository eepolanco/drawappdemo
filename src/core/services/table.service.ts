import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from '../models/table.model';
import { enviroment } from 'src/enviroments/enviroment.dev';

@Injectable({ providedIn: 'root' })
export class TableService {
  constructor(private httpClient: HttpClient) {}

  getTables() : Observable<Table[]> {
    return this.httpClient.get<Table[]>(`${enviroment.baseUrl}/tables`);
  }

  postNewTable(table : Table) : Observable<Table> {
    return this.httpClient.post<Table>(`${enviroment.baseUrl}/tables`, table);
  }

  deleteTable(id : number) : Observable<any> {
    return this.httpClient.delete<any>(`${enviroment.baseUrl}/tables/${id}`);
  }

  
  updateTable(id : number, table: Table) : Observable<any> {
    return this.httpClient.put<any>(`${enviroment.baseUrl}/tables/${id}`, table);
  }
}
