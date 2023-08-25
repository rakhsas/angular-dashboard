import { Component} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { departement } from 'app/models/departement';
import { profile } from 'app/models/profile';
import { workflow } from 'app/models/workflow';
import { WorkflowService } from 'app/services/workflow.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent {
  Workflows: workflow[];
	Workflow: workflow;
	id: Number;
	workflowForm: FormGroup;
  	constructor(
		private workflowService: WorkflowService,
		private formBuilder: FormBuilder,
		public _snackBar: MatSnackBar,
		) {
		this.workflowForm = this.formBuilder.group({
			nom: '',
			workflow: [],
		  });
	}

  ngOnInit() {
	this.workflowService.getWorkflows().subscribe(
		data => {
			this.Workflows = data;
			console.log(data)
		}
	)
  }
  onSubmit()
	{
		this.workflowService.getWorkflow(this.id).subscribe(
			data => {
				this.Workflow = data;
			},
			error => {
				this.Workflow = null;
			}
		)

	}
	onAdd(formValue: any) {
		// console.log(formValue)
		let newData = this.transformFormData(formValue);
		// newData.parent = null;
		// console.log(newData);
		this.workflowService.addWorkflow(newData).subscribe(
			data => {
				this.openSnackBar("Created Successfully", "cancel")
			},
			error => {
				this.openSnackBar("Something Went Wrong!!", "cancel")
			}
		) // Log the form values when the form is submitted
	}
	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action);
	}
	transformFormData(formData: any): any {
		return {
		  nom: formData.nom,
		//   parent: { workFlowId: [formData.workflow].map((workFlowId: number) => (workFlowId ))[0] },
		  parent: formData.workflow.map((workFlowId: number) => ({ workFlowId }))
		};
	}
}
