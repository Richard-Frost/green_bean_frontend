const base_url = "http://127.0.0.1:3000"
const farmerService = new FarmerService(base_url)
const beanService = new BeanService(base_url)
debugger


farmerService.getFarmers()
Farmer.renderForm()
Farmer.contactForm.addEventListener('submit', handleSubmit)

beanService.getBeans()
Bean.renderForm()


function handleSubmit(){
    event.preventDefault()
    contactService.createContact()
    event.target.reset()
}