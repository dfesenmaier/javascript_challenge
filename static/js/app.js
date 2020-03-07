// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function insertData(data){
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value.toString());
    })
};

tableData.forEach(insertData);

function clearData(filteredData){
    d3.select("tbody").html("");
    filteredData.forEach(insertData);
};

// Filtering by date
var button = d3.select("#filter-btn");
var inputBar = d3.select(".form-control");

button.on("click", function (){
    d3.event.preventDefault();
    var inputValue = inputBar.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(data => data.datetime == inputValue);

    clearData(filteredData);
})

function show_more ( element_to_show ) {
    var element_to_show = document.getElementById("more");
    element_to_show.style.display = "inline";
    }

console.log(inputBar);