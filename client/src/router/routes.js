
const routes = [
  {
    path: '/',
    component: () => import('pages/AcaraUser.vue')
  },
  {
    path: '/register',
    component: () => import('pages/Register.vue')
  },
  {
    path: '/login',
    component: () => import('pages/Masuk.vue')
  },
  {
    path: '/admin/relawan',
    component: () => import('pages/DaftarRelawan.vue')
  },
  {
    path: '/admin/relawan/id/:id',
    component: () => import('pages/RelawanDetail.vue')
  },
  {
    path: '/admin/relawan/pending',
    component: () => import('pages/DaftarRelawanPending.vue')
  },
  {
    path: '/admin/relawan/formulir/:id',
    component: () => import('pages/FormulirRelawan.vue')
  },
  {
    path: '/admin/relawan/aktivasi/:id',
    component: () => import('pages/AktivasiRelawan.vue')
  },
  {
    path: '/admin/acara',
    component: () => import('pages/DaftarAcara.vue')
  },
  {
    path: '/admin/acara/id/:id',
    component: () => import('pages/AcaraDetail.vue')
  },
  {
    path: '/admin/acara/buat',
    component: () => import('pages/BuatAcara.vue')
  },
  {
    path: '/admin/donor',
    component: () => import('pages/Donor.vue')
  },
  {
    path: '/admin/donor/buat',
    component: () => import('pages/BuatDonor.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
