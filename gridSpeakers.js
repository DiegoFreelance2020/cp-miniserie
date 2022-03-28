const grid_speakers = document.getElementById('cp-speakers-grid')
/*
<div class="cp-speakers-grid__item">
    <a href="#" class="cp-section-4__global-link d-flex flex-column align-items-center justify-content-center">
        <div class="cp-section-4__cont-pro px-4 d-flex flex-column align-items-center justify-content-center">
        <div class="cp-section-4__cont-img">
            <img src="/img/pro-1.png" alt="" class="cp-section-4__cont-img__img-pro" />
        </div>
        <span class="cp-section-4__name heading-3">Andrés Ordóñez</span>
        <span class="cp-section-4__carrer parrafos">Chief Creative Officer</span>
        <span class="cp-section-4__company parrafos">FCB Chicago</span>
        <a href="#" data-bs-toggle="modal" data-bs-target="#andres-ordonez" class="cp-section-4__link-bio">biografía</a>
        </div>
    </a>
</div>
*/

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
        'foto': 'img/pro-1.png',
        'cargo': 'Chief Creative Officer',
        'empresa': 'Weber Shandwick'
    }
]

info_speakers.forEach(element => {
    grid_speakers.innerHTML += `
        <div class="cp-speakers-grid__item">
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