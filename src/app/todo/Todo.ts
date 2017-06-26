import { Status } from "./status";

export interface Todo {
  $key: string;		
  title: string;
  status: Status;
  priority: number;
  id: number;
}

