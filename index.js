const base_url = "http://127.0.0.1:3000"
const farmerService = new FarmerService(base_url)
const beanService = new BeanService(base_url)

const farmersContainer = document.getElementById("farmers-container")
const beansContainer = document.getElementById("beans-container")
const formsContainer = document.getElementById("form-container")


//-- back button --
let back = "home";

function setBack() {
  back = back === "home" ? "farmer-details" : "home"
}

function handleBack() {
  back = back == "farmer-details" ? farmerService.getFarmers() && setBack() : beanService.getBeans() && setBack()
}


// -- clear div -- 
function clearDiv() {
  farmersContainer.innerHTML = "";
  beansContainer.innerHTML = "";
  formsContainer.innerHTML = "";
}



// ---FARMERS---

// ---render farmers---
const farmerButton = document.getElementById("farmerButton")
farmerButton.addEventListener("click", addFarmers)

function addFarmers() {
  clearDiv()
  farmerService.getFarmers()
}


// ---farmer details---
function  toggleDetails(id) {
  const toggle = document.getElementById(`toggle-${id}`)
  toggle.style.display === "none" ? toggle.style.display = 'block' : toggle.style.display = 'none'
}

// ---Farmers Form Button ---
const newFarmerForm = document.getElementById("farmerForm") // submit farmer button
newFarmerForm.addEventListener("click", addFarmerForm)


// ---Farmer Form---
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

// edit farmer
function handleEditFarmerSubmit() {
  event.preventDefault()
  farmerService.editFarmer()
}



// ---BEANS---

// ---render beans---
const beanButton = document.getElementById("beanButton")
beanButton.addEventListener("click", addBeans)

function addBeans() {
  clearDiv() 
  beanService.getBeans()
}


// --- Add a Bean ---
const beanForm = document.getElementById("beanForm")
beanForm.addEventListener("click", addBeanForm)

function addBeanForm(id) {
  clearDiv()
  let farmer_id = (typeof(id) === 'number') ? id : ""
  Bean.renderForm(farmer_id)
  Bean.beanForm.addEventListener("submit", handleBeanSubmit) 
}




const commentForm = document.getElementById("user-comments-form")
commentForm.addEventListener("submit", handleCommentForm)

function handleCommentForm(event) {
  event.preventDefault()
  let comment = document.getElementById("user-comments-input")
  let commentsDiv = document.getElementById("user-comments-div")
  let text = `<h1>${comment.value}</h1>`
  commentsDiv.appendChild(text)
  comment.value = ""

}

function handleBeanSubmit() {
  event.preventDefault()
  beanService.createBean()
  event.target.reset()
}


// edit bean
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



  



