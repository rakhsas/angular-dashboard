import { Component, Inject } from '@angular/core';
import { Form } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'app/models/user';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
	constructor(public dialogRef: MatDialogRef<ModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: User){}
	ngOnInit(){
		console.log(this.data)
	}
	onCloseClick(Form: Form): void {
		this.dialogRef.close();
	}
	onSubmit(form : any){
		console.log(form.form.value)
	}
}
