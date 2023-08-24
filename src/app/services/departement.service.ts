import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { departement } from 'app/models/departement';


@Injectable({
	providedIn: 'root'
  })
export class departementService{
	URL: string;
	constructor( private http: HttpClient ) {
		this.URL = environment.apiURL;
	}
	getDepartements():Observable<any> {
		return this.http.get(this.URL + 'departements/getdepartements')
	}
	getDepartement(id: Number): Observable<any> {
		return this.http.get(this.URL + 'departements/' + id);
	}
	addDepartement(form: any): Observable<any> {
		return this.http.post(this.URL + 'departements/save', form);
	}
}