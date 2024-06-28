LoremStore
LoremStore es una tienda online especializada en la venta de ropa, calzado y accesorios para mujer. Ofrecemos una amplia gama de productos de moda cuidadosamente seleccionados para satisfacer las necesidades y preferencias de nuestras clientes. Nuestro objetivo es proporcionar una experiencia de compra cómoda y satisfactoria, destacando por la calidad de nuestros productos y un servicio al cliente excepcional.

Tecnologías Utilizadas

React + Vite:
Utilizado como framework principal para desarrollar la interfaz de usuario. Vite se emplea para el desarrollo y construcción del proyecto, proporcionando una configuración rápida y eficiente.

Firebase:
Usado para la gestión de la base de datos, autenticación de usuarios y almacenamiento de datos en tiempo real. Firebase facilita la implementación de backend sin servidor.

Toastify:
Utilizado para mostrar notificaciones de forma elegante y sencilla en la aplicación. Esto mejora la experiencia del usuario al proporcionar feedback inmediato sobre las acciones realizadas.

Beautify 2:
Empleado para mejorar la estética del código, asegurando que sea limpio y fácil de leer, lo que facilita el mantenimiento y la colaboración.

Bootstrap Icons:
Utilizado para integrar iconos en la aplicación, proporcionando una interfaz visualmente atractiva y coherente.

React Router:
Utilizado para la gestión de las rutas y navegación dentro de la aplicación, permitiendo una experiencia de usuario fluida y sin interrupciones.

useState:
Hook de React utilizado para manejar el estado local en componentes funcionales, permitiendo una gestión eficiente de los datos dinámicos.

useEffect:
Hook de React utilizado para manejar efectos secundarios en componentes funcionales, como la obtención de datos y la suscripción a eventos.

JavaScript:
Lenguaje de programación principal utilizado para la lógica del frontend, facilitando la interacción dinámica de la aplicación.

CSS:
Lenguaje utilizado para el diseño y la apariencia visual de la aplicación, asegurando que la interfaz sea atractiva y responsive.

HTML:
Lenguaje de marcado utilizado para estructurar el contenido de la aplicación, proporcionando una base sólida sobre la cual construir los elementos de la interfaz.

Estructura del proyecto
public/
|-- img/
|   |-- productos/
|       |-- (imágenes de productos de la base de datos)
src/
|-- assets/
|   |-- (imágenes y recursos utilizados en el proyecto)
|-- components/
|   |-- header/
|   |   |-- CartWidget.jsx
|   |   |-- NavBar.jsx
|   |-- Carrito.jsx
|   |-- CheckOut.jsx
|   |-- Footer.jsx
|   |-- Item.jsx
|   |-- ItemDetail.jsx
|   |-- ItemDetailContainer.jsx
|   |-- ItemList.jsx
|   |-- ItemListContainer.jsx
|   |-- NotFound.jsx
|-- context/
|   |-- CartContext.jsx
|-- css/
|   |-- main.css
|-- firebase/
|   |-- config.js
|-- App.jsx
|-- main.jsx
|-- index.jsx

Explicación de la estructura:
public/: Contiene recursos estáticos accesibles públicamente. En este caso, una carpeta img/ que contiene imágenes de productos dentro de productos/.

src/: Directorio principal del código fuente de la aplicación.

assets/: Contiene imágenes y otros recursos utilizados en el proyecto.
components/: Aquí se encuentran todos los componentes de React.
header/: Carpeta que contiene componentes específicos del encabezado (CartWidget.jsx y NavBar.jsx).
Componentes individuales como Carrito.jsx, CheckOut.jsx, Footer.jsx, Item.jsx, ItemDetail.jsx, ItemDetailContainer.jsx, ItemList.jsx, ItemListContainer.jsx, y NotFound.jsx.
context/: Contiene el contexto de la aplicación, con el archivo CartContext.jsx.
css/: Incluye el archivo main.css para estilos globales del proyecto.
firebase/: Contiene la configuración de Firebase en config.js.
App.jsx: Componente principal de la aplicación.
main.jsx: Punto de entrada de la aplicación donde se renderiza el componente principal App.jsx.
index.jsx: Archivo de inicio de la aplicación donde se conecta la aplicación a la raíz del DOM.

Intalación de React + Vite: npm create@vitelatest ./
Ejecucion: npm run dev

Firebase: npm install firebase
Para configurar Firebase, utiliza tu archivo de configuración config.js en la carpeta firebase.

Toastify: npm install react-toastify
Asegúrate de importar y configurar ToastContainer en tu aplicación donde lo necesites.



Bootstrap-icons: npm install bootstrap-icons
Puedes importar iconos individuales en tus componentes según sea necesario.

React Router:
npm install react-router-dom
Configura y utiliza las rutas (BrowserRouter, Route, Switch, etc.) en tu aplicación según tus necesidades de enrutamiento.


Notas Adicionales:
Asegúrate de tener Node.js y npm (o yarn) instalados en tu máquina para ejecutar estos comandos.
Personaliza la configuración de Firebase (config.js) según los detalles de tu proyecto.
Al instalar cualquier paquete, revisa la documentación oficial para configuraciones adicionales o características avanzadas que puedas necesitar.


Instalación
Clonar repositorio: https://github.com/Lagomar18/entregafinal-react.git
Instalar dependencias: npm install
Iniciar la app: npm run dev

Conclusión

En conclusión, este proyecto representó una oportunidad invaluable para aplicar y profundizar mis conocimientos en el desarrollo web con tecnologías modernas. Utilizando React junto con Vite, Firebase, Toastify, Beautify 2, Bootstrap Icons y React Router, logramos crear una aplicación robusta y eficiente para una tienda online ficticia, "LoremStore". Desde la gestión dinámica de productos hasta la experiencia de compra fluida y segura, cada componente y funcionalidad fueron diseñados con el objetivo de ofrecer una experiencia de usuario optimizada.

Este proyecto no solo fortaleció mis habilidades técnicas en la construcción de aplicaciones web escalables, sino que también me permitió enfrentar desafíos reales, como la integración de bases de datos en tiempo real y la gestión de estados complejos. A lo largo del proceso, aprendí a colaborar eficazmente, resolver problemas de manera creativa y mantener altos estándares de calidad en cada línea de código.

Agradezco sinceramente a Matías Coletta "CarpiCoder" por proporcionar una guía experta y un entorno de aprendizaje enriquecedor que me permitió alcanzar estos resultados. Este proyecto no solo representa el cierre de un curso académico, sino también el inicio de mi camino hacia una carrera profesional en el desarrollo de software.

