import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';  
import { HttpModule } from '@angular/http';  
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FghomeComponent } from './fghome/fghome.component';
// import { LoginFormComponent } from './login-form/login-form.component';
// import { HomeComponent } from './home/home.component';
//import { FgmembersComponent } from './fgmembers/fgmembers.component';

import { CommonService } from './common.service';
import { CreateMemberModalComponent } from './create-member-modal/create-member-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    CreateMemberModalComponent,
    //FgmembersComponent,
    // FghomeComponent
    // LoginFormComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CreateMemberModalComponent
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
