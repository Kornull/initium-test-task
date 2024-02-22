import { Component } from '@angular/core';

@Component({
  selector: 'app-table-list-header',
  templateUrl: './table-list-header.component.html',
  styleUrls: ['./table-list-header.component.scss'],
})
export class TableListHeaderComponent {
  name: string = 'Имя';

  surname: string = 'Фамилия';

  mail: string = 'E-mail';

  phone: string = 'Телефон';
}
