let openBtn = document.getElementById('openBtn') ;
let addModal = document.getElementById('add-modal') ;
let backdrop = document.getElementById('backdrop') ;
let cancelBtn = document.getElementById('cancelBtn') ;
let inputData = document.querySelectorAll('.modal__content input') ;
let addBtn = document.getElementById('addBtn') 
let movieList = document.getElementById('movie-list')
let entryText = document.getElementById('entry-text')
console.log(entryText)

let Movies = [];
let cheackMovieMessage = () =>{
    if(movieList.childElementCount > 0){
        entryText.classList.add('none')
    }else{
        entryText.classList.remove('none')
    }
}

let openbackdrop = ()=>{
    backdrop.classList.toggle('visible') ;
}
    let openModelMovie = () => {
        addModal.classList.toggle('visible');
        openbackdrop();
    
}
let renderMovie = (title, img,rate) => {
    movieList.innerHTML = `
    <li class = 'movie-element'>
    <div class = 'movie-element-image'>
    <img src='${img}'>
    </div>
    <div class = 'movie-element__info'>
    <h2>${title}</h2>
    <p>${rate}/5 star </p>
    </div>
    <button class = 'btn btn--passive delete'>Delete</button>
    </li>
    `
}
let addMovie = () => {
    let titelMovie = inputData[0].value;
    let imgMovie = inputData[1].value;
    let ratelMovie = inputData[2].value;
    if(titelMovie.trim()=='' ||  imgMovie.trim()==''|| +ratelMovie < 0 || +ratelMovie > 5){
        alert('please enter valid data')
    }else{
        let movieObject = {
            title : titelMovie ,
            imgUrl : imgMovie ,
            rate : ratelMovie ,
        }
        Movies.push(movieObject) ;
        renderMovie(movieObject.title,movieObject.imgUrl,movieObject.rate)
        openModelMovie();
        cheackMovieMessage();
    }

}
document.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    cheackMovieMessage();
})



openBtn.addEventListener('click' , openModelMovie)
cancelBtn.addEventListener('click' , openModelMovie)
backdrop.addEventListener('click' , openModelMovie)
addBtn.addEventListener('click' , addMovie)