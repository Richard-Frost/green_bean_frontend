class Bean {

    static beanForm = document.getElementById('form-container')
    static beansContainer = document.getElementById('beans-container')
    constructor(id, name, description, farmer_id, farmer_name, farmer_region) {   
        this.id = id
        this.name = name
        this.description = description 
        this.farmer_id = farmer_id
        this.farmer_name = farmer_name
        this.farmer_region = farmer_region
        this.element = document.createElement('div')
    }

    beanHTML(){
        this.element.innerHTML += `
        <div id="${this.id}" data-id="${this.id}" class="content-div">
            <div class="content">
                <h3> ${this.name} </h3></br>
                <small> Farmer Name: ${this.farmer_name} </small></br>
                <small> Farmer id: ${this.farmer_id} </small></br>
                <small> Region: ${this.farmer_region} </small></br>
                <p> Description: ${this.description} </p></br>
                <button id='delete-bttn'onclick="beanService.deleteBean(${this.id})">Delete</button>
                <button id='edit-bttn' onclick="editBean(${this.id})">Edit</button>
            </div>
             <br>
            <br>
        </div>
        `
        return this.element
    }
     
    slapOnDom() {
        Bean.beansContainer.appendChild(this.beanHTML())
    }

    static renderForm(id){
        debugger
        Bean.beanForm.innerHTML += `
        <div class="content-div">
            <div class="content">
                    <B>Add a new green coffee bean</b></br>
                    <small>Name:</small><br>
                    <input type="text" id="name"></br>
                    <small>Farmer Id:</small></br>
                    <input type="text" id="farmer_id" value="${id}"></br>
                    <small>Description</small></br>
                    <input type="text" id="description"></br>
                    <br>
                    <input type="submit" id="create">
                <form>
            </div>
        </div>
        `
    }
}
