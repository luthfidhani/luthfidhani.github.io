function profileData() {
  return {
    selectedLanguage:
      localStorage.getItem("language") ||
      (navigator.language.toLowerCase().startsWith("id") ? "id" : "en"),
    profile: {
      image: "assets/img/profile.jpg",
      name: "Luthfi Afrizal Ardhani",
      jobTitle: {
        id: "Data Engineer",
        en: "Data Engineer",
      },
      description: {
        id: "Hai! 👋 Saya Luthfi, Data Engineer di Insight Timer dengan passion besar di dunia data dan machine learning. Sehari-hari saya ngoprek pipeline pakai Airflow, dbt, Spark, sampai deploy model ke server. Saya juga suka main di backend (FastAPI is my go-to!) dan percaya bahwa data yang rapi = keputusan yang lebih cerdas. Di luar kerjaan, saya aktif nulis di Medium dan pernah nerbitin buku tentang neural network. Jadi kalau kamu punya ide seru seputar data atau AI—yuk ngobrol!",
        en: "Hey there! 👋 I'm Luthfi, a Data Engineer at Insight Timer with a big passion for all things data and machine learning. I build and maintain data pipelines with tools like Airflow, dbt, and Spark, and occasionally deploy ML models to production. I'm also into backend development—FastAPI is my jam—and I believe clean data leads to smarter decisions. Outside of work, I write on Medium and once published a book on neural networks. So if you're into data or AI too, let's connect!",
      },
    },
    socmeds: [
      {
        name: "LinkedIn",
        icon: "fa-brands fa-linkedin-in",
        link: "https://www.linkedin.com/in/luthfi-afrizal-ardhani/",
      },
      {
        name: "GitHub",
        icon: "fa-brands fa-github",
        link: "https://github.com/luthfidhani",
      },
      {
        name: "Instagram",
        icon: "fa-brands fa-instagram",
        link: "https://www.instagram.com/luthfidhani17/",
      },
      {
        name: "Twitter",
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/luthfidhani_17",
      },
      {
        name: "Email",
        icon: "fas fa-envelope",
        link: "mailto:luthfidhani17@gmail.com",
      },
    ],
    skills: {
      dataEngineering: [
        {
          image: "assets/img/skils/googlebigquery.svg",
          alt: "BigQuery",
        },
        {
          image: "assets/img/skils/duckdb.png",
          alt: "DuckDB",
        },
        {
          image: "assets/img/skils/airflow.png",
          alt: "Airflow",
        },
        {
          image: "assets/img/skils/dbt.png",
          alt: "dbt",
        },
        {
          image: "assets/img/skils/pyspark.png",
          alt: "PySpark",
        },
        {
          image: "assets/img/skils/apache-beam.png",
          alt: "Apache Beam",
        },
        {
          image: "assets/img/skils/googlepubsub.svg",
          alt: "Pub/Sub",
        },
        {
          image: "assets/img/skils/looker.svg",
          alt: "Looker",
        },
        {
          image: "assets/img/skils/sql.png",
          alt: "SQL",
        },
      ],
      mlAi: [
        {
          image: "assets/img/skils/tensorflow.png",
          alt: "TensorFlow",
        },
        {
          image: "assets/img/skils/pytorch.svg",
          alt: "PyTorch",
        },
        {
          image: "assets/img/skils/scikitlearn.svg",
          alt: "scikit-learn",
        },
        {
          image: "assets/img/skils/mlflow.svg",
          alt: "MLflow",
        },
        {
          image: "assets/img/skils/feast.png",
          alt: "Feast",
        },
        {
          image: "assets/img/skils/lancedb.png",
          alt: "LanceDB",
        },
        {
          image: "assets/img/skils/googlecloud.svg",
          alt: "Vertex AI",
        },
        {
          image: "assets/img/skils/claude.svg",
          alt: "Claude API",
        },
        {
          image: "assets/img/skils/googlegemini.svg",
          alt: "Gemini",
        },
        {
          image: "assets/img/skils/modelcontextprotocol.svg",
          alt: "MCP",
        },
      ],
      backendApps: [
        {
          image: "assets/img/skils/fastapi.png",
          alt: "FastAPI",
        },
        {
          image: "assets/img/skils/django.png",
          alt: "Django",
        },
        {
          image: "assets/img/skils/flask.svg",
          alt: "Flask",
        },
      ],
      cloudDevOps: [
        {
          image: "assets/img/skils/gcp.png",
          alt: "GCP",
        },
        {
          image: "assets/img/skils/docker.png",
          alt: "Docker",
        },
        {
          image: "assets/img/skils/kubernetes.png",
          alt: "Kubernetes",
        },
        {
          image: "assets/img/skils/helm.svg",
          alt: "Helm",
        },
        {
          image: "assets/img/skils/argo.svg",
          alt: "Argo CD",
        },
        {
          image: "assets/img/skils/terraform.png",
          alt: "Terraform",
        },
        {
          image: "assets/img/skils/prometheus.svg",
          alt: "Prometheus",
        },
        {
          image: "assets/img/skils/redis.png",
          alt: "Redis",
        },
      ],
      programmingLanguages: [
        {
          image: "assets/img/skils/python.png",
          alt: "Python",
        },
        {
          image: "assets/img/skils/javascript.png",
          alt: "JavaScript",
        },
      ],
    },
    projects: [
      {
        image: "assets/img/projects/treedeck.png",
        title: {
          id: "TreeDeck",
          en: "TreeDeck",
        },
        description: {
          id: "Ekstensi VS Code dan Cursor untuk mengelola git worktree: lihat, diff, buat, hapus, dan bandingkan worktree dari satu panel sidebar. Cocok untuk menjalankan beberapa AI coding agent secara paralel.",
          en: "A VS Code and Cursor extension for managing git worktrees: list, diff, create, remove and compare worktrees from one sidebar panel. Built for running parallel AI coding agents.",
        },
        link: "https://github.com/luthfidhani/treedeck",
        category: ["VS Code Extension", "TypeScript", "Git", "Developer Tools"],
      },
      {
        image: "assets/img/projects/mac-security-alarm.png",
        title: {
          id: "Mac Security Alarm",
          en: "Mac Security Alarm",
        },
        description: {
          id: "Aplikasi menu bar macOS yang mengirim notifikasi Telegram beserta foto dan membunyikan alarm saat charger dicabut, layar ditutup, sleep, atau shutdown.",
          en: "A macOS menu bar security alarm that sends Telegram alerts with photos and sounds a loud alarm when the charger is unplugged, the lid closes, or the Mac sleeps or shuts down.",
        },
        link: "https://github.com/luthfidhani/mac-security-alarm",
        category: ["macOS", "Swift", "SwiftUI", "Telegram"],
      },
      {
        image: "assets/img/projects/photo-watermarker.png",
        title: {
          id: "Markly",
          en: "Markly",
        },
        description: {
          id: "Editor watermark foto yang mengutamakan privasi: berjalan sepenuhnya di browser, mendukung batch export dan PWA, foto tidak pernah meninggalkan perangkat.",
          en: "A privacy-first photo watermark editor that runs entirely in the browser, with batch export and PWA support. Photos never leave your device.",
        },
        link: "https://github.com/luthfidhani/photo-watermarker",
        category: ["Web", "PWA", "TypeScript", "Privacy"],
      },
      {
        image: "assets/img/projects/secret-management-system.png",
        title: {
          id: "Secret Management System",
          en: "Secret Management System",
        },
        description: {
          id: "Sistem manajemen password dan identitas yang aman dengan enkripsi AES-256-GCM. Self-hosted, data tidak pernah meninggalkan perangkat dalam keadaan tidak terenkripsi.",
          en: "A secure, self-hosted password and identity management system with AES-256-GCM encryption. Your secrets never leave your device unencrypted.",
        },
        link: "https://github.com/luthfidhani/secret-management-system",
        category: ["Security", "Flask", "Python", "Self-Hosted"],
      },
      {
        image: "assets/img/projects/tabspan.svg",
        title: {
          id: "TabSpan",
          en: "TabSpan",
        },
        description: {
          id: "Client Android untuk Spanly yang ditulis dari nol: jadikan tablet sebagai layar kedua Mac lewat USB accessory, plus perbaikan flow-control dan ketajaman di sisi host.",
          en: "An Android client for Spanly written from scratch: use a tablet as a second display for a Mac over USB accessory, plus flow-control and sharpness fixes to the host.",
        },
        link: "https://github.com/luthfidhani/tabspan",
        category: ["Android", "Kotlin", "C++", "USB"],
      },
      {
        image: "assets/img/projects/im3-quota-monitor.png",
        title: {
          id: "IM3 Quota Monitor",
          en: "IM3 Quota Monitor",
        },
        description: {
          id: "Aplikasi menu bar macOS untuk memantau sisa kuota data Indosat IM3, memakai API web portal hasil reverse-engineering.",
          en: "A macOS menu bar app that shows your remaining Indosat IM3 data quota, built on a reverse-engineered web portal API.",
        },
        link: "https://github.com/luthfidhani/im3-quota-monitor",
        category: ["macOS", "Python", "Reverse Engineering"],
      },
      {
        image: "assets/img/projects/barang-ku.svg",
        title: {
          id: "BarangKu",
          en: "BarangKu",
        },
        description: {
          id: "Aplikasi inventaris rumah: catat barang, pembelian, garansi, dan riwayat servis. Dibangun dengan FastAPI, PostgreSQL, dan frontend Astro.",
          en: "A home inventory app for items, purchases, warranties and repair history. Built with FastAPI, PostgreSQL and an Astro frontend.",
        },
        link: "https://github.com/luthfidhani/barang-ku",
        category: ["FastAPI", "PostgreSQL", "Astro", "Docker"],
      },
      {
        image: "assets/img/projects/InviteEase.png",
        title: {
          id: "InviteEase",
          en: "InviteEase",
        },
        description: {
          id: "Sistem check-in tamu yang ringan dan dapat dihosting sendiri. Ideal untuk pernikahan, acara perusahaan, atau tempat mana pun yang membutuhkan meja resepsionis cepat dan tanpa kertas.",
          en: "A lightweight self-hosted guest check-in system. Ideal for weddings, corporate events, or any place where you need a fast, paper-less reception desk.",
        },
        link: "https://github.com/luthfidhani/InviteEase",
        category: ["Django", "Web", "Python", "HTML", "CSS", "JavaScript"],
      },
      {
        image: "assets/img/projects/KasKu.png",
        title: {
          id: "KasKu",
          en: "KasKu",
        },
        description: {
          id: "KasKu adalah bot Telegram berbasis AI yang bantu catat pemasukan dan pengeluaran lewat chat santai. Cukup ngobrol aja, KasKu yang urus dan simpan otomatis ke Google Sheets, sambil kasih candaan atau motivasi biar makin seru! 😎",
          en: "KasKu is an AI Telegram bot that tracks your income and expenses through casual chat. Just type like chatting with a friend—KasKu handles the rest and saves it to Google Sheets, sprinkled with jokes or motivation!",
        },
        link: "https://github.com/luthfidhani/KasKu",
        category: ["Bot", "Telegram", "Python"],
      },
      {
        image: "assets/img/projects/Web-Spam-SMS-Classification-Django.png",
        title: {
          id: "Web Spam SMS Classification",
          en: "Web Spam SMS Classification",
        },
        description: {
          id: "Web Machine Learning yang dapat digunakan untuk mendeteksi atau mengklasifikasikan isi dari SMS apakah termasuk spam atau tidak.",
          en: "A Machine Learning web app used to detect or classify whether an SMS content is spam or not.",
        },
        link: "https://github.com/luthfidhani/Web-Spam-SMS-Classification-Django",
        category: ["ML", "Web", "Django", "Python"],
      },
      {
        image: "assets/img/projects/Al-Quran-Information-Retrieval.png",
        title: {
          id: "Al-Quran Information Retrieval",
          en: "Al-Quran Information Retrieval",
        },
        description: {
          id: "Merupakan hasil skripsi saya dengan topik pencarian ayat berdasarkan topik Al-Quran terjemahan bahasa Indonesia.",
          en: "My thesis project on verse retrieval based on topics in the Indonesian translation of the Quran.",
        },
        link: "https://github.com/luthfidhani/Al-Quran-Information-Retrieval",
        category: ["ML", "Web", "Django", "Python"],
      },
      {
        image: "assets/img/projects/home-asset-and-service-tracker.svg",
        title: {
          id: "Home Asset & Service Tracker",
          en: "Home Asset & Service Tracker",
        },
        description: {
          id: "Aplikasi pribadi untuk mengelola aset rumah: garansi, riwayat servis, dan riwayat penjualan dengan perhitungan untung/rugi.",
          en: "A personal app for tracking home assets, warranties, service records and sales history with profit/loss calculation.",
        },
        link: "https://github.com/luthfidhani/home-asset-and-service-tracker",
        category: ["Web", "Astro", "Supabase"],
      },
      {
        image: "assets/img/projects/AI-essay-grading-system.png",
        title: {
          id: "AI Essay Grading System",
          en: "AI Essay Grading System",
        },
        description: {
          id: "Sistem penilaian esai otomatis menggunakan Python dan OpenAI API untuk membantu guru menilai jawaban murid dengan cepat dan memberikan feedback yang terperinci.",
          en: "An automatic essay grading system using Python and OpenAI API to help teachers quickly assess student answers and provide detailed feedback.",
        },
        link: "https://github.com/luthfidhani/AI-essay-grading-system",
        category: ["AI", "ChatGPT", "Python"],
      },
      {
        image: "assets/img/projects/tic-tac-toe.png",
        title: {
          id: "Tic-Tac-Toe Online",
          en: "Tic-Tac-Toe Online",
        },
        description: {
          id: "Game Tic-Tac-Toe multiplayer online yang dibangun dengan FastAPI, WebSockets, dan Alpine.js. Fitur sistem room dengan ID yang bisa dibagikan, update real-time, dan desain responsif dengan Tailwind CSS.",
          en: "Multiplayer online Tic-Tac-Toe game built with FastAPI, WebSockets, and Alpine.js. Features room system with shareable IDs, real-time updates, and responsive design with Tailwind CSS.",
        },
        link: "https://github.com/luthfidhani/tic-tac-toe",
        category: ["Game", "FastAPI", "WebSocket", "Python", "Alpine.js"],
      },
      {
        image: "assets/img/projects/al-quran.png",
        title: {
          id: "Al-Quran Tafsir & Terjemahan",
          en: "Al-Quran Tafsir & Translation",
        },
        description: {
          id: "Website Al-Quran Tafsir & Terjemahan untuk memudahkan akses dan pemahaman ayat-ayat Al-Quran.",
          en: "Al-Quran Tafsir & Translation website to facilitate access and understanding of Quranic verses.",
        },
        link: "https://github.com/luthfidhani/al-quran",
        category: ["Web", "API", "HTML", "JavaScript"],
      },
      {
        image: "assets/img/projects/khataman-quran-bersama.png",
        title: {
          id: "Khataman Quran Bersama",
          en: "Group Quran Completion",
        },
        description: {
          id: "Khataman Quran Bersama membantu kelompok untuk menuntaskan Al-Quran dengan menugaskan Juz tertentu kepada setiap anggota.",
          en: "Group Quran Completion helps groups to complete the Quran by assigning specific Juz to each member.",
        },
        link: "https://github.com/luthfidhani/khataman-quran-bersama",
        category: ["Web", "HTML", "CSS", "JavaScript"],
      },
      {
        image: "assets/img/projects/noise-detector.png",
        title: {
          id: "Noise Detector",
          en: "Noise Detector",
        },
        description: {
          id: "Aplikasi web untuk memantau tingkat kebisingan secara real-time dengan gauge setengah lingkaran, memakai Web Audio API.",
          en: "A real-time ambient noise monitor with a semicircular dB gauge, built on the Web Audio API.",
        },
        link: "https://github.com/luthfidhani/noise-detector",
        category: ["Web", "Web Audio API", "Alpine.js"],
      },
      {
        image: "assets/img/projects/Klasifikasi-Daging-Sapi-PKL.png",
        title: {
          id: "Klasifikasi Daging Sapi PKL",
          en: "Beef Quality Classification",
        },
        description: {
          id: "Aplikasi mobile yang dapat digunakan untuk mengklasifikasikan daging sapi berdasarkan kualitasnya hanya menggunakan foto.",
          en: "A mobile application that can classify beef quality using just a photo.",
        },
        link: "https://github.com/luthfidhani/Klasifikasi-Daging-Sapi-PKL",
        category: ["ML", "Mobile", "Flutter", "Django", "Python"],
      },
      {
        image: "assets/img/projects/youtube-downloader-bot-telegram-django.png",
        title: {
          id: "Youtube Downloader Bot Telegram",
          en: "Youtube Downloader Bot Telegram",
        },
        description: {
          id: "Bot Telegram untuk mendownload video atau audio dari Youtube dengan mudah dan cepat.",
          en: "A Telegram bot to easily and quickly download videos or audio from YouTube.",
        },
        link: "https://github.com/luthfidhani/youtube-downloader-bot-telegram-django",
        category: ["API", "Bot", "Telegram", "Django", "Python"],
      },
      {
        image: "assets/img/projects/prediksi-kelulusan-mahasiswa.png",
        title: {
          id: "Prediksi Kelulusan Mahasiswa",
          en: "Student Graduation Prediction",
        },
        description: {
          id: "Aplikasi ini bertujuan untuk memprediksi apakah seorang mahasiswa akan lulus tepat waktu atau tidak berdasarkan data kelulusan mahasiswa.",
          en: "This application aims to predict whether a student will graduate on time based on student graduation data.",
        },
        link: "https://github.com/luthfidhani/prediksi-kelulusan-mahasiswa",
        category: ["ML", "Flask", "Python"],
      },
      {
        image: "assets/img/projects/kapsul-waktu.png",
        title: {
          id: "Kapsul Waktu",
          en: "Time Capsule",
        },
        description: {
          id: "Web sederhana untuk membuat kapsul waktu yang akan terbuka pada tanggal yang ditentukan.",
          en: "A simple website to create a time capsule that will open on a specified date.",
        },
        link: "https://github.com/luthfidhani/kapsul-waktu",
        category: ["Web", "Flask", "SQL", "Python", "Redis"],
      },
      {
        image: "assets/img/projects/sistem-skoring-pelatihan-microsoft.png",
        title: {
          id: "Sistem Skoring Pelatihan Microsoft",
          en: "Microsoft Training Scoring System",
        },
        description: {
          id: "Sistem yang melakukan evaluasi terhadap materi pelatihan atau pelatihan yang akan dilaksanakan.",
          en: "A system that evaluates training materials or upcoming trainings.",
        },
        link: "https://github.com/luthfidhani/sistem-skoring-pelatihan-microsoft",
        category: ["ML", "Web", "Django", "Python"],
      },
      {
        image: "assets/img/projects/simsimi-chat-bot-telegram.png",
        title: {
          id: "SimSimi Chat Bot Telegram",
          en: "SimSimi Chat Bot Telegram",
        },
        description: {
          id: "Chat Bot Telegram yang menggunakan API SimSimi untuk menjawab pesan pengguna.",
          en: "A Telegram chat bot that uses the SimSimi API to respond to user messages.",
        },
        link: "https://github.com/luthfidhani/simsimi-chat-bot-telegram",
        category: ["Bot", "Telegram", "API", "Flask", "Python"],
      },
      {
        image: "assets/img/projects/cek-khodam.png",
        title: {
          id: "Check Khodam",
          en: "Check Khodam",
        },
        description: {
          id: "Web sederhana untuk memeriksa khodam anda berdasarkan nama masukan Anda. Dibuat untuk tujuan bersenang-senang dan belajar.",
          en: "A simple website to check your khodam based on your input name. Made for fun and learning purposes.",
        },
        link: "https://github.com/luthfidhani/cek-khodam",
        category: ["Web", "HTML", "CSS", "JavaScript"],
      },
    ],
    publications: [
      {
        title: {
          id: "Pencarian Topik dalam Al-Quran Terjemahan Bahasa Indonesia dengan Metode Hybrid Fuzzy C-Means Particle Swarm Optimization (FCM-PSO)",
          en: "Topic Search in Indonesian Translation of Al-Quran Using Hybrid Fuzzy C-Means Particle Swarm Optimization (FCM-PSO) Method",
        },
        description: {
          id: "Penelitian tentang metode pencarian topik dalam Al-Quran menggunakan teknik FCM-PSO.",
          en: "Research on topic search methods in the Quran using FCM-PSO techniques.",
        },
        link: "https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/10693",
      },
      {
        title: {
          id: "Klasifikasi citra makanan/non makanan menggunakan metode Transfer Learning dengan model Residual Network",
          en: "Classification of Food/Non-Food Images Using Transfer Learning with Residual Network Model",
        },
        description: {
          id: "Studi tentang klasifikasi citra makanan dan non-makanan menggunakan transfer learning.",
          en: "A study on classifying food and non-food images using transfer learning.",
        },
        link: "https://journal.unipdu.ac.id/index.php/teknologi/article/view/2402",
      },
    ],
    books: [
      {
        title: {
          id: "Bahasa Bayi NEURAL NETWORK",
          en: "Baby Language NEURAL NETWORK",
        },
        subtitle: {
          id: "Rahasia Dibalik AI",
          en: "Secrets Behind AI",
        },
        description: {
          id: "Buku yang menyederhanakan topik kompleks 'Neural Network' menggunakan 'Bahasa Bayi', membuatnya mudah dipahami dengan analogi sederhana dan tanpa formula rumit. Cocok untuk pemula, mahasiswa, dan siapa saja yang tertarik memahami 'otak' di balik AI dengan cara yang menyenangkan.",
          en: "A book that simplifies the complex topic of 'Neural Network' using 'Baby Language', making it accessible with simple analogies and without complicated formulas. Perfect for beginners, students, and anyone interested in understanding the 'brain' behind AI in an enjoyable way.",
        },
        cover: "assets/img/books/neural-network-cover.jpg",
        link: "https://luthfidhani.my.id/ebook-neural-network/",
        category: ["AI", "Machine Learning", "Education", "Book"],
      },
    ],
    toggleLanguage() {
      this.selectedLanguage = this.selectedLanguage === "id" ? "en" : "id";
      localStorage.setItem("language", this.selectedLanguage);
    },
    formatCategoryName(name) {
      const categoryNames = {
        dataEngineering: {
          id: "Data Engineering",
          en: "Data Engineering",
        },
        mlAi: {
          id: "ML & AI",
          en: "ML & AI",
        },
        backendApps: {
          id: "Backend",
          en: "Backend",
        },
        cloudDevOps: {
          id: "Cloud & DevOps",
          en: "Cloud & DevOps",
        },
        programmingLanguages: {
          id: "Bahasa Pemrograman",
          en: "Programming Languages",
        },
      };
      return categoryNames[name][this.selectedLanguage];
    },
  };
}
