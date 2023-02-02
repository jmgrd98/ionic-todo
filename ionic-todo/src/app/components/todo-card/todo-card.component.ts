import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/types/Todo';
@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {

  @Input() todoName: string = ''
  @Input() isCompleted: boolean = false

  todosArray: any = localStorage.getItem('todos')

  check(){
    this.isCompleted = true
    console.log(this.isCompleted)
  }
  
  deleteTodo(): void {
    
  }

    editTodo():void{

    }

}
