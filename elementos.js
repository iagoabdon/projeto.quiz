const draggable = document.querySelectorAll('.draggable')
const dropzone = document.querySelectorAll('.dropzone')
const btn = document.querySelector('.btn')

const dg1 = document.getElementById('dg')




let dragCard


const dragsStart = (event) => {
   dragCard = event.target.textContent
   event.dis
   
};

const dragOver = (event) => {
  event.preventDefault();
  
};

const dragEnter = ({target}) => {
   target.classList.add("draggable")
   
};

const dragLeave = ({target}) => {
   target.classList.add("draggable")
   
   
   
};
const dropdrop = ({ target }) => {
    
    target.append(dragCard);
    const text = dragCard
    
   
  
       // Obtém o ID do target
       
         const id = target.getAttribute('data-id');

         btn.addEventListener('click', () =>{
         if (text === 'box1' && id === 'um') {
             target.classList.add('newdraggable');
             
             
         }
      
         else if (text === 'box2' && id === 'dois') {
            target.classList.add('newdraggable');
           
        }
        else if (text === 'box3' && id === 'tres') {
         target.classList.add('newdraggable');
         
         
        
        }
        else if (text === 'box4' && id === 'quatro') {
         target.classList.add('newdraggable');

        }
        else {
         target.classList.add('lossdraggable')
        }

      })
   
   
};
 






draggable.forEach((card) => {
 card.addEventListener("dragstart", dragsStart, { once: true } )
 
   
   

});


dropzone.forEach((column) =>{
   column.addEventListener("dragover", dragOver)
   column.addEventListener("dragenter", dragEnter)
   column.addEventListener("dragleave", dragLeave)
   column.addEventListener("drop", dropdrop)

   
   
});







