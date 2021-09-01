import { Observable, Subject } from "rxjs";

export class CodeGetResponse<T>{

  private _data:any;
  private _error:any;

  private dataSubject = new Subject<T>();
  private errorSubject = new Subject<T>();
  constructor(){
  }

  getResponse():Observable<T>{
    return this.dataSubject.asObservable()
  }

  set(data:T){
    this._data = data;
    this.dataSubject.next(this._data);
  }

  getErrorResponse():Observable<T>{
    return this.errorSubject.asObservable()
  }

  setError(error:any){
    this._error = 'error from server' + error;
    this.errorSubject.next(this._error);
  }
}
