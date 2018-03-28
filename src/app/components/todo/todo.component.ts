import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoListArray: any[]

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList().snapshotChanges()
      .subscribe( item => {
        this.todoListArray = []
        item.forEach( elemen => {
          let x = elemen.payload.toJSON()
          x['$key'] = elemen.key
          this.todoListArray.push(x)
        })
        this.todoListArray.sort((a, b) => {
          return a.isChecked - b.isChecked
        })
      })
  }

  addTodo(itemTitle){
    this.todoService.addTodo(itemTitle.value)
    itemTitle = null
  }

  updateTodo($key: string, isChecked: boolean){
    this.todoService.updateTodo($key, !isChecked)
  }

  deleteTodo($key: string){
    if(confirm('Estás seguro de eliminar la tarea?')){
      this.todoService.removeTodo($key)
    }
  }

}
