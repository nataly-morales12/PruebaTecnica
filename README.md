# PruebaTecnica
# Task Manager App

## Enlace a la Aplicación Desplegada
Puede acceder a la aplicación en el siguiente enlace: [React App](https://prueba-tecnica-phi-five.vercel.app/)
Puede acceder al servidor en el siguiente enlace: [API REST](https://api-tasks-v8h0.onrender.com/)
Puede acceder al la documentacion del servidor usando swagger en el siguiente enlace: [API DOCS REST](https://api-tasks-v8h0.onrender.com/api-docs/)

---

## Instrucciones para Instalar y Ejecutar el Proyecto Localmente

### Prerrequisitos
1. Intalar Tecnlogías:
   - [Node.js](versión 16 o superior)
   - [npm] o [yarn]
   - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) o una instancia local de MongoDB.

2. Clonar este repositorio:
   ```bash
   git clone https://github.com/nataly-morales12/PruebaTecnica.git
   cd PruebaTecnica

### Instalación del Backend
1. Acceder al directorio del backend:
    ```bash
    Copiar código:
    cd BACKEND

2. Instalar las dependencias:
    ```bash
    Copiar código:
    npm install

3. Configurar las variables de entorno:

    En el archivo .env en el directorio backend agregar las siguientes variables de entorno:
        ```env
        Copiar código:
        PORT=3000
        MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/Test?retryWrites=true&w=majority
4. Iniciar el servidor:
    ```bash
    Copiar código:
    npm start
    El servidor estará disponible en http://localhost:3000.

### Instalación del Frontend
1. Acceder al directorio del frontend:
    ```bash
    Copiar código:
    cd FRONTEND
2. InstalaR las dependencias:
    ```bash
    Copiar código:
    npm install
3. Inicia la aplicación frontend:
    ```bash
    Copiar código:
    npm start
    La aplicación estará disponible en http://localhost:3001.

### Detalles de Configuración
1. Variables de Entorno
    Backend:

    PORT: Puerto en el que se ejecutará el servidor (por defecto, 5000).
    MONGO_URI: URL de conexión a la base de datos MongoDB Atlas. Asegúrate de reemplazar <usuario> y <contraseña> con sus credenciales y con el nombre de su base de datos.

2. Tecnologías Usadas
    Frontend: React.js con Chakra UI para el diseño.
    Backend: Node.js con Express.
    Base de Datos: MongoDB Atlas.

### DESPLEGUE
1. Frontend: Render
2. Backend: Vercel

