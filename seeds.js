var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud Rest",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBaTBODiJwcmC5r84v7jM4b3xXhnptwL2HorV6wYf_J-DvgMuGlA",
        description: "Hugh, We wanted to let you know that we had a fabulous time and we hope to repeat the camping experience next year. It is a fabulous environment where not only kids of all ages but also the adults had a great time. We shall recommend it to anyone that is interested in camping or glamping."
    },
     {
        name: "Cloud Rest",
        image: "https://farm9.staticflickr.com/8039/7930464504_d02f777308.jpg",
        description: "Hugh, We wanted to let you know that we had a fabulous time and we hope to repeat the camping experience next year. It is a fabulous environment where not only kids of all ages but also the adults had a great time. We shall recommend it to anyone that is interested in camping or glamping."
    },
     {
        name: "Cloud Rest",
        image: "https://farm4.staticflickr.com/3924/14422533026_9be7d49684.jpg",
        description: "Hugh, We wanted to let you know that we had a fabulous time and we hope to repeat the camping experience next year. It is a fabulous environment where not only kids of all ages but also the adults had a great time. We shall recommend it to anyone that is interested in camping or glamping."
    }
]
    
function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
            console.log("removed campground!!");
            //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                      console.log(err)
                    }else{
                        console.log("added a campground");
                        //create a comment
                         Comment.create({
                            
                                 text: "This place is great, but I wish there was internet",
                                 author: "Homer"
                            }, function(err, comment){
                                if(err){
                                     console.log(err);
                                }else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
    });
    //add a few comments
}

module.exports = seedDB; 