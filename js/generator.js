function generate(){
	var teamAmount = document.getElementById('teams').value;
	var events = document.getElementById('events').value;

	var teams = [];
	for(var i = 0; i< teamAmount; i++){
		teams.push("Team " + (i+1));
	}
	if(teamAmount % 2 > 0)
		teams.push("BYE");
	shuffle(teams)
	$("#fixtures").empty();

	for(var i = 0; i < events; i++){
		showFixtures(teams, i);
		teams = mixTeams(teams);
	}
}

function mixTeams(teams){
    var newTeams = [];
    newTeams.push(teams[teams.length-1]);
    for(var i = 0; i < teams.length-1; i++){
        newTeams.push(teams[i]);
    }
    return newTeams;
}
    
function showFixtures(teams, eventNum){
	eventNum ++;
	var html = "";
    for(var i = 0; i < (teams.length/2); i++){
        var teamOne = teams[i];
        var teamTwo = teams[teams.length-1-i];
        html += teamOne + " vs " + teamTwo + "<br>";
    }
    html += "</p></div></div>";
    $("#fixtures").append("<div class='large-6 medium-6 small-12 columns'><h6 class='panel'>Event "+eventNum+"</h6><div class='panel radius height'><p>"+html);
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}