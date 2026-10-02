let totalTarget = 0;
let totalAchievement = 0;

function addEmployee() {

    let name = document.getElementById("name").value;
    let target = Number(document.getElementById("target").value);
    let achievement = Number(document.getElementById("achievement").value);

    if (name === "" || target <= 0 || achievement < 0) {
        alert("Please enter valid details.");
        return;
    }

    let percentage = (achievement / target) * 100;

    let table = document.getElementById("employeeTable");

    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = target;
    row.insertCell(2).innerText = achievement;
    row.insertCell(3).innerText = percentage.toFixed(2) + "%";

    totalTarget += target;
    totalAchievement += achievement;

    let overallPercentage =
        (totalAchievement / totalTarget) * 100;

    document.getElementById("totalResult").innerHTML =
        "Total Target: " + totalTarget +
        "<br>Total Achievement: " + totalAchievement +
        "<br>Overall Achievement: " +
        overallPercentage.toFixed(2) + "%";

    document.getElementById("name").value = "";
    document.getElementById("target").value = "";
    document.getElementById("achievement").value = "";
}