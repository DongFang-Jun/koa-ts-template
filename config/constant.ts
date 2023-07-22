export const ENV = {
  development: 'development',
  production: 'production'
}

export const FIXED_KEY = {
  port: 3232
}

export const DATABASE = {
  development: {
    dbName: 'server',
    user: '',
    password: '',
    host: 'localhost',
    port: 3306
  },
  production: {
    dbName: 'server',
    user: '',
    password: '',
    host: 'localhost',
    port: 3306
  }
}

export const JWT = {
  secret: '',
  expires: 60 * 60 * 24 * 30 // 30天
}
