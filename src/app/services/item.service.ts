import { Injectable } from '@angular/core';
//firebase
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

//item interface
import { Item } from '../modals/item'

//Obersavles
// import { Observable } from 'rxjs/Observable'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollections: AngularFirestoreCollection<Item>
  items: Observable<Item[]>

  constructor( public afs: AngularFirestore ) { 
    this.items = this.afs.collection('items').valueChanges();  // getting the items collections of firebase
  }

  getItems(){
    return this.items;
  }

}

