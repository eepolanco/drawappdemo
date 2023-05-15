import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropItemComponent } from './drag-drop-item/drag-drop-item.component';
import { NoItemsComponent } from './no-items/no-items.component';
import { AddTableComponent } from './add-table/add-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { LeftMenuItemsComponent } from './left-menu-items/left-menu-items.component';
import { ToastModule } from 'primeng/toast';
import { MinLengthDirective } from 'src/core/directives/min-length.directive';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [DragDropItemComponent, NoItemsComponent, AddTableComponent, LeftMenuItemsComponent, MinLengthDirective ],
  imports: [
    BrowserModule,
    ButtonModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    DialogModule,
    DynamicDialogModule,
    InputTextModule,
    DropdownModule,
    InputSwitchModule,
    CheckboxModule,
    ToastModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Directives
  ],
  exports: [DragDropItemComponent, NoItemsComponent, LeftMenuItemsComponent, ToastModule, HttpClientModule],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
