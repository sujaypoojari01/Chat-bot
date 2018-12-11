import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  @Input() chatData;
  chats: any = [{ id: true, msg: 'Hey' }, { id: false, msg: 'hey' }];

  constructor() {
    console.log('In Chat Box cons');
    console.log(this.chatData);
  }

  ngOnChanges(change: SimpleChanges) {
    // only run when property "data" changed
    if (change['chatData']) {
      console.log('onChange');
      console.log(this.chatData);
      let data = {
        id: true,
        msg: this.chatData
      };
      this.chats.push(data);

      if (this.chatData == 'Hello') {
        let data1 = {
          id: false,
          msg: 'Hello'
        };
        this.chats.push(data1);
      }
      if (this.chatData == 'Hey') {
        let data1 = {
          id: false,
          msg: 'hey'
        };
        this.chats.push(data1);
      }
    }
  }
  ngOnInit() {
    console.log('In Chat Box');
    console.log(this.chatData);
  }
}
