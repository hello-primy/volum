<template>
  <div class="layout-padding">
    <h4>Daftar Relawan Pending</h4>
    <vue-good-table
      @on-select-all="selectAll"
      @on-row-click="toggleSelectRow"
      :columns="columns"
      :rows="relawan"
      :sort-options="{
        enabled: true,
        initialSortBy: {field: 'nama_supplier', type: 'asc'}
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
        <button v-if="pemilihanRelawan.id.length == 1" @click="handleAktivasi">Aktivasi</button>
        <button v-if="pemilihanRelawan.id.length == 1" @click="handleFormulir">Lihat Formulir</button>
      </div>
    </vue-good-table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      relawan: [],
      pemilihanRelawan: {
        id: []
      },
      columns: [
        { field: 'nama_lengkap', label: 'Relawan' },
        { field: 'kota_tujuan', label: 'Kota' },
        { field: 'keahlian', label: 'Keahlian' },
        { field: 'reputasi', label: 'Reputasi' },
        { field: 'hp', label: 'Nomor HP'}
      ]
    }
  },
  methods: {
    selectAll (selected, selectedRows) {
      if (selected.selected) {
        for (var a of selected.selectedRows) {
          this.pemilihanRelawan.id.push(a._id)
        }
      }
      else {
        this.pemilihanRelawan.id = []
      }
    },
    toggleSelectRow (params) {
      if (params.selected) {
        this.pemilihanRelawan.id.push(params.row._id)
      }
      else {
        var index = this.pemilihanRelawan.id.indexOf(params.row._id)
        if (index !== -1) this.pemilihanRelawan.id.splice(index, 1)
      }
    },
    handleAktivasi (index) {
      this.$router.push({path: `/admin/relawan/aktivasi/${this.pemilihanRelawan.id.toString()}`})
    },
    handleFormulir (index) {
      this.$router.push({path: `/admin/relawan/formulir/${this.pemilihanRelawan.id.toString()}`})
    }
  },
  mounted () {
    this.$axios
      .get('http://localhost:3000/relawan/nonaktif')
      .then(response => {
        this.relawan = JSON.parse(JSON.stringify(response.data))
        console.log(this.relawan)
      })
  }
}
</script>

<style>
</style>
