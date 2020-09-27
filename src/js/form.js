import Vue from 'vue'
export default Vue.component('myform', {
    template: `
     <div >
       <form class="mt-1 mb-1 body rounded" id="form">
            <h1 class="col-11 ml-auto mr-auto mt-3"> Contacts us </h1>
            <div v-for="field,i in fields" class="form-group col-11 ml-auto mr-auto  mt-2">
                <label >{{field.name}}</label>
                <input v-if = "field.tagName === 'input'"
                 :type="field.type" 
                 class="form-control" 
                 :name="field.name" 
                 v-model="field.value"
                 v-on:input="valid(i)"
                 :class="getClass(i)"                
                 >
                <textarea v-else  
                :type="field.type" 
                 class="form-control" 
                 :name="field.name" 
                 v-model="field.value"
                 v-on:input="valid(i)"
                 :class="getClass(i)"     ></textarea>
                <small v-if="getClass(i) === 'error'" class="form-text text-danger fontSize">{{field.errorMessage}}</small>
            </div>      
            <div class="col-11 ml-auto mr-auto"> 
                  <button type="submit" 
                   class="btn btn-primary ml-auto mr-auto" 
                   :class="!validForm ?'disabled':''" 
                   :disabled="!validForm"
                   @click.prevent = "clearForm"
                   >Sent</button>
            </div>   
        </form> 
    </div>
    `,
    data: () => ({
        fields: [
            {
                name: 'Name',
                errorMessage: "Minimum length name is 3",
                type: 'text',
                tagName: 'input',
                regExp: ['^[а-яА-ЯёЁA-z]{3,}$', 'i']
            },
            {
                name: 'Phone',
                errorMessage: "Required format:+7(000)000-0000",
                type: 'phone',
                tagName: 'input',
                regExp: ['^[+]\\d{1}[(]\\d{3}[)]\\d{3}\-\\d{4}$']
            },
            {
                name: 'Email',
                errorMessage: "Required format : mymail@mail.ru or my.mail@mail.ru or my - mail@mail.ru.",
                type: 'email',
                tagName: 'input',
                regExp: ['^\\S+@mail.ru$', 'i']
            },
            {
                name: 'Text',
                errorMessage: "Minimum length messege is 3",
                type: 'text',
                tagName: 'textarea',
                regExp: ['^[?!,.а-яА-ЯёЁA-z ]{3,}$', 'i']
            },
        ]
    }),
    created() {

        this.fields.map(f => ({ ...f, valid: false, value: '', active: false }))

    },
    methods: {
        valid(i) {

            Vue.set(this.fields[i], 'active', true)

            if ((new RegExp(...this.fields[i].regExp)).test(this.fields[i].value)) {
                Vue.set(this.fields[i], 'valid', true)
                console.log('dfd')
            }
            else {
                Vue.set(this.fields[i], 'valid', false)
            }
            this.getClass(i)
        },
        getClass(i) {
            let field = this.fields[i]
            if (field.active && field.valid) {
                return 'valid'
            } else if (field.active && !field.valid) {
                return 'error'
            } else {
                return ''
            }
        }, 
        clearForm() { 

            this.fields.forEach((f,i) => { 
                Vue.set(this.fields[i], 'valid', false)
                Vue.set(this.fields[i], 'active', false)
                Vue.set(this.fields[i], 'value', '')
            })

        }
    },
    computed: {
        validForm() {
            return this.fields.every(f => f.active)
        }
    }

})


