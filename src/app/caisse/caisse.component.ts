import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Caisse } from 'app/models/caisse';
import { departement } from 'app/models/departement';
import { caisseService } from 'app/services/caisse.service';
import { departementService } from 'app/services/departement.service';

@Component({
  selector: 'user-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.css']
})
export class caisseComponent implements OnInit {
	Caisses: Caisse[];
	Caisse: Caisse;
	id: Number;
	CaisseForm: FormGroup;
  	constructor(
		private caisseService: caisseService,
		private formBuilder: FormBuilder,
		public _snackBar: MatSnackBar,
		) {
		this.CaisseForm = this.formBuilder.group({
			nomCaisse: '',
			descriptionCaisse: '',
		  });
	}

  ngOnInit() {
	this.caisseService.getCaisses().subscribe(
		data => {
			this.Caisses = data;
		}
	)
  }
  onSubmit()
	{
		this.caisseService.getCaisse(this.id).subscribe(
			data => {
				this.Caisse = data;
			}
		)

	}
	onAdd(formValue: any) {
		console.log(formValue)
		this.caisseService.addCaisse(formValue).subscribe(
			data => {
				this.openSnackBar("Created Successfully", "cancel")
			}
		) // Log the form values when the form is submitted
	}
	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action);
	}
}
