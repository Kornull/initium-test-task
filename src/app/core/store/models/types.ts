export enum SortedActions {
  DEFAULT = 'default',
  ALPHABET = 'alphabet',
  MAIL = 'mail',
  PHONE = 'phone',
}

export enum LocalStorageKeys {
  CLIENTS_KEY = 'full-client-list',
}

export enum FormKeys {
  CREATE_FORM_KEY = 'create',
  CHANGE_FORM_KEY = 'change',
}

export type ModalData = {
  count: number;
  formKey: string;
  completed: false;
  email: string;
  id: string;
  name: string;
  phone: string;
  surname: string;
};
