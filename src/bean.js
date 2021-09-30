class Bean {
    debugger

    static beanForm = document.getElementById('form-container')
    static beansContainer = document.getElementById('beans-container')
    constructor(id, name, description, farmer_id) {
        this.id = id
        this.name = name
        this.description = description 
        this.farmer_id = farmer_id
        this.element = document.createElement('li')
    }

    beanHTML(){
        this.element.innerHTML += `
        <div class="content-div">
            <div class="content-title">
                <h3> Beans </h3>
            </div
            <div class="content">
                <h3> ${this.name} </h3>
            </div>
             <br>
            <button id='delete-bttn'>Delete</button>
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
            Name: <input type="text" id="name">
            Farmer Id: <input type="text" id="farmer_id">
            Description <input type="text" id="description">
            <input type="submit" id="create">
        <form>
        `
    }
}
