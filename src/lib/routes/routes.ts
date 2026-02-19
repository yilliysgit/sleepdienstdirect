export const ROUTES = {
  HOME: '/',
  DIENSTEN: '/diensten',
  TARIEVEN: '/tarieven',
  NIEUWS: '/nieuws',
  OVER_ONS: '/over-ons',
  CONTACT: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;