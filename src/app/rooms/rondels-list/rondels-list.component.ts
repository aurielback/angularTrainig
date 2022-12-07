import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RondelList, RoomList } from '../room';

@Component({
  selector: 'rnd-rondels-list',
  templateUrl: './rondels-list.component.html',
  styleUrls: ['./rondels-list.component.sass']
})
export class RondelsListComponent implements OnInit{

  @Input() rondels : RondelList[] = [];
  @Output() selectedRondel = new EventEmitter<RondelList>();

  constructor(){

  }

  ngOnInit(): void {
    
  }

  selectRondel(rondel: RondelList){
    this.selectedRondel.emit(rondel);
  }
  
  

}
