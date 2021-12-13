
import { Component, EventEmitter, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-messase-show',
  templateUrl: './messase-show.component.html',
  styleUrls: ['./messase-show.component.css']
})
export class MessaseShowComponent implements OnInit {

  @Output() fecharMensagem = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    this.fecharMensagem.emit(false);
  }

}
