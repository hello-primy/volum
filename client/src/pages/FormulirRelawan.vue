<template>
  <div class="layout-padding">
    <div id="formulir">
      <p style="text-align: center;"><span style="text-decoration: underline;">Formulir Aplikasi Relawa</span><span style="text-decoration-line: underline;">n</span></p>
      <p style="text-align: center;"><span style="text-decoration: underline;"><strong>HOPE Volunteers</strong></span></p>
      <p><img style="text-align: center; float: right;" src="~/assets/hope.png" alt="" width="179" height="119" /></p>
      <p>&nbsp;</p>
      <p style="text-align: center;">&nbsp;</p>
      <p style="text-align: left;">&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <table style="height: 280px; margin-left: auto; margin-right: auto; width: 992px;" ref="pdf">
        <tbody>
          <tr>
            <td style="width: 235px;">
              <p>Nama Keluarga:<br />(fam/marga)</p>
            </td>
            <td style="width: 198px; text-align: left;">{{Relawan.nama_keluarga}}</td>
            <td style="width: 162px;">Umur:</td>
            <td style="width: 199px; text-align: left;">{{Relawan.umur}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Nama depan:</p>
            </td>
            <td style="width: 198px; text-align: left;">{{Relawan.nama_keluarga}}</td>
            <td style="width: 162px;">Nama tambahan:</td>
            <td style="width: 199px;">{{Relawan.nama_tambahan}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Jenis kelamin:</p>
            </td>
            <td style="width: 198px;">{{Relawan.jenis_kelamin}}</td>
            <td style="width: 162px;">Warga Negara:</td>
            <td style="width: 199px;">{{Relawan.warga_negara}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Alamat:</p>
            </td>
            <td style="width: 198px;">{{Relawan.alamat}}</td>
            <td style="width: 162px;">&nbsp;</td>
            <td style="width: 199px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Kota:</p>
            </td>
            <td style="width: 198px;">{{Relawan.kota}}</td>
            <td style="width: 162px;">Negara:</td>
            <td style="width: 199px;">{{Relawan.negara}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Telp:</p>
            </td>
            <td style="width: 198px;">{{Relawan.telp}}</td>
            <td style="width: 162px;">Fax:&nbsp;</td>
            <td style="width: 199px;">{{Relawan.fax}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>HP:</p>
            </td>
            <td style="width: 198px;">{{Relawan.hp}}</td>
            <td style="width: 162px;">Email:&nbsp;</td>
            <td style="width: 199px;">{{Relawan.email}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Pekerjaan:</p>
            </td>
            <td style="width: 198px;">{{Relawan.pekerjaan}}</td>
            <td style="width: 162px;">Perusahaan:&nbsp;</td>
            <td style="width: 199px;">{{Relawan.perusahaan}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Pendidikan terakhir:</p>
            </td>
            <td style="width: 198px;">{{Relawan.pendidikan_terakhir}}</td>
            <td style="width: 162px;">&nbsp;</td>
            <td style="width: 199px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Waktu yang tersedia:</p>
            </td>
            <td style="width: 198px;">{{Relawan.waktu_yang_tersedia}}</td>
            <td style="width: 162px;">Lamanya:&nbsp;</td>
            <td style="width: 199px;">{{Relawan.lamanya_waktu}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Biaya akomodasi &amp; transportasi</p>
            </td>
            <td style="width: 198px;">{{Relawan.biaya_akomodasi_dan_transportasi}}</td>
            <td style="width: 162px;">&nbsp;</td>
            <td style="width: 199px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Program yang ingin dilakukan<br />(Pendidikan, Kesehatan, Multimedia, Publikasi)</p>
            </td>
            <td style="width: 198px;">{{Relawan.program_yang_ingin_dilakukan}}</td>
            <td style="width: 162px;">&nbsp;</td>
            <td style="width: 199px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p><strong>Dalam keadaan darurat, yang bisa dihubungi:</strong></p>
            </td>
            <td style="width: 198px;">&nbsp;</td>
            <td style="width: 162px;">&nbsp;</td>
            <td style="width: 199px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Nama keluarga:<br />(fam/marga)</p>
            </td>
            <td style="width: 198px;">{{Relawan.nama_keluarga_darurat}}</td>
            <td style="width: 162px;">Hubungan:</td>
            <td style="width: 199px;">{{Relawan.hubungan_darurat}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Nama Depan:</p>
            </td>
            <td style="width: 198px;">{{Relawan.nama_depan_darurat}}&nbsp;</td>
            <td style="width: 162px;">Nama tambahan:</td>
            <td style="width: 199px;">{{Relawan.nama_tambahan_darurat}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Alamat:</p>
            </td>
            <td style="width: 198px;">{{Relawan.alamat_darurat}}</td>
            <td style="width: 162px;">&nbsp;</td>
            <td style="width: 199px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Kota:</p>
            </td>
            <td style="width: 198px;">{{Relawan.kota_darurat}}</td>
            <td style="width: 162px;">Negara:</td>
            <td style="width: 199px;">{{Relawan.negara_darurat}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Telp:</p>
            </td>
            <td style="width: 198px;">{{Relawan.telp_darurat}}</td>
            <td style="width: 162px;">Fax:</td>
            <td style="width: 199px;">{{Relawan.fax_darurat}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>HP:</p>
            </td>
            <td style="width: 198px;">{{Relawan.hp_darurat}}</td>
            <td style="width: 162px;">Email:</td>
            <td style="width: 199px;">{{Relawan.email_darurat}}</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p><span style="text-decoration: underline;"><strong>Referensi organisasi:</strong></span></p>
            </td>
            <td style="width: 198px;">&nbsp;</td>
            <td style="width: 162px;">&nbsp;</td>
            <td style="width: 199px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Nama Organisasi:</p>
            </td>
            <td style="width: 198px;">{{Relawan.nama_organisasi}}</td>
            <td style="width: 162px;">&nbsp;</td>
            <td style="width: 199px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 235px;">
              <p>Bidang/Departemen:</p>
            </td>
            <td style="width: 198px;">{{Relawan.bidang_departemen}}</td>
            <td style="width: 162px;">Pimpinan:</td>
            <td style="width: 199px;">{{Relawan.pimpinan}}</td>
          </tr>
        </tbody>
      </table>
      <p>&nbsp;</p>
      <table style="height: 85px; margin-left: auto; margin-right: auto;" width="1000">
        <tbody>
          <tr style="height: 34px;">
            <td style="width: 322px; height: 34px;">
              <p>Rekomendasi:</p>
            </td>
          </tr>
          <tr style="height: 102px;">
            <td style="width: 322px; height: 102px;">
              <p>{{Relawan.rekomendasi}}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table style="width: 996px; height: 80px; margin-left: auto; margin-right: auto;">
        <tbody>
          <tr>
            <td style="width: 378px;">
              <p>Tanda tangan pemberi referensi:</p>
            </td>
            <td style="width: 309px;">{{Relawan.nama_pemberi_referensi}}</td>
            <td style="width: 291px;">{{Relawan.tanggal_referensi}}</td>
          </tr>
          <tr>
            <td style="width: 378px;">&nbsp;</td>
            <td style="width: 309px;">Nama:</td>
            <td style="width: 291px;">Tanggal:</td>
          </tr>
        </tbody>
      </table>
      <table style="width: 1000px; height: 80px; margin-left: auto; margin-right: auto;">
        <tbody>
          <tr>
            <td>
              <p><span style="text-decoration: underline;"><strong>Hal yang ingin saya lakukan:</strong></span></p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{{Relawan.hal_yang_ingin_dilakukan}}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table style="width: 984px; height: 80px; margin-left: auto; margin-right: auto;">
        <tbody>
          <tr>
            <td style="width: 348px;">
              <p>Bahasa:</p>
            </td>
            <td style="width: 237px;">....</td>
            <td style="width: 140px;">Inggris</td>
            <td style="width: 247px;">Lancar/Pasif</td>
          </tr>
          <tr>
            <td style="width: 348px;">
              <p>&nbsp;</p>
            </td>
            <td style="width: 237px;">....</td>
            <td style="width: 140px;">Indonesia</td>
            <td style="width: 247px;">Lancar/Pasif</td>
          </tr>
          <tr>
            <td style="width: 348px;">
              <p>&nbsp;</p>
            </td>
            <td style="width: 237px;">....</td>
            <td style="width: 140px;">Lain-lain</td>
            <td style="width: 247px;">Lancar/Pasif&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <table style="width: 1000px; height: 80px; margin-left: auto; margin-right: auto;">
        <tbody>
          <tr>
            <td>
              <p>{{Relawan.bahasa}}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table style="width: 1000px; height: 80px; margin-left: auto; margin-right: auto;">
        <tbody>
          <tr style="height: 18px;">
            <td style="height: 18px;">
              <p>Pengobatan yang sedang diterima saat ini:</p>
            </td>
          </tr>
          <tr style="height: 86px;">
            <td style="height: 86px;">
              <p>{{Relawan.pengobatan_saat_ini}}</p>
            </td>
          </tr>
          <tr style="height: 18px;">
            <td style="height: 18px;">
              <p><span style="text-decoration: underline;"><strong>Mengapa saya mau menjadi volunteer (min. 50kata):</strong></span></p>
            </td>
          </tr>
          <tr style="height: 106px;">
            <td style="height: 106px;">
              <p>{{Relawan.alasan_jadi_relawan}}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="page" title="Page 1">
        <div class="section">
          <div class="layoutArea">
            <div class="column">
              <p>Untuk kepentingan Volunteer ini saya atas inisiatif sendiri ingin mengikuti kegiatan HOPE Volunteer di
                kota&nbsp;<strong>{{Relawan.kota_tujuan}}</strong> - Indonesia.</p>
            </div>
          </div>
          <div class="layoutArea">
            <div class="column">
              <p>Saya, <strong>{{Relawan.nama_lengkap}}</strong>, dengan no. ID (SIM/KTP/Passport) : <strong>{{Relawan.ktp}}</strong></p>
              <p>bertanggungjawab atas segala kecelakaan, kehilangan, tuntutan, biaya, perkataan dan perbuatan (termasuk
                tuntutan secara hukum), atas kelalaian yang saya lakukan selama melakukan kegiatan HOPE Volunteer ini.</p>
              <table style="width: 996px; height: 80px; margin-left: auto; margin-right: auto;">
                <tbody>
                  <tr>
                    <td style="width: 236px;">
                      <p>Tanda tangan:</p>
                    </td>
                    <td style="width: 748px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="width: 236px;">
                      <p>Nama:</p>
                    </td>
                    <td style="width: 748px;">{{Relawan.nama_lengkap}}</td>
                  </tr>
                  <tr>
                    <td style="width: 236px;">
                      <p>ID No.:</p>
                    </td>
                    <td style="width: 748px;">{{Relawan.ktp}}</td>
                  </tr>
                  <tr>
                    <td style="width: 236px;">
                      <p>Tanggal:</p>
                    </td>
                    <td style="width: 748px;">{{Relawan.tanggal_daftar}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="layoutArea">&nbsp;</div>
          <div class="layoutArea">
            <div class="page" title="Page 2">
              <div class="layoutArea">
                <div class="column">
                  <p>Jangan di isi: (Hanya oleh staf HOPE worldwide Indonesia)</p>
                  <table style="width: 1000px; height: 80px; border-color: #000000; margin-left: auto; margin-right: auto;"
                    border="1">
                    <tbody>
                      <tr style="height: 31px;">
                        <td style="width: 195px; height: 31px;">
                          <p>Disetujui/diperiksa</p>
                        </td>
                        <td style="width: 230px; height: 31px;">Oleh:</td>
                        <td style="width: 222px; height: 31px;">Tanggal:</td>
                        <td style="width: 165px; height: 31px;">Persetujuan</td>
                        <td style="width: 154px; height: 31px;">Oleh</td>
                      </tr>
                      <tr style="height: 32px;">
                        <td style="width: 195px; height: 32px;">
                          <p>{{Relawan.diperiksa}}</p>
                        </td>
                        <td style="width: 230px; height: 32px;">{{Relawan.nama_pemeriksa}}</td>
                        <td style="width: 222px; height: 32px;">{{Relawan.tanggal_diterima}}</td>
                        <td style="width: 165px; height: 32px;">{{Relawan.diterima}}</td>
                        <td style="width: 154px; height: 32px;">{{Relawan.nama_persetuju}}</td>
                      </tr>
                    </tbody>
                  </table>
                  <table style="width: 990px; height: 80px; margin-left: auto; margin-right: auto;">
                    <tbody>
                      <tr style="height: 25px;">
                        <td style="width: 187px; height: 25px;">
                          <p>Penanggung Jawab:</p>
                        </td>
                        <td style="width: 327px; height: 25px;">{{Relawan.penanggung_jawab}}</td>
                        <td style="width: 184px; height: 25px;">Tanggal</td>
                        <td style="width: 274px; height: 25px;">{{Relawan.tanggal_diterima}}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        @click="unduhFormulir"
        icon="file download">
        <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Unduh Formulir</q-tooltip>
      </q-fab-action>
    </q-fab>

    <canvas id="canvas" width=640 height=480 style="display: none"></canvas>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Relawan: {
      }
    }
  },
  methods: {
    unduhFormulir () {
      const pdf = new this.$jsPDF()
      pdf.fromHTML(this.$refs['pdf'], 10, 10)
      pdf.save(`Fromulir-${this.Relawan.nama_lengkap}` + '.pdf')
    }
  },
  mounted () {
    this.$axios
      .get(`http://localhost:3000/relawan/${this.$route.params.id}`)
      .then(res => {
        this.Relawan = JSON.parse(JSON.stringify(res.data))
        console.log(res.data)
      })
  }
}
</script>
