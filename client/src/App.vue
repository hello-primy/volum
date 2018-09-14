<template>
  <div id="q-app">
    <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          v-show="isAdmin"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Hope Management App
          <div slot="subtitle">Prototype</div>
        </q-toolbar-title>
        <q-btn flat @click="keluar">
          <q-icon name="clear"/>
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-show="isAdmin"
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Menu</q-list-header>
        <q-item @click.native="$router.push({path: '/admin/relawan'})">
          <q-item-side icon="supervised user circle" />
          <q-item-main label="Relawan Aktif" sublabel="Melihat daftar relawan Aktif" />
        </q-item>
        <q-item @click.native="$router.push({path: '/admin/relawan/pending'})">
          <q-item-side icon="supervisor account" />
          <q-item-main label="Relawan Nonaktif" sublabel="Melihat daftar relawan Nonaktif" />
        </q-item>
        <q-item @click.native="$router.push({path: '/admin/acara'})">
          <q-item-side icon="today" />
          <q-item-main label="Bantuan Bencana" sublabel="Melihat daftar Bantuan Bencana" />
        </q-item>
        <q-item @click.native="$router.push({path: '/admin/donor'})">
          <q-item-side icon="pan tool" />
          <q-item-main label="Donor" sublabel="Melihat daftar pendonor" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
    <q-layout-footer>
      <q-tabs v-show="!isAdmin"
        position="bottom"
        align="center">
          <q-route-tab
            v-show="isLogin"
            icon="https"
            label="Login"
            to="/login"
            exact
            slot="title"
            default
          />
          <q-route-tab
            icon="event"
            label="Butuh Bantuan"
            to="/"
            exact
            slot="title"
          />
          <q-route-tab
            label="Profile"
            icon="face"
            to="/profule"
            exact
            slot="title"
          />
        </q-tabs>
    </q-layout-footer>
  </q-layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      isAdmin: '',
      isLogin: ''
    }
  },
  methods: {
    keluar () {
      console.log('tes')
      localStorage.removeItem('id')
      alert('berhasil keluar')
      this.$router.push({path: '/login'})
    }
  },
  mounted () {
    console.log(localStorage.getItem('id'))
    if (localStorage.getItem('id') === null) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
    if (localStorage.getItem('admin') === 'false') {
      this.isAdmin = false
    } else {
      this.isAdmin = true
    }
  }
}
</script>

<style>
</style>
