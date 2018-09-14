<template>
  <div class="layout-padding">
    <h4>Laporan Donor</h4>
    <q-btn @click="opened = true">Periode Tanggal</q-btn><br><br>
    <q-modal v-model="opened" :content-css="{padding: '50px', minWidth: '50vw'}">
      <h4>Periode Tanggal</h4>
      <el-row>
        <el-col :span="12">
          <q-datetime v-model="tanggalAwal" type="date" float-label="Tanggal Awal"/>
        </el-col>
        <el-col :span="12">
          <q-datetime v-model="tanggalAkhir" type="date" float-label="Tanggal Akhir"/>
        </el-col>
      </el-row>
      <q-btn
        color="primary"
        @click="filter">Lanjut</q-btn>
    </q-modal>

    <vue-good-table
      @on-select-all="selectAll"
      @on-row-click="toggleSelectRow"
      :columns="columns"
      :rows="donor"
      :sort-options="{
        enabled: true,
        initialSortBy: {field: 'tanggal', type: 'asc'}
      }"
      :search-options="{
        enabled: true,
      }"
      :select-options="{
      enabled: true,
      selectionInfoClass: 'info-custom'
      }"
      :pagination-options="{
        enabled: true,
        perPage: 5,
      }">
      <div slot="selected-row-actions">
        <button v-if="pemilihanDonor.id.length == 1" @click="handleDetail">Laporan</button>
      </div>
    </vue-good-table>

    <div style="overflow-x:auto;" v-show="load"><br><br>
      <table border="1" id="laporanDonor">
        <thead>
          <tr>
            <td colspan="6">LAPORAN DONOR</td>
          </tr>
          <tr>
            <th>Nama</th>
            <th>Tipe Donor</th>
            <th>Jumlah</th>
            <th>Tanggal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in donor" v-bind:key="`komisi-${index}`">
            <td>{{data.nama}}</td>
            <td>{{data.tipe_donor}}</td>
            <td>{{data.jumlah}}</td>
            <td>{{data.tanggal}}</td>
          </tr>
        </tbody>
      </table><br>
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
        @click="buatDonor"
        icon="add">
        <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Buat Donor</q-tooltip>
      </q-fab-action>

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
      opened: false,
      tanggalAwal: '',
      tanggalAkhir: '',
      load: false,
      donor: [],
      pemilihanDonor: {
        id: []
      },
      columns: [
        { field: 'nama', label: 'Nama' },
        { field: 'tipe_donor', label: 'Tipe Donor' },
        { field: 'jumlah', label: 'Jumlah' },
        { field: 'tanggal', label: 'Tanggal' }
      ]
    }
  },
  methods: {
    selectAll (selected, selectedRows) {
      if (selected.selected) {
        for (var a of selected.selectedRows) {
          this.pemilihanDonor.id.push(a._id)
        }
      } else {
        this.pemilihanDonor.id = []
      }
    },
    toggleSelectRow (params) {
      if (params.selected) {
        this.pemilihanDonor.id.push(params.row._id)
      } else {
        var index = this.pemilihanDonor.id.indexOf(params.row._id)
        if (index !== -1) this.pemilihanDonor.id.splice(index, 1)
      }
    },
    unduhLaporan () {
      const worksheet = this.$XLSX.utils.table_to_book(document.getElementById('laporanDonor'))
      this.$XLSX.writeFile(worksheet, `Laporan-Donor.xlsx`)
    },
    filter () {
      console.log('ya')
      this.opened = false
      this.load = true
    },
    buatDonor () {
      this.$router.push({ path: '/admin/donor/buat' })
    }
  },
  mounted () {
    this.$axios
      .get('http://localhost:3000/donor/')
      .then(response => {
        this.donor = JSON.parse(JSON.stringify(response.data))
        console.log(this.donor)
      })
  }
}
</script>
