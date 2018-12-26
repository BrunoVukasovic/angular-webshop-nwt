import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/app/models/item.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent implements OnInit {
  @Input() item: IItem; // prima od item-list komponente
  favouriteItems: IItem[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  AddToFavourites() {
    this.item.favourite = true;
    // this.httpClient.put('/assets/items.json', JSON.stringify(this.item));
    this.httpClient.patch('/assets/items.json', JSON.stringify( {favourite: true} ));
    console.log(JSON.stringify(this.item));

  }


}