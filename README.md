# Punto de Encuentro

Punto de Encuentro es una aplicación que te permite ver ubicaciones, fechas y horas de los distintos eventos creados para que no te pierdas nada importante.

## Instalación del Proyecto

Para empezar a usar este proyecto es necesario tener `pnpm`. Si no lo tienes, elimina el archivo `pnpm-lock.yaml`. Si prefieres usar `npm`, ejecuta `npm install`.

- **Ejecuta el proyecto**: `pnpm run start`
  - **Opcional**: `npm run start`
- **Ejecuta el JSON Server**: `pnpm run json-server`
  - **Opcional**: `npm run json-server`

## Credenciales

- **Admin**:
  - **Username**: super.admin
  - **Password**: Creador12123
- **User**:
  - **Username**: sebastian.cruz
  - **Password**: Visitador21233

## Estructura de Carpetas

- **Core**: Carpeta global que contiene los servicios, modelos, guards e interceptores para la configuración o estandarización de todo el proyecto.
- **Modules**: Carpeta que agrupa los distintos módulos de la aplicación.
- **Shared**: Carpeta con los componentes globales, pipes, directivas y funciones utilitarias. Todos estos se reutilizan a lo largo de la aplicación.

## Versionamiento

- **Angular CLI**: 17.3.10
- **Node**: 20.10.0
