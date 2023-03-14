Vue.component('cols', {
    template: `
    <div id="cols">
    <div class="col-wrapper">
    <h2 class="error" v-for="error in errors">{{error}}</h2>
        <newcard></newcard>
        <div class="cols-wrapper">
        <div class="col">
            <ul>
                <li class="cards" v-for="card in column1"><p class="p-title">{{ card.title }}</p>
                    <ul>
                        <li class="tasks" v-for="t in card.subtasks" v-if="t.title !=null">
                        <input @click="NewStatus1(card, t)"
                        class="checkbox" type="checkbox"
                        :disabled="t.completed">
                        <p class="{completed: t.completed}">{{t.title}}></p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="col">
            <ul>
                <li class="cards" v-for="card in column2"><p class="p-title">{{card.title}}</p>
                    <ul>
                        <li class="tasks" v-for="t in card.subtask" v-if="t.title !=null">
                         <input @click="NewStatus2(card, t)"
                         class="checkbox" type="checkbox"
                         :disabled="t.completed">
                         <p class="{completed: t.completed}">{{t.title}}</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="col">
            <ul>
                <li class="cards" v-for="card in column3"><p class="p-title">{{card.title}}</p>
                    <ul>
                        <li class="tasks" v-for="t in card.subtask" v-if="t.title !=null">
                        <input @click="t.completed = true"
                        class="checkbox" type="checkbox"
                        :disabled ="t.completed">
                        <p class="{completed: t.completed}">{{t.title}}</p>
                        </li>
                    </ul>
               </li>
             </ul>
          </div>
        </div>
       </div>      
      </div>
     
    `,
    data() {
        return {
            column1: [],
            column2: [],
            column3: [],
            errors: [],
        }
    },
    mounted() {
        event.Bus.$on('card-submitted', card =>{
          this.errors = []
          if (this.column.length < 3) {
              this.column1.push(card)
          }else{
              this.errors.push("Вы не можете добавить новую заметку")
          }
        })
    }

})

let app = new Vue({
    el: '#app',
    data: {
        name: 'Notes'
    }
})
