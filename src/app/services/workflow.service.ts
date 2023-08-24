import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  private URL: string;
  constructor( private http: HttpClient ) {
    this.URL = environment.apiURL;
  }
  ngOnInit (){

  }
  getWorkflows():Observable<any>{
    return this.http.get(this.URL + 'workflow/getworkflow');
  }
  getWorkflow(id: Number): Observable<any>{
    return this.http.get(this.URL + 'workflow/' + id);
  }
  addWorkflow(form: any):Observable<any>{
    return this.http.post(this.URL + 'workflow/save', form);
  }
}
