/* My Courses */
/* Course Description scripting */
document.getElementById("CP-course").onclick = 
function() {

    document.getElementById("description-text").textContent =
        "This course introduces students to the fundamental concepts of computer programming, including problem-solving, algorithms, variables, data types, control structures, functions, and basic data structures. Students will develop practical programming skills through hands-on exercises and projects, culminating in a simple working software application.";

    document.getElementById("output-1").textContent =
        "Milestone 1: Programming Fundamentals Portfolio (Deadline: October 1, 2026)";

    document.getElementById("output-2").textContent =
        "Milestone 2: Programming Project Proposal and Prototype (Deadline: October 30, 2026)";

    document.getElementById("output-3").textContent =
        "Terminal Assessment: Final Programming Project (Deadline: November 27, 2026)";

};

document.getElementById("WST-course").onclick = 
function() {

    document.getElementById("description-text").textContent =
        "This course introduces the fundamental concepts, tools, and technologies used in developing modern web systems. It covers web architecture, client- and server-side technologies, databases, APIs, responsive design, web security, and deployment. Through hands-on activities and a culminating project, students will design, develop, test, and deploy a functional web-based application.";

    document.getElementById("output-1").textContent =
        "Milestone 1: Web System Design Proposal (Deadline: October 3, 2026)";

    document.getElementById("output-2").textContent =
        "Milestone 2: Functional Web System Prototype (Deadline: October 29, 2026)";

    document.getElementById("output-3").textContent =
        "Terminal Assessment: Final Web System and Documentation (Deadline: November 29, 2026)";

};

document.getElementById("LWR-course").onclick = 
function() {

    document.getElementById("description-text").textContent =
        "This course examines the life, works, writings, and contributions of Jose Rizal to Philippine history and nation-building. It explores Rizal’s major literary works, ideas, travels, relationships, and historical context, with emphasis on how his writings reflected the social and political conditions of his time and contributed to the development of Filipino national consciousness. Students will critically analyze selected works and relate Rizal’s ideas to contemporary Philippine society.";

    document.getElementById("output-1").textContent =
        "Milestone 1: Rizal Life and Historical Context Porfolio (Deadline: October 2, 2026)";

    document.getElementById("output-2").textContent =
        "Milestone 2: Literary and Hisotrical Analysis (Deadline: October 30, 2026)";

    document.getElementById("output-3").textContent =
        "Terminal Assessment: Rizal and Contemporary Philippine Society Presentation (Deadline: November 25, 2026)";

};

const bookingRows = document.getElementById("booking-rows");

try {
    const bookings = JSON.parse(localStorage.getItem("edukonek.bookings") || "[]");
    if (!Array.isArray(bookings)) {
        throw new Error("Saved bookings are not in the expected format.");
    }

    if (bookings.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 5;
        cell.textContent = "No bookings made yet.";
        row.appendChild(cell);
        bookingRows.appendChild(row);
    }

    bookings.forEach((booking) => {
        const row = document.createElement("tr");
        const date = new Date(`${booking.date}T00:00:00`);
        const values = [
            booking.course,
            Number.isNaN(date.getTime()) ? booking.date : date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            }),
            booking.time,
            booking.instructor,
            booking.status
        ];

        values.forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        bookingRows.appendChild(row);
    });
} catch (error) {
    console.error("Unable to load saved bookings.", error);

    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.textContent = "Unable to load saved bookings.";
    row.appendChild(cell);
    bookingRows.appendChild(row);
}
