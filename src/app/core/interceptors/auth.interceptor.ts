import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isGeneratingToken = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) {}

  handle401Unauthorized(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isGeneratingToken) {
      this.isGeneratingToken = true;
      this.refreshTokenSubject.next(null);
    
      return this.authService.generateToken().pipe(
        switchMap((generatedToken) => {
            if(generatedToken) {
              this.refreshTokenSubject.next(generatedToken.token);
              this.authService.saveToken(generatedToken.token);
              return next.handle(this.setToken(request,generatedToken.token));
            }
            return throwError('');
        }),catchError(error => {
          return throwError(error);
        }),finalize(() => {
          this.isGeneratingToken = false;
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.setToken(request, token));
        }));
    }
  }

  private setToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${ token }`
      }
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    if (token) {
      request = this.setToken(request, token);
    }
    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Unauthorized(request, next);
        }
        return throwError(error);
      })
    )
  }
}
