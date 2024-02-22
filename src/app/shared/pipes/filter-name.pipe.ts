import { Pipe, PipeTransform } from '@angular/core';
import { ListData } from 'src/app/core/store';

@Pipe({
  name: 'filterName',
})
export class FilterNamePipe implements PipeTransform {
  transform(data: ListData, name: string = ''): ListData {
    if (name.trim()) {
      const filteredName = data.users.filter(user =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );

      return {
        ...data,
        users: filteredName,
      };
    }

    return data;
  }
}
