import { Injectable } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) { }

  spinnerCount = 0

  spinnerSum(){
    this.spinnerCount++

    this.spinner.show(undefined,{
      type:"timer",
      bdColor:"rgba(0, 0, 0, 0.8)",
      size:"medium",
      color:"#fff",
      fullScreen :true,
    })
  }

  spinnerDec(){
    this.spinnerCount--

    if(this.spinnerCount <= 0){
      this.spinnerCount = 0
      this.spinner.hide()
    }
  }
}
