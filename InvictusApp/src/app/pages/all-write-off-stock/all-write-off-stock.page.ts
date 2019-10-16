import { Component, OnInit, ViewChild } from '@angular/core';

import { ProductService } from 'src/app/stock/shared/product.service';
import { MatSort, MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
// import { WriteoffphotoPage } from './writeoffphoto.page';
import { Type } from '@angular/compiler';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-all-write-off-stock',
  templateUrl: './all-write-off-stock.page.html',
  styleUrls: ['./all-write-off-stock.page.scss'],
})
export class AllWriteOffStockPage implements OnInit {


  constructor(private mySerivce: ProductService,
              public dialog: MatDialog,
              private navCtrl:NavController,
              
              ) { }

  myDate = Date.now();
  public data: Array<any>;
  Type = [];
  // Sort
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

  dataSource;
  res: Object;

  displayedColumns: string[] = ['ProductName', 'WriteOffStockUnits', 'WriteOffDate', 'WriteOffStockReason', 
  // 'actions'
];

      // Open Add Product Pop-Up
  // openAddWriteOffPopUp(): void {
  //   const dialogRef = this.dialog.open(AddWriteOffStockComponent, {
  //   });

  //   // Close Pop-up
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
  //   });
  // }

  OpenAddWriteOffPage() {
    this.navCtrl.navigateRoot('add-write-off-stock');
    }


  // openwriteoffImage(id: number): void {
  //   const dialogRef = this.dialog.open(WriteoffphotoPage, {});
  //   this.mySerivce.myMethod(id);
  //   // Close Dialog
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

    this.mySerivce.WriteOff().subscribe((res: Type[]) => {
      this.res = res;
      console.log('RES', res);

      this.dataSource = new MatTableDataSource(res);
      console.log(this.dataSource);


      //paginatior
      this.dataSource.paginator = this.paginator
      // Sort
      this.dataSource.sort = this.sort;
    });

  
  }
}
