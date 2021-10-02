class BeanService {
   
    constructor(endpoint) {
        this.endpoint = endpoint 
    }

    getBeans(){
        fetch(`${this.endpoint}/beans`)
        .then(resp => resp.json())

        .then(beans=> {
            for (const bean of beans) { 
                const b = new Bean(bean.id, bean.name, bean.description, bean.farmer_id)
                b.slapOnDom()
            }
        })
    }
    
    createBean() {
        const bean = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            farmer_id: document.getElementById('farmer_id').value
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bean)
        }

        fetch(`${this.endpoint}/beans`, configObj)
        .then(resp => resp.json())
        .then(bean => {
            const b = new Bean(bean)
            b.slapOnDom()
        })
    }

}