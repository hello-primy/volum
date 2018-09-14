<template>
  <div class="layout-padding">
    <h4>Laporan Acara</h4>
    <div style="overflow-x:auto;">
      <table border="1" id="laporanAcara">
        <thead>
          <tr>
            <td colspan="6">LAPORAN ACARA: {{laporanAcara.judul}}</td>
          </tr>
          <tr>
            <th>Judul</th>
            <th>Katagori</th>
            <th>Tempat</th>
            <th>Tanggal</th>
            <th>Kuota</th>
            <th>Jumlah Relawan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{laporanAcara.judul}}</td>
            <td>{{laporanAcara.katagori}}</td>
            <td>{{laporanAcara.tempat}}</td>
            <td>{{laporanAcara.tanggal}}</td>
            <td>{{laporanAcara.kuota}}</td>
            <td>{{laporanAcara.relawan.length}}</td>
          </tr>
          <tr>
            <th>Nama Relawan</th>
            <th>HP</th>
            <th>Pekerjaan</th>
            <th>Email</th>
            <th>Jenis Kelamin</th>
            <th>Kota</th>
          </tr>
          <tr v-for="(relawan, index) in laporanAcara.relawan" v-bind:key="`acara-${index}`">
            <td>{{relawan.nama_lengkap}}</td>
            <td>{{relawan.hp}}</td>
            <td>{{relawan.pekerjaan}}</td>
            <td>{{relawan.email}}</td>
            <td>{{relawan.jenis_kelamin}}</td>
            <td>{{relawan.kota}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <q-fab
      color="primary"
      icon="keyboard_arrow_up"
      direction="up"
      class="fixed"
      style="right: 28px; bottom: 28px"
    >
      <q-fab-action
        color="primary"
        @click="unduhLaporan"
        icon="file download">
        <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Unduh Berformat XLSX</q-tooltip>
      </q-fab-action>
    </q-fab>

  </div>
</template>
<script>
export default {
  data () {
    return {
      laporanAcara: {}
    }
  },
  mounted () {
    this.$axios
      .get(`http://localhost:3000/acara/${this.$route.params.id}`)
      .then(res => {
        this.laporanAcara = JSON.parse(JSON.stringify(res.data))
        console.log(res.data)
      })
  },
  methods: {
    unduhLaporan () {
      const worksheet = this.$XLSX.utils.table_to_book(document.getElementById('laporanAcara'))
      this.$XLSX.writeFile(worksheet, `Laporan-Acara ${this.laporanAcara.judul}.xlsx`)
    }
  }
}
</script>
<style scoped>
table {
  margin:50px auto
}

td, th {
  color: #606266
}
</style>
