new Vue({
    el: '#app',
    data: {
        jsonData: [] // Inisialisasi variabel untuk menyimpan data dari data.json
    },
    mounted() {
        this.fetchData(); // Panggil fungsi fetchData saat komponen Vue di-mount
    },
    methods: {
        fetchData() {
            // Menggunakan fetch untuk mengambil data dari file JSON
            fetch('data.json')
                .then(response => response.json())
                .then(data => {
                    this.jsonData = data; // Menyimpan data ke variabel jsonData
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }
});
