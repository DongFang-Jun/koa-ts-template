const ENV = {
  development: "development",
  production: "production",
};

// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: "production", //需与package.json里--only 后缀名相同
      script: "./src/app.js",
      args: "one two",
      instances: 2,
      cron_restart: "0 03 * * *",
      autorestart: true,
      watch: false,
      min_uptime: "200s",
      max_restarts: 10,
      ignore_watch: [
        // 不用监听的文件
        "node_modules",
        ".idea",
        "log",
      ],
      max_memory_restart: "300M",
      restart_delay: "3000",
      env: {
        NODE_ENV: ENV.production, //process.env.NODE_ENV值
      },
    },
    {
      name: "test", //需与package.json里--only 后缀名相同
      script: "./src/app.js",
      args: "one two",
      instances: 1,
      cron_restart: "0 03 * * *",
      autorestart: true,
      watch: true,
      ignore_watch: [
        // 不用监听的文件
        "node_modules",
        ".idea",
        "log",
      ],
      max_memory_restart: "300M",
      env: {
        NODE_ENV: ENV.development, //process.env.NODE_ENV值
      },
    },
  ],
};
