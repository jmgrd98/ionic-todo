import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  constructor(private navCntrl: NavController) { }

  ngOnInit() {
  }

  navigation(){
    this.navCntrl.navigateForward('/')
  }



}
