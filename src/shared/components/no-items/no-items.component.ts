import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-no-items',
  templateUrl: './no-items.component.html',
  styleUrls: ['./no-items.component.css']
})
export class NoItemsComponent {
  @Output() onAddNewItem : EventEmitter<boolean> = new EventEmitter();

  addNewItem() {
    this.onAddNewItem.emit(true);
  }

}
