import { Component, computed, input, signal, Signal, WritableSignal } from '@angular/core';
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
  public data: Signal<MockData[]> = signal(DataService.data);

  public sortInfo: WritableSignal<SortInfo> = signal({
    columnName: null,
    sortedDesc: false,
  });

  public dataToShow: Signal<MockData[]> = computed(() =>
    this.sortData([...this.data()], this.sortInfo()),
  );

  protected updateColumnSort(columnName: ColumnName) {
    this.sortInfo.update((value) => this.updateSortInfo(value, columnName));
  }

  // oooh qui sarebbe bellissimo se si potesse curryficare, così passando solo il columnName 
  // ho effettivamente una function SortInfo -> SortInfo da passare all'Update per il signal!
  private updateSortInfo(value: SortInfo, columnName: ColumnName): SortInfo {
    if (value.columnName !== columnName) {
      return { columnName: columnName, sortedDesc: false };
    }
    if (value.sortedDesc === true) {
      return { columnName: null, sortedDesc: false };
    }
    return { columnName: columnName, sortedDesc: true };
  }

  private sortData(data: MockData[], sortInfo: SortInfo): MockData[] {
    if(sortInfo.columnName === null){
      return data;
    }

    switch(sortInfo.columnName){
      case 'Address':
        this.sortByAddress(data, sortInfo.sortedDesc);
        return data;

      case 'Name':
        this.sortByName(data, sortInfo.sortedDesc);
        return data;

      case 'Number':
        this.sortByNumber(data, sortInfo.sortedDesc);
        return data;
    }
  }

  // Anche qui ci sarà una maniera più typeScriptosa di farlo, dai
  private sortByAddress(data: MockData[], descending : boolean) {
    const descendingFactor = descending ? -1 : 1;
    data.sort((a, b) => descendingFactor * a.address.toString().localeCompare(b.address.toString()));
  }

  private sortByName(data: MockData[], descending : boolean) {
    const descendingFactor = descending ? -1 : 1;
    data.sort((a, b) => descendingFactor *  a.name.localeCompare(b.name));
  }
  private sortByNumber(data: MockData[], descending : boolean) {
    const descendingFactor = descending ? -1 : 1;
    data.sort((a, b) => descendingFactor *  a.number - b.number);
  }
}

type ColumnName = 'Address' | 'Name' | 'Number'; // Surely bettere typescriptable

type SortInfo = {
  columnName: ColumnName | null;
  sortedDesc: boolean;
};
