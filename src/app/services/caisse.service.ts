import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
  })
export class caisseService{
	URL: string;
	constructor( private http: HttpClient ) {
		this.URL = environment.apiURL;
	}
	getCaisses():Observable<any> {
		return this.http.get(this.URL + 'caisse/getCaisses')
	}
	getCaisse(id:Number): Observable<any>{
		return this.http.get(this.URL + 'caisse/' + id);
	}
	addCaisse(form: any): Observable<any>{
		return this.http.post(this.URL + 'caisse/save', form);
	}
}