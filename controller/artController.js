const Art = require("../models/Art");

exports.getArts = async(req, res) => {
    const arts = await Art.find({})
    // .populate("products", { Product });
    res.status(200).json({arts: arts.reverse()});
};

exports.addArt = async(req, res) => {
    const { 
        title,
        artImage,
        artType,
        artist
    } = req.body;

    const _art = new Art({
        artName: title,
        artImage,
        artType,
        artist
    })
    _art.save( async(err, art) => {
        if (err) {
            return res.status(400).json({
                message: "Something went wrong",
                err
            });
        }

        if (art) {
            return res.status(201).json({
                success: true,
                message: "Art created successfully",
            });
        }
    })
   
};


