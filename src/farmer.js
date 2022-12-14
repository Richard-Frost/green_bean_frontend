class Farmer {
    static farmersContainer = document.getElementById('farmers-container')
    static farmerForm = document.getElementById('form-container')
    constructor(id, name, region, beans) {
        this.id = id
        this.name = name
        this.region = region
        this.element = document.createElement('div')
        this.beans = beans
        this.element.id = `farmer-${this.id}`
        //this.element.addEventListener('click', this.handleClick)
    }
    
    farmerHTML() {
        this.element.innerHTML += `
        <div class="content-div" id="${this.id}">
            <div class="content">
                <h4> ${this.name} - ${this.id} </h4>
                <small> ${this.region} </small></br>
            
                <button id='details-bttn' onClick="toggleDetails(${this.id})">Details</button>
                <br>
                <div id="toggle-${this.id}" style="display:none">
                <br>
                <hr>
                <br>
                    <h4> Beans: </h4>
                    <br>
                    ${this.beans.length > 0 ? this.beans.map( bean => { return `<a href="#" data-id="${bean.id}" onclick="beanService.showBean(this);setBack()">${bean.name}</a></br>`}) : `<SMALL>This farmer does not currently have beans listed</SMALL>`}
                    <br>
                    <button id='delete-bttn' onclick="farmerService.deleteFarmer(${this.id})">Delete</button>
                    <button id='edit-bttn' onclick="farmerService.editFarmerFetch(${this.id})">Edit</button>
                    <button id="beanForm" onClick="addBeanForm(${this.id})">Submit a Bean</button></br>
                </div>
            </div>
        </div>
        `
        return this.element
    }

    static renderForm(){
        Farmer.farmerForm.innerHTML += `
        <div class="content-div">
        <div class="content">
        <form id="new-farmer-form">
            <b>Add a new coffee farmer</b>
            <br>
            <small>Name: </small></br> 
            <input type="text" id="name"></br>
            <small>Region:</small></br>
            <select name="region" id="region"></br>
            <option value="Africa">Africa
            <option value="Central America">Central America
            <option value="South America">South America
            <option value="Asia">Asia
            <option value="Hawaii">Hawaii
            </select>
            </br>
            <input type="submit" id="create">
        <form>
        </div>
        </div>
        `
    }

    static regionMenu() {
        farmersContainer.innerHTML = `
        <div class="content-div">
                <div class="content">
                    <h4> Regions </h4>
                    <div id="region-buttons">
                        <button id='1' onclick="handleRegions(this)">Africa</button></br>
                        <button id='2' onclick="handleRegions(this)">Asia</button></br>
                        <button id='3' onclick="handleRegions(this)">South America</button></br>
                        <button id='4' onclick="handleRegions(this)">Central America</button></br>
                        <button id='5' onclick="handleRegions(this)">North America</button>
                    </div>
                </div>
            </div>
            ` 
    }

    renderEditForm() {
        clearDiv()
        farmersContainer.innerHTML += `
            <div class="content-div">
            <div class="content">
            <form id="new-farmer-form">
                <b>Add a new coffee farmer</b>
                <br>
                <input type="hidden"  name="Id" id="editId" value="${this.id}">
                <small>Name: </small></br> 
                <input type="text" id="name" value="${this.name}"></br>
                <small>Region:</small></br>
                <select name="region" id="region" value="${this.region}"></br>
                <option value="Africa" ${this.region === 'Africa' ? 'selected' : ''}>Africa
                <option value="Central America" ${this.region === 'Central America' ? 'selected' : ''}>Central America
                <option value="South America" ${this.region === 'South America' ? 'selected' : ''}>South America
                <option value="Asia" ${this.region === 'Asia' ? 'selected' : ''}>Asia
                <option value="North America" ${this.region === 'North America ' ? 'selected' : ''}>North America
                </select>
                </br>
                <input type="submit" id="editFrmr">
            <form>
            </div>
            </div>
            `
        farmersContainer.addEventListener('submit', handleEditFarmerSubmit)
    }

    slapOnDom() {
        Farmer.farmersContainer.appendChild(this.farmerHTML())
    } 
}
