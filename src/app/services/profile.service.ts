import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
  })
export class profileService{
	URL: string;
	constructor( private http: HttpClient ) {
		this.URL = environment.apiURL;
	}
	getProfiles():Observable<any> {
		return this.http.get(this.URL + 'profil/getProfils')
	}
	getProfile(id: Number): Observable<any> {
		return this.http.get(this.URL + 'profil/' + id);
	}
	addProfile(form: any): Observable<any> {
		return this.http.post(this.URL + 'profil/save', form);
	}
}