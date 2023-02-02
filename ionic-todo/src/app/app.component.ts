import { Component } from '@angular/core';
import { Todo } from './types/Todo';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  todos: Todo[] = [];
  newTodo: string = '';
  teste: string = ''

  addTodo():void{
    console.log(this.teste)

    if(this.newTodo){
      let todo = new Todo()
      todo.name = this.newTodo
      this.todos.push(todo)
      this.newTodo = ''
      localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}

}
