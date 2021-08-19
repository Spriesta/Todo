import { Component } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  itemList:Todo[] = [];
  item: Todo ={itemName:"",completed:false};

  AddItem(){
    if (this.item.itemName =="") {
      alert("!!!Fill on field!!!");
    }
    else {
      this.itemList.push({"completed":this.item.completed,"itemName":this.item.itemName});
    //console.log(this.itemList);
    this.item.itemName = ""; //doldurulan ilgili textbox'ı temizliyor
    }


  }

  todoComplete(todo: Todo){
      this.itemList.find(x=> x.itemName ==todo.itemName).completed=true;

  }


  delete(todo:Todo){
      let index = this.itemList.indexOf(todo);
      this.itemList.splice(index,1);
  }
}
