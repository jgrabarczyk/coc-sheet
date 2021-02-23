import { BehaviorSubject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { ServiceRestFactory } from './rest/rest.service';


/**
 * @description Factory to generate state managment service.
 */
export class ServiceFactory<T, K> {
  private bSubject_ = new BehaviorSubject<K[]>([]);
  public stream$ = this.bSubject_.asObservable();

  protected isPending_ = new BehaviorSubject<boolean>(false);
  protected pending$ = this.isPending_.asObservable();

  constructor(
    private restService_: ServiceRestFactory<T>,
    protected ctor_: new (arg0: T) => K
  ) {
  }

  /**
   * T as DTO,
   * K as Class
   * ctor - constructor
   */
  public fetchCollection(): void {
    this.isPending_.next(true);
    this.restService_.getAll()
      .pipe(
        map(
          (response: T[]) =>
            response.map((el: T) => new this.ctor_(el))
        ),
        finalize(() => {
          this.isPending_.next(false);
        })
      )
      .subscribe(
        (res: K[]) => {
          this.passNextValueToSubject(res);
        },
        (error) => console.error(`error: ${error}`)
      );
  }

  protected passNextValueToSubject(newList: K[]): void {
    this.bSubject_.next(newList);
  }

  protected currentStreamValue(): K[] { return this.bSubject_.getValue(); }
}
