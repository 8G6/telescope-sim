let arcsec = 1/3600
let planets = {
    "jup":41.64,
    "mars":16.64,
    "sat":20
}
let id   = (a)=>document.getElementById(a)
let size = (a)=>id('obj').style.width = `${a*arcsec}%`
let val  = (a)=>parseFloat(id(a).value)
let sel  = (a)=>id(a).options[id(a).selectedIndex].value

let opacity = (v) => id('space').style.opacity=`${v}%`

function run(){
    id('obj').src = `./pics/planets/${sel('planets')}.png`

    size(
        (val("FLM")*parseFloat(sel("unit-flm"))*parseFloat(sel("barlow")))/(val("FLE")*parseFloat(sel('unit-fle'))) * planets[sel('planets')]
    )

    id('obj').style.filter = `brightness(${100/parseFloat(sel("barlow"))**2}%)`
}