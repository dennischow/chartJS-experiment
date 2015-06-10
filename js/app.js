var myTimeWeek = [
    {
        value: 70,
        color:"#666",
        highlight: "#999",
        label: "Music"
    },
    {
        value: 30,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Research"
    },
    {
        value: 30,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Work-Out"
    },
    {
        value: 75,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Coding"
    },
    {
        value: 30,
        color: "#4D5360",
        highlight: "#616774",
        label: "Social"
    }
];

window.onload = function(){

    var ctx_devLang = document.getElementById("data-chart-pie").getContext("2d");

    window.myPie = new Chart( ctx_devLang ).Doughnut(myTimeWeek, {
        responsive : true, 
        animationEasing: "easeOutQuart",
        // scaleBackdropPaddingX : 2, 
        // scaleBackdropPaddingY : 2,
        // scaleShowLine : true,
        // scaleLineWidth: 1,
        // segmentStrokeColor : "#fff", 
        segmentShowStroke : true, 
        segmentStrokeWidth : 2, 
        // segmentStrokeColor: "transparent",
        animation : true, 
        animationSteps : 50, 
        // animateScale : true,
        tooltipTemplate : "<%= label %> : <%= value %>%"
    });

};