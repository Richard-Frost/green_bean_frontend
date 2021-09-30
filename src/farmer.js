class Farmer {
    static all = []
    static farmersContainer = document.getElementById('farmers-container')
    static farmerForm = document.getElementById('form-container')
    constructor(id, name, region) {
        this.id = id
        this.name = name
        this.region = region
        this.element = document.createElement('li')
        //this.dataset.id = this.id
        this.element.id = `farmer-${this.id}`
        this.element.addEventListener('click', this.handleClick)
        Farmer.all.push(this)
    }
    
    farmerHTML() {

        this.element.innerHTML += `
        <div class="content-div">
            <div class="content-title">
                <h3> Coffee Farmers </h3>
            </div
            <div class="content">
                <h3> ${this.name} </h3>
                <h3> ${this.region} </h3>
            </div>
            <br>
            <button id='delete-bttn'>Delete</button>
            <br>
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
            Name: <input type="text" id="name">
            Region: <input type="text" id="region">
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