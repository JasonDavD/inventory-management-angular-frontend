import { HttpInterceptorFn } from '@angular/common/http';

export const basicAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('erp_token');
  if (token && req.url.startsWith('/api')) {
    const authReq = req.clone({
      setHeaders: { Authorization: `Basic ${token}` }
    });
    return next(authReq);
  }
  return next(req);
};
