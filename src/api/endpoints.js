const endpoints = {
  auth: {
    login: "/auth/login",
    signUp: "/auth/register",
  },
  task: {
    getAll: "/tasks",
    patch: "/tasks",
    create: "/tasks",
    delete: "/tasks",
    deleteAll: "/tasks/all",
    getOne: "/tasks",
  },
};

export default endpoints;
