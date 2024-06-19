export const records = [
  {
    id: "0",
    nombre: "Juan",
    apellido: "Perez",
    email: "juan@example.com",
    creationDate: new Date().toISOString(),
  },
  {
    id: "1",
    nombre: "María",
    apellido: "García",
    email: "maria@example.com",
    creationDate: new Date(Date.now() - 86400000).toISOString(), // Un día antes
  },
]
