function profileData() {
  return {
    selectedLanguage: 'en', // 'id' untuk Indonesia, 'en' untuk Inggris
    profile: {
      image: "assets/img/profile.jpg",
      name: "Luthfi Afrizal Ardhani",
      jobTitle: {
        id: "Data Engineer",
        en: "Data Engineer"
      },
      description: {
        id: "Hai! 👋 Saya Luthfi, Data Engineer di Insight Timer dengan passion besar di dunia data dan machine learning. Sehari-hari saya ngoprek pipeline pakai Airflow, dbt, Spark, sampai deploy model ke server. Saya juga suka main di backend (FastAPI is my go-to!) dan percaya bahwa data yang rapi = keputusan yang lebih cerdas. Di luar kerjaan, saya aktif nulis di Medium dan pernah nerbitin buku tentang neural network. Jadi kalau kamu punya ide seru seputar data atau AI—yuk ngobrol!",
        en: "Hey there! 👋 I'm Luthfi, a Data Engineer at Insight Timer with a big passion for all things data and machine learning. I build and maintain data pipelines with tools like Airflow, dbt, and Spark, and occasionally deploy ML models to production. I'm also into backend development—FastAPI is my jam—and I believe clean data leads to smarter decisions. Outside of work, I write on Medium and once published a book on neural networks. So if you're into data or AI too, let's connect!"
      }
    },
    socmeds: [
      {
        name: "LinkedIn",
        icon: "fa-brands fa-linkedin-in",
        link: "https://www.linkedin.com/in/luthfi-afrizal-ardhani/"
      },
      {
        name: "GitHub",
        icon: "fa-brands fa-github",
        link: "https://github.com/luthfidhani"
      },
      {
        name: "Instagram",
        icon: "fa-brands fa-instagram",
        link: "https://www.instagram.com/luthfidhani17/"
      },
      {
        name: "Twitter",
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/luthfidhani_17"
      },
      {
        name: "Email",
        icon: "fas fa-envelope",
        link: "mailto:luthfidhani17@gmail.com"
      },
    ],
    skills: {
      frameworks: [
        {
          link: "assets/img/skils/django.png",
          alt: "django"
        },
        {
          link: "assets/img/skils/fastapi.png",
          alt: "fastapi"
        },
        {
          link: "assets/img/skils/tensorflow.png",
          alt: "tensorflow"
        },
        {
          link: "assets/img/skils/alpine-js.png",
          alt: "alpine-js"
        }
      ],
      dataEngineering: [
        {
          link: "assets/img/skils/airflow.png",
          alt: "airflow"
        },
        {
          link: "assets/img/skils/sql.png",
          alt: "sql"
        },
        {
          link: "assets/img/skils/mongodb.png",
          alt: "mongodb"
        },
        {
          link: "assets/img/skils/tableau.png",
          alt: "tableau"
        },
        {
          link: "assets/img/skils/dbt.png",
          alt: "dbt"
        },
        {
          link: "assets/img/skils/pyspark.png",
          alt: "pyspark"
        },
        {
          link: "assets/img/skils/apache-beam.png",
          alt: "apache beam"
        },
        {
          link: "assets/img/skils/redis.png",
          alt: "Redis"
        }
      ],
      cloudDevOps: [
        {
          link: "assets/img/skils/gcp.png",
          alt: "gcp"
        },
        {
          link: "assets/img/skils/docker.png",
          alt: "docker"
        },
        {
          link: "assets/img/skils/kubernetes.png",
          alt: "kubernetes"
        },
        {
          link: "assets/img/skils/terraform.png",
          alt: "terraform"
        }
      ],
      programmingLanguages: [
        {
          link: "assets/img/skils/python.png",
          alt: "python"
        },
        {
          link: "assets/img/skils/javascript.png",
          alt: "javascript"
        },
      ]
    },
    projects: [
      {
        image: "assets/img/projects/tic-tac-toe.png",
        title: {
          id: "Tic-Tac-Toe Online",
          en: "Tic-Tac-Toe Online"
        },
        description: {
          id: "Game Tic-Tac-Toe multiplayer online yang dibangun dengan FastAPI, WebSockets, dan Alpine.js. Fitur sistem room dengan ID yang bisa dibagikan, update real-time, dan desain responsif dengan Tailwind CSS.",
          en: "Multiplayer online Tic-Tac-Toe game built with FastAPI, WebSockets, and Alpine.js. Features room system with shareable IDs, real-time updates, and responsive design with Tailwind CSS."
        },
        link: "https://github.com/luthfidhani/tic-tac-toe",
        category: ["Game", "FastAPI", "WebSocket", "Python", "Alpine.js"]
      },
      {
        image: "assets/img/projects/InviteEase.png",
        title: {
          id: "InviteEase",
          en: "InviteEase"
        },
        description: {
          id: "Sistem check-in tamu yang ringan dan dapat dihosting sendiri. Ideal untuk pernikahan, acara perusahaan, atau tempat mana pun yang membutuhkan meja resepsionis cepat dan tanpa kertas.",
          en: "A lightweight self-hosted guest check-in system. Ideal for weddings, corporate events, or any place where you need a fast, paper-less reception desk."
        },
        link: "https://github.com/luthfidhani/InviteEase",
        category: ["Django", "Web", "Python", "HTML", "CSS", "JavaScript"]
      },
      {
        image: "assets/img/projects/KasKu.png",
        title: {
          id: "KasKu",
          en: "KasKu"
        },
        description: {
          id: "KasKu adalah bot Telegram berbasis AI yang bantu catat pemasukan dan pengeluaran lewat chat santai. Cukup ngobrol aja, KasKu yang urus dan simpan otomatis ke Google Sheets, sambil kasih candaan atau motivasi biar makin seru! 😎",
          en: "KasKu is an AI Telegram bot that tracks your income and expenses through casual chat. Just type like chatting with a friend—KasKu handles the rest and saves it to Google Sheets, sprinkled with jokes or motivation!"
        },
        link: "https://github.com/luthfidhani/KasKu",
        category: ["Bot", "Telegram", "Python"]
      },
      {
        image: "assets/img/projects/al-quran.png",
        title: {
          id: "Al-Quran Tafsir & Terjemahan",
          en: "Al-Quran Tafsir & Translation"
        },
        description: {
          id: "Website Al-Quran Tafsir & Terjemahan untuk memudahkan akses dan pemahaman ayat-ayat Al-Quran.",
          en: "Al-Quran Tafsir & Translation website to facilitate access and understanding of Quranic verses."
        },
        link: "https://github.com/luthfidhani/al-quran",
        category: ["Web", "API", "HTML", "JavaScript"]
      },
      {
        image: "assets/img/projects/AI-essay-grading-system.png",
        title: {
          id: "AI Essay Grading System",
          en: "AI Essay Grading System"
        },
        description: {
          id: "Sistem penilaian esai otomatis menggunakan Python dan OpenAI API untuk membantu guru menilai jawaban murid dengan cepat dan memberikan feedback yang terperinci.",
          en: "An automatic essay grading system using Python and OpenAI API to help teachers quickly assess student answers and provide detailed feedback."
        },
        link: "https://github.com/luthfidhani/AI-essay-grading-system",
        category: ["AI", "ChatGPT", "Python"]
      },
      {
        image: "assets/img/projects/khataman-quran-bersama.png",
        title: {
          id: "Khataman Quran Bersama",
          en: "Group Quran Completion"
        },
        description: {
          id: "Khataman Quran Bersama membantu kelompok untuk menuntaskan Al-Quran dengan menugaskan Juz tertentu kepada setiap anggota.",
          en: "Group Quran Completion helps groups to complete the Quran by assigning specific Juz to each member."
        },
        link: "https://github.com/luthfidhani/khataman-quran-bersama",
        category: ["Web", "HTML", "CSS", "JavaScript"]
      },
      {
        image: "assets/img/projects/prediksi-kelulusan-mahasiswa.png",
        title: {
          id: "Prediksi Kelulusan Mahasiswa",
          en: "Student Graduation Prediction"
        },
        description: {
          id: "Aplikasi ini bertujuan untuk memprediksi apakah seorang mahasiswa akan lulus tepat waktu atau tidak berdasarkan data kelulusan mahasiswa.",
          en: "This application aims to predict whether a student will graduate on time based on student graduation data."
        },
        link: "https://github.com/luthfidhani/prediksi-kelulusan-mahasiswa",
        category: ["ML", "Flask", "Python"]
      },
      {
        image: "assets/img/projects/cek-khodam.png",
        title: {
          id: "Check Khodam",
          en: "Check Khodam"
        },
        description: {
          id: "Web sederhana untuk memeriksa khodam anda berdasarkan nama masukan Anda. Dibuat untuk tujuan bersenang-senang dan belajar.",
          en: "A simple website to check your khodam based on your input name. Made for fun and learning purposes."
        },
        link: "https://github.com/luthfidhani/cek-khodam",
        category: ["Web", "HTML", "CSS", "JavaScript"]
      },
      {
        image: "assets/img/projects/youtube-downloader-bot-telegram-django.png",
        title: {
          id: "Youtube Downloader Bot Telegram",
          en: "Youtube Downloader Bot Telegram"
        },
        description: {
          id: "Bot Telegram untuk mendownload video atau audio dari Youtube dengan mudah dan cepat.",
          en: "A Telegram bot to easily and quickly download videos or audio from YouTube."
        },
        link: "https://github.com/luthfidhani/youtube-downloader-bot-telegram-django",
        category: ["API", "Bot", "Telegram", "Django", "Python"]
      },
      {
        image: "assets/img/projects/kapsul-waktu.png",
        title: {
          id: "Kapsul Waktu",
          en: "Time Capsule"
        },
        description: {
          id: "Web sederhana untuk membuat kapsul waktu yang akan terbuka pada tanggal yang ditentukan.",
          en: "A simple website to create a time capsule that will open on a specified date."
        },
        link: "https://github.com/luthfidhani/kapsul-waktu",
        category: ["Web", "Flask", "SQL", "Python", "Redis"]
      },
      {
        image: "assets/img/projects/sistem-skoring-pelatihan-microsoft.png",
        title: {
          id: "Sistem Skoring Pelatihan Microsoft",
          en: "Microsoft Training Scoring System"
        },
        description: {
          id: "Sistem yang melakukan evaluasi terhadap materi pelatihan atau pelatihan yang akan dilaksanakan.",
          en: "A system that evaluates training materials or upcoming trainings."
        },
        link: "https://github.com/luthfidhani/sistem-skoring-pelatihan-microsoft",
        category: ["ML", "Web", "Django", "Python"]
      },
      {
        image: "assets/img/projects/anonymous-chat-bot-telegram-django.png",
        title: {
          id: "Anonymous Chat Bot Telegram",
          en: "Anonymous Chat Bot Telegram"
        },
        description: {
          id: "Chat Bot Telegram yang memungkinkan pengguna untuk berkirim pesan dengan stranger secara random tanpa mengetahui identitasnya.",
          en: "A Telegram chat bot that allows users to send messages with random strangers anonymously."
        },
        link: "https://github.com/luthfidhani/anonymous-chat-bot-telegram-django",
        category: ["Bot", "Telegram", "Django", "Python"]
      },
      {
        image: "assets/img/projects/simsimi-chat-bot-telegram.png",
        title: {
          id: "SimSimi Chat Bot Telegram",
          en: "SimSimi Chat Bot Telegram"
        },
        description: {
          id: "Chat Bot Telegram yang menggunakan API SimSimi untuk menjawab pesan pengguna.",
          en: "A Telegram chat bot that uses the SimSimi API to respond to user messages."
        },
        link: "https://github.com/luthfidhani/simsimi-chat-bot-telegram",
        category: ["Bot", "Telegram", "API", "Flask", "Python"]
      },
      {
        image: "assets/img/projects/Al-Quran-Information-Retrieval.png",
        title: {
          id: "Al-Quran Information Retrieval",
          en: "Al-Quran Information Retrieval"
        },
        description: {
          id: "Merupakan hasil skripsi saya dengan topik pencarian ayat berdasarkan topik Al-Quran terjemahan bahasa Indonesia.",
          en: "My thesis project on verse retrieval based on topics in the Indonesian translation of the Quran."
        },
        link: "https://github.com/luthfidhani/Al-Quran-Information-Retrieval",
        category: ["ML", "Web", "Django", "Python"]
      },
      {
        image: "assets/img/projects/Web-Spam-SMS-Classification-Django.png",
        title: {
          id: "Web Spam SMS Classification",
          en: "Web Spam SMS Classification"
        },
        description: {
          id: "Web Machine Learning yang dapat digunakan untuk mendeteksi atau mengklasifikasikan isi dari SMS apakah termasuk spam atau tidak.",
          en: "A Machine Learning web app used to detect or classify whether an SMS content is spam or not."
        },
        link: "https://github.com/luthfidhani/Web-Spam-SMS-Classification-Django",
        category: ["ML", "Web", "Django", "Python"]
      },
      {
        image: "assets/img/projects/Klasifikasi-Daging-Sapi-PKL.png",
        title: {
          id: "Klasifikasi Daging Sapi PKL",
          en: "Beef Quality Classification"
        },
        description: {
          id: "Aplikasi mobile yang dapat digunakan untuk mengklasifikasikan daging sapi berdasarkan kualitasnya hanya menggunakan foto.",
          en: "A mobile application that can classify beef quality using just a photo."
        },
        link: "https://github.com/luthfidhani/Klasifikasi-Daging-Sapi-PKL",
        category: ["ML", "Mobile", "Flutter", "Django", "Python"]
      },
    ],
    publications: [
      {
        title: {
          id: "Pencarian Topik dalam Al-Quran Terjemahan Bahasa Indonesia dengan Metode Hybrid Fuzzy C-Means Particle Swarm Optimization (FCM-PSO)",
          en: "Topic Search in Indonesian Translation of Al-Quran Using Hybrid Fuzzy C-Means Particle Swarm Optimization (FCM-PSO) Method"
        },
        description: {
          id: "Penelitian tentang metode pencarian topik dalam Al-Quran menggunakan teknik FCM-PSO.",
          en: "Research on topic search methods in the Quran using FCM-PSO techniques."
        },
        link: "https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/10693"
      },
      {
        title: {
          id: "Klasifikasi citra makanan/non makanan menggunakan metode Transfer Learning dengan model Residual Network",
          en: "Classification of Food/Non-Food Images Using Transfer Learning with Residual Network Model"
        },
        description: {
          id: "Studi tentang klasifikasi citra makanan dan non-makanan menggunakan transfer learning.",
          en: "A study on classifying food and non-food images using transfer learning."
        },
        link: "https://journal.unipdu.ac.id/index.php/teknologi/article/view/2402"
      }
    ],
    books: [
      {
        title: {
          id: "Bahasa Bayi NEURAL NETWORK",
          en: "Baby Language NEURAL NETWORK"
        },
        subtitle: {
          id: "Rahasia Dibalik AI",
          en: "Secrets Behind AI"
        },
        description: {
          id: "Buku yang menyederhanakan topik kompleks 'Neural Network' menggunakan 'Bahasa Bayi', membuatnya mudah dipahami dengan analogi sederhana dan tanpa formula rumit. Cocok untuk pemula, mahasiswa, dan siapa saja yang tertarik memahami 'otak' di balik AI dengan cara yang menyenangkan.",
          en: "A book that simplifies the complex topic of 'Neural Network' using 'Baby Language', making it accessible with simple analogies and without complicated formulas. Perfect for beginners, students, and anyone interested in understanding the 'brain' behind AI in an enjoyable way."
        },
        cover: "assets/img/books/neural-network-cover.jpg",
        link: "https://luthfidhani.my.id/ebook-neural-network/",
        category: ["AI", "Machine Learning", "Education", "Book"]
      }
    ],
    toggleLanguage() {
      this.selectedLanguage = this.selectedLanguage === 'id' ? 'en' : 'id';
    },
    formatCategoryName(name) {
      const categoryNames = {
        frameworks: {
          id: "Frameworks",
          en: "Frameworks"
        },
        dataEngineering: {
          id: "Data Engineering",
          en: "Data Engineering"
        },
        cloudDevOps: {
          id: "Cloud & DevOps",
          en: "Cloud & DevOps"
        },
        programmingLanguages: {
          id: "Bahasa Pemrograman",
          en: "Programming Languages"
        }
      };
      return categoryNames[name][this.selectedLanguage];
    }
  }
}
