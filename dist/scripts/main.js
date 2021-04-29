// Variables
const form = document.getElementById('findHolyDay');
let destinations = ["شیراز", "تهران", "اصفهان", "مشهد", "ترکیه", "تایلند", "گرجستان"];

// Event Listeners
eventListener();

function eventListener(){
    document.addEventListener('DOMContentLoaded', function(){
        fillDestinationInput();
    });
}

// Fill destination input
function fillDestinationInput () {
    const place = document.querySelector('#place');
    destinations.forEach(destination => {
        // Create option tag
        const option = document.createElement('option');
        option.value = destination;
        option.innerText = destination;
        // Add option tag to Select tag
        place.appendChild(option);
    });
}

// Persian date picker
$("#date").persianDatepicker({
    format: 'YYYY/MM/DD',
});

// Owl Carousel
// Special recommendation carousel
$('#specialOffers').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    rtl: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//  Happy Client carousel
$('#happyClient').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    rtl: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})