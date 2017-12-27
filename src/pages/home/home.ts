import { Component } from '@angular/core';
import { NgDataGridModel } from 'angular2-datagrid';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data : [object];
  constructor() {
    
      this.data = [{
        Tower : "A",
        Flat  : "101",
        Month : "November",
        Year  : "2017"
      }, {
        Tower : "A",
        Flat  : "201",
        Month : "November",
        Year  : "2017"
      }, {
        Tower : "B",
        Flat  : "301",
        Month : "November",
        Year  : "2017"
      }, {
        Tower : "C",
        Flat  : "101",
        Month : "November",
        Year  : "2017"
      }, {
        Tower : "D",
        Flat  : "401",
        Month : "November",
        Year  : "2017"
      }]
  }
}
