module.exports = {
    apps : [
        {
          name: "test-app",
          script: "/server.js",
          watch: true,
          env: {
              "PORT": 8080,//you can choose
              "NODE_ENV": "development"
          },
          env_production: {
              "PORT": 3000,//you can choose
              "NODE_ENV": "production",
          }
        }
    ]
  }