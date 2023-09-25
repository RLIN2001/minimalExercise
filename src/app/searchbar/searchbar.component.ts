import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Output() searchEvent = new EventEmitter<string>();

  searchTerm: string = '';

  search(event:Event){
    this.searchEvent.emit((<HTMLInputElement>event.target).value);
  }

}
