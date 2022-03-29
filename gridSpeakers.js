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
