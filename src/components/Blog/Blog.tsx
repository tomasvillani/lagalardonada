import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import '../../style/Blog.css'
import Articulo from "./Articulo";

const Blog = () => {
  return (
    <div className="page-wrapper">
      <TopBar />
      <Navbar />

      <Articulo
        imagen="/blog/blog-1.jpg"
        titulo="Cómo saber si una alfombra necesita restauración"
        fecha="Feb 12, 2026"
        categoria="Limpieza de alfombras"
        texto="Las alfombras son elementos fundamentales en la decoración de nuestros hogares, añadiendo calidez y estilo. Con el paso del tiempo y el uso diario, pueden acumular suciedad, perder color o presentar daños que requieren una restauración profesional."
      />

      <Articulo
        imagen="/blog/blog-2.jpg"
        titulo="Tipos de manchas más difíciles en tapicería"
        fecha="Ene 29, 2026"
        categoria="Limpieza sofas a domicilio"
        texto="Las manchas en la tapicería pueden ser un verdadero dolor de cabeza para cualquier hogar. Algunas de estas manchas son especialmente difíciles de eliminar sin la ayuda de productos y técnicas profesionales especializadas."
      />

      <Articulo
        imagen="/blog/blog-3.jpg"
        titulo="Diferencias entre limpieza en seco y a vapor"
        fecha="Ene 15, 2026"
        categoria="Limpieza de alfombras"
        texto="La limpieza de alfombras es un aspecto fundamental del mantenimiento del hogar, y existen diferentes métodos para conseguir resultados óptimos. Conocer las diferencias entre cada técnica te ayudará a elegir la más adecuada para tu caso."
      />

      <Articulo
        imagen="/blog/blog-4.jpg"
        titulo="Tintorería alfombras Madrid: limpieza profesional a domicilio"
        fecha="Ene 1, 2026"
        categoria="Limpieza de alfombras"
        texto="La tintorería de alfombras en Madrid se ha convertido en una necesidad para muchos hogares y empresas que buscan mantener sus espacios en perfecto estado. Un servicio profesional garantiza resultados duraderos y cuida la fibra de cada pieza."
      />

      <Articulo
        imagen="/blog/blog-5.jpg"
        titulo="Limpieza de paredes enteladas"
        fecha="Dic 18, 2025"
        categoria="Limpieza de cortinas"
        texto="La limpieza de paredes enteladas es un aspecto crucial en el mantenimiento del hogar. Estas superficies decorativas no solo aportan elegancia sino que también requieren un cuidado especial para preservar su aspecto y durabilidad."
      />

      <Articulo
        imagen="/blog/blog-6.jpg"
        titulo="Cómo limpiar un sofá sin dañar la tela"
        fecha="Dic 4, 2025"
        categoria="Limpieza sofas a domicilio"
        texto="La limpieza de un sofá es fundamental para mantener un hogar acogedor y saludable. Con el uso diario, los sofás pueden acumular suciedad, manchas y bacterias que requieren una atención especial para no dañar el tejido."
      />

      <Articulo
        imagen="/blog/blog-7.jpg"
        titulo="Qué producto usar para limpiar cortinas en casa"
        fecha="Nov 27, 2025"
        categoria="Limpieza de cortinas"
        texto="La limpieza de cortinas y visillos puede parecer una tarea abrumadora, pero es esencial para mantener un ambiente limpio y saludable en el hogar. Elegir el producto adecuado según el tipo de tela marcará la diferencia en el resultado final."
      />

      <Articulo
        imagen="/blog/blog-8.jpg"
        titulo="Limpieza profesional vs limpieza casera: ¿Cuál es la mejor opción?"
        fecha="Nov 13, 2025"
        categoria="Blog"
        texto="La elección entre limpieza profesional y limpieza casera puede ser determinante para mantener un entorno limpio y saludable. Conocer las ventajas y limitaciones de cada método te ayudará a tomar la mejor decisión para tu hogar."
      />

      <Articulo
        imagen="/blog/blog-9.jpg"
        titulo="Limpieza ecológica: qué productos no usar"
        fecha="Oct 30, 2025"
        categoria="Blog"
        texto="La limpieza ecológica es esencial para crear un ambiente saludable en nuestros hogares, minimizando el uso de químicos agresivos. Conocer qué productos evitar es el primer paso para una limpieza más responsable y sostenible."
      />

      <Articulo
        imagen="/blog/blog-10.jpg"
        titulo="Cómo lavar fundas de un sofá desenfundable"
        fecha="Oct 16, 2025"
        categoria="Limpieza sofas a domicilio"
        texto="Lavar las fundas de un sofá desenfundable es esencial para mantener su limpieza y durabilidad. Con el adecuado tratamiento y los productos correctos, podrás conseguir resultados impecables sin dañar el tejido."
      />

      <Footer />
    </div>
  );
};

export default Blog;