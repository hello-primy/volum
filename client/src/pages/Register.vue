<template>
  <q-page padding>
    <h4>Registrasi Relawan HOPE</h4>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_lengkap" float-label="Nama Lengkap"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.ktp" float-label="KTP"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.password" type="password" float-label="Password"/>
      </el-col>
      <el-col :span="12">
        <q-select v-model="Relawan.golongan_darah" float-label="Golongan Darah"
        :options="golongan_darah"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_keluarga" float-label="Nama Keluarga"/>
      </el-col>
      <el-col :span="12">
        <q-datetime v-model="Relawan.umur" type="date" float-label="Umur"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_depan" float-label="Nama Depan"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_tambahan" float-label="Nama Tambahan"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-select v-model="Relawan.jenis_kelamin" float-label="Jenis Kelamin"
        :options="jenis_kelamin"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.warga_negara" float-label="Warga Negara"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.alamat" float-label="Alamat"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.kota" float-label="Kota"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.negara" float-label="Negara"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.telp" float-label="Telp"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.fax" float-label="Fax"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.hp" float-label="HP"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.email" float-label="email"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.pekerjaan" float-label="Pekerjaan"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.perusahaan" float-label="Perusahaan"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.pendidikan_terakhir" float-label="Pendidikan Terakhir"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-datetime v-model="Relawan.waktu_yang_tersedia" type="date" float-label="Waktu Yang Tersedia (hari/bulan/tahun)"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.lamanya_waktu" float-label="Lamanya (jam/hari/minggu/bulan)"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.biaya_akomodasi_dan_transportasi"
        float-label="Biaya Akomodasi & Transportasi (Ditanggung Sendiri/Perusahaan)"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-select v-model="Relawan.program_yang_ingin_dilakukan" float-label="Program yang ingin dilakukan"
        :options="program_pilihan"/>
      </el-col>
    </el-row>

    <br>
    <b>Dalam keadaan darurat yang bisa dihubungi:</b>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_keluarga_darurat" float-label="Nama Keluarga (fam/marga)"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.hubungan_darurat" float-label="Hubungan"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_depan_darurat" float-label="Nama Depan"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_tambahan_darurat" float-label="Nama Tambahan"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.alamat_darurat" float-label="Alamat"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.kota_darurat" float-label="Kota"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.negara_darurat" float-label="Negara"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.telp_darurat" float-label="Telp"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.fax_darurat" float-label="Fax"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.hp_darurat" float-label="HP"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.email_darurat" float-label="Email"/>
      </el-col>
    </el-row>

    <br>
    <u><b>Referensi Organisasi:</b></u>
    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.nama_organisasi" float-label="Nama Organisasi"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.bidang_departemen" float-label="Bidang/Departemen"/>
      </el-col>
      <el-col :span="12">
        <q-input v-model="Relawan.pimpinan" float-label="Pimpinan"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.rekomendasi" float-label="Rekomendasi"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <q-input v-model="Relawan.nama_pemberi_referensi" float-label="Telp"/>
      </el-col>
      <el-col :span="12">
        <q-datetime v-model="Relawan.tanggal_referensi" type="date" float-label="Tanggal"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.hal_yang_ingin_dilakukan" float-label="Hal yang ingin saya lakukan"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.bahasa" float-label="Bahasa"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.pengobatan_saat_ini" float-label="Pengobatan yang saya terima saat ini"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-input v-model="Relawan.alasan_jadi_relawan" float-label="Mengapa saya mau menjadi relawan"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <q-select v-model="Relawan.keahlian" float-label="Keahlian dalam bidang menangani bencana"
        :options="keahlian"/>
      </el-col>
      <el-col :span="24">
        <q-select v-model="Relawan.kota_tujuan" float-label="Ingin menjadi relawan HOPE di kota apa"
        :options="kota_tujuan"/>
      </el-col>
    </el-row>

    <br>
    <q-btn color="primary" @click="registrasi()">Kirim</q-btn>

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
        tanggal_referensi: Date.now(),
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
        golongan_darah: '',
        status: false,
        reputasi: 0,
        keahlian: ''
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
      kota_tujuan: [
        {label: 'Jakarta', value: 'Jakarta'},
        {label: 'Surabaya', value: 'Surabaya'},
        {label: 'Bali', value: 'Bali'}
      ],
      keahlian: [
        {label: 'Banjir', value: 'Banjir'},
        {label: 'Gempa', value: 'Gempa'},
        {label: 'Vulkanik', value: 'Vulkanik'},
        {label: 'Tsunami', value: 'Tsunami'}
      ]
    }
  },
  methods: {
    registrasi () {
      let Relawan = this.Relawan

      console.log(Relawan)
      this.$axios
        .post('http://localhost:3000/relawan/registrasi', Relawan)
        .then(res => {
          console.log(res)
          this.$router.push({path: '/login'})
        })
    }
  }
}
</script>
