storybook:
  npm install
  npm link

  copiar .env_example a .env

app:
  -ejecutar: npm link @joseirrazabal/nxbook
  -en consola ejecutar pwd (devuelve ruta) copiar respuesta

storybook:
  pegar respuesta de pwd en .env
  ejecutar npm run dev

