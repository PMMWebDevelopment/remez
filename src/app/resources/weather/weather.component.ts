import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherExpressions;

  constructor() {
    this.weatherExpressions = [
      { he: ".יום קר", la: "Yom kar.", equiv: "It's cold." },
      { he: ".קר לי", la: "Kar li.", equiv: "I'm cold." },
      { he: ".יום יפה", la: "Yom yafeh.", equiv: "It's nice." },
      { he: ".יום חם", la: "Yom cham.", equiv: "It's hot." },
      { he: ".חם לי", la: "Cham li.", equiv: "I'm hot." },
      { he: "!איזה חם", la: "Eyzeh cham!", equiv: "What a hot day!" },
      { he: ".יש שמש", la: "Yesh shemesh.", equiv: "It's sunny." },
      { he: ".יש רוח", la: "Yesh rucha.", equiv: "It's windy." },
      { he: ".יורד שלג", la: "Yored sheleg.", equiv: "It's snowing." },
      { he: ".יורד גשם", la: "Yored geshem.", equiv: "It's raining." },
      { he: ".הולך לרדת גשם היום", la: "Holekh laredeth geshem ha-yom.", equiv: "It's going to rain today." },
      { he: ".יהיה מעונן", la: "Yehiyeh m'unan.", equiv: "It will be cloudy." },
      { he: ".יהיה כפור", la: "Yehiyeh kfor.", equiv: "It will be frosty." },
      { he: "חם", la: "cham", equiv: "hot" },
      { he: "חמים", la: "chamim", equiv: "warm" },
      { he: "קר", la: "kar", equiv: "cold" },
      { he: "יבש", la: "yavesh", equiv: "dry" },
      { he: "קריר", la: "kareer", equiv: "cool" },
      { he: "מוצף שמש", la: "mutzaf shemesh", equiv: "sunny" },
      { he: "כהה", la: "keheh", equiv: "dark" },
      { he: "מענן", la: "m'unan", equiv: "cloudy" },
      { he: "גשום", la: "gashum", equiv: "rainy" },
      { he: "לחץ גבוה", la: "lachatz gavoha", equiv: "high pressure" },
      { he: "לחץ נמוך", la: "lachatz namukh", equiv: "low pressure" },
      { he: "קל", la: "kal", equiv: "light (adj.)" },
      { he: "נוח", la: "nocha", equiv: "comfortable" },
      { he: "נאה", la: "naeh", equiv: "pleasant" },
      { he: "שוטף", la: "shotef", equiv: "continuous" },
      { he: "חזק", la: "chazak", equiv: "strong" },
      { he: "כבד", la: "kaved", equiv: "heavy" },
      { he: "מזג אויר", la: "mzeg avir", equiv: "weather" },
      { he: "שמש", la: "shemesh", equiv: "sun" },
      { he: "גשם", la: "geshem", equiv: "rain" },
      { he: "שלג", la: "sheleg", equiv: "snow" },
      { he: "ברד", la: "barad", equiv: "hail" },
      { he: "קרח", la: "kerach", equiv: "ice" },
      { he: "ענן", la: "'anan", equiv: "cloud" },
      { he: "עננים", la: "'ananim", equiv: "clouds" },
      { he: "ערפל", la: "'arafel", equiv: "fog" },
      { he: "אויר", la: "avir", equiv: "air" },
      { he: "רוח", la: "rucha", equiv: "wind" },
      { he: "סופה", la: "sufah", equiv: "storm" },
      { he: "רעם", la: "ra'am", equiv: "thunder" },
      { he: "ברק", la: "barak", equiv: "lightning" },
      { he: "רעידת אדמה", la: "r'idath adamah", equiv: "earthquake" },
      { he: "קשת", la: "kesheth", equiv: "rainbow" },
      { he: "מטריה", la: "mitriyah", equiv: "umbrella" },
      { he: "מעיל גשם", la: "m'il geshem", equiv: "raincoat" },
      { he: "חום", la: "chom", equiv: "heat" },
      { he: "גל חום", la: "gal chom", equiv: "heat wave" },
      { he: "שרב", la: "sharav", equiv: "heat wave" },
      { he: "חמסין", la: "chamsin", equiv: "heat wave" },
      { he: "סופת חול", la: "sufath chol", equiv: "sandstorm" },
      { he: "לחות", la: "lachuth", equiv: "humidity" },
      { he: "שמים", la: "shmayim", equiv: "sky" },
      { he: "כוכב", la: "kokhav", equiv: "star" },
      { he: "ירח", la: "yarecha", equiv: "moon" },
      { he: "תחזית", la: "tachazith", equiv: "forecast" },
      { he: "טמפרטורה", la: "temperaturah", equiv: "temperature" },
      { he: "מעלות", la: "ma'aloth", equiv: "degrees" },
      { he: "צלזיוס", la: "Tzelzius", equiv: "Celsius" },
      { he: "פרנהיט", la: "Farenhayt", equiv: "Fahrenheit" }
    ];
  }

  ngOnInit() {
  }

}