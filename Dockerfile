FROM node:18-alpine

# Crear el directorio de la aplicación
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Compilar el proyecto
RUN npm run build

# Exponer el puerto que usa NestJS (por defecto, 3000)
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "run", "start:prod"]
