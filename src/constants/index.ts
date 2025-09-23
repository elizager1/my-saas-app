export const APP_CONFIG = {
  name: process.env.NEXT_PUBLIC_APP_NAME || 'My SaaS App',
  description:
    'Professional SaaS application built with Next.js and TypeScript',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  version: '1.0.0',
  supportEmail: 'support@example.com',
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRICING: '/pricing',
  CONTACT: '/contact',

  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
    LOGOUT: '/auth/logout',
  },

  // Dashboard
  DASHBOARD: {
    ROOT: '/dashboard',
    OVERVIEW: '/dashboard/overview',
    PROJECTS: '/dashboard/projects',
    TEAM: '/dashboard/team',
    SETTINGS: '/dashboard/settings',
    BILLING: '/dashboard/billing',
    ANALYTICS: '/dashboard/analytics',
  },

  // API
  API: {
    AUTH: '/api/auth',
    USERS: '/api/users',
    ORGANIZATIONS: '/api/organizations',
    HEALTH: '/api/health',
    WEBHOOKS: '/api/webhooks',
  },
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  BIO_MAX_LENGTH: 500,
} as const;
