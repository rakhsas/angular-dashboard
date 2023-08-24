import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { profile } from 'app/models/profile';
import { profileService } from 'app/services/profile.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class profileComponent implements OnInit {
	Profiles: profile[];
	Profile: profile;
	id: Number;
	ProfileForm: FormGroup;
  	constructor(
		private profileService: profileService,
		private formBuilder: FormBuilder,
		public _snackBar: MatSnackBar,
		) {
		this.ProfileForm = this.formBuilder.group({
			nomProfil: '',
			description: '',
		  });
	}

  ngOnInit() {
	this.profileService.getProfiles().subscribe(
		data => {
			this.Profiles = data;
		}
	)
  }
  onSubmit()
	{
		this.profileService.getProfile(this.id).subscribe(
			data => {
				this.Profile = data;
			}
		)

	}
	onAdd(formValue: any) {
		console.log(formValue)
		this.profileService.addProfile(formValue).subscribe(
			data => {
				this.openSnackBar("Created Successfully", "cancel")
			}
		) // Log the form values when the form is submitted
	}
	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action);
	}
}
