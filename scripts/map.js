coordinates = [
    [59.908583, 30.511872],
    [59.912098, 30.489431],
    [59.909124, 30.483457]
]

ymaps.ready(function(){
    var map = new ymaps.Map('map', {
        controls: ["zoomControl"],
        center: coordinates[0],
        zoom: 16,
    })
    coordinates.forEach( coordinate => {
        var placemark = new ymaps.Placemark(coordinate, { hintContent: 'Офис', }, {
            iconLayout: 'default#image',
            iconImageHref: '../images/yandex_pin.svg',
            iconImageSize: [60, 60],
            iconImageOffset: [-35, -50]
        })
        map.geoObjects.add(placemark)
    })
    map.behaviors.disable('scrollZoom')

    let changeButtons = document.querySelectorAll('[data-coordinate]')
    changeButtons.forEach(changeButton => {
        let coordinate = changeButton.getAttribute('data-coordinate')
        changeButton.addEventListener('click', event => {
            map.panTo( JSON.parse( coordinate ) ).then(function(){
                map.setZoom( 15 )
            })
        })
    })
})



