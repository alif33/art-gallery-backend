const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    { 
        email: { 
          type: String, 
          required: true, 
          unique: true 
        },
        password: { 
          type: String, 
          required: true 
        },
        role: {
          type: String,
          enum : ['ADMIN', "USER"],
          default: 'USER'
    
        }
    },
    {
    timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);