import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  
  constructor() { }
  
  alert(options: SweetAlertOptions) {
    return Swal.fire(options);
  }

  confirmDialog(typeText: string) {
    return Swal.fire({
      title: `¿Estás seguro de eliminar esta ${typeText}?`,
      text: "Esta acción es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminalo!',
      cancelButtonText: 'Cancelar'
    })
  }
  
  success(title: string, text?: string) {
    return this.alert({
      title,
      text,
      icon: 'success'
    });
  }
  
  error(title: string, text?: string) {
    return this.alert({
      title,
      text,
      icon: 'error'
    });
  }
  
  warning(title: string, text?: string) {
    return this.alert({
      title,
      text,
      icon: 'warning'
    });
  }
  
  info(title: string, text?: string) {
    return this.alert({
      title,
      text,
      icon: 'info'
    });
  }

  showModal() {
    Swal.fire({
      title: 'Add Table',
      icon: 'info',
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: 'Cancel',
      html: '<app-add-table></app-add-table>'
    });
    
}
}
