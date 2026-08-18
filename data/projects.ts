export interface Project {
  slug: string
  name: string
  description: string
  detail: string
  image: string
  tags?: string[]
  demo?: string
  source?: string
  images?: string[]
  stack?: { name: string; desc: string }[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'teachup',
    name: 'TeachUp',
    description:
      'Platform edukasi digital dengan AI learning, berita pendidikan, webinar, dan komunitas pembelajaran.',
    detail:
      'TeachUp adalah platform edukasi digital yang menggabungkan AI learning untuk personalisasi materi, agregasi berita pendidikan terkini, webinar interaktif, serta komunitas pembelajaran yang kolaboratif. Dibangun untuk membantu pelajar dan pengajar mendapatkan pengalaman belajar yang lebih adaptif dan menyenangkan.',
    image: '/projects/Teachup.png',
  },
  {
    slug: 'ngalam-tanggap',
    name: 'Ngalam Tanggap',
    description:
      'Aplikasi pelaporan dan layanan tanggap darurat berbasis lokasi untuk meningkatkan keamanan masyarakat.',
    detail:
      'Ngalam Tanggap adalah aplikasi pelaporan dan layanan tanggap darurat berbasis lokasi. Pengguna dapat melaporkan kejadian, melihat peta sebaran insiden secara real-time, dan mengakses layanan darurat dengan cepat sehingga membantu meningkatkan keamanan masyarakat sekitar.',
    image: '/projects/ngalam_tanggap.png',
  },
  {
    slug: 'sobat-bimbing',
    name: 'Sobat Bimbing',
    description:
      'Aplikasi pendampingan Islami bagi remaja untuk pembinaan karakter dan edukasi digital.',
    detail:
      'Sobat Bimbing adalah aplikasi pendampingan Islami yang menyasar remaja. Menyediakan materi pembinaan karakter, jadwal bimbingan, serta edukasi digital agar pengguna mendapatkan tuntunan nilai-nilai Islam secara interaktif dan mudah diakses kapan saja.',
    image: '/projects/sobat_bimbing.png',
  },
  {
    slug: 'qnectify',
    name: 'Qnectify',
    description:
      'Platform AI-powered learning dengan kuis otomatis, gamifikasi, dan fitur kolaboratif.',
    detail:
      'Qnectify adalah platform pembelajaran bertenaga AI dengan pembuatan kuis otomatis dari materi, elemen gamifikasi untuk menjaga motivasi, serta fitur kolaboratif antar pengguna untuk belajar bersama secara lebih efektif dan menyenangkan.',
    image: '/projects/qnectify.png',
  },
  {
    slug: 'neuroclash',
    name: 'Neuroclash',
    description:
      'Game battle royale edukatif yang mengubah proses belajar menjadi pengalaman kompetitif dan menyenangkan.',
    detail:
      'Neuroclash mengubah proses belajar menjadi pengalaman battle royale yang kompetitif. Pemain menjawab soal sambil bersaing dengan pemain lain dalam arena yang seru, sehingga edukasi terasa seperti game yang adiktif namun tetap mendidik.',
    image: '/projects/neuroclash.png',
  },
  {
    slug: 'ayam-kota-malang',
    name: 'Ayam Kota Malang',
    description:
      'Aplikasi kuliner dan layanan pemesanan ayam khas Kota Malang.',
    detail:
      'Ayam Kota Malang adalah aplikasi kuliner yang memudahkan pengguna menemukan dan memesan menu ayam khas Kota Malang. Dilengkapi katalog menu, keranjang belanja, dan integrasi pemesanan agar proses order menjadi cepat dan praktis.',
    image: '/projects/ayamkotamalang.png',
  },
  {
    slug: 'dear-baby',
    name: 'Dear Baby',
    description:
      'Platform pendukung untuk kebutuhan parenting dan tumbuh kembang anak.',
    detail:
      'Dear Baby adalah platform yang mendukung para orang tua dalam mengelola kebutuhan parenting dan memantau tumbuh kembang anak. Berisi jadwal, tips pengasuhan, serta pencatatan perkembangan agar tumbuh kembang anak selalu terpantau.',
    image: '/projects/dearbaby.png',
  },
  {
    slug: 'epiccsafe',
    name: 'EpicCSafe',
    description:
      'Aplikasi keamanan digital yang membantu pengguna menjaga data dan privasi.',
    detail:
      'EpicCSafe membantu pengguna menjaga keamanan data dan privasi digital. Menyediakan fitur pemindaian ancaman, pengelolaan sandi, serta edukasi keamanan siber agar aktivitas online tetap aman dari berbagai risiko.',
    image: '/projects/epiccsafe.png',
  },
  {
    slug: 'omah-gembira',
    name: 'Omah Gembira',
    description:
      'Platform digital untuk kegiatan komunitas dan layanan kebersamaan.',
    detail:
      'Omah Gembira adalah platform digital yang menghubungkan anggota komunitas, menjadwalkan kegiatan bersama, dan menyediakan layanan kebersamaan agar setiap kegiatan komunitas dapat dikelola dengan rapi dan menyenangkan.',
    image: '/projects/omahgembira.png',
  },
  {
    slug: 'omah-nalar',
    name: 'Omah Nalar',
    description:
      'Platform pembelajaran dan pengembangan diri berbasis digital.',
    detail:
      'Omah Nalar menyediakan materi pembelajaran dan program pengembangan diri berbasis digital. Pengguna dapat mengakses kursus, mengikuti progres belajar, dan mengembangkan keterampilan secara mandiri dengan kurasi materi yang terstruktur.',
    image: '/projects/omahnalar.png',
  },
  {
    slug: 'riendys-adv',
    name: 'Riendys Adv',
    description:
      'Platform manajemen iklan dan promosi untuk bisnis.',
    detail:
      'Riendys Adv adalah platform manajemen iklan dan promosi yang membantu bisnis merencanakan, menjalankan, dan memantau kampanye promosi dalam satu dashboard. Dilengkapi laporan performa agar setiap anggaran iklan lebih efektif dan terukur.',
    image: '/projects/riendysadv.png',
  },
  {
    slug: 'rps-generator-unsri',
    name: 'RPS Generator Unsri',
    description:
      'Alat bantu penyusunan Rencana Pembelajaran Semester (RPS) untuk civitas akademika Unsri.',
    detail:
      'RPS Generator Unsri membantu dosen menyusun Rencana Pembelajaran Semester secara cepat dan terstandar. Dengan template otomatis dan panduan pengisian, proses administrasi akademik menjadi jauh lebih efisien.',
    image: '/projects/rps_generator_unsri.png',
  },
  {
    slug: 'sineda',
    name: 'Sineda',
    description:
      'Aplikasi layanan digital untuk mempermudah akses informasi dan kebutuhan sehari-hari.',
    detail:
      'Sineda adalah aplikasi layanan digital yang merangkum berbagai kebutuhan sehari-hari dalam satu tempat — mulai dari informasi layanan publik, notifikasi penting, hingga akses cepat ke fitur yang sering digunakan.',
    image: '/projects/sineda.png',
  },
]
