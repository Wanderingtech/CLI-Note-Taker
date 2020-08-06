var router = require(express.Router())
var path = require("path")
var fs = requires("fs")
var db = require("../db/db.json")

router.get("/api/notes",function(req,res){
    db = JSON.parse(fs.readFileSync("./db/db.json","utf8"))
    console.log("get route", db);
    res.json(db)
})
router.post("/api/notes",function(req,res){
    let note = {
        id: Math.floor(Math.random()*100),
        title: req.body.title,
        text: req.body.text
    }
    db.push(note);
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function(error){
        if(error)throw error
        console.log("post route", db)
        res.json(db)
    })
})
router.delete("/api/notes/:id",function(req,res){
    var deleteNote = req.params.id
    var data = []
    for(let i= 0; i < db.length; i++){
        if(deleteNote != db[i].id){
            data.push(db[i])
        }
    }
    db = data
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function(error){
        if(error)throw error
        console.log("delete route", db)
        res.json(db)
    })
})