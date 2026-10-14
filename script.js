// ===============================
// SEARCH PAHLAWAN
// ===============================

const search = document.querySelector(".search");

if (search) {

    search.addEventListener("click", function () {

        let nama = prompt(
`Cari Pahlawan :

Soekarno
Kartini
Jenderal Sudirman
Cut Nyak Dien
Dewi Sartika
Dr. Soepomo
Ki Hadjar Dewantara
Mohammad Hatta
Pangeran Diponegoro
Pangeran Antasari
Sultan Hasanuddin
Sutomo`
        );

        if (nama == null) return;

        nama = nama.toLowerCase();

        if (nama.includes("soekarno")) {

            location.href = "detail-pahlawan.html?id=soekarno";}

        else if (nama.includes("kartini")) {

            location.href = "detail-pahlawan.html?id=kartini";}

        else if (nama.includes("sudirman")) {

            location.href = "detail-pahlawan.html?id=sudirman";}

        else if (nama.includes("cut")) {

            location.href = "detail-pahlawan.html?id=cutnyakdien";}

        else if (nama.includes("dewi")) {

            location.href = "detail-pahlawan.html?id=dewisartika";}

        else if (nama.includes("soepomo")) {

            location.href = "detail-pahlawan.html?id=soepomo";}

        else if (nama.includes("hadjar")) {

            location.href = "detail-pahlawan.html?id=kihadjar";}

        else if (nama.includes("hatta")) {

            location.href = "detail-pahlawan.html?id=hatta";}

        else if (nama.includes("diponegoro")) {

            location.href = "detail-pahlawan.html?id=diponegoro";}

        else if (nama.includes("antasari")) {

            location.href = "detail-pahlawan.html?id=antasari";}

        else if (nama.includes("hasanuddin")) {

            location.href = "detail-pahlawan.html?id=hasanuddin";}

        else if (nama.includes("sutomo")) {

            location.href = "detail-pahlawan.html?id=sutomo";}

        else {

            alert("Pahlawan tidak ditemukan.");}});

}

// ===============================
// ANIMASI HERO CARD
// ===============================

const cards = document.querySelectorAll(".hero-card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="translateY(-8px) scale(1.02)";
        card.style.transition="0.3s";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="translateY(0px) scale(1)";

    });

});

// ===============================
// ANIMASI BUTTON
// ===============================

const btn=document.querySelectorAll(".btn,.btn2,.quiz-button");

btn.forEach(function(item){

    item.addEventListener("mouseenter",function(){

        item.style.transform="scale(1.05)";
        item.style.transition=".3s";

    });

    item.addEventListener("mouseleave",function(){

        item.style.transform="scale(1)";

    });

});

// ===============================
// ANIMASI TIMELINE
// ===============================

const timeline=document.querySelectorAll(".timeline-card");

timeline.forEach(function(item){

    item.addEventListener("mouseenter",function(){

        item.style.background="#C9A66B";
        item.style.color="#2E1F1A";

    });

    item.addEventListener("mouseleave",function(){

        item.style.background="#2E1F1A";
        item.style.color="white";

    });

});

// ===============================
// SLIDER HORIZONTAL
// ===============================

const slider=document.getElementById("heroSlider");

const nextBtn=document.getElementById("nextBtn");

const prevBtn=document.getElementById("prevBtn");

// ===============================
// TOMBOL SLIDER
// ===============================

if(slider && nextBtn && prevBtn){

    nextBtn.addEventListener("click",function(){

        slider.scrollBy({

            left:320,

            behavior:"smooth"

        });

    });

    prevBtn.addEventListener("click",function(){

        slider.scrollBy({

            left:-320,

            behavior:"smooth"

        });

    });

}

// ===============================
// AUTO SCROLL SLIDER
// ===============================

if(slider){

let autoSlide=setInterval(function(){

slider.scrollBy({

left:320,

behavior:"smooth"

});

if(slider.scrollLeft+slider.clientWidth>=slider.scrollWidth-5){

slider.scrollTo({

left:0,

behavior:"smooth"

});

}

},4000);

slider.addEventListener("mouseenter",function(){

clearInterval(autoSlide);

});

slider.addEventListener("mouseleave",function(){

autoSlide=setInterval(function(){

slider.scrollBy({

left:320,

behavior:"smooth"

});

if(slider.scrollLeft+slider.clientWidth>=slider.scrollWidth-5){

slider.scrollTo({

left:0,

behavior:"smooth"

});

}

},4000);

});

}

// ===============================
// SMOOTH PAGE FADE
// ===============================

document.querySelectorAll("a").forEach(function(link){

link.addEventListener("click",function(){

document.body.style.opacity="0.96";

});

});

window.addEventListener("load",function(){

document.body.style.opacity="1";

});

// ===============================
// ANIMASI SCROLL
// ===============================

const observer=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".hero-card,.feature-card,.timeline-box,.quiz-banner").forEach(function(el){

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".7s";

observer.observe(el);

});

// ===============================
// EFEK SEARCH ICON
// ===============================

if(search){

search.addEventListener("mouseenter",function(){

search.style.transform="scale(1.2)";

search.style.transition=".3s";

});

search.addEventListener("mouseleave",function(){

search.style.transform="scale(1)";

});

}

window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

if(window.scrollY>40){

nav.style.boxShadow="0 4px 15px rgba(0,0,0,.15)";

}

else{

nav.style.boxShadow="none";

}

});