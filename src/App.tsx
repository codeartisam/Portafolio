import { useState } from 'react';
import Test from "./componentes/ComponenteCard";
import Banner from "./componentes/Componentebanner";
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='Navbar'>
        <nav>
          <a href="index.html"><img alt='Logo' src='src\media\Logo.png' /></a>
          <ul>
            <li><a href='index.html' className='active'>Inicio</a></li>
            <li><a href='#'>Cotizar</a></li>
            <li><a href='#'>Servicios</a></li>
            <li><a href='#'>Portafolio</a></li>
            <li><a href='#'>Articulos</a></li>
          </ul>
       </nav>
      </div>

      <div className='info'>
        <div className='imagen'>
          <img src="src\media\Imagen.svg" alt="circuito" />
        </div>
        <p className='infoPrincipal'>transformando <span className='resaltado'>tus ideas</span>
         en soluciones tecnológicas de <span className='resaltado'>calidad</span>.</p>
        <div className='metodologias'>
          <p className='titulo'>metodologia SCRUM</p>
          <p className='descripcion'>Siempre tendra su producto en linea <br /> 
          funcional mientras se desarrolla<br /> por completo.</p>
          <p className='titulo'>calidad</p>
          <p className="descripcion">Su producto sera de calidad y de facil
          <br /> uso, para los empleados y clientes <br /> que lo usan.
            <br /> <br /> </p>
          <p className="descripcion">nuestro desarrollo va junto a la<br /> mano de usted, nuestro cliente,<br />
            teniendo el control del desarrollo de<br /> su producto.</p>
        </div>
      </div>

      <div className="contenedor-cajas">
        <div className="titulo">
          <h3>Lo que hacemos</h3>
        </div>
      </div>
      
      <div className="cards">
            <Test 
              img='src\media\desarrollo-web.png'
              title='Desarrollo Web'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio dolor dignissimos quae rerum recusandae atque impedit,
              deleniti assumenda neque, deserunt ratione aspernatur voluptatibus cumque magni facere iure!
              Laudantium, rem assumenda.'
            />
            <Test 
            img='src\media\desarrollo-movil.png'
            title='Desarrollo Movil'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio dolor dignissimos quae rerum recusandae atque impedit,
            deleniti assumenda neque, deserunt ratione aspernatur voluptatibus cumque magni facere iure!
            Laudantium, rem assumenda.'
            />
            <Test
            img='src\media\desarrollo-desktop.png'
            title='Desarrollo Desktop'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio dolor dignissimos quae rerum recusandae atque impedit,
            deleniti assumenda neque, deserunt ratione aspernatur voluptatibus cumque magni facere iure!
            Laudantium, rem assumenda.'
            />
      </div>

      <div className="bannerContactUs">
        <Banner 
        contactanosBig='¿Necesitas ayuda para desarrollar tu proyecto digital? !Contáctanos ahora mismo¡'
        contactanosLittle='!Déjanos ayudarte a transformar tu visión en realidad¡'
        />
      </div>
    </>
  )
}

export default App
