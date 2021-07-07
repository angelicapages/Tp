### Comentarios Generales

Angie, lo primero es felicitarte por tu excelente portfolio. Hiciste un gran trabajo. Me gusta mucho como adaptaste el modelo que te dio Ada a tu propia personaliad, la elección de colores y los detalles que revelan que hiciste tuyo este proyecto.

El responsive en particular te quedó perfecto, no veo ningun defecto en ninguna resolucion. Esa atención al detalle es muy valiosa. Se nota mucho que en este trabajo hay tiempo, ganas y aprendizaje invertido. Espero que estés muy orgullosa de vos misma. 

Con respecto al responsive, si creo que hay mucho espacio que no se esta aprovechando, especialmente en las tarjetas de skills. Le diste width 50% al contenedor de Mis Conocimientos, lo que es bastante poco, y hace que en desktop se te vean solo dos tarjetas por fila, y a partir de tablet solo una. Yo repensaria ese width. Con la seccion de presentacion, ya en escritorios algo pequeños la presentacion se ve arriba y la imagen abajo, cuando esto solo deberia ocurrir en tablet. Veo cierta confusion en los width alli, que te comento en el css. 

En ambos, HTML y CSS hay algunos detalles que te comento en los archivos para que tengas en cuenta. Se nota que te esforzaste por hacer tu código reutilizable, algo que sin dudas ayuda a lo bien que se ve visualmente. Si tenes alguna confusion en el head de tu html, ya que importas mas veces de las necesarias devicon, y tres veces Montserrat. Con una sola alcanza. 

Tus nombres de clases a veces son descriptivos en un sentido visual, no funcional, y eso afecta la legibilidad de tu código. "boton-blanco" es un nombre de clase que describe qué estilo tendrá un elemento (y eso es algo que ya decimos en CSS) pero no le explica al lector de tu código qué es ese elemento o qué hace. Hay dos problemas con estos nombres: el primero es que no describen adecuadamente al elemento. El segundo es que los estilos cambian un montón a lo largo de la vida de una web. Mantener nombres funcionales nos permite que estos cambios sean más sencillos: boton-principal siempre será el botón principal de una sección, aunque cambie su margen, su color, su borde o cualquier otra cosa. Por otro lado, "segunda" es un nombre que quiza puedas identificar vos para qe sirve, pero no es claro para los demas. "tarjetas-conocimientos" es una mejor alternativa. 

Usas bien las etiquetas semanticas por lo general, salvo que pusiste section en lugar de footer, y detecto cierta confusion en las jerarquias de los titulos - te lo deje comentado en el HTML. Noto que tenes muchos divs de mas - te los dejo comentados. 

Tengo que mencionar lo bien ordenado de tu proyecto en github. Noto que tus primeros commits no tienen descripcion, pero muy rapidamente comenzaste a ser muy prolida describiendo los cambios en tus mensajes.  Es muy importante para que tus futuros colegas puedan ir viendo como vas avanzando con el código, por lo que lo ideal es acostumbrarse a hacerlo desde ahora. Tu README es excelente. 

Dejo algunos comentarios a lo largo de tu código de todo lo que me parezca necesario mejorar. 

Es mi trabajo ser detallista y quisquillosa a la hora de corregir, como verás en los comentarios de los distintos archivos. No es mi intención comentarte cada detalle porque sí: tu trabajo es fantástico. Mi tarea es comentarte todo lo que vea para que sea más fantástico aún. 


### Nota final: 9

Nota desagregada: 
✅ Estructura correcta de documento HTML.
✅ Respeta la consigna.
✅ Respeta el diseño dado.
✔️ Responsive funciona correctamente --> con observaciones
✅ Código bien indentado 
✅ Comentarios que permiten mejorar la legibilidad del código.
✔️ Uso correcto de etiquetas semánticas --> con observaciones
✔️ Buenos nombres de clases --> con observaciones 
✅ Reutilización de estilos.
✅ Código CSS ordenado 
✔️ Commits con mensajes adecuados --> con observaciones

