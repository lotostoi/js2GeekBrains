import "../css/style.scss"

let d = document

class Form {
    constructor(idForm, idSubmit) {

        this.form = d.querySelector(idForm)
        this.submit = this.form.querySelector(idSubmit)
        this.regExps = {
            name: ['[a-zA-Z]{3,30}', 'i'],
            phone: ['^[+]\\d{1}[(]\\d{3}[)]\\d{3}\-\\d{4}$'],
            email: ['^\\S+@mail.ru$', 'i'],
            text: ['\\w{3,}', 'i'],
        }
        this.fields = []

        this._init()
      
    }

    _init() {
        this._createForm()
        this._handler()
    }
    
    _createForm() {

        let form = this.fields = [...this.form.querySelectorAll('input, textarea')]

        this.fields = form.map(field => {
       
            return {
                el: field,
                messegeEl: this.form.querySelector(`small[data-field = "${field.name}"]`),
                regE: this.regExps[`${field.name}`],
                valid: false

            }
        })

    }
    _validForm() {
        if (this.fields.some(field => !field.valid)) {
            this.submit.classList.add('disabled')
            this.submit.setAttribute('disabled', true)
           
        } else {
            this.submit.classList.remove('disabled')
            this.submit.removeAttribute('disabled')
        
        }
    }
    _handler() {

        this.form.addEventListener('input', (e) => {

            if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {

                let field = this.fields.filter(field => field.el.name === e.target.name)[0]

                if (new RegExp(...field.regE).test(field.el.value)) {

                    field.el.classList.add('valid')
                    field.el.classList.remove('error')                      
                    field.messegeEl.classList.add('invis')
                    field.valid = true   
                    this._validForm()

                } else {

                    field.el.classList.remove('valid')
                    field.el.classList.add('error')
                    field.messegeEl.classList.remove('invis')
                    field.valid = false
                    this._validForm()
                }

            }
        })
    }
}


new Form('#form', '#formSubmit')