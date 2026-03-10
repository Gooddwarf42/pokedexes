import { Component, input } from '@angular/core';
import { MockData } from '../../Types/mockData';
import { DataService } from '../../Services/dataService';
import { ListItem } from "./list-item/list-item";

@Component({
  selector: 'app-list',
  imports: [ListItem],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  // Since we get here directly from the root of the app
  // (through a routerOutlet), we just hardcode the data
  public data : MockData[] = DataService.data;

}
