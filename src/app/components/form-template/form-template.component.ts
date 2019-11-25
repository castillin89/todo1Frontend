import { Component, OnInit, Inject } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Product } from 'src/app/model/Product';
import { HttpClient } from '@angular/common/http';
import { BaseComponent } from 'src/app/utils/base/base.component';
import { isUndefined } from 'util';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {

  snackTime = 2000;
  product: Product;
  productNew: Product;
  private form: FormGroup;
  private companies = [
    { company: "DC COMIC" },
    {
      company: "MARVEL"
    }]

  constructor(private dialogRef: MatDialogRef<FormTemplateComponent>,private http: HttpClient,
    private _formBuilder: FormBuilder, private request: RequestService, private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) DATA) {
      this.product = DATA;
      console.log(DATA);
     }

     ngOnInit() {
      this.form = this._formBuilder.group({
        name: ["", Validators.required],
        company: ["", Validators.required],
        description: ["", Validators.required],
        price: ["", Validators.required],
        quantity: ["", Validators.required],
        type: ["", Validators.required]  
      });
    }

  close() {
    this.dialogRef.close();
  }

  addProduct () {
    this.productNew = this.form.value;
    this.request.addProduct(this.productNew).subscribe();
    this.close()
}

openSnackBar(snackMessage, cssClass?, snackAction?, idAction?, time?) {
  if (isUndefined(snackAction)) {
    snackAction = "";
  }
  let snackBarRef = this.snackBar.open(snackMessage, snackAction, {
    duration: time ? time : this.snackTime,
    panelClass: cssClass ? cssClass : ""
  });
  snackBarRef.onAction().subscribe(() => {
    this.snackBarTriggered({ action: idAction });
  });
}

snackBarTriggered(data) { }

}
