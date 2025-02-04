module.exports = {
  apps: [
    {
      name: "frontend",
      script: "npm",
      args: "run dev:frontend",
      stop_signal: "SIGINT",
    },
    {
      name: "backend",
      script: "npm",
      args: "run dev:backend",
      stop_signal: "SIGINT",
    },
  ]
};

