<template>
  <div class="layout-padding">
    <h4>Laporan Relawan</h4>
    <div style="overflow-x:auto;">
      <table border="1" id="laporanRelawan">
        <thead>
          <tr>
            <th>Nama Relawan</th>
            <th>HP</th>
            <th>Pekerjaan</th>
            <th>Email</th>
            <th>Jenis Kelamin</th>
            <th>Kota</th>
          </tr>
          <tr>
            <td>{{laporanRelawan.nama_lengkap}}</td>
            <td>{{laporanRelawan.hp}}</td>
            <td>{{laporanRelawan.pekerjaan}}</td>
            <td>{{laporanRelawan.email}}</td>
            <td>{{laporanRelawan.jenis_kelamin}}</td>
            <td>{{laporanRelawan.kota}}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6">PARTISIPASI ACARA:</td>
          </tr>
          <tr>
            <th>Judul</th>
            <th>Katagori</th>
            <th>Tempat</th>
            <th>Tanggal</th>
            <th>Kuota</th>
            <th>Jumlah Relawan</th>
          </tr>
          <tr v-for="(acara, index) in laporanRelawan.partisipasi_acara" v-bind:key="`acara-${index}`">
            <td>{{acara.judul}}</td>
            <td>{{acara.katagori}}</td>
            <td>{{acara.tempat}}</td>
            <td>{{acara.tanggal}}</td>
            <td>{{acara.kuota}}</td>
            <td>{{acara.relawan.length}}</td>
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
      laporanRelawan: {}
    }
  },
  mounted () {
    this.$axios
      .get(`http://localhost:3000/relawan/${this.$route.params.id}`)
      .then(res => {
        this.laporanRelawan = JSON.parse(JSON.stringify(res.data))
        console.log(res.data)
      })
  },
  methods: {
    unduhLaporan () {
      const worksheet = this.$XLSX.utils.table_to_book(document.getElementById('laporanRelawan'))
      this.$XLSX.writeFile(worksheet, `Laporan-Relawan ${this.laporanRelawan.nama_lengkap}.xlsx`)
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
