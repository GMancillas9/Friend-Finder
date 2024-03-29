// This htmkRoutes.js file should include two routes:
// A GET route to /survey which should display the survey page.

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function (req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});
