let eventBus = new Vue()
Vue.component('cols', {
    template: `
    <div id='cols'>
    <newcard></newcard>
    <div class="col-wrapper">
    <col1 :column="column1"></col1>
    <col2 :column="column2"></col2>
    <col3 :column="column3"></col3>
    `,
    data() {
        return {
            column1: [],
            column2: [],
            column3: [],
        }
    },
})

Vue.component('column', {
    template: `
    <div class="col">
        <h2>Col1</h2>
    `,
    data() {
        return {
            column
        }
    },
    metods: {
    },
    mounted() {
        eventBus.$on('card-submitted', card =>{
            this.column1.push(card)
        })
    },
    computed: {
    }
})
Vue.component('cards', {
    template: `
    <div>
    </div>
    `

})
Vue.component('newcard', {
    template: `
    <form class="Addform" @submit.prevent="OnSubmit">
    <p>
        <label for="title">Title</label>
        <input class="title" v-model="title" type="text" placeholder="Название">
    </p>
    <div>
        <input class="checkbox" type="checkbox">
        <input class="subtask" v-model="subtasks" type="text" placeholder="Задача">
    </div>
    <div>
        <input class="checkbox" type="checkbox">
        <input class="subtask" v-model="subtasks" type="text" placeholder="Задача">
    </div> 
    <div>
        <input class="checkbox" type="checkbox">
        <input class="subtask" v-model="subtasks" type="text" placeholder="Задача">
    </div> 
    <button type="submit">Добавить карточку</button>
    </form>
`,
    data() {
        return {
            column,
            title: null,
            subtasks: [],
        }
    },
    methods: {
        OnSubmit() {
            let card = {
                title: this.title,
                subtasks: this.subtasks,
            }
            eventBus.$emit('card-submitted', card)
            this.title = null
            this.subtasks = null
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        name: 'Notes'
    }
})
