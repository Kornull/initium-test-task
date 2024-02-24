import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ChangeDataService } from 'src/app/core/services';

import { FormKeys, ModalData, UserInfo } from 'src/app/core/store';

import { mailValidator } from 'src/app/shared/validators/mail.validator';
import { phoneValidator } from 'src/app/shared/validators/phone.validator';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class TableFormComponent implements OnInit {
  title: string;

  isUpdateForm: boolean;

  newUser!: UserInfo;

  createUser!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private changeData: ChangeDataService,
    @Inject(MAT_DIALOG_DATA)
    public data: ModalData
  ) {
    this.title =
      data.formKey === FormKeys.CREATE_FORM_KEY
        ? 'Новый клиент'
        : 'Редактирование';

    this.isUpdateForm = data.formKey === FormKeys.CHANGE_FORM_KEY;
  }

  ngOnInit(): void {
    this.createUser = this.fb.group({
      name: [
        this.isUpdateForm ? this.data.name : '',
        [
          Validators.minLength(2),
          Validators.maxLength(18),
          Validators.required,
        ],
      ],
      surname: [
        this.isUpdateForm ? this.data.surname : '',
        [
          Validators.minLength(2),
          Validators.maxLength(18),
          Validators.required,
        ],
      ],
      email: [
        this.isUpdateForm ? this.data.email : '',
        [Validators.email, mailValidator()],
      ],
      phone: [this.isUpdateForm ? this.data.phone : '', [phoneValidator()]],
    });
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  onSubmit(): void {
    if (this.createUser.valid) {
      const name = this.createUser.controls['name'].value;
      const surname = this.createUser.controls['surname'].value;

      this.newUser = {
        name: `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`,
        surname: `${surname.slice(0, 1).toUpperCase()}${surname.slice(1)}`,
        email: this.createUser.controls['email'].value,
        phone: this.createUser.controls['phone'].value,
        id: this.isUpdateForm ? this.data.id : `${Date.now()}`,
        completed: this.isUpdateForm ? this.data.completed : false,
      };

      if (this.isUpdateForm) {
        this.changeData.updateClientInfo(this.newUser);
      } else {
        this.changeData.addUser(this.newUser);
      }
      this.closeModal();
    }
  }
}
