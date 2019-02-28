var users = 
[
    {id: 1, username: "admin", password: "admin", firstname: "Admin", lastname: "admin", phone: "555-123-1111", email: "info@email.com", isReviewer: true, isAdmin: true},
    {id: 2, username: "normal", password: "user", firstname: "Normal", lastname: "user", phone: "555-321-1111", email: "info2@email.com", isReviewer: true, isAdmin: false},
    {id: 3, username: "user", password: "user", firstname: "User", lastname: "user", phone: "555-456-1111", email: "info3@email.com", isReviewer: false, isAdmin: false},
    {id: 4, username: "other", password: "admin", firstname: "Other", lastname: "admin", phone: "555-654-1111", email: "info4@email.com", isReviewer: true, isAdmin: true},
    {id: 5, username: "other", password: "user", firstname: "Other", lastname: "user", phone: "555-789-1111", email: "info5@email.com", isReviewer: false, isAdmin: false}
];

function loaded()
{
    buildUserTable();
}

function buildUserTable()
{
    var tbC = document.getElementById("tbody");
    tbC.innerHTML = "";

    for(var u of users)
    {
        var tr = "<tr>";
        tr += '<td class = "center">' + u.id + "</td>";
        tr += "<td>" + u.username + "</td>";
        tr += "<td>" + u.password + "</td>";
        tr += "<td>" + (u.firstname + " " + u.lastname) + "</td>";
        tr += "<td>" + u.phone + "</td>";
        tr += "<td>" + u.email + "</td>";
        tr += "<td class = 'center'>" + (u.isReviewer ? "Yes" : "No") + "</td>";
        tr += "<td class = 'center'>" + (u.isAdmin ? "Yes" : "No") + "</td>";
        tr += "</tr>";

        tbC.innerHTML += tr;
    }
}