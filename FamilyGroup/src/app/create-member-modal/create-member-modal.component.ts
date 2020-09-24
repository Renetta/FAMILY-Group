import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from'../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-member',
  templateUrl: './create-member-modal.component.html',
  styleUrls: ['./create-member-modal.component.css']
})
export class CreateMemberModalComponent implements OnInit {

	constructor(public fb: FormBuilder, private newService: CommonService,
		private router: Router) { 
		console.log("create member modal");
	}

    MemberForm = this.fb.group({
		firstName: ['ASHI', Validators.required],
		lastName: ['JEJO', Validators.required],
		phone: [''],
		email: [''],
		avatar: [''],
	});

	url = "//placehold.it/100";

	ngOnInit(): void {

	}

	saveMember() {
		console.log("saveMember");
		console.log(this.MemberForm.value);
		console.log(this.MemberForm.controls['firstName']);
		this.newService.saveMembers(this.MemberForm.value).subscribe(data => {
			console.log('saved:', this.MemberForm.value);
			//alert("New Member " + this.MemberForm.firstName + " " + this.MemberForm.lastName + " is added successfully");
			this.backToMem();
		});
	  	//this.newService.getMembers().subscribe(data => console.log('getdata',data));

	}

	backToMem() {
	  	this.router.navigate(['/Family-Group/Family-Group-Members',{ fragment: 'family-group-home'}]);
	}

	onSelectFile(event) {
		if (event.target.files) {
			var reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.onload = (e:any) => {
				this.url = e.target.result;
				console.log(e.target);
				console.log(this.MemberForm.value);
				// this.form.controls['dept'].setValue(selected.id);
				this.MemberForm.controls['avatar'].setValue(event.target.files[0]);
			}
		}

	}
}
