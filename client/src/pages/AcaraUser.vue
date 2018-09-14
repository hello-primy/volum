<template>
  <q-page padding>
    <el-card class="box-card" v-for="(data, index) in acara" v-bind:key="data-index">
      <div slot="header" class="clearfix">
        <span>{{data.judul}} : {{data.tanggal}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="jadiRelawan(index)">Jadi Relawan</el-button>
      </div>
      <div>
        {{data.katagori}}.
        {{data.deskripsi}}
        .Kuota: {{data.kuota}}
      </div>
    </el-card>
    <br>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      acara: {}
    }
  },
  methods: {
    jadiRelawan (index) {
      alert('terpencet')
      let Acara = this.acara[index]
      let relawan = localStorage.getItem('id')
      console.log(Acara)

      this.$axios
        .post(`http://localhost:3000/acara/gabung/${relawan}`, Acara)
        .then(res => {
          console.log(res.data)
          alert('Berhasil terdaftar')
        })
    }
  },
  mounted () {
    this.$axios
      .get('http://localhost:3000/acara/')
      .then(response => {
        this.acara = JSON.parse(JSON.stringify(response.data))
        console.log(this.acara)
      })
  }
}
</script>
