import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TableService } from 'src/core/services/table.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css'],
  providers: [MessageService, TableService],
})
export class AddTableComponent implements OnInit {
  tableForm: FormGroup;
  keys: FormArray;
  types: string[] = ['int', 'string', 'boolean'];

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    private tableService: TableService
  ) {
    this.tableForm = this.fb.group({
      table: ['', Validators.required],
      keys: this.fb.array([this.createKeyField()]),
    });

    this.keys = this.tableForm.get('keys') as FormArray;
  }

  ngOnInit(): void {}

  addKey() {
    this.keys.push(
      this.fb.group({
        keyName: ['', Validators.required],
        type: ['', Validators.required],
        isPrimaryKey: [false],
      })
    );
  }

  removeKey(index: number) {
    this.keys.removeAt(index);
  }

  createKeyField(): FormGroup {
    return this.fb.group({
      keyName: ['', Validators.required],
      type: ['', Validators.required],
      isPrimaryKey: [false],
    });
  }

  onSubmit() {
    if (this.tableForm.valid) {
      this.tableService.postNewTable(this.tableForm.value).subscribe({
        next: (resp) => {
          this.ref.close(resp);
        }, 
        error: (error) => {
        this.messageService.add({
            severity: 'error',
            summary: 'Error al guardar',
            detail: 'Ocurrio un error en el proveedor de base de datos.',
          });
        }
      })
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error al guardar',
        detail: 'Todos los campos son requeridos.',
      });
    }
  }
}
