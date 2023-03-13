let eventBus = new Vue()

Vue.component('cols', {
    template: `
    <div id='cols'>
    <newcard></newcard>
    <div class="col-wrapper">
    <h2 class="error" v-for="error in errors">{{error}}</h2>
    <newcard></newcard>
    <div class="cols-wrapper">
        <div class="col">
            <ul>
                <li class="cards" style="background-color: #e79ba2"" v-for="card in column1"><p class="p-title"<>{{card.title}}</p>
                    <ul>
                        <li class="tasks" v-for="t in card.subtasks" v-if="t.title !=null">
                        <input @click="newStatus1(card, t)"
                        class="checkbox" type="checkbox"
                        :disabled="t.completed"
                        <p class="{completed: t.completed}">{{t.title}}</p>
    
    
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
