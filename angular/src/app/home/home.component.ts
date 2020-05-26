import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppService]
})
export class HomeComponent implements OnInit {
  title = 'Welcome to Base2 Angular';
  displayPage= 'home';
  arr = [];
  count = 1;
  constructor(private _service: AppService) {
    console.log("welcome constructor");
  }
  ngOnInit() {
    this._service.getMethod().subscribe(result => {
      console.log("response",result);
    })
    for(let i=0;i<10;i++) {
      this.arr.push(i)
    }
    console.log(this.arr);
    this.getData();
    this.count = (this.arrResource != null && this.arrResource.length > 0) ? this.arrResource.length+1 : 1; 
  }
  arrResource = [];
  resource = {
    id: 0,
    name: '',
    email: '',
    date: '',
    mobile: '',
    courseType: ''
  }

  getValue() {
    if(this.resource.id == 0) {
      this.resource.id = this.count;
    this.count++;
    this.arrResource.push(this.resource);
    localStorage.setItem('resourceInfo',JSON.stringify(this.arrResource));
    sessionStorage.setItem('resourceInfo',JSON.stringify(this.arrResource));
    alert("successfully Stored");
    this.resetFormValue();
    this.getData();
    } else {
      this.sendData(this.resource);
    }
  }

  getData() {
    let data = JSON.parse(localStorage.getItem('resourceInfo'));
    this.arrResource = (data == null) ? [] : data; 
    
  }

  resetFormValue() {
    this.resource = {
      id:null,
      name: '',
      email: '',
      date: '',
      mobile: '',
      courseType: ''
    }
  }

  sendData(data) {
    console.log("edit",data);
    this.resource = JSON.parse(JSON.stringify(data));
    let clone = JSON.parse(JSON.stringify(this.arrResource));
    clone.forEach((a,i) => {
      if(this.resource.id == a.id) {
        clone[i] = this.resource
      }
    })  
    this.arrResource = JSON.parse(JSON.stringify(clone));
    localStorage.setItem('resourceInfo',JSON.stringify(this.arrResource));
  }

  deleteItem(data) {
    console.log('deleteItem',data);
    let clone = JSON.parse(JSON.stringify(this.arrResource));
    clone.forEach((a,i) => {
      console.log('actual',a);
      if(data.id == a.id) {
        clone.splice(i,1);
      }
    })
    this.arrResource = clone;
    localStorage.setItem('resourceInfo',JSON.stringify(this.arrResource));
  }


}
