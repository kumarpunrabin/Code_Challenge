$(document).ready(function(){
    
    $("#getRepos").click(function(){        
            var user = $("#user").val();
            console.log(user);
            getRepos(user);
    });

    function getRepos(user){
        var url = "https://api.github.com/users/" + user + "/repos";
        var repos = $.get(url, function(data){
            if(Array.isArray(data)){
                $("#repos").empty();
                data.forEach(function(key){
                    $("#repos").append("<li style='font-size:1.5em;'>" + key.name + "</li>");
                    console.log(key.name);
                });
                
            }
        })
        .fail(function(){
            $("#repos").empty();
            $("#repos").html("<div style='color:red;font-size:2em;'> Username Not Found</div>");
        });
        
        console.log("get " + url);
    }


    
});