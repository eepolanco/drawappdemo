import { CdkDragStart, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { Table } from 'src/core/models/table.model';
import { AlertService } from 'src/core/services/sweetAlert.service';
import { TableService } from 'src/core/services/table.service';

@Component({
  selector: 'app-drag-drop-item',
  templateUrl: './drag-drop-item.component.html',
  styleUrls: ['./drag-drop-item.component.css'],
})
export class DragDropItemComponent {
  constructor(private alertService: AlertService, private tableService: TableService) {}

  @Input() item: Table = {} as Table;;

  onDragStarted(event: CdkDragStart) {
    event.source.element.nativeElement.classList.add('dragging');
  }

  onDragEnded(event: CdkDragEnd) {
    event.source.element.nativeElement.classList.remove('dragging');
  }

  deleteKey(key: any, tableId: number) {
    this.alertService.confirmDialog('columna').then((result) => {
      if (result.isConfirmed) {
        this.item.keys = this.item.keys.filter((k: any) => k !== key);
        this.tableService.updateTable(tableId, this.item).subscribe({
          next: (resp) => {
            this.alertService.success(
              'Listo!',
              'La columna fue eliminada correctamente.'
            );
          }
        })
        
      }
    });
  }
}
