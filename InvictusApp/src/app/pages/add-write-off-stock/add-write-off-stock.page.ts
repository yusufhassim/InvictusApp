// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

// import { WriteOff } from './shared/write-off.model';
import { ProductService } from 'src/app/stock/shared/product.service';
import { HttpClient } from '@angular/common/http';
// import { CloseScrollStrategy } from '@angular/cdk/overlay';
// import { filter } from 'minimatch';
// import { stringify } from '@angular/compiler/src/util';

// Camera
// import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
// import {Subject} from 'rxjs/Subject';
// import {Observable} from 'rxjs/Observable';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { DataService } from 'src/app/stock/shared/data.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-add-write-off-stock',
  templateUrl: './add-write-off-stock.page.html',
  styleUrls: ['./add-write-off-stock.page.scss'],
})
export class AddWriteOffStockPage implements OnInit {
  public webcamImage: WebcamImage = null;

  today = Date.now();

  // Camera
  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();

  imageUpload: WebcamImage;
  // Camera

  //date
  utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

  addWriteOffForm: FormGroup;

  obj = {
    WriteOffStockUnits: '',
    WriteOffStockReason: '',
    WriteOffDate: '',
    ProductID: '',
    WriteOffProdImage: '',
  };


  Products = <any>[];

  constructor(private http: HttpClient, private myProdServ: ProductService, private formBuilder: FormBuilder, private dataService: DataService,
    private navCtrl:NavController, private router: Router,

    //PopUp Construtor
    // public dialogRef: MatDialogRef<AddWriteOffStockPage>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  OpenAllWriteOffPage() {
    this.navCtrl.navigateRoot('all-write-off-stock');
    }

  ngOnInit() {
    this.addWriteOffForm = this.formBuilder.group({
      ProductName: ['', Validators.required],
      WriteOffStockUnits: ['', Validators.required],
      WriteOffDate: ['', Validators.required],
      WriteOffStockReason: ['', Validators.required]

    });


    //For types dropdown
    this.myProdServ.allProductDD().subscribe(res => {
      this.Products = res;
      console.log(this.Products);
    });

    // Camera
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
    // CaMERA
  }

  addProduct(value) {
    this.obj.ProductID = value;
    // console.log(this.obj.ProductID);
    console.log(value);
  }

  addWriteOffStock() {//WriteOffStockUnits: string) {
    console.log(this.obj.WriteOffStockUnits);
    console.log(this.obj.WriteOffStockReason);
  }

  // addProduct(ctrl) {
  //   if (ctrl.selectedIndex === 0) {
  //     this.obj.ProductID = '';
  //   } else {
  //     this.obj.ProductID = this.Products[ctrl.selectedIndex - 1].value;
  //   }
  //   console.log(this.obj.ProductID);
  // }

  //ClosePopUp
  // closeAddWriteOffPopUp() {
  //   this.dialogRef.close();
  // }

  //Fuck knows, jk, access values
  get f() { return this.addWriteOffForm.controls; }


  WriteOffSubmit() {

    //date
    this.utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    this.obj.WriteOffDate = this.utc;
    this.obj.WriteOffProdImage = this.myProdServ.newLink;

    // this.obj.ProductID = this.f.ProductName.value;
    // this.obj.WriteOffDate = this.f.WriteOffDate.value;
    // ;
    // this.obj.WriteOffStockReason = this.f.WriteOffStockReason.value;
    // this.obj.WriteOffStockUnits = this.f.WriteOffStockUnits.value;

    console.log('HALLO', this.obj.WriteOffProdImage);

    this.myProdServ.CreateWriteOff(this.obj).subscribe(res => {
      console.log('THIS IS OBJECT', this.obj);
      
      this.router.navigateByUrl('/all-write-off-stock');
      // location.reload();
    });

  }


  myblob;
  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;

    this.myblob = this.dataURItoBlob(webcamImage.imageAsBase64);

    function resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<Blob> {
      return new Promise((resolve, reject) => {
        let image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = () => {
          let width = image.width;
          let height = image.height;

          if (width <= maxWidth && height <= maxHeight) {
            resolve(file);
          }

          let newWidth;
          let newHeight;

          if (width > height) {
            newHeight = height * (maxWidth / width);
            newWidth = maxWidth;
          } else {
            newWidth = width * (maxHeight / height);
            newHeight = maxHeight;
          }

          let canvas = document.createElement('canvas');
          canvas.width = newWidth;
          canvas.height = newHeight;

          let context = canvas.getContext('2d');

          context.drawImage(image, 0, 0, newWidth, newHeight);

          canvas.toBlob(resolve, file.type);
        };
        image.onerror = reject;
      });
    }

    if (this.myblob != null) {
      resizeImage(this.myblob, 90, 90).then(blob => {
        //You can upload the resized image: doUpload(blob)
        // document.getElementById('img').src = URL.createObjectURL(blob);
        console.log('BLOB', this.myblob);
      }, err => {
        console.error("Photo error", err);
      });
    }

    let link = this.myProdServ;
    let file = this.myblob;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      console.log('new URL', reader.result);
      link.newLink = reader.result;
      console.log('WORKS!', link.newLink);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };

  }


  // Camera
  // ngOnInit() {
  // }
  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();


  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId 
    this.nextWebcam.next(directionOrDeviceId);
  }


  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }


  uploadedImage: Blob;
  newImage: Blob;


  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  // Camera

}
