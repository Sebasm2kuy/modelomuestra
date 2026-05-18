// ============================================================
// CONFIGURACIÓN CENTRAL — Editá todo desde acá o desde /admin
// ============================================================

export interface TimelineEvent {
  hora: string
  titulo: string
  desc: string
  icono: string
}

export interface GalleryPhoto {
  webp: string
  fallback: string
}

export interface SiteConfig {
  evento: {
    tipo: string
    nombre: string
    apellido: string
    apodo: string
    fecha: string
    anio: string
    fechaEvento: string
    lugar: string
    ubicacion: string
    direccion: string
    mapsUrl: string
    hashtag: string
    hashtagUrl: string
  }
  dedicatoria: {
    cita: string
    cuerpo: string
    firma: string
  }
  timeline: {
    titulo: string
    subtitulo: string
    eventos: TimelineEvent[]
  }
  galeria: {
    titulo: string
    subtitulo: string
    botonSubir: string
    fotos: GalleryPhoto[]
  }
  musica: {
    titulo: string
    subtitulo: string
    playlistUrl: string
    embedUrl: string
    botonAgregar: string
    botonSpotify: string
  }
  rsvp: {
    titulo: string
    subtitulo: string
    fechaLimite: string
    fechaLimiteFull: string
    googleSheetUrl: string
    hostPhone: string
    regalos: {
      titulo: string
      subtitulo: string
      abitab: { titulo: string; numero: string }
      miDinero: { titulo: string; numero: string }
    }
  }
  footer: {
    apodo: string
    ubicacion: string
    frase: string
  }
  invitacion: {
    imagen: string
    imagenFallback: string
    textoAbrir: string
  }
  countdown: {
    titulo: string
    labels: { D: string; H: string; M: string; S: string }
    botonCalendario: string
    calendarioTitulo: string
    calendarioLocation: string
    calendarioDetalles: string
  }
  fondo: {
    fotos: string[]
  }
  colores: {
    principal: string
    dorado: string
    doradoClaro: string
    marfil: string
    fondo: string
  }
  estilos: {
    fuenteTitulo: string
    fuenteCuerpo: string
    fuenteCursiva: string
    modeloReloj: string
    estiloTarjetas: string
    estiloBotones: string
  }
}


// ============================================================
// VALORES — Auto-generated from admin panel
// ============================================================
const config: SiteConfig = {
  "evento": {
    "tipo": "Mis XV Años",
    "nombre": "Valentina",
    "apellido": "Morales",
    "apodo": "Vale",
    "fecha": "Sábado 14 de Marzo",
    "anio": "2027",
    "fechaEvento": "2027-03-14 21:30",
    "lugar": "Salón La Terraza",
    "ubicacion": "Punta del Este",
    "direccion": "Av. Gorlero 1025, Punta del Este",
    "mapsUrl": "https://maps.app.goo.gl/abc123XYZ",
    "hashtag": "#ValentinaXV2027",
    "hashtagUrl": "https://www.instagram.com/explore/tags/ValentinaXV2027/"
  },
  "dedicatoria": {
    "cita": "La vida no se mide por los respiramos que tomamos, sino por los momentos que nos dejan sin aliento.",
    "cuerpo": "Quiero que cada uno de ustedes sea parte de esta celebración tan importante para mí. Los espero con los brazos abiertos para vivir juntos una noche mágica llena de música, risas y recuerdos inolvidables.",
    "firma": "Valentina"
  },
  "timeline": {
    "titulo": "La Noche",
    "subtitulo": "Cada momento cuenta",
    "eventos": [
      {
        "hora": "21:30",
        "titulo": "Bienvenida",
        "desc": "Llegada y recepción de invitados",
        "icono": "🥂"
      },
      {
        "hora": "22:30",
        "titulo": "Mi Ingreso",
        "desc": "El momento más esperado",
        "icono": "👑"
      },
      {
        "hora": "00:00",
        "titulo": "Brindis",
        "desc": "Brindemos juntos",
        "icono": "🍾"
      },
      {
        "hora": "01:30",
        "titulo": "DJ & Fiesta",
        "desc": "La noche no para",
        "icono": "🎵"
      }
    ]
  },
  "galeria": {
    "titulo": "Galería",
    "subtitulo": "Momentos que hacen esta celebración inolvidable",
    "botonSubir": "Dejale un recuerdo",
    "fotos": [
      {
        "webp": "/modelomuestra/gallery/gallery1.webp",
        "fallback": "/modelomuestra/gallery/gallery1.jpg"
      },
      {
        "webp": "/modelomuestra/gallery/gallery2.webp",
        "fallback": "/modelomuestra/gallery/gallery2.jpg"
      }
    ]
  },
  "musica": {
    "titulo": "Nuestra Playlist",
    "subtitulo": "Escuchá nuestra selección y ayudanos con la música de la noche",
    "playlistUrl": "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
    "embedUrl": "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0",
    "botonAgregar": "Agregar canciones",
    "botonSpotify": "Abre en Spotify y suma tus temas favoritos"
  },
  "rsvp": {
    "titulo": "Confirmar",
    "subtitulo": "Espero poder contar contigo para hacer de esta noche algo inolvidable.",
    "fechaLimite": "01/03",
    "fechaLimiteFull": "01/03/2027",
    "googleSheetUrl": "https://script.google.com/macros/s/EXAMPLE_DEMO_URL/exec",
    "hostPhone": "59899123456",
    "regalos": {
      "titulo": "Regalos",
      "subtitulo": "Si deseas tener un detalle conmigo, te dejo las opciones donde podés hacerlo.",
      "abitab": {
        "titulo": "Cuenta Abitab",
        "numero": "398201"
      },
      "miDinero": {
        "titulo": "Cuenta Mi Dinero",
        "numero": "8715293"
      }
    }
  },
  "footer": {
    "apodo": "Vale",
    "ubicacion": "Punta del Este • Uruguay • 2027",
    "frase": "Una noche soñada, hecha realidad"
  },
  "invitacion": {
    "imagen": "/modelomuestra/invitacion-vertical.webp",
    "imagenFallback": "/modelomuestra/invitacion-vertical.png",
    "textoAbrir": "Toca para abrir"
  },
  "countdown": {
    "titulo": "El tiempo vuela...",
    "labels": {
      "D": "Días",
      "H": "Horas",
      "M": "Min",
      "S": "Seg"
    },
    "botonCalendario": "Agregar al calendario",
    "calendarioTitulo": "XV Años de Valentina",
    "calendarioLocation": "Salón La Terraza, Av. Gorlero 1025, Punta del Este",
    "calendarioDetalles": "XV Años de Valentina Morales\nSalón La Terraza - Av. Gorlero 1025, Punta del Este\n21:30 hs\n\n¡Nos vemos!"
  },
  "fondo": {
    "fotos": [
      "/modelomuestra/gallery/gallery1.webp",
      "/modelomuestra/gallery/gallery2.webp"
    ]
  },
  "colores": {
    "principal": "#3d0202",
    "dorado": "#b8860b",
    "doradoClaro": "#d4af37",
    "marfil": "#fdfcfb",
    "fondo": "#050505"
  },
  "estilos": {
    "fuenteTitulo": "playfair",
    "fuenteCuerpo": "montserrat",
    "fuenteCursiva": "alex-brush",
    "modeloReloj": "classic",
    "estiloTarjetas": "gold-border",
    "estiloBotones": "gold-gradient"
  }
} as SiteConfig

export default config
