export const registros = [
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
  },
  {
    id: "5",
    nombre: "Laura",
    apellido: "Gómez",
    email: "laura@example.com",
    creationDate: new Date(Date.now() - 5 * 86400000).toISOString(), // Cinco días antes
  },
  {
    id: "6",
    nombre: "Carlos",
    apellido: "Ruiz",
    email: "carlos@example.com",
    creationDate: new Date(Date.now() - 6 * 86400000).toISOString(), // Seis días antes
  },
  {
    id: "7",
    nombre: "Sara",
    apellido: "Hernández",
    email: "sara@example.com",
    creationDate: new Date(Date.now() - 7 * 86400000).toISOString(), // Siete días antes
  },
  {
    id: "8",
    nombre: "Javier",
    apellido: "Díaz",
    email: "javier@example.com",
    creationDate: new Date(Date.now() - 8 * 86400000).toISOString(), // Ocho días antes
  },
  {
    id: "9",
    nombre: "Elena",
    apellido: "Sánchez",
    email: "elena@example.com",
    creationDate: new Date(Date.now() - 9 * 86400000).toISOString(), // Nueve días antes
  },
  {
    id: "10",
    nombre: "Alejandro",
    apellido: "Martínez",
    email: "alejandro@example.com",
    creationDate: new Date(Date.now() - 10 * 86400000).toISOString(), // Diez días antes
  },
  {
    id: "11",
    nombre: "Carmen",
    apellido: "López",
    email: "carmen@example.com",
    creationDate: new Date(Date.now() - 11 * 86400000).toISOString(), // Once días antes
  },
  {
    id: "12",
    nombre: "David",
    apellido: "Gómez",
    email: "david@example.com",
    creationDate: new Date(Date.now() - 12 * 86400000).toISOString(), // Doce días antes
  },
  {
    id: "13",
    nombre: "Rosa",
    apellido: "Ruiz",
    email: "rosa@example.com",
    creationDate: new Date(Date.now() - 13 * 86400000).toISOString(), // Trece días antes
  },
  {
    id: "14",
    nombre: "Pablo",
    apellido: "Díaz",
    email: "pablo@example.com",
    creationDate: new Date(Date.now() - 14 * 86400000).toISOString(), // Catorce días antes
  },
  {
    id: "15",
    nombre: "Lucía",
    apellido: "Sánchez",
    email: "lucia@example.com",
    creationDate: new Date(Date.now() - 15 * 86400000).toISOString(), // Quince días antes
  },
  {
    id: "16",
    nombre: "Fernando",
    apellido: "García",
    email: "fernando@example.com",
    creationDate: new Date(Date.now() - 16 * 86400000).toISOString(), // Dieciséis días antes
  },
  {
    id: "17",
    nombre: "Isabel",
    apellido: "Martínez",
    email: "isabel@example.com",
    creationDate: new Date(Date.now() - 17 * 86400000).toISOString(), // Diecisiete días antes
  },
  {
    id: "18",
    nombre: "Andrés",
    apellido: "López",
    email: "andres@example.com",
    creationDate: new Date(Date.now() - 18 * 86400000).toISOString(), // Dieciocho días antes
  },
  {
    id: "19",
    nombre: "Eva",
    apellido: "Hernández",
    email: "eva@example.com",
    creationDate: new Date(Date.now() - 19 * 86400000).toISOString(), // Diecinueve días antes
  },
  {
    id: "20",
    nombre: "Alberto",
    apellido: "Gómez",
    email: "alberto@example.com",
    creationDate: new Date(Date.now() - 20 * 86400000).toISOString(), // Veinte días antes
  },
  {
    id: "21",
    nombre: "Sandra",
    apellido: "Ruiz",
    email: "sandra@example.com",
    creationDate: new Date(Date.now() - 21 * 86400000).toISOString(), // Veintiún días antes
  },
  {
    id: "22",
    nombre: "Miguel",
    apellido: "Díaz",
    email: "miguel@example.com",
    creationDate: new Date(Date.now() - 22 * 86400000).toISOString(), // Veintidós días antes
  },
  {
    id: "23",
    nombre: "Beatriz",
    apellido: "Sánchez",
    email: "beatriz@example.com",
    creationDate: new Date(Date.now() - 23 * 86400000).toISOString(), // Veintitrés días antes
  },
  {
    id: "24",
    nombre: "Jorge",
    apellido: "García",
    email: "jorge@example.com",
    creationDate: new Date(Date.now() - 24 * 86400000).toISOString(), // Veinticuatro días antes
  }]



export const fields = [
  {
    label: "Nombre",
    key: "name",
    type: "text",
    value: "", // Valor inicial del campo
    onChange: (value: string) => console.log("Nombre cambiado:", value), // Función de cambio de valor
  },
  {
    label: "Apellido",
    key: "apellido",
    type: "text",
    value: "", // Valor inicial del campo
    onChange: (value: string) => console.log("Correo electrónico cambiado:", value), // Función de cambio de valor
  },
  {
    label: "Email",
    key: "email",
    type: "email",
    value: "", // Valor inicial del campo
    onChange: (value: string) => console.log("Correo electrónico cambiado:", value), // Función de cambio de valor
  },
];
