var bio={
  	"name":"Marcelo Damasceno\n",
  	"role":"Lecturer\n",
  	"contact":"marcelodamasceno@gmail.com\n",
  	"pictureUrl":"images/me.jpg\n",
  	"welcome":"What's Up?\n",
  	"skills":["Infinite\n"],
    "contacts" : {
    "mobile" : "555-55-55",
    "skype" : "minkova.tanya", 
    "location" : "Parnamirim, RN",
    "email" : "t.minkova@live.com"
  }
  }
var work={
  "jobs":[{
  	"title":"Lecturer",
  	"employer":"IFRN",
  	"years":6,
  	"location":"São Gonçalo do Amarante,RN",
    "description":"bla bla bla bla bla"}]
  }
var education={
  "schools":[{
  	"name":"UFRN",
  	"years":4,
  	"location":"UFRN,Natal"}]
  }

  var projects={
    "projects":[{
      "title":"teste",
      "dates":"2016",
      "description":"bla-bla-bla"
    }]
  }
  
  var formmatedRole=HTMLheaderRole.replace("%data%",bio.role)
  $("#header").prepend(formmatedRole)

  var formmatedName=HTMLheaderName.replace("%data%",bio.name)
  $("#header").prepend(formmatedName)


  $("#main").append(work.position)

  $("#education").append(HTMLschoolStart)

for(school in education.schools){
   var formattedName=HTMLschoolName.replace("%data%",education.schools[school].name)
  $(".education-entry:last").append(education.schools[0].name)
}
 
  //
  
  function inName(){
  	var newName=bio.name.trim().split(" ");
  	var cap=newName[1].toUpperCase();
  	newName[1]=cap;
  	return newName[0]+" "+newName[1];
  }

$("#main").append(internationalizeButton);

projects.display=function(){
   for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formmatedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formmatedTitle);

    var formmatedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formmatedDates);

    var formmatedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formmatedDescription);

    if(projects.projects[project].images>0){
      for(image in projects.projects[project].images){
        var formattedImages=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formmatedImages);        
      }

    }
  }
  
}

projects.display();

$("#mapdiv").append(googleMap);
