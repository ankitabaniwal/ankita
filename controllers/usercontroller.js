const users = require ('../users.json');
function getALLusers(req,res){
    try{
        res.json(users)
    }catch(err)  {


    }
}
module.exports=(
    getALLusers
)