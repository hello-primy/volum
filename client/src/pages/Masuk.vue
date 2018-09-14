 <template>
  <q-page padding>
    <q-input v-model="Relawan.email" float-label="Email"/>
    <q-input v-model="Relawan.password" type="password" float-label="Password"/>
    <q-btn @click="masuk()">Masuk</q-btn>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      Relawan: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    masuk () {
      let Relawan = this.Relawan
      this.$axios
        .post('http://localhost:3000/relawan/masuk', Relawan)
        .then(res => {
          if (res.data.length !== 0) {
            localStorage.setItem('id', res.data._id)
            localStorage.setItem('admin', res.data.isAdmin)
            console.log(localStorage.getItem('id'))
            console.log(localStorage.getItem('admin'))
            console.log(res.data)
            alert('berhasil masuk')
            this.$router.push({path: '/'})
            location.reload()
          }
        })
    }
  }
}
</script>
