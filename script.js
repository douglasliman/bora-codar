const boxes = document.querySelectorAll('.animation');


window.addEventListener('scroll', checkBoxes)



function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4
   
    boxes.forEach(animation => {
        const boxTop = animation.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            animation.classList.add('show')            
        }else{
            animation.classList.remove('show')
        }

    }) 
}