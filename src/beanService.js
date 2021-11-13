class BeanService {
   
    constructor(endpoint) {
        this.endpoint = endpoint 
    }

    getBeans(){
        fetch(`${this.endpoint}/beans`)
        .then(resp => resp.json())

        .then(beans => {
            beans.data.forEach(bean => {
                const b = new Bean(bean.id, bean.attributes.name, bean.attributes.description, bean.attributes.farmer_id, bean.attributes.farmer.name, bean.attributes.farmer.region)
                b.slapOnDom()
            })
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

    showBean(bean) {
        fetch(`http://127.0.0.1:3000/beans/${bean.dataset.id}`)
        .then(resp => resp.json())
        .then(bean=> {
           const b = new Bean(bean.data.id, bean.data.attributes.name, bean.data.attributes.description, bean.data.attributes.farmer_id, bean.data.attributes.farmer.name, bean.data.attributes.farmer.region)
           clearDiv()
           b.slapOnDom()
        })
    }

    deleteBean(id) {
        fetch(`${this.endpoint}/beans/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let deletedBean = document.getElementById(`${id}`)
        deletedBean.remove()
    }


    editBean() {
        const bean = {
            name: document.getElementById('name').value,
            farmer_id: document.getElementById('farmer_id').value,
            description: document.getElementById('description').value,
            id: document.getElementById('bean_id').value
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bean)
        }

        fetch(`${this.endpoint}/beans/${bean.id}`, configObj)
        .then(clearDiv())
    }
}