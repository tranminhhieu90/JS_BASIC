const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const app = {
  currentIndex: 0,
  isPlaying: false,
  songs: [
    {
      name: "Click Pow Get Down",
      singer: "Raftaar x Fortnite",
      path: "https://soundcloud.com/odayconhacthuii/b-mp3cutnet",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2021/06/18/d/c/e/c/1623997610871_640.jpg",
    },
    {
      name: "Tu Phir Se Aana",
      singer: "Raftaar x Salim Merchant x Karma",
      path: "https://mp3.vlcmusic.com/download.php?track_id=34213&format=320",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg",
    },
    {
      name: "Naachne Ka Shaunq",
      singer: "Raftaar x Brobha V",
      path: "https://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3",
      image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
    },
    {
      name: "Mantoiyat",
      singer: "Raftaar x Nawazuddin Siddiqui",
      path: "https://mp3.vlcmusic.com/download.php?track_id=14448&format=320",
      image:
        "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg",
    },
    {
      name: "Aage Chal",
      singer: "Raftaar",
      path: "https://mp3.vlcmusic.com/download.php?track_id=25791&format=320",
      image:
        "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg",
    },
    {
      name: "Damn",
      singer: "Raftaar x kr$na",
      path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
      image:
        "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg",
    },
    {
      name: "Feeling You",
      singer: "Raftaar x Harjas",
      path: "https://mp3.vlcmusic.com/download.php?track_id=27145&format=320",
      image:
        "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
        <div class="song">
          <div class="thumb" style="background-image: url('${song.image})">
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
    $(".playlist").innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    // handle zoom in zoom out cd
    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCDWidth = cdWidth - scrollTop;
      cd.style.width = newCDWidth > 0 ? newCDWidth + "px" : 0;
      cd.style.opacity = newCDWidth / cdWidth;
    };

    // handle when click play btn
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    // when audio play
    audio.play = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
    };
    // when audio pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
    };
    // when audio playing
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
    console.log("audio", audio);
  },
  start: function () {
    // define properties for object
    this.defineProperties();

    // listen and handle events ( Dom events)
    this.handleEvents();

    // Load info first Song to UI
    this.loadCurrentSong();
    this.render();
  },
};

app.start();
