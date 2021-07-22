<template>
  <div>
    <h1>bem vindo!</h1>
    <div>
      <div>Como você se chama?</div>
      <div>
        <input v-model="user.name" type="text" placeholder="Nome">
      </div>
      <div>
        <input v-model="user.lastname" type="text" placeholder="Sobre Nome">
      </div>
      <button class="enviar" @click="setUser"> enviar </button>
    </div>
    <div v-if="!!storeUser && !advice" class="user">
      <div>Olá {{ storeUser.name }} {{ storeUser.lastname }}, gostaria de um conselho?</div>
      <div class="space">
        <button @click="requestAdvice">sim</button>
      </div>
    </div>
    <div v-if="loading" @fetchSucces="status($event)">
      Pensando em um conselho pra você...
    </div>
    <div v-if="!!advice">
      <div>Para {{ storeUser.name }} {{ storeUser.lastname }}</div>
      <div>"{{ advice.slip.advice }}"</div>
      <div class="space">
        <div>gostaria de outro?</div>
        <div class="space">
          <button @click="requestAdvice">sim</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {

  data () {
    return {
      loading: false,
      user: {
        name: '',
        lastname: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      storeUser: 'user',
      advice: 'advice'
    })

  },

  methods: {
    ...mapActions([
      'getUser',
      'getAdvice'
    ]),

    setUser () {
      this.getUser(this.user)
    },

    async requestAdvice () {
      this.loading = true
      try {
        await this.getAdvice()
        this.loading = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.user {
  margin-top: 10px;
}
.enviar {
  margin: 10px 0 10px 0;
}

.space {
  margin: 10px 0 10px 0;
}
</style>
