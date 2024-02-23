import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ChangeDataService } from 'src/app/core/services';
import { UserInfo } from 'src/app/core/store';
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
  title: string = 'Редактирование';

  newUser!: UserInfo;

  createUser!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private changeData: ChangeDataService
  ) {}

  ngOnInit(): void {
    this.createUser = this.fb.group({
      name: [
        '',
        [
          Validators.minLength(2),
          Validators.maxLength(18),
          Validators.required,
        ],
      ],
      surname: [
        '',
        [
          Validators.minLength(2),
          Validators.maxLength(18),
          Validators.required,
        ],
      ],
      email: ['', [Validators.email, mailValidator()]],
      phone: ['', [phoneValidator()]],
    });
  }

  closeModal() {
    this.dialog.closeAll();
  }

  onSubmit() {
    if (this.createUser.valid) {
      const name = this.createUser.controls['name'].value;
      const surname = this.createUser.controls['surname'].value;

      this.newUser = {
        name: `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`,
        surname: `${surname.slice(0, 1).toUpperCase()}${surname.slice(1)}`,
        email: this.createUser.controls['email'].value,
        phone: this.createUser.controls['phone'].value,
        id: `${Date.now()}`,
        completed: false,
      };

      this.changeData.addUser(this.newUser);
      this.closeModal();
    }
  }
}
