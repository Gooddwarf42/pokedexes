
import { Component, input } from '@angular/core';
import { MockData } from '../../../Types/mockData';
import { DataService } from '../../../Services/dataService';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './list-item.html',
  styleUrl: './list-item.css',
})
export class ListItem {
  public data = input.required<MockData>();
}
