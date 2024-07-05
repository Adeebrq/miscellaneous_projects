// VARIABLES 
let btn= document.querySelector("#new-quote");
let quote= document.querySelector('.quote');
let person= document.querySelector(".person");

const quotes= [
    {
        quote:"The only limit to our realization of tomorrow is our doubts of today.",
        person:"Franklin D. Roosevelt",
    },
    {
        quote:"In the end, we will remember not the words of our enemies, but the silence of our friends.",
        person:'Martin Luther King Jr.',
    },

    {
        quote:"Life is what happens when you're busy making other plans.",
        person:'John Lennon',
    },
    {
        quote:"The purpose of our lives is to be happy.",
        person:'Dalai Lama',
    },
    {
        quote:"Whether you think you can or you think you cant, your right.",
        person:"Henry Ford",
    },
    {
        quote:"The only way to do great work is to love what you do.",
        person:'Steve Jobs',
    },
    {
        quote:"Success is not final, failure is not fatal: It is the courage to continue that counts." ,
        person:'Winston Churchill',
    },
    {
        quote:"The best way to predict the future is to create it.",
        person:'Peter Drucker',
    },
    {
        quote:'Maybe they hate me becuase am too good',
        person:'Cristiano ronaldo',
    },
    {
        quote:"My unmatched perspicacity coupled with my sheer indefatigability makes me a feared opponent in any realm of human endeavor.",
        person:'Andrew Tate',
    },
];
btn.addEventListener("click", function(){
    let random= Math.floor(Math.random()*quotes.length)
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})

