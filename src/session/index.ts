import { CookieStore } from '../auth0-session';

export { default as Session, Claims, fromJson, fromTokenSet } from './session';
export { default as sessionFactory, GetSession } from './get-session';
export {
  default as accessTokenFactory,
  GetAccessToken,
  AccessTokenRequest,
  GetAccessTokenResult
} from './get-access-token';
export { default as SessionCache } from './cache';

export type GetCookieStore = () => CookieStore;

