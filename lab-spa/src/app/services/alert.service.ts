import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  private showGenericAlert(
    title: string,
    message: string,
    icon: SweetAlertIcon
  ) {
    Swal.fire(title, message, icon);
  }

  public error(title: string, message: string) {
    this.showGenericAlert(title, message, "error");
  }

  public sucess(title: string, message: string) {
    this.showGenericAlert(title, message, "success");
  }
}
