// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-04-03',
  // devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    "@vite-pwa/nuxt",
    // "nuxt-vuefire",
    "@bg-dev/nuxt-fcm"
  ],
  // vuefire: {
  //   config: {
  //     apiKey: process.env.FIREBASE_API_KEY,
  //     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //     projectId: process.env.FIREBASE_PROJECT_ID,
  //     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  //     appId: process.env.FIREBASE_APP_ID,
  //     measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  //   },
  // },
  fcm: {
    firebaseConfig: {
      apiKey: "AIzaSyDW1fHqAqbasuAQBqDyNzXiCme8BDFmz5s",
      authDomain: "eband-nuxt.firebaseapp.com",
      projectId: "eband-nuxt",
      storageBucket: "eband-nuxt.appspot.com",
      messagingSenderId: "737637505340",
      appId: "1:737637505340:web:f21827140f45f033f12639",
      measurementId: "G-3J4M9QCJCR"
    },
    vapidKey: 'BBfXAi12EnbPqc0alZEuKaT6851qX41aPpfzILbh7BxRO9nSOBW_kc_ZPFWGCzGl7_Ym16bdv4xv7tRaNapgZ4s',
    // vapidKey: process.env.FIREBASE_VAPID_KEY,
    serviceAccount: {
      clientEmail: "firebase-adminsdk-o2wy2@eband-nuxt.iam.gserviceaccount.com",
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrsYGoLsXOTb1G\nvY5xLmUTH0+bJJQOi0P6g0qJ8xbxW4WD55ig6K134mT6Pn5P2hU38/CuRXUE8Ru6\n2ZVIY0fWl6pv7GY6hJejPNPBN6KN9Wlqq7iPiUdZG253qVXLToq0uF+qyB5xaHlp\nVvZlWZfP1ZSe9Tm2q/y9GvUTn299adycx/EtxzxPXKNNqY7o6lFTIW/gUG4FQVf2\nXmsR4u1dhnf84zFua3iuKZwD1kcaAUCmMiUSDLAjXBv71p5u5MDqSZSVeWKXAi9H\nBbae7VKcyvrLqEH9s+v4kKRmDqTti4eR7+ZrODm1vsCU3cwkpHYSkTwtvfieUvHZ\nIwTdfAT5AgMBAAECggEABduQSV9sSYSpCUh15G2kt5TMiNhItJKb7cPcOvR92xt4\nLeE++Zy0VKuJUtbnaZoqFU2vpoOYRhsaVCn+Xu2DoJIkzori1bPWg7kBDDJRFPM6\nJJBQ1bn3otYiZVd0AT0Nro91xvZ9UtTD3xU/PcxjNzHQmHgLNfXnw5wvew1Di22P\nBRizDhwjZoZLkSRbuKw1cpK96LGmy97wU4tFsIN1xZO8HrIPmSYvhwGlCFe9Lnv4\nmIIoAO8as7YD/PgdwysMRwzqnwwJjoHdqQ31BbTtKa7A8WOqCBnPh0ryuMF/JfAt\nETVIrpbjn+eoDYN5TmPSmEbRsEAP+0Lq549hn1NNSQKBgQDnEAZBS8ZdbhDsPxwK\nj/2lqON5zE0H07R1A9noJPJxBXHVnKLtmleU74amSUJ+TeCWXxedZeGwurGzmFL6\nyDS2voobLfNvjPEufM7wTfZJErKUhqxRmA/JgE6PubS4uefoWI1D6cAyPWN53GvQ\nrU8PkVedgmhg74uS5Gi1N7fOFQKBgQC+OS8HE0mGIPLCXcAMhqoiyb8+P9U8GSDI\nIhphsqMBk/GZ5SIUHAmKWiHWzwpjlXSnT7osgj4gixIXgj5s/zBFVil76TwY39oC\nsCtl9YoUIDTN2oiUR+xsNVKjyqzgUXPDT6ev6GgyQ+1VldDkzcUVK4tjhGCySCWK\nGSDs/uA4VQKBgQCbMJ8S4gL0I4XINsbtrTJOPnWyC269UAqHATQtAAu5r096ij6/\n2Qbz6ECGlPPNAx9Rv8KLm68O1QWfOzKYbzlAeA8oHB/Bj2c5sugGbEZ7Y8x/h0hb\ncQdBbiTV0YO5AlvpKPiQYYIN/D9AzLO5L33HVfYDu1/Bo4IaAcD13dtc1QKBgEq7\nRnl+H019lkG7+R4yrZabMfHvvAMvUAywMTMeriGJkMpIFZpW5XygKlks38T9y2WL\n0fV4eZXpbQMlXQcPPlSPJB8VI1IWZ5zUv0gALe34NSaGa0/t7bkZPc0xa7d46ITb\nv2JBaOYOf6g3AmlRWdMWV12SfTatV2oosyHIhCg9AoGBAJLSxb4jMvgoCI8etkDA\n4Pw8DlHXgSUxrCAvUDTfmuU32p2HJue0ouZerSDH1oYFSJiav/1CgV+uEScGdWlj\nSpdPuGssNCZRoqiOOL5c5fosNApAyBp0KlL8eCCktODvpV3/+jHQaj+Bvtmek3Uw\npqY5ZXke9qFxWxC7k1qhnNnK\n-----END PRIVATE KEY-----\n",
      projectId: "eband-nuxt"
    },
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
})