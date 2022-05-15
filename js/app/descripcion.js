
const funcion = (url, texto, titulo) => {
    const imagen = document.getElementById("imagenPecera");
    imagen.src = url;

    const desc = document.getElementById("descEspecie")
    desc.textContent = texto

    const nombre = document.getElementById("nombreEspecie")
    nombre.textContent = titulo
}

const totoaba = () => {
    funcion(
        "https://www.mexicodesconocido.com.mx/wp-content/uploads/2021/06/totoaba-gob-mexico.png",
        "La totoaba es una especie que se enfrenta a la pesca ilegal, lo que ha provocado un decremento en su población."
        + " La problemática radica en que esta especie es capturada ilegalmente para obtener su vejiga natatoria"
        + " para su comercio ilegal. La totoaba es el pez más grande del Alto Golfo de California único en la región, "
        + "actualmente esta especie se enfrenta a la pesca ilegal, ocasionando un decremento en su población de forma alarmante hasta acercarla peligrosamente a su casi extinción, la problemática radica en que esta especie es capturada ilegalmente para obtener su vejiga natatoria también llamado buche y ser llevado en contravención con la ley al continente asiático para ser vendido en precios exorbitantes.",
        "Totoaba"
    )
}

const vaquita = () => {
    funcion(
        "https://www.gaceta.unam.mx/wp-content/uploads/2021/05/210524-aca2-des-f1-vaquita-marina.jpg",
        "La vaquita marina (Phocoena sinus) es una especie endémica de México, habita en el norte del Golfo de California y está considerada en Peligro de "
        + "Extinción (P) en la lista de especies en categoría de riesgo en la NOM-059-SEMARNAT- 2010.La vaquita marina (Phocoena sinus) es una especie de la "
        + "que históricamente no se sabía mucho. Su primera descripción, realizada en la primera mitad del siglo XX, se basó gracias al hallazgo de tres cráneos"
        + " encontrados cerca de San Felipe, Baja California. Algunos años más tarde se describió todo el esqueleto cuando se recolectaron ejemplares enteros varados,"
        + " pero fue hasta 1958 cuando se describió formalmente. Actualmente es una de las especies en mayor peligro de extinción. Enfrenta un declive en su población debido "
        + "a diferentes causas como lo son la captura incidental, aumento de la actividad pesquera y limitada tasa de crecimiento poblacional.Al ser una especie endémica (especie exclusiva en la región) y emblemática, se realizan importantes esfuerzos para su protección y conservación. ",
        "Vaquita Marina"
    )
}

const cangrejito = () => {
    funcion(
        "https://animales-acuaticos.com/wp-content/uploads/2021/07/Cangrejito-Barranquen%CC%83o-Animales-Acua%CC%81ticos.jpg",
        "El cangrejito barranqueño o científicamente llamado Pseudothelphusa dugesi, es una especie de cangrejo de agua dulce que solo podemos encontrar en las barrancas de Cuernavaca, Morelos, México; motivo por el cual se le conoce como endémico de esta ciudad."
        + "El cangrejito barranqueño es endémico del estado de Morelos, México; Habita únicamente el fondo de aguas claras, entre rocas y arena de las barrancas del municipio de Cuernavaca, por lo cual su distribución es reducida",
        "Cangrejo Barranquillero"
    )
}

const calamar = () => {
    funcion(
        "https://t1.ea.ltmcdn.com/es/posts/4/2/0/calamar_gigante_de_humboldt_22024_3_600.webp",
        "La cacerolita de mar, Limulus polyphemus, También conocido como cangrejo de herradura o cangrejo bayoneta, se trata de un auténtico fósil viviente que actualmente se halla en peligro de extinción. A pesar de gozar de diversas denominaciones como cangrejo, no es un cangrejo. Ni tan siquiera se trata de un crustáceo; es un artrópodo emparentado con las arañas."
        + "La característica más principal de este animal es un largo pincho móvil que sale de su cuerpo, protegido por el caparazón. Con un peso de hasta 1,800 gr, llega a medir 60 cm. Las hembras son mayores que los machos. Se alimenta de gusanos e invertebrados. Vive enterrado en la arena. La vida de este fascinante animal puede llegar a los 31 años.",
        "Cacerolita de mar"
    )

}

