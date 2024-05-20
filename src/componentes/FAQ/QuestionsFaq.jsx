import React from 'react'
import QuestionImage from '../../IMGs/QuestionImage.png'
import './QuestionsFaq.css'

export default function QuestionsFaq() {
  return (
    <>
      <article className='containerQuestions'>
        <div className='questions'>
          <section>
            <h3>¿Cómo puedo saber si una mascota es adecuada para mi hogar y estilo de vida?🏠</h3>
            <p>Para determinar si una mascota es adecuada para tu hogar y estilo de vida, es importante considerar varios factores.</p>
            <ol>
              <li>Tamaño y espacio:Algunas mascotas, como los perros grandes, pueden requerir un espacio más amplio para moverse cómodamente.</li>
              <li>Actividad y ejercicio: Piensa en tu nivel de actividad y la cantidad de tiempo que puedes dedicar al cuidado y ejercicio de una mascota.</li>
              <li>Tiempo y compromiso: Considera cuánto tiempo puedes dedicar diariamente al cuidado de una mascota. Algunas mascotas, como los perros, requieren paseos regulares, alimentación, atención y tiempo de calidad.</li>
            </ol>
          </section>
          <section>
            <h3>¿Cuál es la diferencia entre adoptar y comprar una mascota?🙋🏻‍♂️🙋🏻‍♀️</h3>
            <p>Cuando adoptas una mascota, estás dando un hogar a un animal que ha sido rescatado, abandonado o está en situación de necesidad. La adopción generalmente implica acudir a un refugio de animales, una organización de rescate o una institución similar, donde se encuentran mascotas que están buscando un nuevo hogar. Al adoptar, estás brindando una oportunidad a un animal que puede haber experimentado maltrato, abandono o dificultades. </p>
          </section>
          <section>
            <h3>¿Qué se requiere en términos de cuidado y responsabilidad después de adoptar una mascota?🌞</h3>
            <p>A continuación, se mencionan algunos aspectos importantes del cuidado y la responsabilidad que conlleva tener una mascota:</p>
            <ol>
              <li>Alimentación adecuada: Proporcionar una dieta equilibrada y nutritiva es esencial para la salud de tu mascota.</li>
              <li>Higiene y aseo: Mantén a tu mascota limpia y bien aseada. Esto implica bañarla regularmente, cepillar su pelaje, limpiar sus oídos y dientes, y recortar sus uñas según sea necesario.</li>
              <li>Ejercicio y estimulación: Proporciona suficiente actividad física y mental para mantener a tu mascota en forma y feliz.</li>
            </ol>
          </section>
        </div>

        <img src={QuestionImage} alt='Cachorra de color beige con blanco, viendo hacia arriba'/>
      </article>

    </>
  )
}
