import { Component, OnInit } from '@angular/core';
import { AddressBook } from "../../entities/address-book";
import { AddressBookService } from "../../service/address-book.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  addressBookArray: AddressBook[] = [];

  constructor(private addressBookService: AddressBookService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.addressBookService.getAllAddressBookData().subscribe(data => {
      this.addressBookArray = data["obj"];
      console.log(this.addressBookArray)
    });

  }

  deleteAddressBookData(id: any) {
    console.log("id from home component" + id)
    this.addressBookService.deleteAddressBookData(id).subscribe(data => { });
    setTimeout(() => {
      this.loadData()
    }, 500);

  }


  goToAddData() {
    this.router.navigate(["add"])
  }

  sortByName() {
    this.addressBookService.sortPerson("name").subscribe(data => { this.addressBookArray = data["data"] })
  }
}