const tortuga = () => {
    funcion(
        "https://t2.ea.ltmcdn.com/es/posts/4/2/0/tortuga_carey_22024_2_600.webp",
        "La tortuga carey, Eretmochelys imbricata, se trata de una especie de tortuga marina que todavía subsiste en las aguas mexicanas. Sin embargo, por desgracia está críticamente amenazada."

        + "La tortuga carey tiene una amplia distribución por todas las aguas cálidas del planeta, siendo el Golfo de México su lugar preferente para desovar en playas mexicanas. La tortuga carey puede medir hasta 90 cm, y pesar hasta 80 kg."

        + "Esta preciosa especie de quelonio se nutre de determinados tipos de esponjas, algunas muy venenosas. Su alimentación esponjiforme se complementa con una ingente cantidad de medusas y de otros seres urticantes, entre ellos la peligrosa carabela portuguesa, Physalia physalis. La piel de la tortuga carey es excesivamente gruesa para que le afecten las picaduras de las medusas.",
        "Tortuga Carey"
    )
}

const ballena = () => {
    funcion(
        "https://ccc-chile.org/wp-content/uploads/2020/09/b_francaustral_grande.png",
        "La ballena franca austral (Eubalaena australis), que un siglo atrás fue llevada al borde de la extinción, se encuentra protegida en aguas territoriales de nuestro país. Se calcula que de los 100 mil ejemplares previos a las matanzas han quedado unos 7 mil."
        +"Vive en el sector austral de los océanos Atlántico, Pacífico e Índico. Entre junio y noviembre varios cientos de ejemplares llegan a la Península Valdés para reproducirse." 
        +"Se caracteriza por poseer manchas ventrales y callosidades. Sobre estas últimas se instalan colonias de cirripedios, pequeños crustáceos de caparazón blanco. De la mandíbula "
        +"superior de su enorme boca curva cuelgan alrededor de 220 a 260 barbas córneas, de hasta 2,5 metros de largo, que emplean como “colador” para retener las toneladas de krill que forman su alimento. Con sus extremidades anteriores convertidas en aletas, una gruesa capa de grasa y gran capacidad para bucear, algunas a grandes profundidades, las ballenas son mamíferos que evolucionaron adaptándose a la vida en el mar.",
        "Ballena franca austral (Eubalaena australis)"
    )
}

const delfin = () => {
    funcion(
        "https://www.laprensa.hn/binrepository/1020x765/0c93/1020d580/none/11004/RNMS/delfinbuena_LP755588_MG79137261.jpg",
        "Delfín Nariz de Botella es una de las especies de delfín más conocidas. Tiene talla"
        +"mediana, cuerpo robusto, aleta dorsal alta, falcada y está bien definida. Las aletas"
        +"pectorales son alargadas y con forma de paletas. Son grandes acróbatas y excelentes"
        +"nadadores."
        +"Las variaciones en la forma de la aleta dorsal junto con cicatrices y otras marcas en la piel"
        +"ayudan a identificar a diferentes individuos. La coloración de la piel va de gris claro a"
        +"negro en el dorso, con un tono más claro en los flancos y es blanco o rosáceo el vientre"
        +"(posee una definida demarcación entre el melón y el hocico corto."
        +"El largo de los adultos fluctúa entre 2 a 3.8 metros, el peso entre los 220 y 500"
        +"kilógramos, lo que varía geográficamente lo mismo que la talla.",
        "Delfín Nariz de Botella"
    )
}

