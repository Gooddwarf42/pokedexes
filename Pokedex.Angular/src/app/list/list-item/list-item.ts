import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  imports: [JsonPipe],
  templateUrl: './list-item.html',
  styleUrl: './list-item.css',
})
export class ListItem<T> {
  public data = input.required<T>();
}
