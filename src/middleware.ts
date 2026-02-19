import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(nl|en)/:path*',
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)'
    //                                    ^^^^^^^ voeg dit toe
  ]
};