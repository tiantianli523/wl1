import { Component, OnInit,ViewChild } from '@angular/core';
import {MessageListComponent} from "./message-list/message-list.component";


@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {

  @ViewChild(MessageListComponent)
  child:MessageListComponent
  constructor() { }

  ngOnInit() {
  }
  toSend(item){
    this.child.mes=item;
}

}
