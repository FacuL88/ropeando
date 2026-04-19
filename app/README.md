# Ropeando - Tienda de Ropa Online

Proyecto de e-commerce para tienda de ropa desarrollado con Vite y JavaScript vanilla.

## 🚀 Despliegue en Producción

### Build para Producción
```bash
npm run build
```

### Vista Previa de Producción
```bash
npm run preview
```

### Deploy Automático a GitHub Pages
```bash
npm run deploy
```

## 📋 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Vista previa del build
- `npm run predeploy` - Preparación para deploy
- `npm run deploy` - Deploy automático a GitHub Pages

## ⚙️ Configuración de Producción

El proyecto está optimizado para producción con:

- **Minificación**: Terser para JavaScript y CSS
- **Eliminación de console.log**: Configurado para producción
- **SEO**: Metadatos optimizados para buscadores
- **Variables de entorno**: Configuración separada para desarrollo y producción
- **Optimización de assets**: Code splitting y compresión

## 🌐 URL de Producción

https://facaulugle.github.io/appRopeando/

## 📁 Estructura del Proyecto

```
app/
├── src/
│   ├── sections/     # Componentes de UI
│   ├── provider.js   # Datos de productos
│   ├── main.js       # Punto de entrada
│   └── style.css     # Estilos
├── public/           # Assets estáticos
├── dist/            # Build de producción
└── index.html       # Plantilla HTML
```

## 🔧 Variables de Entorno

- `.env.production` - Configuración de producción
- `.env.development` - Configuración de desarrollo

Las variables sensibles están excluidas del control de versiones mediante `.gitignore`.
