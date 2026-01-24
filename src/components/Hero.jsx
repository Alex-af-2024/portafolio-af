export default function Hero({ content }) {
  return (
    <section>
      <h1>{content.name}</h1>
      <h2>{content.headline}</h2>
      <p>{content.heroText}</p>
    </section>
  );
}

/**Explicación:
 * content contiene todos los textos del idioma activo
 * No hay textos fijos ->  todo  viene desde el archivo de datos
 * Esto hace a mi web totalmente editable y profesional
 */
