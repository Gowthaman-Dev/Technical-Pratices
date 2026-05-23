export const getusers = (req,res)=>{
    const user = [
        {id:1,name:"Rocky"},
        {id:2,name:"Monisha"}
    ]
    res.json({
        msg:"succesfully"
        ,user
    })
}
