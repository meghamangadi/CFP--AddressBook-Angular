import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddressBook} from "../entities/address-book";

@Injectable({
  providedIn: 'root'
})


export class AddressBookService {

  private mainUrl  = "http://localhost:8080/addressbook"

  constructor( private  httpClient : HttpClient) { }

  /**
   * Method to get all addressBook Data
   */
  public getAllAddressBookData() : Observable<any>{
    return this.httpClient.get(`${this.mainUrl}/getAllContacts`)
  }

  /**
   *Method to get all data sorted by name of addressBook
   */
  sortPerson(name: String): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/address/book/sort/${name}`);
  }

  /**
   * Method to get data by id of AddressBook
   * @param id
   */
  public getAddressBookDataById(id : any) : Observable<any> {
    return this.httpClient.get(`${this.mainUrl}/get/${id}`);
  }

  /**
   * Method to add addressBookData
   * @param addressBookData
   */

  public addAddressBookData(addressBookData : AddressBook) : Observable<any>{
    return this.httpClient.post(`${this.mainUrl}/savecontacts`, addressBookData)
  }

  /**
   * Method to delete addressBook data
   * @param id
   */
  public deleteAddressBookData(id : any) : Observable<any> {
    console.log("id from service " + id)
    return this.httpClient.delete(`${this.mainUrl}/deleteContactId/${id}`)
  }

  /**
   * Method to edit addressBook Data
   * @param id
   * @param addressBookData
   */
  public editAddressBookData(id : any , addressBookData : AddressBook) : Observable<any>{
    return this.httpClient.put(`${this.mainUrl}/put/${id}`, addressBookData)
  }

  states() {
    return [
      {id: 1, name: "Andhra Pradesh"},
      {id: 2, name: "Arunachal Pradesh"},
      {id: 3, name: "Assam"},
      {id: 4, name: "Bihar"},
      {id: 5, name: "Chhattisgarh"},
      {id: 6, name: "Goa"},
      {id: 7, name: "Gujrat"},
      {id: 8, name: "Haryana"},
      {id: 9, name: "Himachal Pradesh"},
      {id: 10, name: "Jharkhand"},
      {id: 11, name: "Karnataka"},
      {id: 12, name: "Kerala"},
      {id: 13, name: "Madhya Pradesh"},
      {id: 14, name: "Maharashtra"},
      {id: 15, name: "Manipur"},
      {id: 16, name: "Meghalaya"},
      {id: 17, name: "Mizoram"},
      {id: 18, name: "Nagaland"},
      {id: 19, name: "Odisha"},
      {id: 20, name: "Punjab"},
      {id: 21, name: "Rajasthan"},
      {id: 22, name: "Sikkim"},
      {id: 23, name: "Tamil Nadu"},
      {id: 24, name: "Telangana"},
      {id: 25, name: "Tripura"},
      {id: 26, name: "Uttar Pradesh"},
      {id: 27, name: "West Bengal"},
    ]
  }


  cities() {
    return [
      {id: 1, name: "Aurangabad"},
      {id: 2, name: "Mumbai"},
      {id: 3, name: "Kolkata"},
      {id: 4, name: "Bengaluru"},
      {id: 5, name: "Chennai"},
      {id: 6, name: "Hyderabad"},
      {id: 7, name: "Ahmedabad"},
      {id: 8, name: "Pune"},
      {id: 9, name: "Surat"},
      {id: 10, name: "Jaipur"},
      {id: 11, name: "Lucknow"},
      {id: 12, name: "Bhopal"},
      {id: 13, name: "Kanpur"},
      {id: 14, name: "Patna"},
      {id: 15, name: "Indore"},
      {id: 16, name: "Kochi"},
      {id: 17, name: "Nagpur"},
      {id: 18, name: "Chandigarh"},
      {id: 19, name: "Ghaziabad"},
      {id: 20, name: "Thane"},
      {id: 21, name: "Visakhapatnam"},
      {id: 22, name: "Agra"},
      {id: 23, name: "Thiruvananthapuram"},
      {id: 24, name: "Guwahati"},
      {id: 25, name: "Vadodara"},
      {id: 26, name: "Bhubaneswar"},
      {id: 27, name: "Meerut"},
      {id: 28, name: "Nashik"},
      {id: 29, name: "Varanasi"},
      {id: 30, name: "Raipur"},
      {id: 31, name: "Allahabad"},
      {id: 32, name: "Pimpri-Chinchwad"},
      {id: 33, name: "Ludhiana"},
      {id: 34, name: "Gurgaon"},
      {id: 35, name: "Amritsar"},
      {id: 36, name: "Ranchi"},
      {id: 37, name: "Faridabad"},
      {id: 38, name: "Noida"},
      {id: 39, name: "Jabalpur"},
      {id: 40, name: "Bareilly"},
      {id: 41, name: "Kalyan"},
      {id: 42, name: "Vasai-Virar"},
      {id: 43, name: "Coimbatore"},
      {id: 44, name: "Coimbatore"},
      {id: 45, name: "Vijayawada"},
      {id: 46, name: "Navi Mumbai"},
      {id: 47, name: "Gwalior"},
      {id: 48, name: "Madurai"},
    ]
  }
}
