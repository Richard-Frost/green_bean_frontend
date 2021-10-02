class Farmer {
    static all = []
    static farmersContainer = document.getElementById('farmers-container')
    static farmerForm = document.getElementById('form-container')
    constructor(id, name, region) {
        this.id = id
        this.name = name
        this.region = region
        this.element = document.createElement('div')
        //this.dataset.id = this.id
        this.element.id = `farmer-${this.id}`
        this.element.addEventListener('click', this.handleClick)
        Farmer.all.push(this)
    }
    
    farmerHTML() {

        this.element.innerHTML += `
    
        <div class="content-div">
            <div class="content">
                <h4> ${this.name} </h4>
                <small> ${this.region}</small></br>
                <button id='delete-bttn'>Delete</button>
            </div>
        </div>
        `
        return this.element
    }

    slapOnDom() {
        Farmer.farmersContainer.appendChild(this.farmerHTML())
    }

    static renderForm(){
        Farmer.farmerForm.innerHTML += `
       
        <form id="new-farmer-form">
            <b>Add a new coffee farmer</b>
            <br>
            <small>Name: </small></br> 
            <input type="text" id="name"></br>
            <small>Region:</small></br>
            <input type="text" id="region"></br>
            </br>
            <input type="submit" id="create">
        <form>
        `
      
    }

    handleClick = ()  => {
        if (event.target.innerText === 'Delete') {
            this.element.remove()
            farmerService.deleteFarmer(this.id)
        }
    }
}