const orca = () => {
    funcion(
        "https://t1.ev.ltmcdn.com/es/posts/5/9/6/diferencia_entre_orca_y_falsa_orca_1695_orig.jpg",
        "La orca falsa es uno de los miembros más grandes de la familia Delphinidae, los machos llegan a alcanzar hasta 6 m de longitud, mientras que las hembras llegan casi a los 5 m. Esta especie es en su mayoría negra o gris oscuro, usualmente con una coloración más clara en la superficie ventral entre las aletas pectorales. Son reconocidas fácilmente con su cabeza redonda, por su aleta dorsal pequeña y falcada localizada en la mitad del dorso y por sus aletas pectorales distintivas, las cuales cuentan con una protuberancia en el borde anterior. Existe un dimorfismo sexual en esta especie, los machos presentan un melón que se extiende más hacia la parte anterior de la cabeza que en el caso de las hembras. Los dientes de la especie son grandes y cónicos, con un total de 7 a 11 dientes en la maxila y de 8 a 12 en la mandíbula inferior.",
        "Pseudorca crassidens (Falsa Orca)"
    )
}

const manatie = () => {
    funcion(
        "http://estaticos.efe.com/efecom/recursos2/imagen.aspx?lVW2oAh2vjPcAkWqg0zKljk0SoS48qHZQ4TncnkXVSTX-P-2bAoG0sxzXPZPAk5l-P-2fU5UzMVwEdCkEK9K41iv5TNmEA-P-3d-P-3d",
        "El manatí es una criatura fascinante, es el animal herbívoro acuático considerado el más grande del mundo.  Pertenecientes a la familia Trichechidae, también son conocidos como vacas marinas. Viven en aguas dulces y saladas de América y África. Pueden llegar a pesar hasta 500 kg y medir de 3 a 6 metros. Su pariente terrestre más cercano es el elefante, por lo que los manatíes también poseen una memoria geográfica impresionante, son capaces de tener un mapa geográfico muy amplio que les permite desplazarse grandes distancias. También son animales muy longevos pues su vida puede durar hasta 60 años. En nuestro país habitan caletas y cenotes de Playa del Carmen y Tulum, aunque también tienen presencia en Veracruz, Tabasco, Chiapas, Campeche y Yucatán.",
        "Trichechidae"
    )
}

const calderon = () => {
    funcion(
        "https://upload.wikimedia.org/wikipedia/commons/6/61/Grampus_griseus.jpg",
        `El calderón gris, delfín gris o delfín de Risso (Grampus griseus) es una especie de cetáceo odontoceto de la familia Delphinidae. Su nombre científico significa, en latín "pez grande y gris". Es un delfín de tamaño más bien grande (3,5 m de longitud máxima y 350 kg de peso) que se reconoce por su cabeza globosa y por las abundantes marcas alargadas de color blanco que, aunque parecen cicatrices, ya se encuentran presentes en los recién nacidos. A menudo, especialmente en los animales adultos, la coloración de la región cefálica es más clara que la del resto del cuerpo y, a distancia, algunos ejemplares pueden incluso llegar a parecer blancos.`,
        "Calderón gris (Grampus griseus)"
    )
}

const tiburon = () => {
    funcion(
        "https://cram.org/wp-content/uploads/2019/09/tiburon-blanco-white-shark-1.jpg",
        "El tiburón blanco es un tiburón grande, normalmente mide entre 500 y 580 cm, siendo las hembras mayores que los machos. Tiene forma fusiforme, con ojos negros, hocico cónico y achatado. Sus dientes son grandes, triangulares y serrados."
        +"Su coloración es gris marronosa por la parte dorsal, más clara en los lados y blanca por la parte ventral. La primera aleta dorsal es grande y triangular, la segunda y la anal son más pequeñas. La aleta caudal tiene forma semilunar. Delante de las aletas pectorales tiene las hendiduras branquiales que son largas.",
        "Tiburón blanco (Carcharodon carcharias)"
    )
}

