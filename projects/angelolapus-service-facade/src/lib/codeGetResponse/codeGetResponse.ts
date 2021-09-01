import { Observable, Subject, Subscription } from "rxjs";

export class CodeGetResponse<T>{

  _data:any;
  _error:any;
  // _subscription = new Subscription();
  dataSubject = new Subject<T>();
  errorSubject = new Subject<T>();

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

  clear(){
    this._data = null;
  }
}
