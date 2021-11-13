const base_url = "http://127.0.0.1:3000"
const farmerService = new FarmerService(base_url)
const beanService = new BeanService(base_url)

const farmersContainer = document.getElementById("farmers-container")
const beansContainer = document.getElementById("beans-container")
const formsContainer = document.getElementById("form-container")

function clearDiv() {
    farmersContainer.innerHTML = "";
    beansContainer.innerHTML = "";
    formsContainer.innerHTML = "";
}

// ---render farmers---
const farmerButton = document.getElementById("farmerButton")
farmerButton.addEventListener("click", addFarmers)

function addFarmers() {
    clearDiv()
    farmerService.getFarmers()
}

// ---Farmers Form---
const newFarmerForm = document.getElementById("farmerForm") // submit farmer button
newFarmerForm.addEventListener("click", addFarmerForm)

function addFarmerForm() {
    clearDiv()
    Farmer.renderForm()
    Farmer.farmerForm.addEventListener('submit', handleFarmerSubmit)   
}

function handleFarmerSubmit() {
    event.preventDefault()
    farmerService.createFarmer()
    event.target.reset()
}



// ---render beans---

const beanButton = document.getElementById("beanButton")
beanButton.addEventListener("click", addBeans)

function addBeans() {
    clearDiv()
    beanService.getBeans()
}


// ---Bean Form---

const beanForm = document.getElementById("beanForm")
beanForm.addEventListener("click", addBeanForm)

function addBeanForm(id) {
    clearDiv()
    let farmer_id = (typeof(id) === 'number') ? id : ""
    Bean.renderForm(farmer_id)
    Bean.beanForm.addEventListener('submit', handleBeanSubmit)
}

function handleBeanSubmit(){
    event.preventDefault()
    beanService.createBean()
    event.target.reset()
}


// edit bean

function editBean(id) {
    fetch(`http://127.0.0.1:3000/beans/edit/${id}`)
    .then(resp => resp.json())
    .then( bean => {
        const b = new Bean (bean.data.id, bean.data.attributes.name, bean.data.attributes.description, bean.data.attributes.farmer_id, bean.data.attributes.farmer.name, bean.data.attributes.farmer.region)
        renderEditBeanForm(b)
    })
}

function renderEditBeanForm(bean) {
    clearDiv()
    beansContainer.innerHTML += `

        <div class="content-div">
            <div class="content">
                <form id="edit-bean-form">
                    <B>Edit Bean</b></br>
                    <small>Name:</small><br>
                    <input type="text" id="name" value="${bean.name}"></br>
                    <small>Farmer Id:</small></br>
                    <input type="text" id="farmer_id" value="${bean.farmer_id}"></br>
                    <small>Description</small></br>
                    <input type="text" id="description" value="${bean.description}"></br>
                    <input type="hidden" id="bean_id" value="${bean.id}">
                    <br>
                    <input type="submit" id="create">
                <form>
        `
        beansContainer.addEventListener('submit', handleEditBeanSubmit)
}

function handleEditBeanSubmit() {
    event.preventDefault()
    beanService.editBean()
}


// render beans by region

const regionsButton = document.getElementById("regionsButton")
regionsButton.addEventListener("click", regionMenu)

function regionMenu() {
    clearDiv()
    Farmer.regionMenu()
}

function handleRegions(e) {
    clearDiv()
    farmerService.getRegion(e)
}


// edit farmer






    function handleEditFarmerSubmit() {
    event.preventDefault()
    farmerService.editFarmer()
    //event.target.reset()
    }

    

// farmer details 

function  toggleDetails(id) {
    const toggle = document.getElementById(`toggle-${id}`)
    toggle.style.display === "none" ? toggle.style.display = 'block' : toggle.style.display = 'none'
}



