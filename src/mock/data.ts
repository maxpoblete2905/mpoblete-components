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
  {
    id: "2",
    nombre: "Pedro",
    apellido: "López",
    email: "pedro@example.com",
    creationDate: new Date(Date.now() - 2 * 86400000).toISOString(), // Dos días antes
  },
  {
    id: "3",
    nombre: "Ana",
    apellido: "Martínez",
    email: "ana@example.com",
    creationDate: new Date(Date.now() - 3 * 86400000).toISOString(), // Tres días antes
  },
  {
    id: "4",
    nombre: "Luis",
    apellido: "Fernández",
    email: "luis@example.com",
    creationDate: new Date(Date.now() - 4 * 86400000).toISOString(), // Cuatro días antes
  }
]
