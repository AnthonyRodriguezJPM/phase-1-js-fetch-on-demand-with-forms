const init = () => {
    
    const inputForm = document.querySelector('form');
    


    inputForm.addEventListener('submit', (e)=> {
        e.preventDefault()
        
        const input=inputForm.querySelector('#searchByID')
        console.log(input.value)
        

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)

        const newPTagTitle=document.querySelector('#movieDetails h4')
        const newPTagSummary=document.querySelector('#movieDetails p')
        
        newPTagTitle.innerText=data.title
        newPTagSummary.innerText=data.summary
        
        

        })
        
    })
    
    
   

}
document.addEventListener('DOMContentLoaded', init);


