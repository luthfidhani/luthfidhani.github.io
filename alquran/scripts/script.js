new Vue({
    el: '#app',
    data: {
        surahs: [],
        ayahs: [],

        surahDetailed: {},
        tafsir: {},

        fromAyah: 0,
        toAyah: 0,

    },
    mounted() {
        this.fetchSurah();
        this.fetchAyah();
    },
    methods: {
        fetchData(url) {
            return fetch(url)
                .then(response => response.json())
                .then(data => data.data)
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },

        fetchSurah() {
            this.fetchData('https://web-api.qurankemenag.net/quran-surah')
                .then(data => {
                    this.surahs = data;
                });
        },

        fetchAyah() {
            const query = location.search;
            const params = new URLSearchParams(query);

            if (params.size != 0) {
                this.surah = params.get('surah');
                this.ayah = params.get('ayah');

                this.fromAyah = this.ayah.split("-")[0];
                this.toAyah = this.ayah.split("-")[1];

                this.fetchData('https://web-api.qurankemenag.net/quran-surah/' + this.surah)
                    .then(data => {
                        this.surahDetailed = data;
                    });

                start = this.fromAyah - 1
                limit = this.toAyah - start

                this.fetchData('https://web-api.qurankemenag.net/quran-ayah?start=' + start + '&limit=' + limit + '&surah=' + this.surah)
                    .then(data => {
                        this.ayahs = data
                    });
            }
        },

        fetchTafsir(event){
            const id = event.target.value;
            this.fetchData('https://web-api.qurankemenag.net/quran-tafsir/' + id)
                .then(data => {
                    this.tafsir = data.tafsir
                })
        },

        handleChange(event) {
            const href = event.target.value;
            window.location.href = href;
          },
    },
});
