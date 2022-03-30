const grid_speakers = document.getElementById('cp-speakers-grid')

const info_speakers = [
    {
        'id': 1,
        'nombre': 'Andrés Ordóñez',
        'foto': 'img/pro-1.png',
        'cargo': 'Chief Creative Officer',
        'empresa': 'FCB Chicago'
    },

    {
        'id': 2,
        'nombre': 'Ciro Sarmiento',
        'foto': 'img/pro-2.png',
        'cargo': 'Chief Creative Officer',
        'empresa': 'Weber Shandwick'
    },

    {
        'id': 3,
        'nombre': 'Juan Carlos Ortiz',
        'foto': 'img/pro-3.png',
        'cargo': 'Presidente y Director Creativo',
        'empresa': 'DDB Américas'
    },

    {
        'id': 4,
        'nombre': 'Juan Isaza',
        'foto': 'img/pro-4.png',
        'cargo': 'Vicepresidente de estrategia e innovación',
        'empresa': 'DDB'
    },

    {
        'id': 5,
        'nombre': 'Manuel Bordé',
        'foto': 'img/pro-5.png',
        'cargo': 'Chief Creative Officer Global',
        'empresa': 'VMLY&R COMMERCE'
    },

    {
        'id': 6,
        'nombre': 'Mauricio Sabogal',
        'foto': 'img/pro-6.png',
        'cargo': 'Presidente',
        'empresa': 'SAB Media Group LLC'
    }
]

info_speakers.forEach(element => {
    grid_speakers.innerHTML += `
        <div class="cp-speakers-grid__item mb-4">
            <a href="#" data-bs-toggle="modal" data-bs-target="#speaker-${element.id}" class="cp-section-4__global-link d-flex flex-column align-items-center justify-content-center">
                <div class="cp-section-4__cont-pro px-4 d-flex flex-column align-items-center justify-content-center">
                <div class="cp-section-4__cont-img">
                    <img src="${element.foto}" alt="" class="cp-section-4__cont-img__img-pro" />
                </div>
                <span class="cp-section-4__name heading-3">${element.nombre}</span>
                <span class="cp-section-4__carrer parrafos">${element.cargo}</span>
                <span class="cp-section-4__company parrafos">${element.empresa}</span>
                <button class="cp-section-4__link-bio">biografía</button>
                </div>
            </a>
        </div>
    `
});

const grid_speakers_2 = document.getElementById('cp-speakers-2')

