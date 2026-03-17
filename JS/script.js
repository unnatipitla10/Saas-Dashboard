import { dashboardData } from "./data.js"

document.getElementById("users").textContent = dashboardData.users

document.getElementById("revenue").textContent = "$" + dashboardData.revenue

document.getElementById("orders").textContent = dashboardData.orders

document.getElementById("growth").textContent = dashboardData.growth + "%"


console.log("Dashboard Data Loaded:", dashboardData)