const espada = () => {
    funcion(
        "https://marevision788.files.wordpress.com/2019/11/pez-espada-xiphias-gladius-cl..jpg",
        "El pez espada es agresivo y voraz. Se alimenta de moluscos, diferentes tipos de peces y cefalópodos."
        +"Este pez alcanza la madurez sexual entre los 2 y los 4 años, durante el periodo de reproducción los machos nadan alrededor de las hembras y fecundan los millones de huevos de 1.6 a 1.8 mm, que las hembras ponen en varias puestas sucesivas, los progenitores seguirán cerca de ellos para ahuyentar a otros peces que intentarán comérselos, realiza la reproducción en las aguas más cálidas y tiene lugar de junio a septiembre.",
        "Pez espada (Xiphias gladius)"
    )
}

const tortuga2 = () => {
    funcion(
        "https://fundacion-biodiversidad.es/sites/default/files/noticias/_67.jpg",
        "La tortuga laúd es la única representante de la familia Dermochelyidae. Es la tortuga más grande del mundo, podría llegar a 3 m y pesar 800 Kg, aunque la media está en unos 2 m de longitud y 500 kg de peso."
        +"Son fácilmente reconocibles por la forma de su caparazón, que se estrecha mucho por la parte posterior. El caparazón, está formado por placas osteodérmicas unidas por una matriz cartilaginosa y recubierta por un tejido dérmico grueso dándole un aspecto coriáceo. A lo largo de su caparazón presenta 7 crestas longitudinales y 5 en el plastrón muy evidentes en las crías."
        +"Su coloración es predominantemente oscura, casi negra, con unas manchas blanquezinas dispersas más abundantes en el cuello, la zona ventral y en las aletas. Las crías prácticamente negras presentan los bordes de las aletas de color blanco."
        +"La cabeza de la tortuga laúd es pequeña, redondeada y escamosa. Su pico es más débil respecto las otras especies pero muy afilado, la mandíbula superior presenta tres incisiones triangulares que encajan con un único saliente de la mandíbula inferior y al cerrar la boca se dibuja una forma de W."
        +"Las aletas anteriores son alargadas y en los adultos pueden ser igual o más largas que la mitad de la longitud de su caparazón, otra característica diferenciadora de esta especie es la ausencia de uñas en las aletas. Como ocurre con el resto de tortugas marinas ni su cabeza ni sus extremidades son retractiles.",
        "Tortuga laud"
    )
}

const nemo = () => {
    funcion(
        "https://puebla-es.acuariomichin.com/wp-content/uploads/2020/05/descubre-pez-payaso-portada.jpg",
        "El pez payaso, reconocido fácilmente por sus brillantes colores blancos y anaranjados, es miembro del orden Perciformes, de la familia Pomacentridae y de la subfamilia Amphiprioninae. También es llamado pez anémona, y en realidad se le llama así a todos los pertenecientes a dicha subfamilia. Por lo tanto, existen 30 especies de pez payaso."
        +"Los peces payaso miden de 10 a 18 centímetros de longitud, siendo los machos más pequeños que las hembras. La coloración del cuerpo depende de la especie pero tienden a tener tonos amarillos, rojos, rosas, naranjas e incluso negruzcos, con 3 franjas blancas situadas en la cabeza, en la cola y en la región central del cuerpo. El borde de las aletas es negro.",
        "Pez payaso (Amphiprioninae)"
    )
}

