import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { departement } from 'app/models/departement';
import { departementService } from 'app/services/departement.service';

@Component({
  selector: 'user-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class departementComponent implements OnInit {
	Departements: departement[];
	Departement: departement;
	id: Number;
	departementForm: FormGroup;
  	constructor(
		private departementService: departementService,
		private formBuilder: FormBuilder,
		public _snackBar: MatSnackBar,
		) {
		this.departementForm = this.formBuilder.group({
			nom: '',
			type: '',
			dep: '',
		  });
	}

  ngOnInit() {
	this.departementService.getDepartements().subscribe(
		data => {
			this.Departements = data;
			console.log(data)
		}
	)
  }
  onSubmit()
	{
		this.departementService.getDepartement(this.id).subscribe(
			data => {
				this.Departement = data;
			}
		)

	}
	onAdd(formValue: any) {
		const newData = this.transformFormData(formValue);
		// newData.parent = null;
		console.log(newData);
		this.departementService.addDepartement(newData).subscribe(
			data => {
				this.openSnackBar("Created Successfully", "cancel")
			}
		) // Log the form values when the form is submitted
	}
	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action);
	}
	transformFormData(formData: any): any {
		return {
		  nom: formData.nom,
		  type: formData.type,
		  parent: { departementId: [formData.dep].map((departementId: number) => (departementId ))[0] }
		};
	}
}