const info_speakers_2 = [
    {
        'id': 7,
        'nombre': 'Alberto Triana Wannoni',
        'foto': 'img/entrevistados2/alberto-triana.png',
        'cargo': 'Director Creativo',
        'empresa': 'VMLY&R Commerce',
        'ciudad': 'New York, USA'
    },

    {
        'id': 8,
        'nombre': 'Angélica Galvis Díaz',
        'foto': 'img/entrevistados2/pro-2.jpg',
        'cargo': 'Head of Art',
        'empresa': 'VMLY&R Commerce',
        'ciudad': 'Cleveland, USA'
    },

    {
        'id': 9,
        'nombre': 'Christian Mondragón',
        'foto': 'img/entrevistados2/pro-3.png',
        'cargo': 'Creative Director',
        'empresa': 'Saatchi & Saatchi Associate',
        'ciudad': 'LA, California, USA'
    },

    {
        'id': 10,
        'nombre': 'Camilo Ruano',
        'foto': 'img/entrevistados2/pro-4.jpg',
        'cargo': 'Associate Creative Director',
        'empresa': 'DDB Chicago',
        'ciudad': 'Chicago, USA'
    },

    {
        'id': 11,
        'nombre': 'Carolina Arenas',
        'foto': 'img/entrevistados2/pro-5.png',
        'cargo': 'Gerente de Ventas, LATAM',
        'empresa': 'Audio Network',
        'ciudad': 'New York, USA'
    },

    {
        'id': 12,
        'nombre': 'Clauria Marcela Murillo Ruiz',
        'foto': 'img/entrevistados2/pro-6.png',
        'cargo': 'Directora Creativa Latam y Caribe',
        'empresa': 'RT& PUERTO RICO/ SUPER HEARTS',
        'ciudad': 'San Juan, Puerto Rico'
    },

    {
        'id': 13,
        'nombre': 'Cristian Duran Londoño',
        'foto': 'img/entrevistados2/pro-7.png',
        'cargo': 'Creative Strategist',
        'empresa': 'Meta',
        'ciudad': 'Chicago, USA'
    },

    {
        'id': 14,
        'nombre': 'Daniel Osorio',
        'foto': 'img/entrevistados2/pro-8.png',
        'cargo': 'Senior Copywriter',
        'empresa': 'FCB Chicago',
        'ciudad': 'Chicago, USA'
    },

    {
        'id': 15,
        'nombre': 'Daniel Zambrano Ayala',
        'foto': 'img/entrevistados2/pro-9.png',
        'cargo': 'Director en las productoras y "Associate Producer"',
        'empresa': 'Carbo Films en LA, Visionarist (NY)/ "Narrative Ads"',
        'ciudad': 'New York, USA'
    },

    {
        'id': 16,
        'nombre': 'Darío Campos',
        'foto': 'img/entrevistados2/pro-10.png',
        'cargo': 'Director Creativo',
        'empresa': 'AlmaDDB',
        'ciudad': 'Miami, USA'
    },

    {
        'id': 17,
        'nombre': 'Diego Almanza Barrera',
        'foto': 'img/entrevistados2/pro-11.png',
        'cargo': 'Creative Lead',
        'empresa': 'Snapchat',
        'ciudad': 'LA, California. USA'
    },

    {
        'id': 18,
        'nombre': 'Elissa Blanco',
        'foto': 'img/entrevistados2/pro-12.png',
        'cargo': 'Sr. Account Executive',
        'empresa': 'Casanova // McCANN',
        'ciudad': 'LA, California. USA'
    },

    {
        'id': 19,
        'nombre': 'Federico Giraldo',
        'foto': 'img/entrevistados2/pro-13.png',
        'cargo': 'Co-fundador & Director Creativo',
        'empresa': 'El Puerto',
        'ciudad': 'Miami, USA'
    },

    {
        'id': 20,
        'nombre': 'Felipe Molina',
        'foto': 'img/entrevistados2/pro-14.png',
        'cargo': 'Senior Copywriter',
        'empresa': 'VaynerMedia New York',
        'ciudad': 'New York, USA'
    },

    {
        'id': 21,
        'nombre': 'Fernando Hernández',
        'foto': 'img/entrevistados2/pro-15.png',
        'cargo': 'Executive Creative Director',
        'empresa': 'R/GA',
        'ciudad': 'New York, USA'
    },

    {
        'id': 22,
        'nombre': 'Gustavo Zapata Restrepo',
        'foto': 'img/entrevistados2/pro-16.png',
        'cargo': 'Head of Art',
        'empresa': 'Dieste Inc',
        'ciudad': 'Dallas TX, USA'
    },

    {
        'id': 23,
        'nombre': 'Iván Rivera Vega',
        'foto': 'img/entrevistados2/pro-17.jpg',
        'cargo': 'Associative Creative Director',
        'empresa': 'DDB Chicago',
        'ciudad': 'Chicago, USA'
    },

    {
        'id': 24,
        'nombre': 'John Villafañe',
        'foto': 'img/entrevistados2/pro-18.png',
        'cargo': 'Director Asociado',
        'empresa': 'Publicis Commerce',
        'ciudad': 'Miami, USA'
    },

    {
        'id': 25,
        'nombre': 'Jonathan Castillo Jaramillo',
        'foto': 'img/entrevistados2/pro-19.png',
        'cargo': 'Copy Senior',
        'empresa': 'Casanova McCann',
        'ciudad': 'Costa Mesa-California, USA'
    },

    {
        'id': 26,
        'nombre': 'Jorge Becerra Rivera',
        'foto': 'img/entrevistados2/pro-20.png',
        'cargo': 'Strategic Planning Director',
        'empresa': 'Alma',
        'ciudad': 'Miami, USA'
    },

    {
        'id': 27,
        'nombre': 'Jorge Jácome',
        'foto': 'img/entrevistados2/pro-21.png',
        'cargo': 'Creative Director',
        'empresa': 'Zubi Adv',
        'ciudad': 'Miami, USA'
    },

    {
        'id': 28,
        'nombre': 'Juan David Arboleda',
        'foto': 'img/entrevistados2/pro-22.png',
        'cargo': 'Associate Creative Director',
        'empresa': '180LA',
        'ciudad': 'LA, California. USA'
    },

    {
        'id': 29,
        'nombre': 'Juan Sebastian Moreno',
        'foto': 'img/entrevistados2/pro-23.png',
        'cargo': 'Creative Director',
        'empresa': 'MullenLowe USA Associate',
        'ciudad': 'New York, USA'
    },

    {
        'id': 30,
        'nombre': 'Luis Gabriel Ramírez',
        'foto': 'img/entrevistados2/pro-24.jpg',
        'cargo': 'Creative lead',
        'empresa': 'Whirlpool',
        'ciudad': 'Chicago, USA'
    },

    {
        'id': 31,
        'nombre': 'Marco Antonio Muñoz',
        'foto': 'img/entrevistados2/pro-25.jpg',
        'cargo': 'Director Creativo',
        'empresa': '180LA',
        'ciudad': 'Long Beach, California, USA'
    },

    {
        'id': 32,
        'nombre': 'Maria Alejandra Urbina',
        'foto': 'img/entrevistados2/pro-26.png',
        'cargo': 'Executive Plannjng Director',
        'empresa': 'Publicis Commerce',
        'ciudad': 'Dallas, TX USA'
    },

    {
        'id': 33,
        'nombre': 'Max Gomez Montejo',
        'foto': 'img/entrevistados2/pro-27.jpg',
        'cargo': 'Growth Officer',
        'empresa': 'Ariadna Communications Group',
        'ciudad': 'Miami, USA'
    },

    {
        'id': 34,
        'nombre': 'Natalia Bernal',
        'foto': 'img/entrevistados2/pro-28.jpg',
        'cargo': 'Directora de Arte Senior',
        'empresa': 'Digitas Health de Publicis',
        'ciudad': 'New York, USA'
    },

    {
        'id': 35,
        'nombre': 'Nelson Javier Beltran Tolosa',
        'foto': 'img/entrevistados2/pro-29.jpg',
        'cargo': 'Director creativo, copywriter, storyteller',
        'empresa': 'Freelance',
        'ciudad': 'LA, California. USA'
    },

    {
        'id': 36,
        'nombre': 'Nicolas Mejia',
        'foto': 'img/entrevistados2/pro-30.png',
        'cargo': 'Global UX Design Manager',
        'empresa': 'Shopify',
        'ciudad': 'Seattle, USA'
    },

    {
        'id': 37,
        'nombre': 'Ricardo Uribe Peláez',
        'foto': 'img/entrevistados2/pro-31.png',
        'cargo': 'Director Creativo Asociado',
        'empresa': 'Goodby Silverstein & Partners',
        'ciudad': 'San Francisco, USA'
    },

    {
        'id': 38,
        'nombre': 'Santiago Losada',
        'foto': 'img/entrevistados2/pro-32.png',
        'cargo': 'Creative Lead',
        'empresa': 'Zemoga',
        'ciudad': 'New York, USA'
    },

    {
        'id': 39,
        'nombre': 'Sebastián Cuevas Iriarte',
        'foto': 'img/entrevistados2/pro-33.png',
        'cargo': 'Associate Creative Director',
        'empresa': 'VMLY&R Commerce',
        'ciudad': 'Chicago, USA'
    },

    {
        'id': 40,
        'nombre': 'Sergio Jara',
        'foto': 'img/entrevistados2/pro-34.png',
        'cargo': 'Senior designer / Art director',
        'empresa': 'Minds + Assembly',
        'ciudad': 'New York, USA'
    },

    {
        'id': 41,
        'nombre': 'Sergio León Novoa',
        'foto': 'img/entrevistados2/pro-35.png',
        'cargo': 'SVP, Content & Experience',
        'empresa': 'VMLY&R Commerce Chicago',
        'ciudad': 'Chicago, USA'
    },

    {
        'id': 42,
        'nombre': 'Victor Roa',
        'foto': 'img/entrevistados2/pro-36.jpg',
        'cargo': 'Director Creativo',
        'empresa': 'BBDO NY',
        'ciudad': 'New York, USA'
    },

    {
        'id': 43,
        'nombre': 'Daniel Jaramillo',
        'foto': 'img/entrevistados2/pro-37.png',
        'cargo': 'Senior Art Director',
        'empresa': 'GUT',
        'ciudad': 'New York, USA'
    },

    {
        'id': 44,
        'nombre': 'Natalia Casas',
        'foto': 'img/entrevistados2/pro-38.png',
        'cargo': 'Director, Brand Strategy',
        'empresa': 'Doner',
        'ciudad': 'New York, USA'
    },

    {
        'id': 45,
        'nombre': 'Lucho Sanchez',
        'foto': 'img/entrevistados2/pro-39.png',
        'cargo': 'Creative Director',
        'empresa': 'Denny´s',
        'ciudad': 'Dallas, Texas, USA'
    },

    {
        'id': 46,
        'nombre': 'Matias Jaramillo',
        'foto': 'img/entrevistados2/pro-40.png',
        'cargo': 'Creative Director of Digital Initiatives',
        'empresa': 'Dieste Inc',
        'ciudad': 'Dallas, Texas, USA'
    },

    {
        'id': 47,
        'nombre': 'Rafael Reina',
        'foto': 'img/entrevistados2/pro-41.png',
        'cargo': 'Chief Creative Officer',
        'empresa': 'DLC Ogilvy Puerto Rico',
        'ciudad': 'Puerto Rico- San Juan'
    },

    {
        'id': 48,
        'nombre': 'Lukas Calderón',
        'foto': 'img/entrevistados2/pro-42.png',
        'cargo': 'Chief Creative Officer',
        'empresa': 'Badillo Saatchi & Saatchi',
        'ciudad': 'Puerto Rico, San Juan'
    },

    {
        'id': 49,
        'nombre': 'Mauricio Cortés',
        'foto': 'img/entrevistados2/pro-43.png',
        'cargo': 'Director Creativo',
        'empresa': 'DDB Latina PR',
        'ciudad': 'Puerto Rico- San Juan'
    },

    {
        'id': 50,
        'nombre': 'Santiago Bueno',
        'foto': 'img/entrevistados2/pro-44.png',
        'cargo': 'Strategic Planner',
        'empresa': 'DLC Ogilvy Puerto Rico',
        'ciudad': 'Puerto Rico- San Juan'
    },

    {
        'id': 51,
        'nombre': 'Alejandro Zárate',
        'foto': 'img/entrevistados2/pro-45.png',
        'cargo': 'Senior Copywriter ',
        'empresa': 'Leo Burnett Chicago',
        'ciudad': 'Chicago, Illinois, United States'
    },

    {
        'id': 52,
        'nombre': 'Alvaro Meléndez',
        'foto': 'img/entrevistados2/pro-46.png',
        'cargo': 'CEO y Co-Fundador',
        'empresa': 'CRANT',
        'ciudad': 'Miami, Florida, USA'
    },

    {
        'id': 53,
        'nombre': 'David Meneses',
        'foto': 'img/entrevistados2/pro-47.png',
        'cargo': 'Senior Copywriter',
        'empresa': 'Hill Holliday',
        'ciudad': 'CDMX, México'
    },

    {
        'id': 54,
        'nombre': 'David Orrego',
        'foto': 'img/entrevistados2/pro-48.png',
        'cargo': 'Research Manager',
        'empresa': 'Meta US',
        'ciudad': 'Boston - Estados Unidos'
    },

    {
        'id': 55,
        'nombre': 'Juliana Ardila',
        'foto': 'img/entrevistados2/pro-49.png',
        'cargo': 'Associate creative director',
        'empresa': 'Saatchi & Saatchi NY',
        'ciudad': 'New York, USA'
    }
   
]

info_speakers_2.forEach(item => {
    grid_speakers_2.innerHTML += `
    <div class="col-lg-3">
        <div class="cp-card-2 px-4 d-flex flex-column align-items-center justify-content-center">
            <div class="cp-section-6__cont-img">
            <img src="${item.foto}" alt="" class="cp-section-6__cont-img__img-pro" />
            </div>
            <span class="cp-section-6__name heading-3">${item.nombre}</span>
            <span class="cp-section-6__carrer parrafos">${item.cargo}</span>
            <span class="cp-section-6__country parrafos">${item.empresa}</span>
            <span class="cp-section-6__country parrafos">${item.ciudad}</span>
        </div>
    </div>
    `
})
