//make all service calls regarding a farmer

class FarmerService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getFarmers(){
        fetch(`${this.endpoint}/farmers`)
        .then(resp => resp.json())

        .then(farmers => {
            for (const farmer of farmers) { 
                const f = new Farmer(farmer.id, farmer.name, farmer.region)
                console.log(f)
                f.slapOnDom()
            }
        })
    }

    createFarmer() {
        const farmer = {
            name: document.getElementById('name').value,
            region: document.getElementById('region').value
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(farmer)
        }

        fetch(`${this.endpoint}/farmers`, configObj)
        .then(resp => resp.json())
        .then(farmer => {
            const f = new Farmer(farmer)
            f.slapOnDom()
        })
    }

    deleteFarmer(id) {
        fetch(`${this.endpoint}/farmers/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }

}