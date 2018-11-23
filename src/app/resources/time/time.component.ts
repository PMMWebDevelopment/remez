import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
// import { stringify } from 'querystring';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  time;
  timeJSON;
  hourStrings;
  minuteStrings;
  hourText;
  minuteText;
  hebrewTimeText;
  latinTimeText;
  hebrewTimeTextAlt2: string;
  latinTimeTextAlt2: string;
  hebrewTimeTextAlt3: string;
  latinTimeTextAlt3: string;
  jewishMonthStrings;
  hebrewMonthStrings;
  seasonStrings;
  chosenDate;
  maximumDate;
  chosenMonth;
  hebrewDateText;
  latinDateText;
  maximumDateJewish;
  chosenDateJewish;
  chosenMonthJewish;
  hebrewDateTextJewish;
  latinDateTextJewish;
  dayStrings;
  ordinalNumbers;

  constructor() {

    this.hourStrings = [
      { he: "אחת", la: "achath" },
      { he: "שתים", la: "shteym" },
      { he: "שלש", la: "shalosh" },
      { he: "ארבע", la: "arba'" },
      { he: "חמש", la: "chamesh" },
      { he: "שש", la: "shesh" },
      { he: "שבע", la: "sheva'" },
      { he: "שמונה", la: "shmoneh" },
      { he: "תשע", la: "tesha'" },
      { he: "עשר", la: "'esher" },
      { he: "אחת-עשרה", la: "achath-eshreh" },
      { he: "שתים-עשרה", la: "shteym-eshreh" }
    ];

    this.minuteStrings = [
      { he: "דקה אחת", la: "dakah achath" },
      { he: "שתים", la: "shteym" },
      { he: "שלש", la: "shalosh" },
      { he: "ארבע", la: "arba'" },
      { he: "חמש", la: "chamesh" },
      { he: "שש", la: "shesh" },
      { he: "שבע", la: "sheva'" },
      { he: "שמונה", la: "shmoneh" },
      { he: "תשע", la: "tesha'" },
      { he: "עשר", la: "'esher" },
      { he: "אחת-עשרה", la: "achath-eshreh" },
      { he: "שתים-עשרה", la: "shteym-eshreh" },      
      { he: "שלש-עשרה", la: "shlosh-eshreh" },      
      { he: "ארבע-עשרה", la: "arba'-eshreh" },      
      { he: "חמש-עשרה", la: "chamesh-eshreh", quarterhe: "רבע", quarterla: "reva'" },      
      { he: "שש-עשרה", la: "shesh-eshreh" },      
      { he: "שבע-עשרה", la: "shva'-eshreh" },      
      { he: "שמונה-עשרה", la: "shmoneh-eshreh" },      
      { he: "תשע-עשרה", la: "tesha'-eshreh" },      
      { he: "עשרים", la: "eshrim" },      
      { he: "עשרים ואחת", la: "eshrim ve-achath" },      
      { he: "עשרים ושתים", la: "eshrim ve-shteym" },      
      { he: "עשרים ושלש", la: "eshrim ve-shalosh" },      
      { he: "עשרים וארבע", la: "eshrim ve-arba'" },      
      { he: "עשרים וחמש", la: "eshrim ve-chamesh" },      
      { he: "עשרים ושש", la: "eshrim ve-shesh" },      
      { he: "עשרים ושבע", la: "eshrim ve-sheva'" },      
      { he: "עשרים ושמונה", la: "eshrim ve-shmoneh" },      
      { he: "עשרים ותשע", la: "eshrim ve-tesha'" },
      { he: "שלשים", la: "shloshim", quarterhe: "חצי", quarterla: "chatzi" }, // DON'T FORGET TO GIVE MINUTES TO AFTER THIS POINT
      { he: "שלשים ואחת", la: "shloshim ve-achath" },      
      { he: "שלשים ושתים", la: "shloshim ve-shteym" },      
      { he: "שלשים ושלש", la: "shloshim ve-shalosh"},      
      { he: "שלשים וארבע", la: "shloshim ve-arba'" },      
      { he: "שלשים וחמש", la: "shloshim ve-chamesh" },      
      { he: "שלשים ושש", la: "shloshim ve-shesh" },      
      { he: "שלשים ושבע", la: "shloshim ve-sheva'" },      
      { he: "שלשים ושמונה", la: "shloshim ve-shmoneh" },      
      { he: "שלשים ותשע", la: "shloshim ve-tesha'" },    
      { he: "ארבעים", la: "arba'im", tohe: "עשרים" },      
      { he: "ארבעים ואחת", la: "arba'im ve-achath" },      
      { he: "ארבעים ושתים", la: "arba'im ve-shteym" },      
      { he: "ארבעים ושלש", la: "arba'im ve-shalosh" },      
      { he: "ארבעים וארבע", la: "arba'im ve-arba'" },      
      { he: "ארבעים וחמש", la: "arba'im ve-chamesh", quarterhe: "רבע", quarterla: "reva'" },      
      { he: "ארבעים ושש", la: "arba'im ve-shesh" },      
      { he: "ארבעים ושבע", la: "arba'im ve-sheva'" },      
      { he: "ארבעים ושמונה", la: "arba'im ve-shmoneh" },      
      { he: "ארבעים ותשע", la: "arba'im ve-tesha'" },
      { he: "חמשים", la: "chamishim" },      
      { he: "חמשים ואחת", la: "chamishim ve-achath" },      
      { he: "חמשים ושתים", la: "chamishim ve-shteym" },      
      { he: "חמשים ושלש", la: "chamishim ve-shalosh" },      
      { he: "חמשים וארבע", la: "chamishim ve-arba'" },      
      { he: "חמשים וחמש", la: "chamishim ve-chamesh" },      
      { he: "חמשים ושש", la: "chamishim ve-shesh" },      
      { he: "חמשים ושבע", la: "chamishim ve-sheva'" },      
      { he: "חמשים ושמונה", la: "chamishim ve-shmoneh" },      
      { he: "חמשים ותשע", la: "chamishim ve-tesha'" }
    ];

    this.jewishMonthStrings = [
      { he: "ניסן", la: "Nisan", equiv: "March-April" },
      { he: "אייר", la: "Iyar", equiv: "April-May" },
      { he: "סיון", la: "Sivan", equiv: "May-June" },
      { he: "תמוז", la: "Tamuz", equiv: "June-July" },
      { he: "אב", la: "Av", equiv: "July-August" },
      { he: "אלול", la: "Elul", equiv: "August-September" },
      { he: "תשרי", la: "Tishri", equiv: "September-October" },
      { he: "מרחשוון", la: "Marcheshvan", equiv: "October-November" },
      { he: "כסלו", la: "Kislev", equiv: "November-December" },
      { he: "טבת", la: "Tevet", equiv: "December-January" },
      { he: "שבט", la: "Shvat", equiv: "January-February" },
      { he: "אדר", la: "Adar", equiv: "February-March" }
    ];

    this.hebrewMonthStrings = [
      { he: "ינואר", la: "Yanuar", en: "January" },
      { he: "פברואר", la: "Fivruar", en: "February" },
      { he: "תרץ", la: "Martz", en: "March" },
      { he: "אפריל", la: "April", en: "April" },
      { he: "מאי", la: "Mai", en: "May" },
      { he: "יוני", la: "Yuni", en: "June" },
      { he: "יולי", la: "Yuli", en: "July" },
      { he: "אוגוסט", la: "Ogust", en: "August" },
      { he: "ספטמבר", la: "September", en: "September" },
      { he: "אוקטובר", la: "Oktober", en: "October" },
      { he: "נובמבר", la: "November", en: "November" },
      { he: "דצמבר", la: "Detzember", en: "December" }
    ];

    this.seasonStrings = [
      { he: "אביב", la: "Aviv", en: "Spring" },
      { he: "קיץ", la: "Kayitz", en: "Summer" },
      { he: "סתו", la: "Stav", en: "Autumn" },
      { he: "חורף", la: "Choref", en: "Winter" }
    ];

    this.dayStrings = [
      { he: "ים ראשון", la: "yom rashon", en: "Sunday" },
      { he: "ים שני", la: "yom shney", en: "Monday" },
      { he: "ים שלישי", la: "yom shlishi", en: "Tuesday" },
      { he: "ים רביעי", la: "yom rvi'i", en: "Wednesday" },
      { he: "ים חמישי", la: "yom chamishi", en: "Thursday" },
      { he: "ים שישי", la: "yom shishi", en: "Friday" },
      { he: "שבת", la: "shabat", en: "Saturday" }
    ];

    this.ordinalNumbers = [
      { he: "ראשון", la: "rishon" }, 
      { he: "שני", la: "sheni" }, 
      { he: "שלישי", la: "shlishi" }, 
      { he: "רביעי", la: "riví'i" }, 
      { he: "חמישי", la: "chamishi" }, 
      { he: "ששי", la: "shishi" }, 
      { he: "שביעי", la: "shvi'i" }, 
      { he: "שמיני", la: "shmini" }, 
      { he: "תשיעי", la: "tshi'i" }, 
      { he: "עשירי", la: "'ashiri" }, 
      { he: "אחד-עשר", la: "achad-'ashar" }, 
      { he: "שנים-עשר", la: "shneyim-'ashar" }, 
      { he: "שלשה-עשר", la: "shlosha-'ashar" }, 
      { he: "ארבעה-עשר", la: "arba'a-'ashar" }, 
      { he: "חמשה-עשר", la: "chamisha-'ashar" }, 
      { he: "ששה-עשר", la: "shisha-'ashar" }, 
      { he: "שבעה-עשר", la: "shiv'a-'ashar" }, 
      { he: "שמונה-עשר", la: "shmonah-'ashar" }, 
      { he: "תשעה-עשר", la: "tish'a-'ashar" }, 
      { he: "עשרים", la: "'eshrim'" }, 
      { he: "עשרים ואחת", la: "'eshrim ve-achad" }, 
      { he: "עשרים ושנים", la: "eshrim ve-shnayim" }, 
      { he: "עשרים ושלש", la: "eshrim ve-shalosh" },      
      { he: "עשרים וארבע", la: "eshrim ve-arba'" },      
      { he: "עשרים וחמש", la: "eshrim ve-chamesh" },      
      { he: "עשרים ושש", la: "eshrim ve-shesh" },      
      { he: "עשרים ושבע", la: "eshrim ve-sheva'" },      
      { he: "עשרים ושמונה", la: "eshrim ve-shmoneh" },      
      { he: "עשרים ותשע", la: "eshrim ve-tesha'" },
      { he: "שלשים", la: "shloshim" },
      { he: "שלשים ואחת", la: "shloshim ve-achath" } 
    ]

  }

  setTimeText(event) {
    this.timeJSON = event;
    // console.log(this.timeJSON);
    if(this.timeJSON !== null) {
      if(this.timeJSON.hour < 12) {
        if(this.timeJSON.minute === 0) {
          this.hebrewTimeText = 'היא ' + this.hourStrings[this.timeJSON.hour - 1].he +' בבוקר';
          this.latinTimeText = 'Hi ' + this.hourStrings[this.timeJSON.hour - 1].la + ' b-ha-boker';
        } else {
          this.hebrewTimeText =
          'היא ' + this.hourStrings[this.timeJSON.hour - 1].he + ' ו' + this.minuteStrings[this.timeJSON.minute - 1].he + ' בבוקר';
          this.latinTimeText =
            'Hi ' + this.hourStrings[this.timeJSON.hour - 1].la + ' ve-' + this.minuteStrings[this.timeJSON.minute - 1].la + ' b-ha-boker';
          if(this.timeJSON.minute === 30 || this.timeJSON.minute === 15) {
            this.hebrewTimeTextAlt2 =
            'היא ' + this.hourStrings[this.timeJSON.hour - 1].he + ' ו' + this.minuteStrings[this.timeJSON.minute - 1].quarterhe + ' בבוקר';
            this.latinTimeTextAlt2 =
              'Hi ' + this.hourStrings[this.timeJSON.hour - 1].la + ' ve-' + this.minuteStrings[this.timeJSON.minute - 1].quarterla + ' b-ha-boker';
          } else if (this.timeJSON.minute === 45) {
            this.hebrewTimeTextAlt2 =
            'היא ' + this.minuteStrings[this.timeJSON.minute - 1].quarterhe  + 'ל ' + this.hourStrings[this.timeJSON.hour].he + ' בבוקר';
            this.latinTimeTextAlt2 =
              'Hi ' + this.minuteStrings[this.timeJSON.minute - 1].quarterla + ' l-' + this.hourStrings[this.timeJSON.hour].la + ' b-ha-boker';
          } else {
            this.hebrewTimeTextAlt2 = '';
            this.latinTimeTextAlt2 = '';
          }
          if(this.timeJSON.minute > 30) {
            this.hebrewTimeTextAlt3 = 
            'היא ' + this.minuteStrings[59 - this.timeJSON.minute].he + 'ל ' + this.hourStrings[this.timeJSON.hour].he +' בבוקר';
            this.latinTimeTextAlt3 =
            'Hi ' + this.minuteStrings[59 - this.timeJSON.minute].la + ' l-' + this.hourStrings[this.timeJSON.hour].la + ' b-ha-boker';
          } else {
            this.hebrewTimeTextAlt3 = '';
            this.latinTimeTextAlt3 = '';
          }
        }
      }
      if(this.timeJSON.hour === 12) {
        if(this.timeJSON.minute === 0) {
          this.hebrewTimeText = 'היא הצהריים';
          this.latinTimeText = 'Hi ha-tzahariyim.';
        } else if (this.timeJSON.minute < 31) {
          this.hebrewTimeText = 'היא ' + this.minuteStrings[this.timeJSON.minute - 1].he + ' אחרי הצהריים';
          this.latinTimeText = 'Hi ' + this.minuteStrings[this.timeJSON.minute - 1].la + ' acherey ha-tzahariyim';
        } else if (this.timeJSON.minute === 30 || this.timeJSON.minute === 15) {
          this.hebrewTimeText = 'היא  הצריים' + this.minuteStrings[this.timeJSON.minute - 1].quarterhe;
          this.latinTimeText = 'Hi ha-tzaharyim ' + this.minuteStrings[this.timeJSON.minute - 1].quarterla;
        } else {
          this.hebrewTimeText = 
          'היא ' + this.minuteStrings[59 - this.timeJSON.minute].he + ' לאחת אחרי הצהריים';
          this.latinTimeText = 
            'Hi ' + this.minuteStrings[59 - this.timeJSON.minute].la + ' l-achath acherey ha-tzahariyim'
        }
      }
      if(this.timeJSON.hour > 12 && this.timeJSON.hour < 18) {
        if(this.timeJSON.minute === 0) {
          this.hebrewTimeText = 'היא ' + this.hourStrings[this.timeJSON.hour - 13].he + ' אחרי הצהריים';
          this.latinTimeText = 'Hi ' + this.hourStrings[this.timeJSON.hour - 13].la + ' acherey ha-tzahariyim';
        } else {
          this.hebrewTimeText =
          'היא ' + this.hourStrings[this.timeJSON.hour - 13].he + ' ו' + this.minuteStrings[this.timeJSON.minute - 1].he + ' אחרי הצהריים';
          this.latinTimeText =
            'Hi ' + this.hourStrings[this.timeJSON.hour - 13].la + ' ve-' + this.minuteStrings[this.timeJSON.minute - 1].la + ' acherey ha-tzahariyim';
          if(this.timeJSON.minute === 30 || this.timeJSON.minute === 15) {
            this.hebrewTimeTextAlt2 =
            'היא ' + this.hourStrings[this.timeJSON.hour - 13].he + ' ו' + this.minuteStrings[this.timeJSON.minute - 1].quarterhe + ' אחרי הצהריים';
            this.latinTimeTextAlt2 =
              'Hi ' + this.hourStrings[this.timeJSON.hour - 13].la + ' ve-' + this.minuteStrings[this.timeJSON.minute - 1].quarterla + ' acherey ha-tzahariyim';
          } else if (this.timeJSON.minute === 45) {
            this.hebrewTimeTextAlt2 =
            'היא ' + this.minuteStrings[this.timeJSON.minute - 13].quarterhe + 'ל ' + this.hourStrings[this.timeJSON.hour].he + ' אחרי הצהריים';
            this.latinTimeTextAlt2 =
              'Hi ' + this.minuteStrings[this.timeJSON.minute - 13].quarterla + ' l-' + this.hourStrings[this.timeJSON.hour].la + ' acherey ha-tzahariyim';
          } else {
            this.hebrewTimeTextAlt2 = '';
            this.latinTimeTextAlt2 = '';
          }
          if(this.timeJSON.minute > 30) {
            this.hebrewTimeTextAlt3 = 
            'היא ' + this.minuteStrings[59 - this.timeJSON.minute].he + 'ל ' + this.hourStrings[this.timeJSON.hour].he + ' אחרי הצהריים';
            this.latinTimeTextAlt3 =
            'Hi ' + this.minuteStrings[59 - this.timeJSON.minute].la + ' l-' + this.hourStrings[this.timeJSON.hour].la + ' acherey ha-tzahariyim';
          } else {
            this.hebrewTimeTextAlt3 = '';
            this.latinTimeTextAlt3 = '';
          }
        }
      }
      if(this.timeJSON.hour >= 18 && this.timeJSON.hour < 21) {
        if(this.timeJSON.minute === 0) {
          this.hebrewTimeText = 'היא ' + this.hourStrings[this.timeJSON.hour - 13].he + ' בערב';
          this.latinTimeText = 'Hi ' + this.hourStrings[this.timeJSON.hour - 13].la + " b-ha-'erev";
        } else {
          this.hebrewTimeText =
          'היא ' + this.hourStrings[this.timeJSON.hour - 13].he + ' ו' + this.minuteStrings[this.timeJSON.minute - 1].he + ' בערב';
          this.latinTimeText =
            'Hi ' + this.hourStrings[this.timeJSON.hour - 13].la + ' ve-' + this.minuteStrings[this.timeJSON.minute - 1].la + " b-ha-'erev";
          if(this.timeJSON.minute === 30 || this.timeJSON.minute === 15) {
            this.hebrewTimeTextAlt2 =
            'היא ' + this.hourStrings[this.timeJSON.hour - 13].he + ' ו' + this.minuteStrings[this.timeJSON.minute - 1].quarterhe + ' בערב';
            this.latinTimeTextAlt2 =
              'Hi ' + this.hourStrings[this.timeJSON.hour - 13].la + ' ve-' + this.minuteStrings[this.timeJSON.minute - 1].quarterla + " b-ha-'erev";
          } else if (this.timeJSON.minute === 45) {
            this.hebrewTimeTextAlt2 =
            'היא ' + this.minuteStrings[this.timeJSON.minute - 1].quarterhe + 'ל ' + this.hourStrings[this.timeJSON.hour - 12].he + ' בערב';
            this.latinTimeTextAlt2 =
              'Hi ' + this.minuteStrings[this.timeJSON.minute - 1].quarterla + ' l-' + this.hourStrings[this.timeJSON.hour - 12].la + " b-ha-'erev";
          } else {
            this.hebrewTimeTextAlt2 = '';
            this.latinTimeTextAlt2 = '';
          }
          if(this.timeJSON.minute > 30) {
            this.hebrewTimeTextAlt3 = 
            'היא ' + this.minuteStrings[59 - this.timeJSON.minute].he + 'ל ' + this.hourStrings[this.timeJSON.hour - 12].he + ' בערב';
            this.latinTimeTextAlt3 =
            'Hi ' + this.minuteStrings[59 - this.timeJSON.minute].la + ' l-' + this.hourStrings[this.timeJSON.hour - 12].la + " b-ha-'erev";
          } else {
            this.hebrewTimeTextAlt3 = '';
            this.latinTimeTextAlt3 = '';
          }
        }
      }
      if(this.timeJSON.hour >= 21) {
        if(this.timeJSON.minute === 0) {
          this.hebrewTimeText = 'היא ' + this.hourStrings[this.timeJSON.hour - 13].he + ' בלילה';
          this.latinTimeText = 'Hi ' + this.hourStrings[this.timeJSON.hour - 13].la + " b-ha-laylah";
        } else {
          this.hebrewTimeText =
            'היא ' + this.hourStrings[this.timeJSON.hour - 13].he + ' ו' + this.minuteStrings[this.timeJSON.minute - 1].he + ' בלילה';
          this.latinTimeText =
            'Hi ' + this.hourStrings[this.timeJSON.hour - 13].la + ' ve-' + this.minuteStrings[this.timeJSON.minute - 1].la + " b-ha-laylah";
          if(this.timeJSON.minute === 30 || this.timeJSON.minute === 15) {
            this.hebrewTimeTextAlt2 =
            'היא ' + this.hourStrings[this.timeJSON.hour - 13].he + ' ו' + this.minuteStrings[this.timeJSON.minute - 1].quarterhe + ' בלילה';
            this.latinTimeTextAlt2 =
              'Hi ' + this.hourStrings[this.timeJSON.hour - 13].la + ' ve-' + this.minuteStrings[this.timeJSON.minute - 1].quarterla + " b-ha-laylah";
          } else if (this.timeJSON.minute === 45) {
            this.hebrewTimeTextAlt2 =
            'היא ' + this.minuteStrings[this.timeJSON.minute - 1].quarterhe + 'ל ' + this.hourStrings[this.timeJSON.hour - 12].he + ' בלילה';
            this.latinTimeTextAlt2 =
              'Hi ' + this.minuteStrings[this.timeJSON.minute - 1].quarterla + ' l-' + this.hourStrings[this.timeJSON.hour - 12].la + " b-ha-laylah";
          } else {
            this.hebrewTimeTextAlt2 = '';
            this.latinTimeTextAlt2 = '';
          }
          if(this.timeJSON.minute > 30) {
            this.hebrewTimeTextAlt3 = 
            'היא ' + this.minuteStrings[59 - this.timeJSON.minute].he + 'ל ' + this.hourStrings[this.timeJSON.hour - 12].he + ' בלילה';
            this.latinTimeTextAlt3 =
            'Hi ' + this.minuteStrings[59 - this.timeJSON.minute].la + ' l-' + this.hourStrings[this.timeJSON.hour - 12].he + " b-ha-laylah";
          } else {
            this.hebrewTimeTextAlt3 = '';
            this.latinTimeTextAlt3 = '';
          }
        }
        if(this.timeJSON.hour === 23 && this.timeJSON.minute > 30) {
          this.hebrewTimeTextAlt2 =
            'היא ' + this.minuteStrings[59 - this.timeJSON.minute].quarterhe + 'לחצות ';
          this.latinTimeTextAlt2 = 
            'Hi ' + this.minuteStrings[59 - this.timeJSON.minute].quarterla + ' l-chatzoth'
          if(this.timeJSON.minute === 45) {
            this.hebrewTimeTextAlt3 = 
              'היא ' + this.minuteStrings[this.timeJSON.minute - 1].quarterhe + 'לחצות ';
            this.latinTimeTextAlt3 =
              'Hi ' + this.minuteStrings[59 - this.timeJSON.minute].quarterla + ' l-chatzoth'
          }
        }
        if(this.timeJSON.hour === 0 && this.timeJSON.minute < 30) {
          this.hebrewTimeTextAlt2 =
            'היא ' + this.hourStrings[this.timeJSON.hour - 1].he + 'ו ' + this.minuteStrings[this.timeJSON.minute - 1].he;
          this.latinTimeTextAlt2 = 
            'Hi ' + this.hourStrings[this.timeJSON.hour - 1].la + ' ve-' + this.minuteStrings[this.timeJSON.minute - 1].la;
          if(this.timeJSON.minute === 15) {
            this.hebrewTimeTextAlt3 = 
              'היא ' + this.hourStrings[this.timeJSON.hour - 1].he + 'ורבע ';
            this.latinTimeTextAlt3 =
              'Hi ' + this.hourStrings[this.timeJSON.hour - 1].la + " ve-reva'";
          }
        }
      }
      console.log(this.hebrewTimeText);
    }
  }

  setNumberOfDaysInMonth(monthEN) {
    switch(monthEN) {
      case 'February': 
        this.maximumDate = 29;
        break;
      case 'April':
      case 'June':
      case 'September':
      case 'November':
        this.maximumDate = 30;
      default:
        this.maximumDate = 31;
    }
  }

  setNumberOfDaysInMonthJewish(monthJewishLA) {
    switch(monthJewishLA) {
      case 'Iyar': 
      case 'Tamuz': 
      case 'Elul': 
      case 'Tevet': 
      case 'Adar': 
        this.maximumDateJewish = 29;
        break;
      default:
        this.maximumDateJewish = 30;
    }
  }

  decreaseDateJewish() {
    if(this.chosenDateJewish > 1) {
      this.chosenDateJewish--;
      this.setDateTextsJewish();
    }
  }
  
  increaseDateJewish() {
    if(this.chosenDateJewish < this.maximumDateJewish) {
      this.chosenDateJewish++;
      this.setDateTextsJewish();
    }
  }

  setMonthJewish() {
    this.setNumberOfDaysInMonthJewish(this.chosenMonthJewish.la);
    this.chosenDateJewish = 1;
    this.setDateTextsJewish();
  }

  setDateTextsJewish() {
    this.hebrewDateTextJewish = "ה" + this.ordinalNumbers[+this.chosenDateJewish - 1].he + " של " + this.chosenMonthJewish.he;
    this.latinDateTextJewish = "Ha-" + this.ordinalNumbers[+this.chosenDateJewish - 1].la + " shel " + this.chosenMonthJewish.la;
    console.log(this.hebrewDateTextJewish);
    console.log(this.latinDateTextJewish);
  }

  decreaseDate() {
    if(this.chosenDate > 1) {
      this.chosenDate--;
      this.setDateTexts();
    }
  }
  
  increaseDate() {
    if(this.chosenDate < this.maximumDate) {
      this.chosenDate++;
      this.setDateTexts();
    }
  }

  setMonth() {
    this.setNumberOfDaysInMonth(this.chosenMonth.en);
    this.chosenDate = 1;
    this.setDateTexts();
  }

  setDateTexts() {
    this.hebrewDateText = "ה" + this.ordinalNumbers[+this.chosenDate - 1].he + " של " + this.chosenMonth.he;
    this.latinDateText = "Ha-" + this.ordinalNumbers[+this.chosenDate - 1].la + " shel " + this.chosenMonth.la;
    console.log(this.hebrewDateText);
    console.log(this.latinDateText);
  }

  ngOnInit() {
  }

}
