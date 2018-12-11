import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
/* import { ChildBoxComponent } from '../chat-box/chat-box.component'; */

@Component({
  selector: 'app-msg-window',
  templateUrl: './msg-window.component.html',
  styleUrls: ['./msg-window.component.css']
})
export class MsgWindowComponent implements OnInit {
  constructor() {}
  message = 'yooo';

  /* @ViewChild(ChildBoxComponent) child; */

  formGroup = new FormGroup({
    text_message: new FormControl('')
  });
  ngOnInit() {}

  onKey(event: any) {
    console.log(event.target.value);
    this.message = event.target.value;
    this.formGroup.get('text_message').setValue('');
    /* this.child.emit() */
    console.log('Message', this.message);
  }
  onGifClick() {}
}
