# CatGram — Clon de Instagram con React

Aplicación web desarrollada con React y TypeScript. Consume imágenes de gatos desde The Cat API y las combina con usuarios, captions y comentarios simulados.

Diseño de referencia: https://www.figma.com/community/file/1004033523744290376

Repositorio para la entrega: https://github.com/pedroomw/TP6-TS

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Verificaciones disponibles: `npm run build` y `npm run lint`.

## React Context: cumplimiento de la consigna

### 1. Información compartida

`AppContext` comparte las publicaciones (`posts`), el estado de carga (`loading`), el error de la API (`error`), el usuario emulado (`currentUser`), la pantalla actual (`currentView`) y la publicación seleccionada (`selectedPost`). También expone las acciones `toggleLike`, `toggleSave`, `addComment`, `handleSelectPost`, `handleGoBack` y `setCurrentView`.

Los likes, guardados y comentarios se actualizan en una única lista de publicaciones. El detalle se deriva del ID seleccionado y de esa lista, por lo que las interacciones se reflejan también en el feed y el perfil. El texto de cada campo de comentario y el estado de una historia vista permanecen locales a sus componentes.

### 2. Archivo donde se creó el Context

El contexto se crea mediante `createContext<AppContextType | undefined>(undefined)` en **`src/contexts/AppContext.ts`**. Su contrato está tipado con TypeScript. El Provider se implementa en **`src/contexts/context.tsx`**.

### 3. Componente contenedor del Provider

**`App` (`src/App.tsx`)** envuelve `Header` y `Screen` con `<AppProvider>`. El Provider ejecuta `usePosts` una vez por montaje y mantiene el estado compartido mientras se navega entre pantallas. También guarda la posición del scroll para volver al feed desde el detalle.

### 4. Componentes que consumen useContext

Los componentes usan **`useApp`**, definido en `src/hooks/useApp.ts`. Este hook llama a **`useContext(AppContext)`** y valida que el consumidor esté dentro del Provider.

| Componente | Información o acciones consumidas |
| --- | --- |
| `Header` | Usuario y navegación al feed/perfil |
| `Screen` | Vista actual y publicación seleccionada |
| `SideBar` | Acción para volver al feed |
| `SideBarProfile` | Usuario y navegación al perfil |
| `Feed` | Publicaciones, carga y error |
| `Post` | Usuario, likes, guardados, comentarios y apertura del detalle |
| `PostDetail` | Usuario, likes, guardados, comentarios y regreso al feed |
| `Profile` | Usuario, publicaciones y apertura del detalle |

Las props `post` de `Post` y `PostDetail` identifican la publicación que renderizan; las acciones globales se obtienen directamente del Context.

### 5. Justificación técnica

El feed, el detalle y el perfil necesitan acceder a las mismas publicaciones y sus cambios. Antes se debían pasar datos y callbacks por `App`, `Screen` y `Feed` hasta llegar a cada tarjeta. Context elimina ese paso de props por componentes intermedios y mantiene una única fuente de estado. La navegación y el usuario también se utilizan tanto en el encabezado como en la barra lateral y las pantallas. Por eso el Context responde a una necesidad real del flujo y contiene estado funcional.

## Comprobar el funcionamiento

1. En el feed, dar like y guardar una publicación.
2. Abrirla y comprobar que el detalle muestra esos estados.
3. Cambiar el like o guardado desde el detalle y publicar un comentario.
4. Volver al feed y comprobar el contador, el guardado y la cantidad de comentarios.
5. Entrar al perfil desde el encabezado o la barra lateral, y abrir la misma publicación: los cambios se conservan.

También se pueden publicar comentarios desde las tarjetas del feed. Los comentarios vacíos o con solo espacios se ignoran.

El estado se mantiene en memoria durante la sesión; al recargar la página se solicitan nuevamente las imágenes y se reinician las interacciones. El usuario es simulado, sin sistema de login ni backend para almacenar cambios.

## Organización y API

- `src/Components/`: encabezado, barra lateral, feed, publicaciones, detalle, perfil e historias.
- `src/contexts/`: contrato del Context y Provider del estado global.
- `src/hooks/useApp.ts`: acceso al Context mediante `useContext`.
- `src/hooks/usePost.ts`: carga de publicaciones con Axios y actualización de likes, guardados y comentarios.
- `src/objects/mockData.ts`: usuario y datos simulados.
- `src/types/index.ts`: interfaces de publicaciones, comentarios, usuario y vistas.

`usePosts` consulta `https://api.thecatapi.com/v1/images/search` con los parámetros `limit: 12` y `mime_types: 'jpg,png'`. La carga requiere conexión a Internet; el feed muestra un mensaje si la API falla.
