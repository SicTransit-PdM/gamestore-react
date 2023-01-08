import productsDB from './products.json'

export const products2 = productsDB

export const menus = [
    {
        id: 0,
        title: 'Inicio',
        href: '/'
    },
    {
        id: 1,
        title: 'Catalogo',
        href: '/catalogo'
    },
    {
        id: 3,
        title: 'Contacto',
        href: '/contacto'
    }
]

export const categories = [
    {
        id: 0,
        title: 'RPG'
    },
    {
        id: 1,
        title: 'Aventura'
    },
    {
        id: 2,
        title: 'Deportes',
    },
    {
        id: 3,
        title: 'Acción'
    },
    {
        id: 4,
        title: 'Estrategia'
    }
]

export const peso = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
})

export const fecha = new Intl.DateTimeFormat('en-US', {
    year: 'numeric', 
    month: '2-digit',
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit'
})

export const products = [
{
    id: 0,
    title: "FIFA 23",
    price: 8999,
    category: categories[2],
    descr: "FIFA 23 nos acerca a The World's Game con la tecnología HyperMotion2 que ofrece una experiencia de juego aún más realista, la FIFA World Cup™ masculina y femenina disponibles durante la temporada, clubes femeninos, función de juego cruzado y mucho más.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/51e0f86b7cb74096e922bd52653bd235.png",
    thumb: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/51e0f86b7cb74096e922bd52653bd235.png"
},
{
    id: 1,
    title: "Grand Theft Auto V",
    price: 636.74,
    category: categories[3],
    descr: "Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de 4K y disfrutar del juego a 60 fotogramas por segundo.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/0e040bec2a8d70eeff1f194b3bc9b318.png",
    thumb: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/0e040bec2a8d70eeff1f194b3bc9b318.png"
},
{
    id: 2,
    title: "Cyberpunk 2077",
    price: 2199,
    category: categories[1],
    descr: "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/4030e2eebb977639f8836aa25a293e40.png",
    thumb: "https://images-2.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_100.jpg"
},
{
    id: 3,
    title: "Naraka: Bladepoint",
    price: 1499,
    category: categories[1],
    descr: "NARAKA: BLADEPOINT es una experiencia de combate y acción para hasta 60 jugadores con enfrentamientos cuerpo a cuerpo basados en las artes marciales, movimientos que desafían la gravedad, héroes personalizables dotados de habilidades épicas y un gran arsenal de armas.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/fb47c25fc95d570c64da98d33a5cd5b1.jpg",
    thumb: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/fb47c25fc95d570c64da98d33a5cd5b1.jpg"
},
{
    id: 4,
    title: "Dead By Daylight",
    price: 999,
    category: categories[3],
    descr: "Dead by Daylight es un juego de horror de multijugador (4 contra 1) en el que un jugador representa el rol del asesino despiadado y los 4 restantes juegan como supervivientes que intentan escapar de él para evitar ser capturados y asesinados.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/e094a58c3495647287f75da5f6a7f6f3.png",
    thumb: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/e094a58c3495647287f75da5f6a7f6f3.png"
},
{
    id: 5,
    title: "DayZ",
    price: 2499.99,
    category: categories[3],
    descr: "¿Cuánto podrás sobrevivir en un mundo posapocalíptico? Es una tierra plagada de zombis infectados donde compites por recursos escasos. ¿Colaborarás con desconocidos y permaneceréis juntos? ¿O irás de lobo solitario para evitar traiciones? Esto es DayZ. Esta es tu historia.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/14427d5922b8d913b52a55ee875afe1b.png",
    thumb: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/14427d5922b8d913b52a55ee875afe1b.png"
},
{
    id: 6,
    title: "Total War: WARHAMMER III",
    price: 3920.99,
    category: categories[4],
    descr: "El final cataclísmico de la trilogía de Total War™: WARHAMMER® ha llegado. Reagrupa a tus fuerzas y adéntrate en el Reino del Caos, una dimensión de terrores horripilantes en la que se decidirá el destino del mundo. ¿Conquistarás a tus demonios... o los dirigirás?",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/167eca22b109f6b447bc834320c90a23.png",
    thumb: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/167eca22b109f6b447bc834320c90a23.png"
},
{
    id: 7,
    title: "Elden Ring",
    price: 6499,
    category: categories[1],
    descr: "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/13e02498b2ae3df0c9078db2f9eb9b2d.webp",
    thumb: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/13e02498b2ae3df0c9078db2f9eb9b2d.webp"
},
{
    id: 8,
    title: "Red Dead Redemption 2",
    price: 2499,
    category: categories[3],
    descr: "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era. También incluye acceso al mundo multijugador compartido de Red Dead Online.",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/8a27d37cd175197e87c02a7fc7eb192d.png",
    thumb: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/8a27d37cd175197e87c02a7fc7eb192d.png"
},
{
    id: 9,
    title: "Left 4 Dead 2",
    price: 129.99,
    category: categories[3],
    descr: "Ambientado en el apocalipsis zombi, Left 4 Dead 2 (L4D2) es la esperadísima secuela del galardonado Left 4 Dead, el juego cooperativo número 1 de 2008. Este FPS cooperativo de acción y terror os llevará a ti y a tus amigos por las ciudades, pantanos y cementerios del Sur Profundo, desde Savannah hasta Nueva Orleans, a lo largo de cinco extensas campañas",
    img: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/248fc45afe6980b6b520b592ff9de696.png",
    thumb: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/248fc45afe6980b6b520b592ff9de696.png"
},
{
    id: 10,
    title: 'The Elder Scrolls V: Skyrim',
    price: 1999,
    category: categories[0],
    descr: 'Skyrim Special Edition, ganador de más de 200 premios al "Juego del año", da vida a la fantasía épica con un nivel de detalle asombroso. La Special Edition incluye el juego aclamado por la crítica y los complementos, así como nuevas características: gráficos y efectos renovados, rayos crepusculares volumétricos, reflejos en tiempo real, profundidad de campo dinámica y muchas más. Además, Skyrim Special Edition lleva todo el poder de los mods a PC y Xbox One: nuevas misiones, entornos, personajes, diálogos, armaduras y armas, entre otras muchas cosas. ¡Con los mods, la experiencia no tiene límites!',
    img: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/81eb8c3166ba84d9de66eb843738134b.png',
    thumb: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/81eb8c3166ba84d9de66eb843738134b.png',
},
{
    id: 11,
    title: 'Victoria 3',
    price: 2499,
    category: categories[4],
    descr: 'Paradox Development Studio te invita a formar tu sociedad ideal en el tumulto del siglo XIX, con todas sus emociones y transformaciones. Equilibra los intereses contrapuestos de tu sociedad y hazte un hueco en Victoria 3, uno de los juegos más esperados de la historia de Paradox. Lidera a docenas de naciones de todo el mundo desde 1836 hasta 1936. Agrícola o industrial, tradicional o radical, pacífica o expansionista... Tú eliges.',
    img: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/5aa152afe32e9c9ad69dc6f137773bfb.png',
    thumb: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/5aa152afe32e9c9ad69dc6f137773bfb.png',
}
]