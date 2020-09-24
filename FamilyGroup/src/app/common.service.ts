import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }

  getMembers() {
  	return this.http.get('http://localhost:8080/api/member/')
  	.pipe(map((response: Response) => response.json()));
  	// return this.http.get('http://localhost:8080/api/getMembers/')
  	// .pipe(map(response:Response) => response.json());
  }

  saveMembers(mem) {
  	var data = {
  		fname: mem.firstName,
  		lname: mem.lastName,
  		phone: mem.phone,
  		email: mem.email,
  		avatar: mem.avatar,
  	};


  	return this.http.post('http://localhost:8080/api/member/store', data)
  	.pipe(map((response: Response) => response.json()));
  }

  deleteMember(id) {
  	var data = {
  		memberID: id
  	};

  	return this.http.post('http://localhost:8080/api/member/delete', data)
  	.pipe(map((response: Response) => response.json()));
  }
}

// this.http.get('https://example.com/api/items').pipe(map(data => {})).subscribe(result => {
//       console.log(result);
//     });
