import mongoose, { Schema } from "mongoose";
import { User } from "../auth/user.models.js";


const productSchema = new Schema(
  {
    name:{
        type: String,
        required: [true,'A product must have a name'],
        trim: true,
        maxlength : [120,"Product name should not be more than 120 characters"]
    },
    price:{
        type: Number,
        required: [true,'Please provide product name'],
        maxlength : [5,"Product price should not be more than 5 digits"]
    },
    description:{
        type: String,
        required: [true,'Please provide product description'],  
    },
    photos:[
        {
        type: String,
        required: [true,'Please provide product photos']
        }  
    ],
    category:{
        type: String,
        required: [true,'Please select category from- short-sleeves, long-sleeves,sweat-shirts and hoodies'],
        enum: {
            values: [
                'short-sleeves',
                'long-sleeves',
                'sweat-shirts',
                'hoodies'
            ],
            message: "Please select category ONLY from- short-sleeves, long-sleeves,sweat-shirts and hoodies"
        }  
    },
    brand : {
        type: String,
        required: [true,"Please ass a brand for clothing"]
    },
    rating : {
        type: Number,
        default: 0  
    },
    numberOfReview: {
        type:Number,
        default: 0
    },
    reviews: [
        {
        user : {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },
        name : {
            type: String,
            required : true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: Number,
            required: true
        }
    }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }

  },
  { timestamps: true }
);



export const product = mongoose.model("product", productSchema);