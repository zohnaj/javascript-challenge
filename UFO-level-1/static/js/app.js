// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody=d3.select("tbody");

function table(UFO){
    tbody.html("");
    UFO.forEach((datarow)=>{
        var row=tbody.append("tr");
        Object.values(datarow).forEach((values)=>{
            var cell=row.append("td");
            cell.text(values);
        });
    });
} 
function filtered_data(){
    var date=d3.select("#datetime").property("value")
    let UFOdata=tableData;
    if (date){
        UFOdata=UFOdata.filter(row=>row.datetime===date);
    } 
table(UFOdata)
}
d3.selectAll("#filter-btn").on("click", filtered_data);


table(tableData)
