function openModal(){
    const modal = document.getElementById('fade-modal')
    modal.classList.add('open')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'fade-modal' || e.target.id == "close-modal"){
            modal.classList.remove('open')
        }
    })
}

function updateImg(){
    const randonImg = document.getElementById('img-random'); 

    randonImg.src = 'https://picsum.photos/200/300?random'
}