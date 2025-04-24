document.querySelector(".get-random-pun").addEventListener("click", displayPun);

function displayPun(){
    fetch('http://localhost:5000/api/puns')
    .then(res => res.json())
    .then(data=>{
        
        let setup = document.querySelector(".setup");
        let punchline = document.querySelector(".punchline")
        const randomPun = data[Math.floor(Math.random()*data.length)]

        data.forEach((e)=>{
            setup.innerHTML = randomPun.setup;
            const punchlineBtn = document.querySelector(".punchlineBtn").addEventListener("click", showPunchline);
            function showPunchline() {
                punchline.innerHTML = randomPun.punchline;
            }
        })

        punchline.innerHTML = '';

    })

}