export class Task {
  Todo: string;
  Date: Date;
  Urgence : string;
  Description : string;
  isDone : boolean;

  constructor(todo :string,date : Date, urgence : string, description : string, isdone : boolean) {
    this.Todo=todo;
    this.Date=date;
    this.Urgence=urgence;
    this.Description=description;
    this.isDone=isdone;
  }
}
