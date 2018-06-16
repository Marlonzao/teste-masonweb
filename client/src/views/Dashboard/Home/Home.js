app.controller('HomeController', function($scope){
    var data = {
        labels: ["Jaaneiro", "Fevereiro", "Março", "Abril", "Maio"],
        datasets: [
        {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56]
        },
        {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86]
        }
        ]
        };
        var pdata = [
        {
        value: 300,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Portuguesa"
        },
        {
        value: 50,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Frango com catupiry"
        }
        ]
            // if($("#lineChartDemo").get(0).getContext("2d")){
            //     var ctxl = $("#lineChartDemo").get(0).getContext("2d");
            //     var lineChart = new Chart(ctxl).Line(data);
            //     var ctxp = $("#pieChartDemo").get(0).getContext("2d");
            //     var pieChart = new Chart(ctxp).Pie(pdata);
            // }
})