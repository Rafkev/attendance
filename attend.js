<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Staff Attendance</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        form {
            max-width: 400px;
            margin: 0 auto;
        }
        input[type="submit"] {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h2>Staff Attendance</h2>
    <form id="attendanceForm">
        <label for="staffName">Staff Name:</label>
        <input type="text" id="staffName" name="staffName" required><br><br>
        <label for="attendance">Attendance:</label>
        <select id="attendance" name="attendance">
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
        </select><br><br>
        <input type="submit" value="Submit">
    </form>

    <script>
        document.getElementById("attendanceForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            const staffName = document.getElementById("staffName").value;
            const attendance = document.getElementById("attendance").value;
            // You can send the data to a server for storage or processing
            console.log("Staff Name:", staffName);
            console.log("Attendance:", attendance);
            // Reset form
            this.reset();
        });
    </script>
</body>
</html>
