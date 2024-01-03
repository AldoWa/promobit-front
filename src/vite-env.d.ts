/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_MOVIE_KEY: string;
  readonly VITE_API_MOVIE_AUTHORIZATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
