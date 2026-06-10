// Database built with active June 2026 data variables
const dynamicSportsDatabase = {
    "wembanyama": {
        name: "Victor Wembanyama (San Antonio Spurs)",
        league: "NBA Professional Basketball",
        status: "Active Finals Contender",
        log: "NBA Finals Game 3: Drops massive stat blocks at Madison Square Garden to finish with a stellar 115-111 point threshold, reviving the Spurs' championship drive."
    },
    "sorsby": {
        name: "Brendan Sorsby (Texas Tech)",
        league: "NCAA Division I Football",
        status: "Declared Eligible via Injunction",
        log: "June 2026 Court Decree: A Lubbock County Court judge issues an active injunction against the NCAA suspension. He is cleared to play the regular season."
    },
    "jordan": {
        name: "Michael Jordan (Chicago Bulls)",
        league: "NBA Historical Legend",
        status: "Hall of Fame Retrospective",
        log: "1998 Finals Game 6 Milestone: Strips possession from Karl Malone inside the final seconds, hitting a baseline jumper to clinch the ring."
    }
};

function runArchiveSearch() {
    const userInput = document.getElementById("dbSearch").value.toLowerCase().trim();
    const panelSuccess = document.getElementById("searchSuccess");
    const panelError = document.getElementById("searchError");

    // Clear active UI boxes
    panelSuccess.style.display = "none";
    panelError.style.display = "none";

    if (!userInput) return;

    let targetRecord = null;
    if (userInput.includes("wemby") || userInput.includes("victor") || userInput.includes("wembanyama")) targetRecord = dynamicSportsDatabase.wembanyama;
    else if (userInput.includes("sorsby") || userInput.includes("brendan") || userInput.includes("tech")) targetRecord = dynamicSportsDatabase.sorsby;
    else if (userInput.includes("jordan") || userInput.includes("michael")) targetRecord = dynamicSportsDatabase.jordan;

    if (targetRecord) {
        document.getElementById("resName").innerText = targetRecord.name;
        document.getElementById("resLeague").innerText = targetRecord.league;
        document.getElementById("resStatus").innerText = targetRecord.status;
        document.getElementById("resLog").innerText = targetRecord.log;
        
        // Show panel
        panelSuccess.style.display = "block";
    } else {
        // Show fallback notice
        panelError.style.display = "block";
    }
}
