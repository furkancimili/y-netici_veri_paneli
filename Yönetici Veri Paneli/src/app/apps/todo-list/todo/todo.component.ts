import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  form;
  todoArray = [
    { task : '30 Aralık 2020 Tarihinde  Yeni Yıl İçin Site Bakıma Alınacak' , completed : true },
    { task : 'Yeni Yıl İçin Makale Yazılacak' , completed : true },
    { task : 'Yapay Zeka İle İlgili Makale Girilecek' , completed : false },
    { task : 'Yeni Yıl İçin Çekiliş Yapılacak' , completed : true },
    { task : 'Donanım İle İlgili Makale Yazılacak' , completed : false }
  ];

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      todoitem : ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  addTodo() {
    let newTodoList = { task: '' , completed: false };
    newTodoList.task= this.form.value.todoitem;
    this.todoArray.push(newTodoList);
    this.form.reset();
  }
  removeTodoItem(item) {
   for(let i=0; i<=this.todoArray.length; i++) {
     if(item === this.todoArray[i]) {
       this.todoArray.splice(i, 1);
     }
   } 
  }
  changeTodoStatus(event,index) {
    if(event.target.checked) {
    this.todoArray[index]['completed'] = true; 
    } else {
      this.todoArray[index]['completed'] = false;
    }
  }

}