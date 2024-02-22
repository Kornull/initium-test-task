export interface TableData {
  users: User[];
}

export interface User {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

export interface UserInfo extends User {
  id: string;
  completed: boolean;
}

export interface ListData {
  allCompleted: boolean;
  users: UserInfo[];
}
