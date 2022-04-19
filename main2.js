const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");


/**
 * 1. Render video
 * 
 */

const app = {
    songs: [
        {
            name: "Yêu đương khó quá thì chạy về khóc với anh",
            singer: "Erik",
            path: "./song/song1.mp3",
            image: "./img/img1.jpg"
        },
        {
            name: "Tệ thật, Anh nhớ em",
            singer: "Thanh Hưng",
            path: "./song/song2.mp3",
            image: "./img/img2.jpg"
        },
        {
            name: "Thức giấc",
            singer: "Dalab",
            path: "./song/song3.mp3",
            image: "./img/img3.jpg"
        },
        {
            name: "Là do em xui thôi",
            singer: "Sofa & Khói & Châu Đăng Khoa",
            path: "./song/song4.mp3",
            image: "./img/img4.jpg"
        }
    ],

    render: function () {
        console.log(this.songs.length);
        const htmls = this.songs.map(song => {
            return `
                <div class="playlist">
                    <div class="song">
                        <div class="thumb"
                            style="background-image: url('${song.image}')">
                        </div>
                        <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.singer}</p>
                        </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i> 
                        </div>
                    </div>
        `;
        });
        playlist.innerHTML = htmls.join('');

    },

    start: function () {
        this.render();
    }
}
app.start();
