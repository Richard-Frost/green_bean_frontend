const base_url = "http://127.0.0.1:3000"
const farmerService = new FarmerService(base_url)
const beanService = new BeanService(base_url)

const farmersContainer = document.getElementById("farmers-container")
const beanssContainer = document.getElementById("beans-container")



function clearDiv() {
    farmersContainer.innerHTML = "";
    beanssContainer.innerHTML = "";
}

function handleSubmit(){
    event.preventDefault()
    contactService.createContact()
    event.target.reset()
}

const farmerButton = document.getElementById("farmerButton")
farmerButton.addEventListener("click", addFarmers)

function addFarmers() {
    clearDiv()
    farmerService.getFarmers()
    Farmer.renderForm()
    Farmer.farmerForm.addEventListener('submit', handleSubmit)
}

const beanButton = document.getElementById("beanButton")
beanButton.addEventListener("click", addBeans)

function addBeans() {
    beanService.getBeans()
    Bean.renderForm()
    Bean.beanForm.addEventListener('submit', handleSubmit)
}