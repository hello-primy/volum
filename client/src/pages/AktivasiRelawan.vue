<template>
  <q-page padding>
    <h4>Data Registrasi Relawan HOPE</h4>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_lengkap" float-label="Nama Lengkap" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.ktp" float-label="KTP" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-select v-model="Relawan.golongan_darah" float-label="Golongan Darah"
        :options="golongan_darah" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_keluarga" float-label="Nama Keluarga" readonly/>
      </el-col>
      <el-col :span="12">
        <q-datetime v-model="Relawan.umur" type="date" float-label="Umur" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_depan" float-label="Nama Depan" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_tambahan" float-label="Nama Tambahan" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-select v-model="Relawan.jenis_kelamin" float-label="Jenis Kelamin"
        :options="jenis_kelamin" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.warga_negara" float-label="Warga Negara" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.alamat" float-label="Alamat" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.kota" float-label="Kota" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.negara" float-label="Negara" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.telp" float-label="Telp" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.fax" float-label="Fax" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.hp" float-label="HP" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.email" float-label="email" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.pekerjaan" float-label="Pekerjaan" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.perusahaan" float-label="Perusahaan" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.pendidikan_terakhir" float-label="Pendidikan Terakhir" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-datetime v-model="Relawan.waktu_yang_tersedia" type="date" float-label="Waktu Yang Tersedia (hari/bulan/tahun)" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.lamanya_waktu" float-label="Lamanya (jam/hari/minggu/bulan)" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.biaya_akomodasi_dan_transportasi"
        float-label="Biaya Akomodasi & Transportasi (Ditanggung Sendiri/Perusahaan)" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-select v-model="Relawan.program_yang_ingin_dilakukan" float-label="Program yang ingin dilakukan"
        :options="program_pilihan" readonly/>
      </el-col>
    </el-row>

    <br>
    <b>Dalam keadaan darurat yang bisa dihubungi:</b>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_keluarga_darurat" float-label="Nama Keluarga (fam/marga)" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.hubungan_darurat" float-label="Hubungan" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_depan_darurat" float-label="Nama Depan" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_tambahan_darurat" float-label="Nama Tambahan" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.alamat_darurat" float-label="Alamat" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.kota_darurat" float-label="Kota" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.negara_darurat" float-label="Negara" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.telp_darurat" float-label="Telp" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.fax_darurat" float-label="Fax" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.hp_darurat" float-label="HP" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.email_darurat" float-label="Email" readonly/>
      </el-col>
    </el-row>

    <br>
    <u><b>Referensi Organisasi:</b></u>
    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.nama_organisasi" float-label="Nama Organisasi" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.bidang_departemen" float-label="Bidang/Departemen" readonly/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.pimpinan" float-label="Pimpinan" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.rekomendasi" float-label="Rekomendasi" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_pemberi_referensi" float-label="Telp" readonly/>
      </el-col>
      <el-col :span="12">
        <q-datetime v-model="Relawan.tanggal_referensi" type="date" float-label="Tanggal" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.hal_yang_ingin_dilakukan" float-label="Hal yang ingin saya lakukan" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.bahasa" float-label="Bahasa" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.pengobatan_saat_ini" float-label="Pengobatan yang saya terima saat ini" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.alasan_jadi_relawan" float-label="Mengapa saya mau menjadi relawan" readonly/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.kota_tujuan" float-label="Ingin menjadi relawan HOPE di kota apa" readonly/>
      </el-col>
    </el-row>

    <br>
    <el-row>
      <el-col :span="12">
        <q-select v-model="Relawan.diperiksa" float-label="Diperiksa"
        :options="diperiksa"
        />
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_pemeriksa" float-label="Nama Pemeriksa"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-select v-model="Relawan.diterima" float-label="Diterima"
        :options="diterima"
        />
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_persetuju" float-label="Nama Persetuju"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-datetime v-model="Relawan.tanggal_diterima" type="date" float-label="Tanggal diterima"
        :options="diperiksa"
        />
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.penanggung_jawab" float-label="Penanggung jawab"/>
      </el-col>
    </el-row>
    <br>
    <q-btn color="primary" @click="aktivasi()">Kirim</q-btn>

  </q-page>
</template>

<style>
</style>

<script>
/* eslint-disable */

export default {
  name: 'Register',
  data () {
    return {
      Relawan: {
        password: '',
        nama_keluarga: '',
        umur: '',
        nama_depan: '',
        nama_tambahan: '',
        jenis_kelamin: '',
        warga_negara: '',
        alamat: '',
        kota: '',
        negara: '',
        telp: '',
        fax: '',
        hp: '',
        email: '',
        pekerjaan: '',
        perusahaan: '',
        pendidikan_terakhir: '',
        waktu_yang_tersedia: '',
        lamanya_waktu: '',
        biaya_akomodasi_dan_transportasi: '',
        program_yang_ingin_dilakukan: '',
        nama_keluarga_darurat: '',
        hubungan_darurat: '',
        nama_depan_darurat: '',
        nama_tambahan_darurat: '',
        alamat_darurat: '',
        kota_darurat: '',
        negara_darurat: '',
        telp_darurat: '',
        fax_darurat: '',
        hp_darurat: '',
        email_darurat: '',
        nama_organisasi: '',
        bidang_departemen: '',
        pimpinan: '',
        rekomendasi: '',
        nama_pemberi_referensi: '',
        tanggal_referensi: '',
        hal_yang_ingin_dilakukan: '',
        bahasa: '',
        pengobatan_saat_ini: '',
        alasan_jadi_relawan: '',
        kota_tujuan: '',
        nama_lengkap: '',
        ktp: '',
        tanggal_daftar: this.$moment().format('YYYY/MM/DD'),
        diperiksa: '',
        nama_pemeriksa: '',
        diterima: '',
        nama_persetuju: '',
        tanggal_diterima: '',
        penanggung_jawab: '',
        status: false,
        reputasi: 0
      },
      program_pilihan: [
        {label: 'Pendidikan', value: 'Pendidikan'},
        {label: 'Kesehatan', value: 'Kesehatan'},
        {label: 'Multimedia', value: 'Multimedia'},
        {label: 'Publikasi', value: 'Publikasi'}
      ],
      jenis_kelamin: [
        {label: 'Laki-laki', value: 'Laki-laki'},
        {label: 'Perempuan', value: 'Perempuan'},
      ],
      golongan_darah: [
        {label: 'A', value: 'A'},
        {label: 'B', value: 'B'},
        {label: 'O', value: 'O'},
        {label: 'AB', value: 'AB'}
      ],
      diperiksa: [
        {label: 'Di terima', value: 'Terima'},
        {label: 'tidak di terima', value: 'Tidak'},
      ],
      diterima: [
        {label: 'Di terima', value: 'Terima'},
        {label: 'Tidak di terima', value: 'Tidak'},
      ],
    }
  },
  methods: {
    aktivasi () {
      let Relawan = this.Relawan
      Relawan.umur = this.$moment(Relawan.umur).format('YYYY/MM/DD')
      Relawan.tanggal_referensi = this.$moment(Relawan.tanggal_referensi).format('YYYY/MM/DD')

      console.log(Relawan)
      this.$axios
        .post('http://localhost:3000/relawan/aktivasi', Relawan)
        .then(res => {
          console.log(res)
        })
      this.$router.push({path:'/admin/relawan/pending'})
    }
  },
  mounted () {
    this.$axios
      .get(`http://localhost:3000/relawan/${this.$route.params.id}`)
      .then(res => {
        this.Relawan = res.data
        console.log(res.data)
      })
  }
}
</script>