const dory = () => {
    funcion(
        "http://pecesdelmar.com/wp-content/uploads/2020/05/Pez-cirujano-1.jpg",
        "Los cirujanos azules son pequeños peces que viven en arrecifes de coral en el Indo-Pacífico. Los animales son fáciles de divisar gracias a su coloración vibrante característica que consta de colores azul real y amarillo canario."
        +"Los notorios patrones de color del cirujano azul no son tan fiables como crees. Por ejemplo, la coloración de los cirujanos azules jóvenes es amarilla brillante. Y, de adultos, el color de los peces cambia a azul más oscuro y violetas como señal de estrés." 
        +"Los cirujanos azules pueden parecer relativamente inofensivos, pero, frente al peligro, pueden mostrar un par de espinas venenosas afiladas en cada una de sus colas. Luego, los peces mueven sus cuerpos de lado a lado, amenazando con acuchillar a sus depredadores con sus aguijones tóxicos."
        +"Además, se sabe que aquellos que han consumido cirujanos azules han desarrollado una enfermedad grave que es transmitida por los alimentos denominada ciguatera. Entre los síntomas podemos encontrar vómitos, diarrea y mareos. La ciguatera se da cuando los cirujanos azules consumen grandes cantidades de criaturas denominadas dinoflagelados, que liberan diferentes tipos de toxinas que se acumulan en el cuerpo del cirujano.",
        "Pez cirujano azul (Paracanthurus hepatus)"
    )
}

const copper = () => {
    funcion(
        "https://www.researchgate.net/profile/Karin-Kjernsmo/publication/286938222/figure/fig1/AS:613946620907531@1523387689267/Copperband-butterflyfish-Chelmon-rostratus-with-a-posteriorly-located-eyespot-and-a.png",
        "La familia Chaetodontidae o peces mariposa son un grupo de peces conspicuos tropicales marinos. Encontrados mayormente en arrecifes del Atlántico, Índico y Pacífico, son algo pequeños, de 12 a 22 cm de longitud (las más grandes especies, como Chaetodon lineolatus, llegan a 3 dm). Hay aproximadamente 127 especies en doce géneros. No deben confundirse con Pantodon buchholzi, de la familia Pantodontidae.",
        "Chelmon rostratus - Pez Mariposa(Copperband butterflyfish)"
    )
}

const centropy = () => {
    funcion(
        "https://www.acuarios.casa/wp-content/uploads/2020/04/Centropyge-Bispinosa2.jpg",
        "El Centropyge bispinosa es una de las especies de peces ángeles enanos más populares, diferenciable de los peces mariposas por la espina que presenta debajo del opérculo, justo en la parte inferior de la branquia. Esta popularidad es debido a su coloración en tonos naranjas y azules con iridiscencias, a su compatibilidad con los invertebrados sésiles y a su precio moderado."
        +"Es una especie poco agresiva que suele tolerar a los compañeros de acuario, aunque presentará en un primer momento actitudes",
        "Centropyge bispinosa"
    )
}

const dottyback = () => {
    funcion(
        "https://www.frankbaensch.com/wp-content/uploads/2018/09/orchid-dottyback-20170604-143050.jpg",
        "Pseudochromis Fridmani es un pez de pequeñas dimensiones, de cuerpo alargado. Su llamativa coloración purpura lo hace visible a gran distancia. Tiene una pequeña mancha oscura en su opérculo y una línea oscura que comienza en el morro, atraviesa el ojo y termina en el canto superior del opérculo."
        +"Es uno de los peces mas pacíficos que hay, no agrede a ningún otro pez, pero puede mostrar un poco de agresión hacia los peces de tamaño similar forma y color, pero sólo para ahuyentar a los territorios que reclaman."
        +"Si se desea tener una pareja o un cardumen (más de 10) los individuos deben ser introducidos al mismo tiempo.",
        "Pseudochromis Fridmani"
    )
}

const alga = () => {
    funcion(
        "https://phantom-elmundo.unidadeditorial.es/9c60c4ca21a291775d07baff376b3436/crop/0x38/880x623/f/webp/assets/multimedia/imagenes/2020/09/16/16002379018058.jpg",
        "Bajo el nombre de alga marina se agrupa una gran variedad de organismos, unicelulares o pluricelulares, de ambientes acuáticos o húmedos que tienen en común el hecho de ser fotosintéticos y, a diferencia de las plantas, no tienen unos verdaderos tejidos diferenciados tales como raíz, tallo y hojas y no producen flores ni semillas. Se trata de un grupo de organismos muy heterogéneo, con distinta historia evolutiva, aunque con una función ecológica parecida."
        +"Presentan clorofila y pueden tener otros pigmentos accesorios. Su coloración, por tanto, puede variar dependiendo de la presencia de unos u otros pigmentos."
        +"Igual que las plantas terrestres, son organismos autótrofos, capaces de producir materia orgánica a partir de CO2, agua y sales minerales y, como subproducto, producen oxígeno. Constituyen pues, el primer eslabón de la cadena trófica marina.",
        "Alga Marina"
    )
}

