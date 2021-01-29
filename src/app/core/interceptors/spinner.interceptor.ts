
import {
  HttpEvent, HttpHandler,

  HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../../services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  count = 0;

  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.count === 0) {
      this.spinnerService.show();
    }
    this.count++;

    return next.handle(request).pipe(
      finalize(() => {
        this.count--;
        if (this.count === 0) {
          this.spinnerService.hide();
        }
      })
    );
  }
}