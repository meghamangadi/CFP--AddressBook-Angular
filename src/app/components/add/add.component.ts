import { Component, OnInit } from '@angular/core';
import {AddressBook} from "../../entities/address-book";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AddressBookService} from "../../service/address-book.service";



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public addressBook: AddressBook = new AddressBook;
  public addressBookFormGroup: FormGroup ;

  public states = [{id: 1, name: "Andhra Pradesh"},
    {id: 2, name: "Arunachal Pradesh"},
    {id: 3, name: "Assam"},
    {id: 4, name: "Bihar"},
    {id: 5, name: "Chhattisgarh"},
    {id: 6, name: "Goa"},
    {id: 7, name: "Gujarat"},
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
    {id: 27, name: "West Bengal"}];
  public cities = [{id: 1, name: "Aurangabad"},
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
    {id: 48, name: "Madurai"},];

  constructor( private formBuilder: FormBuilder, private addressBookService : AddressBookService, private router: Router) {
    this.addressBookFormGroup = this.formBuilder.group({
    
      firstName: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),  
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]),
      address: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
      name: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),    
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{6}$")]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

      this.addressBook = this.addressBookFormGroup.value;
      console.log(this.addressBook)
      this.addressBookService.addAddressBookData(this.addressBook).subscribe((response: any)=>{
        console.log(response);
        setTimeout(() => {
          this.router.navigateByUrl("/home")
        }, 1000);
      });
  }

  /**
   * Purpose: checkError() is called during validation of the form fields.
   *
   * @param controlName field name for which the method is called.
   * @param errorName error details which is displayed to the user.
   * @returns
   */

  // public checkError = (controlName: string, errorName: string) => {
  //   return this.addressBookFormGroup.controls[controlName].hasError(errorName);
  // }

}