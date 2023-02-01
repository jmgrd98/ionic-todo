import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Todo } from './types/Todo';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  todos: Todo[] = []
  newTodo: string = ''

  addTodo():void{
    if(this.newTodo){
      let todo = new Todo()
      todo.name = this.newTodo
      todo.isCompleted = true
      this.todos.push(todo)
      this.newTodo = ''
  }
}}
