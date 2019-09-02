import { Component, OnInit } from '@angular/core';


//import services
import { ItemService } from '../../services/item.service';

import { Item } from '../../modals/item'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor( private itemService: ItemService ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
    })
  }

}
