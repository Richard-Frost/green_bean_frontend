class Bean {

    static beanForm = document.getElementById('form-container')
    static beansContainer = document.getElementById('beans-container')
    constructor(id, name, description, farmer_id) {
        this.id = id
        this.name = name
        this.description = description 
        this.farmer_id = farmer_id
        this.element = document.createElement('div')
    }

    beanHTML(){
        this.element.innerHTML += `
        <div class="content-div">
            <div class="content">
                <h3> ${this.name} </h3>
                <button id='delete-bttn'>Delete</button>
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
    static renderForm(){
        Bean.beanForm.innerHTML += `
        <form id="new-bean-form">
            <B>Add a new green coffee bean</b></br>
            <small>Name:</small><br>
             <input type="text" id="name"></br>
            <small>Farmer Id:</small></br>
            <input type="text" id="farmer_id"></br>
            <small>Description</small></br>
            <input type="text" id="description"></br>
            <br>
            <input type="submit" id="create">
        <form>
        `
    }
}
