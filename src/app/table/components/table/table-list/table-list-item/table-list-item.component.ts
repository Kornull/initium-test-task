import { Component, Input } from '@angular/core';
import { UserInfo } from 'src/app/core/store';

@Component({
  selector: 'app-table-list-item',
  templateUrl: './table-list-item.component.html',
  styleUrls: ['./table-list-item.component.scss'],
})
export class TableListItemComponent {
  @Input() user!: UserInfo;
}
