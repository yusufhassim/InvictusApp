import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { NotifierService } from 'angular-notifier';
//To send data through components
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Get between forms
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();


  //Base URL
  // baseURL = 'https://localhost:44395/api';
  private baseURL = 'https://localhost:44395/api';
  //private baseURL = 'https://erpshopbackendapi.azurewebsites.net/api';


  constructor(private http: HttpClient, 
    // private notifierService: NotifierService
    ) {

    //between forms bullshit
    this.myMethod$ = this.myMethodSubject.asObservable();
  }

  //between forms bullshit
  myMethod(data) {
    console.log('my service: ', data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    this.myMethodSubject.next(data);

  }


  //Get Couriers
  getCouriers() {
    return this.http.get(this.baseURL + '/ERPMerchandiseShop/getCouriers');
  }
  //Get Vouchers
  getVouchers() {
    return this.http.get(this.baseURL + '/ERPMerchandiseShop/getVouchers');
  }

  //Remove Courier
  removeCourier(id: number) {
    return this.http.delete(this.baseURL + '/ERPMerchandiseShop/removeCourier?id=' + id);
  }

  // Update Courier
  updateCourier(myCourier) {
    return this.http.put(this.baseURL + '/ERPMerchandiseShop/updateCourier', myCourier);
  }

  // Update Voucher
  updateVoucher(myVoucher) {
    return this.http.put(this.baseURL + '/ERPMerchandiseShop/updateVoucher', myVoucher);
  }


  // Add Courier
  addCourier(myCourier) {
    console.log('this is service:', myCourier);
    return this.http.post(this.baseURL + '/ERPMerchandiseShop/addCourier', myCourier);
  }

  // Add Voucher
  addVoucher(myVoucher) {
    return this.http.post(this.baseURL + '/ERPMerchandiseShop/addVoucher', myVoucher);
  }



  //Remove Voucher
  // removeVoucher(id: number) {
  //   return this.http.delete(this.baseURL + '/ERPMerchandiseShop/removeVoucher?id=' + id);
  // }

  //Get all cities
  getAllCitiesDD() {
    return this.http.get(this.baseURL + '/ERPMerchandiseShop/getAllCitiesDD');
  }
  //Get all province
  getAllProvincesDD() {
    return this.http.get(this.baseURL + '/ERPMerchandiseShop/getAllProvincesDD');
  }
  //Get all countries
  getAllCountriesDD() {
    return this.http.get(this.baseURL + '/ERPMerchandiseShop/getAllCountriesDD');
  }
  //Get all Suburbs
  getAllSuburbsDD() {
    return this.http.get(this.baseURL + '/ERPMerchandiseShop/getAllSuburbsDD');
  }
  //Get all Voucher Status
  getAllVoucherStatusDD() {
    return this.http.get(this.baseURL + '/ERPMerchandiseShop/getAllVoucherStatusDD');
  }
  //Get all Voucher Status Reasons
  getAllVoucherStatusReasonsDD() {
    return this.http.get(this.baseURL + '/ERPMerchandiseShop/getAllVoucherStatusReasonsDD');
  }


  //Write Off Image
  getWriteOffImage(binImage) {
    return this.http.post(this.baseURL + '/ERPMerchandiseShop/getWriteOffImage', binImage);
  }

  // notifySuccess(act1) {

  //   this.notifierService.notify(
  //     'default',
  //     `${act1}`
  //   );
  // }



  getCouriersByIDpop(id: number) {
    return this.http.get(this.baseURL + '/ERPMerchandiseShop/getCouriersByIDpop?courierID=' + id);
  }

  
  getVoucherByIDpop(id: number) {
    return this.http.get(this.baseURL + '/ERPMerchandiseShop/getVoucherByIDpop?voucherID=' + id);
  }




}