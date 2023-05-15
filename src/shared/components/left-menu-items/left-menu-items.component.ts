import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AlertService } from 'src/core/services/sweetAlert.service';
import { TableService } from 'src/core/services/table.service';

@Component({
  selector: 'app-left-menu-items',
  templateUrl: './left-menu-items.component.html',
  styleUrls: ['./left-menu-items.component.css'],
  providers: [ MessageService ]
})

export class LeftMenuItemsComponent {

  constructor( private alertService: AlertService, private tableService: TableService, private messageService: MessageService) {}
  @Input() items: any;
  types: string[] = ['int', 'string', 'boolean'];
  removeItem(index: number, tableId: number): void {

    this.alertService.confirmDialog('tabla').then((result) => {
      if (result.isConfirmed) {
        this.tableService.deleteTable(tableId).subscribe({
          next: (resp) => {
            this.items.splice(index, 1);
            this.alertService.success(
              'Eliminado!',
              'La tabla ha sido eliminada.'
            )
          }
        })
      }
    })
  }

  addKey(tableIndex: number, tableId : number): void {
    const newKey = {
      keyName: 'MyNewKey',
      type: 'string',
      isPrimaryKey: false
    };
    this.items[tableIndex].keys.push(newKey);
    
    this.tableService.updateTable(tableId, this.items[tableIndex]).subscribe({
      next: (resp) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Agregado.',
          detail: 'Columna creada correctamente.',
        });
      }
    })
  }
  
}
