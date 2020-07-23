# Github Pages Deploy

* Para hacer deploy de la aplicacion en github pages:

1. Ejecutar por fin el comando `npm run build`
2. Al terminar buscamos dentro de los directorios una nueva carpeta llamada build.
3. Doble click en el archivo index.html ... nos lanzará errores, 🎭 porque por defecto nuestra plicación de react debe correr en un servidor, debido a que usamos importaciones y eso no funciona en [Protocolo de transferencia de archivos (FTP)](https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_archivos).
4. (Opcional) - Instalar [http-server](https://www.npmjs.com/package/http-server) para levantar un serviddor rapido. después de intalarlo, navegamos con la terminal dentro de la carpeta 'build' y escribimos el comando `http-server -o`
5. [Setting your username in Git](https://docs.github.com/en/enterprise/2.13/user/articles/setting-your-username-in-git)
6. Renombrar la carpeta 'build' por 'docs'
7. (Opcional) Crear un nuevo repositorio si no se a creado uno
8. Ir a github pages, escroleas y encontrar source - seleccionar master branch / docs folder. Al tocarlo github pages lo salva automáticamente.
9. En la misma página en seccion de github pages esperar a que el enlace azul se pinte verde
10. Posteriormente al darle click nos mostrará un error, en el ejemplo es un error de que no encuenta los recursos. para arreglarlo...
    1.  Regresar a la carpeta index.html
    2.  Para desminificar en vscode presionamos View->command palet->escribir format document.
    3.  Todos los href se tiene que agregar un . antes del slash, excepto por los que son CDN
    4.  Volvemos a hacer push
11. Nuevamente esperar a que se ponga en verde, darl click y ya debe funcionar.