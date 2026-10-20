/* --- Jabez Anthony: Booking & Available Schedules Script --- */

window.updateMentorName = function() {
    const courseSelect = document.getElementById("course-select");
    const mentorField = document.getElementById("mentor-field");
    
    const selectedCourse = courseSelect.value;
    
    if (selectedCourse === "Computer Programming") {
        mentorField.value = "Ms. Susan Abella";
    } else if (selectedCourse === "Web Systems and Technology") {
        mentorField.value = "Mr. Miguel Cruz";
    } else if (selectedCourse === "Life and Works of Rizal") {
        mentorField.value = "Ms. Maria Santos";
    }
};

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedTimeSlot = bookingForm.querySelector('input[name="time-slot"]:checked');
    if (!selectedTimeSlot) {
        alert("Please select an available time slot.");
        return;
    }

    const booking = {
        course: document.getElementById("course-select").value,
        date: document.getElementById("booking-date").value,
        time: selectedTimeSlot.value,
        instructor: document.getElementById("mentor-field").value,
        status: "Confirmed"
    };

    try {
        const bookings = JSON.parse(localStorage.getItem("edukonek.bookings") || "[]");
        if (!Array.isArray(bookings)) {
            throw new Error("Saved bookings are not in the expected format.");
        }

        localStorage.setItem("edukonek.bookings", JSON.stringify([...bookings, booking]));
    } catch (error) {
        console.error("Unable to save booking.", error);
        alert("Unable to save your booking in this browser. Please try again.");
        return;
    }

    window.location.href = "student.html";
});