
var weather = prompt ("How is your area weather? ")
if ( weather === "hot"){
    document.write("<div>" + "<img src='sunny.webp'/>" + "<p>"+ "its too hot,The Sun is near dont go outside."+"</p>"+"<div/>")
} else if (weather ==="cold") {
    document.write("<div>" + "<img src='winter.webp'/>" + "<p>"+ "Winter is coming dress up properly."+"</p>"+"<div/>")
} else if (weather === "windy"){
    document.write("<div>" + "<img src='windy.jpg'/>" + "<p>"+ "fast winds outside it may be thunder storm." + "</p>"+"<div/>")
} else if (weather === "cloudy"){
    document.write("<div>" + "<img src='cloudy.webp'/>" + "<p>"+ "clouds are coming may be the rain will start soon." + "</p>"+"<div/>")
} else {
    document.write("<div>" + "<img src='laughing.png'/>" + "<p>"+ "oho! you are laughing on me?" + "</p>"+"<div/>")
}


