export enum KnownConfigKey {
  JwtSecret = 'jwt-sign-secret',
}

function get(key: string): string {
  return 'your_jwt_secret';
}

export default {
  get,
};
