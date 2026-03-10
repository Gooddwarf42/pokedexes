import { Component, input } from '@angular/core';
import { MockData } from '../../Types/mockData';
import { DataService } from '../../Services/dataService';
import { ListItem } from './list-item/list-item';

@Component({
  selector: 'app-list',
  imports: [ListItem],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  // Since we get here directly from the root of the app
  // (through a routerOutlet), we just hardcode the data
  public data: MockData[] = DataService.data;
  public originalData = [...this.data];

  protected sortByAddress() {
    // ooh very brutto, mutates in place?
    this.data.sort((a, b) => a.address.toString().localeCompare(b.address.toString()));
  }
  protected sortByName() {
    this.data.sort((a, b) => a.name.localeCompare(b.name));
  }
  protected sortByNumber() {
    this.data.sort((a, b) => a.number - b.number);
  }

}
