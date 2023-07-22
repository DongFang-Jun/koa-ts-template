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
    user: 'root',
    password: '8322640.wjj',
    host: 'localhost',
    port: 3306
  },
  production: {
    dbName: 'server',
    user: 'root',
    password: '8322640.wjj',
    host: 'localhost',
    port: 3306
  }
}

export const JWT = {
  secret: 'secret',
  expires: 60 * 60 * 24 * 30 // 30天
}
