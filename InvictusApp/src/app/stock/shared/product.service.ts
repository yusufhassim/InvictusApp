import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AddProduct } from './add-product.model'
//To send data through components
import { Subject, Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  newLink: any;

  //NEW SHIT
  prodCategoryList$ = <any>[];
  prodTypeList$ = <any>[];

  //Get between forms
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();


  //Share between components
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {

    //between forms bullshit
    this.myMethod$ = this.myMethodSubject.asObservable();

  }

  chanageMessage(message: string) {
    this.messageSource.next(message)
  }

  //between forms bullshit
  myMethod(data) {
    console.log('my service: ', data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    this.myMethodSubject.next(data);
  }


  allProducts() {
    return this.http.get('https://localhost:44395/api/Product/allProducts');
  }

  // allTypes() {
  //   return this.http.get('https://localhost:44395/api/ProductType/allTypes');
  // }

  // getProdByID(prod) {
  //   return this.http.get('http://localhost:50050/api/Product/prodByID', prod);
  // }

  getProdByID(id: number) {
    return this.http.get('https://localhost:44395/api/Product/prodByID?id=' + id);
  }

  CreateProduct(myProduct) {
    return this.http.post('https://localhost:44395/api/Product/CreateProduct', myProduct);
  }

  UpdateProduct(myProduct) {
    return this.http.put('https://localhost:44395/api/Product/UpdateProduct', myProduct);
  }

  DeleteProduct(id: number) {
    return this.http.delete('https://localhost:44395/api/Product/DeleteProduct?id=' + id);
  }


  GetAllTypesDD() {
    return this.http.get('https://localhost:44395/api/ProductType/allTypesDD');
  }

  getTypeByID(id: number) {
    return this.http.get('https://localhost:44395/api/Product/typeByID?id=' + id);
  }

  GetAllSupplierDD() {
    return this.http.get('https://localhost:44395/api/Supplier/allSupplierDD');
  }

  GetAllSizesDD() {
    return this.http.get('https://localhost:44395/api/Product/allSizeDD');
  }


  GetAllWarehouseDD() {
    return this.http.get('https://localhost:44395/api/Warehouse/allWarehouseDD');
  }


  getAllProductTypes() {
    return this.http.get('https://localhost:44395/api/ProductType/allTypes');
  }

  allCategoryDD() {
    return this.http.get('https://localhost:44395/api/Category/allCategoryDD');
  }

  getCategoryByID(id: number) {
    return this.http.get('https://localhost:44395/api/Product/categoryByID?id=' + id);
  }

  CreateProductType(myType) {
    return this.http.post('https://localhost:44395/api/ProductType/CreateProductType', myType);
  }

  UpdateProductType(myType) {
    return this.http.put('https://localhost:44395/api/ProductType/UpdateProductType', myType);
  }

  DeleteProductType(id: number) {
    return this.http.delete('https://localhost:44395/api/ProductType/DeleteProductType?id=' + id);
  }


  allCategories() {
    return this.http.get('https://localhost:44395/api/Categories/allCategories');
  }

  CreateProductCategory(myProductCategory) {
    return this.http.post('https://localhost:44395/api/Categories/CreateProductCategory', myProductCategory);
  }

  UpdateProductCategory(myCat) {
    return this.http.put('https://localhost:44395/api/Categories/UpdateProductCategory', myCat);
  }

  DeleteProductCategory(id: number) {
    return this.http.delete('https://localhost:44395/api/ProductCategory/DeleteProductCategory?id=' + id);
  }


  allProductDD() {
    return this.http.get('https://erpshopbackendapi.azurewebsites.net/api/Product/allProductDD');
  }

  WriteOff() {
    return this.http.get('https://erpshopbackendapi.azurewebsites.net/api/Product/WriteOff');
  }


  CreateWriteOff(myWriteOff) {
    return this.http.post('https://erpshopbackendapi.azurewebsites.net/api/Product/CreateWriteOff', myWriteOff);
  }


  companyDetails() {
    return this.http.get('https://localhost:44395/api/Company/companyDetails');
  }

  updateCompanyDetails(myComp) {
    return this.http.put('https://localhost:44395/api/Product/updateCompanyDetails', myComp);
  }

  allUserRoles() {
    return this.http.get('https://localhost:44395/api/Home/getAllUserRoles');
  }

  addUserRole(myRole) {
    return this.http.post('https://localhost:44395/api/Home/AddUserRole', myRole);
  }

  getRoleByID(id: number) {
    return this.http.get('https://localhost:44395/api/userRole/userRoleByID?id=' + id);
  }

  updateUserROle(myRole) {
    return this.http.put('https://localhost:44395/api/Home/UpdateUserRole', myRole);
  }

  allUsers() {
    return this.http.get('https://localhost:44395/api/Home/getAllUsers');
  }

  GetAllUserRolesDD() {
    return this.http.get('https://localhost:44395/api/userRole/allRolesDD');
  }

  getUserByID(id: number) {
    return this.http.get('https://localhost:44395/api/user/getUserByID?id=' + id);
  }

  MaintainUserRole(userRole) {
    return this.http.put('https://localhost:44395/api/userRole/updateUserRole ', userRole);
  }

  setLink(link) {
    link = this.newLink;
  }

  getWriteOffByID(id: number) {
    return this.http.get('https://localhost:44395/api/ERPMerchandiseShop/writeoff/writeoffbyID?id=' + id);
  }


  addProductImage(myImage) {
    return this.http.post('https://localhost:44395/api/Home/UploadImage', myImage);
  }

  getProductNumber() {
    return this.http.get('https://localhost:44395/api/Product/getNumberofProducts');
  }

  updateProdID(numb: number) {
    return this.http.get('https://localhost:44395/api/Home/UpdateProdID' + numb);
  }

  apiReportDownload(numb: number) {
    return this.http.get('https://localhost:44395/api/ERPMerchandiseShop/downloadReport?reportType=' + numb, { responseType: 'blob' });
  }

  apiExportProducts() {
    return this.http.get('https://localhost:44395/api/ERPMerchandiseShop/exportProducts', { responseType: 'blob' });
  }

  //NEW SHIT
  getLatestCatList() {
    return this.http.get('https://localhost:44395/api/Category/allCategoryDD');
  }

  
  getLatestTypeList() {
    return this.http.get('https://localhost:44395/api/ProductType/allTypesDD');
  }




//New Shit Lol ( . Y . ) => (-: 


}
