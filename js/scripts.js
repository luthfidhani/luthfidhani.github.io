let app = new Vue({
    el: "#vue-app",
    delimiters: ["[[", "]]"],
    data: {
      first_name: "LUTHFI",
      last_name: "AFRIZAL ARDHANI",
      job: "Junior Data Engineer",
      sosmeds: [
        { icon: "fa fa-linkedin", link: "https://www.linkedin.com/in/luthfi-afrizal-ardhani/" },
        { icon: "fa fa-github", link: "https://github.com/luthfidhani" },
        { icon: "fa fa-instagram", link: "https://www.instagram.com/luthfidhani17/" },
        { icon: "fa fa-twitter", link: "https://twitter.com/luthfidhani_17" },
        { icon: "fa fa-envelope", link: "mailto:luthfidhani17@gmail.com" },
      ],
      description: "Ir. H. Joko Widodo DK (pengucapan bahasa Indonesia: [dʒɔkɔ widɔdɔ]; lahir 21 Juni 1961), atau yang lebihakrab disapa Jokowi, adalah Presiden Indonesia yang mulai menjabat sejak 20 Oktober 2014. TerpilihdalamPemilu Presiden 2014, Jokowi menjadi Presiden Indonesia pertama sepanjang sejarah yang bukan berasaldarilatar belakang elite politik atau militer Indonesia. Ia terpilih bersama Wakil Presiden Muhammad JusufKalla dan kembali terpilih bersama Wakil Presiden Ma'ruf Amin dalam Pemilu Presiden 2019.Sebelumnya,Jokowi pernah menjabat sebagai Gubernur DKI Jakarta sejak 15 Oktober 2012 hingga 16 Oktober 2014didampingi Basuki Tjahaja Purnama sebagai wakil gubernur."
    },
  });