const plancton = () => {
    funcion(
        "https://www.elagoradiario.com/wp-content/uploads/2020/08/plancton-1140x600.jpg",
        "El Plancton es una comunidad de organismos acuáticos vivos que existen tanto suspendidos en la columna de agua o flotando cerca de la superficie con muy poca o ninguna locomoción. Estos organismos están a la merced de las corrientes y vagan a donde quiera que el flujo del agua los lleve. (La palabra plancton viene de la palabra Griega plancton, que significa derivar). No obstante que la mayoría de los organismos del plancton son muy pequeños, algunos son suficientemente grandes para ser vistos a simple vista.",
        "Plancton"
    )
}

const pardas = () => {
    funcion(
        "https://personal.us.es/zarco/carromzar/Botanica_I/Fotos_Botanica_I/Dictyota_dichotoma2.jpg",
        "Las algas pardas o feofíceas o marrones (clase Phaeophyceae) son un grupo de algas incluido en el reino Protista. No son verdaderas plantas pues se clasifican en el grupo Heterokonta. Comprende unos 265 géneros con unas 1500-2000 especies,[2]​ principalmente marinos pues solo seis géneros son de agua dulce. Las algas pardas son los principales productores primarios de varias comunidades de animales y protistas.",
        "Algas pardas"
    )
}

const patricio = () => {
    funcion(
        "https://themorninroutine.files.wordpress.com/2021/04/9gnyurl.jpg?w=1568",
        "Se conoce popularmente como estrellas de mar a una clase (Asteroidea) de seres vivos submarinos e invertebrados, pertenecientes al filo de los equinodermos (como los erizos de mar), cuyos cuerpos están formados por cinco o más brazos largos unidos a un disco central, otorgándoles así la apariencia de una estrella."
        +"Se han identificado hasta 1600 especies diferentes en esta misma clase de animales, distribuidos a lo largo del mundo en distintos niveles de profundidad oceánica."
        +"Se trata de uno de los habitantes más comunes y conocidos del suelo marino, que suelen aparecer en diversos tamaños y colores."
        +"En la mayoría de las culturas humanas se consideran seres atractivos, inofensivos, que constituyen un símbolo de la vida marina y de las zonas costeras.",
        "Estrella de mar"
    )
}

const bob = () => {
    funcion(
        "https://smoda.elpais.com/wp-content/uploads/2020/06/bob-esponja.jpg",
        "Las esponjas de mar son animales con una increíble capacidad de adaptación a una gran variedad de condiciones y situaciones, algo que para otros animales sería imposible. Son capaces de vivir aún cuando las aguas en las que habitan están contaminadas por hidrocarburos, metales u otras sustancias. Las esponjas de mar tienen pocos depredadores naturales, ya que presentan un duro esqueleto de espículas y una gran toxicidad. Es por esto que es posible encontrar esponjas marinas en casi todos los mares y océanos del mundo. Entre los sitios más conocidos por la gran cantidad de poríferos presentes están el Mediterráneo Occidental, el Golfo de México, el Caribe y los mares de Japón."
        +"Sin embargo, hay un factor que afecta especialmente a las esponjas de mar y ese es el cambio climático. El cambio climático mata a miles de esponjas marinas al año y algunas sufren adaptaciones para sobrevivir. Por ello, estos animales marinos se consideran un buen indicador de este cambio.",
        "Esponjas de mar"
    )
}