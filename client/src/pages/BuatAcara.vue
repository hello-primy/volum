<template>
  <q-page padding>
    <el-row>
      <el-col :span="12">
        <q-input v-model="Acara.judul" float-label="Judul"/>
      </el-col>
      <el-col :span="12">
        <q-select v-model="Acara.katagori" float-label="Katagori"
        :options="katagori"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <q-input v-model="Acara.deskripsi" float-label="Deskripsi"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <q-input v-model="Acara.tempat" float-label="Tempat"
        :options="kota_tujuan"/>
      </el-col>
      <el-col :span="12">
        <q-datetime v-model="Acara.tanggal" type="date" float-label="Tanggal"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <q-input v-model="Acara.kuota" float-label="Kuota" suffix="orang"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Acara.point" float-label="Point"/>
      </el-col>
    </el-row>
    <q-btn @click="buatAcara()">Buat</q-btn>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      Acara: {
        judul: '',
        katagori: '',
        deskripsi: '',
        tempat: '',
        tanggal: '',
        kuota: '',
        point: ''
      },
      kota_tujuan: [
        {label: 'Jakarta', value: 'Jakarta'},
        {label: 'Surabaya', value: 'Surabaya'},
        {label: 'Bali', value: 'Bali'}
      ],
      katagori: [
        {label: 'Banjir', value: 'Banjir'},
        {label: 'Gempa', value: 'Gempa'},
        {label: 'Vulkanik', value: 'Vulkanik'},
        {label: 'Tsunami', value: 'Tsunami'}
      ]
    }
  },
  methods: {
    buatAcara () {
      let Acara = this.Acara
      Acara.tanggal = this.$moment(this.Acara.tanggal).format('YYYY/MM/DD')
      this.$axios
        .post('http://localhost:3000/acara/buat', Acara)
        .then(res => {
          console.log(res.data)
          this.$router.push({path: '/admin/acara'})
        })
    }
  }
}
</script>
