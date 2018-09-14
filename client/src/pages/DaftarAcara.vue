<template>
  <div class="layout-padding">
    <h4>Daftar Bantuan Bencana</h4>
    <vue-good-table
      @on-select-all="selectAll"
      @on-row-click="toggleSelectRow"
      :columns="columns"
      :rows="acara"
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
        <button v-if="pemilihanAcara.id.length == 1" @click="handleDetail">Laporan</button>
      </div>
    </vue-good-table>
    <q-fab
      color="primary"
      icon="keyboard_arrow_up"
      direction="up"
      class="fixed"
      style="right: 28px; bottom: 28px"
    >
      <q-fab-action
        color="primary"
        @click="buatAcara"
        icon="add">
        <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Buat Acara</q-tooltip>
      </q-fab-action>
    </q-fab>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      acara: [],
      pemilihanAcara: {
        id: []
      },
      columns: [
        { field: 'judul', label: 'Acara' },
        { field: 'katagori', label: 'Katagori' },
        { field: 'kuota', label: 'Kuota' }
      ]
    }
  },
  methods: {
    selectAll (selected, selectedRows) {
      if (selected.selected) {
        for (var a of selected.selectedRows) {
          this.pemilihanAcara.id.push(a._id)
        }
      }
      else {
        this.pemilihanAcara.id = []
      }
    },
    toggleSelectRow (params) {
      if (params.selected) {
        this.pemilihanAcara.id.push(params.row._id)
      }
      else {
        var index = this.pemilihanAcara.id.indexOf(params.row._id)
        if (index !== -1) this.pemilihanAcara.id.splice(index, 1)
      }
    },
    handleDetail (index) {
      this.$router.push({path: `/admin/acara/id/${this.pemilihanAcara.id.toString()}`})
    },
    buatAcara () {
      this.$router.push({path: `/admin/acara/buat`})
    },
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

<style>
</style>
