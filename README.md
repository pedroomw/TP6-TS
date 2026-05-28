# CatGram — Clon de Instagram con React

Clon web de Instagram desarrollado con React + TypeScript, que consume imágenes de gatos desde The Cat API.

**Diseños de Figma utilizado como referencia:**
https://www.figma.com/community/file/1004033523744290376
https://dribbble.com/shots/15379093-Instagram-Redesign-Concept-Web-app

---

## ▶️ Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

---

## 📁 Organización del proyecto

```
src/
├── Components/
│   ├── Header/       → Barra de navegación fija superior
│   ├── Feed/         → Contenedor principal del feed
│   ├── Post/         → Tarjeta individual de publicación
│   ├── postDetail/   → Vista detallada de una publicación seleccionada
│   ├── Stories/      → Contenedor horizontal de historias
│   ├── Story/        → Historia individual
│   └── Profile/      → Perfil del usuario emulado
├── hooks/
│   └── usePost.ts    → Hook que consume The Cat API con Axios
├── objects/
│   └── mockData.ts   → Datos simulados: usuario, captions, comentarios
└── types/
    └── index.ts      → Interfaces TypeScript (CatPost, Comment, AppView)
```

---

## 🧩 Componentes y responsabilidades

- **Header**: barra fija con logo, buscador y botones de navegación entre vistas
- **Feed**: renderiza la lista de posts y las stories. Recibe los datos como props desde App
- **Post**: tarjeta de cada publicación con like, guardar, comentar y doble click para likear
- **postDetail**: vista dedicada con imagen ampliada, comentarios, likes y campo de comentario
- **Stories**: scroll horizontal de historias usando los datos de mockData
- **Story**: historia individual con estado `viewed` para marcar si fue vista
- **Profile**: perfil del usuario emulado con estadísticas y grilla 3x3 de publicaciones

---

## 🔗 Comunicación entre componentes mediante props

```
App
 ├── Header (currentView, onGoFeed, onGoProfile)
 ├── Feed   (posts, loading, error, onSelectPost, onToggleLike, onToggleSave)
 │    ├── Stories
 │    └── Post × N (post, onSelectPost, onToggleLike, onToggleSave, index)
 ├── postDetail (post, onGoBack, onToggleLike, onToggleSave)
 └── Profile    (posts, onSelectPost)
```

---

## 🪝 Hooks utilizados

| Hook | Dónde | Para qué |
|------|-------|----------|
| `useEffect` | `usePost.ts` | Llama a The Cat API al montar la app |
| `useState` | `usePost.ts` | Guarda posts, loading y error |
| `useState` | `usePost.ts` | Maneja toggleLike y toggleSave |
| `useState` | `App.tsx` | Guarda la vista actual (feed / profile / detail) |
| `useState` | `App.tsx` | Guarda el post seleccionado |
| `useState` | `App.tsx` | Guarda la posición del scroll al abrir un post |
| `useState` | `Post.tsx` | Controla el texto del campo de comentario |
| `useState` | `Story.tsx` | Marca si la story fue vista |

---

## 🌐 Consumo de API

Se utiliza **Axios** dentro del hook `usePost.ts` para consumir [The Cat API](https://thecatapi.com/):

```ts
const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
  params: { limit: 12, mime_types: 'jpg,png' },
});
```

Cada imagen se enriquece con datos simulados (username, caption, likes, comentarios, fecha) para simular publicaciones reales de una red social.

---

## 🖼️ Visualización individual de publicaciones

Se resolvió mediante un **componente dedicado (`postDetail`)** que reemplaza la vista del feed.

El flujo es:
1. El usuario clickea una imagen en el feed
2. `App.tsx` guarda el scroll actual, actualiza `selectedPost` y cambia la vista a `detail`
3. Se renderiza `postDetail` con el post como prop
4. El botón "Volver al feed" restaura la vista y el scroll a la posición original

---

## 👤 Perfil de usuario emulado

El usuario está definido en `mockData.ts`:

```ts
export const currentUser = {
  username: 'michi.lover',
  fullName: 'Michi Amante 🐾',
  bio: 'Amante de los gatos 🐱 | Buenos Aires, AR',
  followers: 1284,
  following: 312,
};
```

No hay sistema de login. El perfil muestra las mismas publicaciones cargadas desde la API en una grilla 3x3, con estadísticas y bio fijos en el código.
