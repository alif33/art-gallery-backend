const Funfact = require("../models/Funfact");
const Artist = require("../models/Artist");

exports.getfunFacts = async(req, res) => {
    const funFacts = await Funfact.find({})
    .populate("artist", { Artist });
    res.status(200).json({funFacts: funFacts.reverse()});
};

exports.addFunfact = async(req, res) => {
    const { 
        title,
        artist 
    } = req.body;

    const _funFact = new Funfact({
        title,
        artist 
    })
    _funFact.save( async(err, funFact) => {
        if (err) {
            return res.status(400).json({
                message: "Something went wrong",
                err
            });
        }

        if (funFact) {
            return res.status(201).json({
                success: true,
                message: "Fun fact added successfully",
            });
        }
    })
   
};