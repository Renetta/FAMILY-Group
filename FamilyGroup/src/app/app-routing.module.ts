import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { FghomeComponent } from './fghome/fghome.component';
import { FgmembersComponent } from './fgmembers/fgmembers.component';
import { CreateMemberModalComponent } from './create-member-modal/create-member-modal.component';


const routes: Routes = [
	{path: '', redirectTo: "FamilyLogin", pathMatch: 'full'},
	{path: 'FamilyLogin', component: LoginFormComponent},
	{
		path: 'Family-Group', 
		component: HomeComponent,

		children: [
		{path: '', redirectTo: "Family-Group-Home", pathMatch: 'full'},
		{
			path: 'Family-Group-Home',
			component: FghomeComponent,
		}, {
			path: 'Family-Group-Members',
			component: FgmembersComponent,
		}, {
			path: 'Family-Group-Add-Members',
			component: CreateMemberModalComponent,
		}
		]
		
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [LoginFormComponent, HomeComponent, FghomeComponent, FgmembersComponent];
	