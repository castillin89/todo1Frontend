import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Product } from 'src/app/model/Product';
import { utils } from 'protractor';
import { BaseComponent } from 'src/app/utils/base/base.component';
import { FormTemplateComponent } from '../form-template/form-template.component';
import { isUndefined } from 'util';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent extends BaseComponent implements OnInit {

  product: Product;

  namesTable = {
    id: "ID",
    name: "Nombre",
    description: "Descripción",
    company: "Compañía",
    type: "Tipo",
    quantity: "Disponible",
    price: "Precio",
    edit: "Editar"
  };

  products: Array<Product> = [];
  constructor(private request: RequestService, private dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.request.getProduct().subscribe(data =>{
      this.products = data 
      console.log(data);
    });
    
  }

  openModal(){

    this.openDialog(FormTemplateComponent, this.products);
  }

  openDialog(component, dataDialog?, classDialog?) {
    const dialogConfig = new MatDialogConfig();

    if (!isUndefined(dataDialog['close'])) {
      dialogConfig.disableClose = dataDialog['close'];
    } else {
      dialogConfig.disableClose = false;
    }

    dialogConfig.autoFocus = true;
    if (!isUndefined(dataDialog)) {
      dialogConfig.data = dataDialog;
    }

    if (classDialog) {
      dialogConfig.panelClass = classDialog;
    }

    const dialogRef = this.dialog.open(component, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.afterCloseDialog(data);
      }
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
