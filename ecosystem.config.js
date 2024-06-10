module.exports = {
  apps: [
    {
      name: 'book-management-app',
      script: './server.js',
      instances: 'max',
      exec_mode: 'cluster',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'node',
      host: 'your-server.com',
      ref: 'origin/master', // Change 'main' to 'master' if your default branch is master
      repo: 'https://github.com/pragati9111/book-management-System.git',
      path: '/var/www/book-management-app',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
