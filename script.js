const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        CleareActiveClasses()
        slide.classList.add('active')
    });
}

function CleareActiveClasses () {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}