import { Component } from '@angular/core';
import { Form } from 'src/app/model/form';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  editId: number = 0;
  btnName:string="Add";

  list: Form[] = [
    {
      id: 1,
      name: 'Roobinee',
      email: 'roobineer.2002@gmail.com',
      phoneNumber: 6380749031,
    },
    {
      id: 2,
      name: 'Dharun',
      email: 'dharun@gmail.com',
      phoneNumber: 9877749031,
    },
    {
      id: 3,
      name: 'Barath',
      email: 'barath@gmail.com',
      phoneNumber: 86562749031,
    }
  ];
  error:string="";
constructor(){}
  onSubmit(loginForm:NgForm):void{
    if(loginForm.value){
      // console.log("in");
     this.addList(loginForm);
     }
     else{
      this.error="Invalid Credentials";
     }
  }
  

  getRandomNumber = (max = 1000): number => {
    return Math.floor(Math.random() * max);
  };

  addList = (Form:NgForm): void => {
    // console.log("in");
    if (this.editId === 0) {
      // console.log("in");
      if (this.name !== '' && this.email !== '' && this.phoneNumber !== '') {
        console.log("in");
        this.list.push({
          id: this.getRandomNumber(),
          name: this.name,
          email: this.email,
          phoneNumber: parseInt(this.phoneNumber),
        });
      }
    } else {
      let index: number = this.list.findIndex((c) => c.id === this.editId);
      let item: Form = this.list.find((item) => item.id === this.editId)!;
      this.list[index] = {
        id: this.editId,
        name: this.name,
        email: this.email,
        phoneNumber: parseInt(this.phoneNumber),
      };
    }
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.btnName="Add";
    this.editId = 0;
    Form.resetForm();
  };

  deleteList = (id: number) => {
    this.list = this.list.filter((item) => item.id !== id);
    return this.list;
  };

  editList = (id: number, name: string, email: string, phoneNumber: number) => {
    this.editId = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber.toString();
    this.btnName="Edit";
  };
}
