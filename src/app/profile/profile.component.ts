import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { profile } from 'app/models/profile';
import { workflow } from 'app/models/workflow';
import { profileService } from 'app/services/profile.service';
import { WorkflowService } from 'app/services/workflow.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class profileComponent implements OnInit {
	Profiles: profile[];
	Profile: profile;
	Workflows: workflow;
	id: Number;
	ProfileForm: FormGroup;
  	constructor(
		private profileService: profileService,
		private workflowService: WorkflowService,
		private formBuilder: FormBuilder,
		public _snackBar: MatSnackBar,
		) {
		this.ProfileForm = this.formBuilder.group({
			nomProfil: '',
			description: '',
			workflow: []
		  });
	}

  ngOnInit() {
	this.profileService.getProfiles().subscribe(
		data => {
			this.Profiles = data;
			console.log(this.Profiles)
		}
	)
	this.workflowService.getWorkflows().subscribe(
		data => {
			this.Workflows = data;
			console.log(data)
		}
	)
  }
  onSubmit()
	{
		this.profileService.getProfile(this.id).subscribe(
			data => {
				this.Profile = data;
			},
			err => {
				this.Profile = null;
			}
		)

	}
	onAdd(formValue: any) {
		var newData = this.transformFormData(formValue);
		this.profileService.addProfile(newData).subscribe(
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
			nomProfil: formData.nomProfil,
		  description: formData.description,
		  assignedWorkflows: formData.workflow.map((workFlowId: number) => ({ workFlowId })),
		};
	}
}

// {
//     "profilId": 12,
//     "nomProfil": "odaoudi",
//     "description": "odaoudi",
//     "assignedWorkflows": [
//         {
//             "workFlowId": 1
//         },
//         {
//             "workFlowId": 3
//         }
//     ]
// },