// configuration express
import dotenv from "dotenv";

const express = require('express');

let app = express();

let path = require('path');

const port = process.env.PORT
dotenv.config()

// static file

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/modules', express.static(__dirname + 'public/css'));

// View engine
app.set('views', './views');
app.set('view engine', 'ejs');

// Routing
app.get('/', (req, res) => {

    const wisata = [
        { name: "Kebun Raya Bogor", penjelasan: "Kebun Raya Bogor adalah kebun botani yang didirikan pada tahun 1817 oleh Sir Thomas Stamford Raffles, Gubernur Jenderal Hindia Belanda saat itu. Kebun Raya Bogor memiliki luas sekitar 87 hektar dan memiliki koleksi tumbuhan yang sangat beragam, termasuk tumbuhan-tumbuhan langka. Selain itu, Kebun Raya Bogor juga memiliki berbagai fasilitas seperti tempat bermain anak, taman kaktus, dan kolam ikan.", sc_gambar: "/images/kebun-raya-bogor.jpg" },
        { name: "Taman Safari Indonesia", penjelasan: "Taman Safari Indonesia adalah sebuah taman safari yang terletak di daerah Cisarua, Bogor. Taman ini memiliki koleksi hewan yang sangat lengkap, termasuk hewan-hewan yang langka seperti harimau Sumatra, singa, dan beruang madu. Selain itu, Taman Safari Indonesia juga memiliki berbagai wahana permainan, seperti roller coaster dan water park.", sc_gambar: "/images/taman-safari-indonesia.jpeg" },
        { name: "Istana Bogor", penjelasan: "Istana Bogor adalah sebuah bangunan peninggalan kolonial Belanda yang terletak di pusat Kota Bogor. Istana ini dulunya merupakan tempat peristirahatan dan tempat tinggal bagi Gubernur Jenderal Hindia Belanda. Saat ini, Istana Bogor masih digunakan sebagai tempat kediaman resmi Presiden RI dan menjadi salah satu destinasi wisata yang menarik.", sc_gambar: "/images/istana-indonesia.jpg" },
        { name: "Gunung Salak", penjelasan: "Gunung Salak adalah gunung yang terletak di sebelah barat Kota Bogor. Gunung ini memiliki ketinggian sekitar 2.211 meter dan memiliki pemandangan alam yang indah. Untuk mencapai puncak gunung, pengunjung dapat menggunakan jalur pendakian yang tersedia. Selain itu, di sekitar gunung terdapat beberapa tempat wisata alam seperti air terjun, hutan, dan danau.", sc_gambar: "/images/gunung-salak.png" },
        { name: "Kebun Teh Walini", penjelasan: "Kebun Teh Walini adalah kebun teh yang terletak di kaki Gunung Salak, Bogor. Kebun teh ini memiliki pemandangan yang sangat indah dengan kebun teh yang luas dan perkebunan anggrek. Selain menikmati keindahan alam, pengunjung juga dapat belajar tentang proses pembuatan teh dari pemetikan hingga pengolahan teh.", sc_gambar: "/images/kebun-teh-walini.jpeg" },
        { name: "Little Venice Kota Bunga", penjelasan: "Little Venice Kota Bunga adalah sebuah komplek wisata yang terletak di daerah Puncak, Bogor. Komplek   wisata ini memiliki suasana seperti kota-kota di Italia dengan air mancur, danau buatan, dan bangunan-bangunan bergaya Venesia. Pengunjung dapat menikmati suasana kota-kota di Italia sambil menikmati berbagai makanan dan minuman di kafe-kafe yang ada di komplek wisata ini.", sc_gambar: "/images/little-venice-kota-bunga.jpg" }
    ]

    const penulis = [
        { name: "Muhammad Fadhlan Aziz", ket: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae totam quod modi facere. Sequi nemo necessitatibus blanditiis aperiam dolore, velit minima aliquam recusandae magnam, ullam neque tempora ducimus nam.", sc_gambar: "" },
        { name: "Zadan Fairuz Mahitala", ket: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt suscipit facilis necessitatibus, fugiat delectus blanditiis praesentium maxime ipsum voluptate quis et molestiae reiciendis consequatur. Hic deserunt explicabo eius voluptatum molestiae?", sc_gambar: "" }
    ];

    const koeliner = [
        { name: "Asinan Bogor", penjelasan: "Asinan Bogor adalah salah satu makanan khas Indonesia yang berasal dari kota Bogor, Jawa Barat. Asinan Bogor terbuat dari berbagai macam sayuran segar seperti kol, tauge, wortel, mentimun, dan kacang panjang yang dipotong-potong dan dicampur dengan saus kacang yang khas serta gula merah, cabai, air asam, dan bawang putih.", sc_gambar: "/images/asinan.png" },
        { name: "Laksa Bogor", penjelasan: "Laksa Bogor terbuat dari mie bihun yang disajikan dalam kuah santan yang gurih dan pedas, dengan tambahan sayuran seperti tauge, kol, dan daun selada. Keunikan dari Laksa Bogor terletak pada bumbu kuahnya, yang terdiri dari rempah-rempah khas Indonesia seperti ketumbar, kunyit, dan bawang merah. Selain itu, Laksa Bogor juga memiliki sentuhan rasa asam yang segar dari air jeruk nipis.", sc_gambar: "/images/laksaBogor.png" },
        { name: "Cungkring", penjelasan: "Cungkring Bogor adalah salah satu makanan khas Indonesia yang berasal dari kota Bogor, Jawa Barat. Makanan ini terbuat dari jagung manis yang dihaluskan dan dicampur dengan tepung ketan, gula merah, dan kelapa parut. Adonan kemudian dibentuk bulat dan dikukus sampai matang.", sc_gambar: "/images/cungkringBogor.png " },
        { name: "Doclang", penjelasan: "Doclang ini sebenarnya adalah singkatan dari medok kacang.Hal tersebut dikarenakan, sajian ini menggunakan bumbu kacang yang kental atau medok.Doclang terdiri dari irisan pesor, kentang rebus, tahu goreng kuning, bawang goreng, bumbu kacang, kecap, dan telur rebus, sambal dan kerupuk. Pesor merupakan sebutan untuk lontong atau ketupat bagi orang Bogor.", sc_gambar: "/images/doclang.png" },
        { name: "Es Bir Kotjok Bogor", penjelasan: "Bir Kotjok adalah salah satu minuman tradisional khas Bogor. Seperti halnya “bir pletok,” bir kotjok tidak mengandung alkohol sama sekali. Bir kotjok terbuat dari beberapa bahan alami dan kaya rempah, di antaranya: jahe, kayu manis, cengkeh, dan gula aren. Jahe yang digunakan dalam pembuatan Bir Kotjok adalah jahe merah, di mana jahe tersebut diketahui memiliki manfaat untuk kesehatan sirkulasi darah. Jahe merah ini juga lebih pedas dan hangat dibanding jahe biasa.", sc_gambar: "/images/birkotjok.png" }
    ]

    res.render('index', {
        wisata: wisata,
        penulis: penulis,
        koeliner: koeliner
    });
});

// Server
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});