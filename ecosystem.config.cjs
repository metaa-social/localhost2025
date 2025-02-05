module.exports = {
  apps: [
    {
      name: "frontend",
      script: "npm",
      args: "run dev:frontend",
      stop_signal: "SIGINT",
      wait_ready: true,
      autorestart: true,
    },
    {
      name: "backend",
      script: "npm",
      args: "run dev:backend",
      stop_signal: "SIGINT",
      wait_ready: true,
      autorestart: true,
    },
  ]
};

