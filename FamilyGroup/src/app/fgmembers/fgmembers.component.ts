import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from'../common.service';
import { NgbModal, NgbModalOptions, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Member } from './member';

@Component({
  selector: 'app-fgmembers',
  templateUrl: './fgmembers.component.html',
  styleUrls: ['./fgmembers.component.css']
})
export class FgmembersComponent implements OnInit {

  	modalOptions:NgbModalOptions;
  	modalRef: NgbModalRef;
  	showCreateMemberPanel = false;

  	members;
  	constructor(private newService: CommonService, 
			private modalService: NgbModal, private router: Router) { 
			console.log("fgmembers component");
			this.modalOptions = {
			    backdrop:'static',
			    backdropClass:'customBackdrop',
			    ariaLabelledBy: 'modal-basic-title', 
			    size: 'lg',
			    //windowClass: 'custom-class'
			    centered: true,
		    }

	  }
  
  
	  ngOnInit(): void {
	  	this.newService.getMembers().subscribe(data => {
	  		console.log(data);
	  		this.members = data.response;
	  	});
	  }

	  addMemberModal(modal) {
	  	console.log(modal);	
	  	this.showCreateMemberPanel = true;
	  	this.router.navigate(['/Family-Group/Family-Group-Add-Members',{ relativeTo: '/new-member'}]);
	  	//this.modalRef = this.modalService.open(MemberUpdateModal, this.modalOptions);
	    // this.modalRef.componentInstance.name = 'I your title';
	  }

	  destroyMember(person) {
	  	console.log(person);
	  	this.newService.deleteMember(person.id).subscribe(data => {
	  		alert(person.fname + ' ' + person.lname + " is removed from the family Group ");
	  		this.ngOnInit();
	  	});
	  }
}
