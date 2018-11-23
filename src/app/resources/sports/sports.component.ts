import { Component } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {

  sports: any[];

  constructor() { 
    this.sports = [
      { heb: "כדורגל", lat: "kaduregel", icon: "../../../assets/images/002-soccer-ball-variant.png" },
      { heb: "טניס", lat: "tenis", icon: "../../../assets/images/001-tennis-raquet-and-ball.png" },
      { heb: "רכיבה על אופניים", lat: "rchivah 'al ofanayim", icon: "../../../assets/images/003-man-cycling.png" },
      { heb: "אתלטיקה", lat: "athletikah", icon: "../../../assets/images/005-running.png" },
      { heb: "ספורטאים מימים", lat: "sportayim mayimim", icon: "../../../assets/images/006-surf-sea.png" },
      { heb: "הוקי קרח", lat: "hokey karach", icon: "../../../assets/images/007-hockey-stick.png" },
      { heb: "סקי", lat: "ski", icon: "../../../assets/images/008-skiing-stickman.png" },
      { heb: "ספורטאים נהיגה", lat: "sportayim nhigah", icon: "../../../assets/images/009-racing-flag.png" },
      { heb: "ריצה סיסים", lat: "ritzah susim", icon: "../../../assets/images/010-equestrian.png" },
      { heb: "סקווֹשׁ", lat: "skwosh", icon: "../../../assets/images/011-squash.png" },
      { heb: "כדור יד", lat: "kadur yad", icon: "../../../assets/images/012-handball.png" },
      { heb: "התעמלות", lat: "hith'amloth", icon: "../../../assets/images/004-rings.png" },
      { heb: "שחיה", lat: "schiyah", icon: "../../../assets/images/013-swimming-figure.png" },
      { heb: "גולף", lat: "golf", icon: "../../../assets/images/014-golf-player.png" },
      { heb: "דארטס", lat: "darts", icon: "../../../assets/images/016-man-throwing-a-dart.png" },
      { heb: "סנוקר", lat: "snuker", icon: "../../../assets/images/015-pool-player.png" },
      { heb: "שחמט", lat: "shachmat", icon: "../../../assets/images/017-marketing-strategy.png" },
      { heb: "שש בש", lat: "shesh besh", icon: "../../../assets/images/018-backgammon.png" }
    ];
  }

}
