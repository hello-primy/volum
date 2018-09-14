<template>
  <q-page padding>
    <h4>Donor</h4>
    <el-row>
      <el-col :span="24">
        <q-input v-model="Donor.nama" float-label="Nama"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-select v-model="Donor.tipe_donor" float-label="Bentuk Donor"
        :options="tipe_donor"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Donor.jumlah" float-label="Jumlah"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-datetime v-model="Donor.tanggal" type="date" float-label="Tanggal"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Donor.kota" float-label="Kota"/>
      </el-col>
    </el-row>

    <br>
    <q-btn @click="buatDonor()">Buat Donor</q-btn>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      Donor: {
        nama: '',
        tipe_donor: '',
        jumlah: '',
        tanggal: ''
      },
      tipe_donor: [
        {label: 'Barang', value: 'Barang'},
        {label: 'Uang', value: 'Uang'}
      ]
    }
  },
  methods: {
    buatDonor () {
      let Donor = this.Donor
      this.$axios
        .post('http://localhost:3000/donor/buat', Donor)
        .then(res => {
          console.log(res.data)
          this.$router.push({path: '/admin/donor'})
        })
    }
  }
}
</script>
