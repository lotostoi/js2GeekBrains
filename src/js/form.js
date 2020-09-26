import Vue from 'vue'
export default Vue.component('myform', {
    template: `
     <div >
       <form class="mt-1 mb-1 body rounded" id="form">
            <h1 class="col-11 ml-auto mr-auto mt-3"> Contacts us </h1>
            <div class="form-group col-11 ml-auto mr-auto  mt-2">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" name="name">
                <small data-field="name" class="form-text text-danger invis fontSize"> Minimum length name is 3</small>
            </div>
            <div class="form-group col-11 ml-auto mr-auto">
                <label for="exampleInputEmail1">Phone</label>
                <input type="phone" class="form-control" id="exampleInputEmail1" name="phone">
                <small data-field="phone" class="form-text text-danger invis fontSize"> Required format:
                    +7(000)000-0000</small>
            </div>
            <div class="form-group col-11 ml-auto mr-auto">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" name="email">
                <small data-field="email" class="form-text  text-danger invis fontSize">Required format : mymail@mail.ru
                    or my.mail@mail.ru or my-mail@mail.ru.</small>
            </div>
            <div class="form-group col-11  ml-auto mr-auto">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" name="text" id="exampleFormControlTextarea1" rows="3"></textarea>
                <small data-field="text" class="form-text text-danger invis fontSize"> Minimum length messege is 3
                </small>
            </div>
            <div class="col-11 ml-auto mr-auto"> 
                  <button type="submit" id="formSubmit" class="btn btn-primary ml-auto mr-auto  disabled" disabled>Sent</button>
            </div>
            
        </form> 
    </div>
    `
})


/*

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

export default Form */