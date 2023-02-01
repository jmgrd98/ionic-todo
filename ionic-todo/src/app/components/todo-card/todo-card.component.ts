import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {

  @Input() todoName: string = ''
  @Input() isCompleted: boolean = false

}
