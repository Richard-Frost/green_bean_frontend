//make all service calls regarding a farmer

class FarmerService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getFarmers(){
        fetch(`${this.endpoint}/farmers`)
        .then(resp => resp.json())
        .then(farmers => {
            farmers.data.forEach(farmer => {
                const f = new Farmer(farmer.id, farmer.attributes.name, farmer.attributes.region, farmer.attributes.beans)
                f.slapOnDom()
            })
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
        .then(farmer => {debugger
            const f = new Farmer(farmer)
            //f.slapOnDom()
        })
    }

    editFarmerFetch(id) {
        fetch(`http://127.0.0.1:3000/farmers/edit/${id}`)
        .then(resp => resp.json())
        .then(farmer => {
                const f = new Farmer(farmer.data.id, farmer.data.attributes.name, farmer.data.attributes.region)
                f.renderEditForm()
            })
        //})
    }

    editFarmer() {
        const farmer = {
            name: document.getElementById('name').value,
            region: document.getElementById('region').value,
            id: document.getElementById('editId').value
        }
        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(farmer)
        }
        fetch(`${this.endpoint}/farmers/${farmer.id}`, configObj)
        clearDiv()
    }

    getRegion(e) {
        fetch(`http://127.0.0.1:3000/regions/${e.id}`)
        .then(resp => resp.json())
        .then(farmers => {
            farmers.data.forEach(farmer => {
                const f = new Farmer(farmer.id, farmer.attributes.name, farmer.attributes.region, farmer.attributes.beans)
                f.slapOnDom()
            })  
        })
    }

    deleteFarmer(id) {
        fetch(`${this.endpoint}/farmers/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }) 

        let deletedFarmer = document.getElementById(`${id}`)
        deletedFarmer.remove()
    }
}
