import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AddTableComponent } from 'src/shared/components/add-table/add-table.component';
import { MessageService } from 'primeng/api';
import { Table } from 'src/core/models/table.model';
import { TableService } from 'src/core/services/table.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DialogService, MessageService, TableService],
})
export class AppComponent implements OnInit {
  constructor(
    private dialogService: DialogService,
    private messageService: MessageService,
    private tableService: TableService
  ) {}

  ngOnInit(): void {
    this.tableService.getTables().subscribe({
      next: (res) => {
        this.items = res;
      },
    });
  }

  showSidebar = true;
  items: Table[] = [];
  isLoading: boolean = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  addNewTable() {
    const ref = this.dialogService.open(AddTableComponent, {
      header: 'Add New Item',
      width: '35%',
    });
    ref.onClose.subscribe((data) => {
      if (data) {
        this.items.push(data);
        this.messageService.add({
          severity: 'success',
          summary: 'Agregado.',
          detail: 'Tabla creada correctamente.',
        });
      }
    });
  }

  saveAllChanges() {
    this.isLoading = true;
    const updateObservables = this.items.map((item) => {
      return this.tableService.updateTable(item.id, item);
    });

    forkJoin(updateObservables).subscribe({
      next: (updatedItems) => {
        this.isLoading = false;
        console.log('All tables were updated:', updatedItems);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error updating tables:', err);
      },
      complete: () => {
        this.isLoading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Cambios Guardados.',
          detail: 'Todo fue guardado correctamente.',
        });
      },
    });
  }
}
