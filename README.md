storybook:
  npm install
  npm link

  copiar .env_example a .env

app:
  -ejecutar: npm link @joseirrazabal/nxbook
  -en consola ejecutar pwd (devuelve ruta) copiar respuesta

storybook:
  pegar respuesta de pwd en .env en PATH_APP despues del = (quedando asi PATH_APP=/ruta/app/stvreact)
  ejecutar npm run dev


En caso de de no funcionar, borrar node_modules de las dos carptetas (storybook y app) y volver a repetir los pasos.

