import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as $ from 'jquery';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user.service';
import { Observable, async } from 'rxjs';
import { ModalComponent } from 'app/components/modal/modal.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Caisse } from 'app/models/caisse';
import { caisseService } from 'app/services/caisse.service';
import { profile } from 'app/models/profile';
import { profileService } from 'app/services/profile.service';
import { departement } from 'app/models/departement';
import { departementService } from 'app/services/departement.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
	selector: 'user-app',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css'],
})

export class userComponent {
	id: Number;
	users: User[] = [];
	user: User;
	profiles: profile[];
	departements: departement[];
	Caisses: Caisse[];
	userForm: FormGroup;

	constructor(private userService: UserService,
		private caisseService: caisseService,
		private profileService: profileService,
		private departementService: departementService,
		public dialog: MatDialog,
		public _snackBar: MatSnackBar,
		private formBuilder: FormBuilder,
	) {
		this.userForm = this.formBuilder.group({
			prenom: '',
			nom: '',
			login: '',
			password: '',
			Co_NO: '',
			DocPermissions: '',
			editPass: '',
			actif: '',
			prls: '',
			dprts: '',
			cai: [],
		  });
	}
	ngOnInit(){
		this.userService.getUsers().subscribe(
			data => {
				this.users = data;
			}
		);
		this.caisseService.getCaisses().subscribe(
			data => {
				this.Caisses = data;
			}
		)
		this.profileService.getProfiles().subscribe(
			data => {
				this.profiles = data;
			}
		)
		this.departementService.getDepartements().subscribe(
			data => {
				this.departements = data;
			}
		)
	}
	onSubmit()
	{
		this.userService.getUser(this.id).subscribe(
			data => {
				this.user = data;
			}
		)
	}
	onAdd(formValue: any) {
		const transformedData = this.transformFormData(formValue);
		console.log(transformedData)
		this.userService.addUser(transformedData).subscribe(
			data => {
				this.openSnackBar("Created Successfully", "cancel")
			}
		)
	}
	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action);
	  }
	transformFormData(formData: any): any {
		return {
		  prenomUser: formData.prenom,
		  nomUser: formData.nom,
		  login: formData.login,
		  motPasse: formData.password,
		  co_NO: formData.Co_NO,
		  toutDocument: formData.DocPermissions === 'oui' ? false : true,
		  updatePassword: formData.editPass === 'oui' ? true : false,
		  profil: { profilId: formData.prls },
		  departement: { departementId: formData.dprts },
		  assignedCaisses: formData.cai.map((caisseId: number) => ({ caisseId })),
		  actif: formData.actif === 'oui' ? true : false // Transform actif
		};
	}

	openDialog(user:User): void {
		let dialogRef = this.dialog.open(ModalComponent, {
			data: user,
			width: '80%',
			height: '80%',
			autoFocus: false
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('Dialog closed:', result);
		});
	}
}

