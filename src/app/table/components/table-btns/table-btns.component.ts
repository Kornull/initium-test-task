import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-table-btns',
  templateUrl: './table-btns.component.html',
  styleUrls: ['./table-btns.component.scss'],
})
export class TableBtnsComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'delete-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg')
    );
    iconRegistry.addSvgIcon(
      'add-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg')
    );
  }
}
