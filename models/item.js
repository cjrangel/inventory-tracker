const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const itemSchema = new Schema(
  {
    id: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
    itemName: {
      type: String,
      required: true,
      trim: true
    },
    marketplace: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    cost: {
      type: Number,
      required: true,
      trim:true
     
    },
    forSalePrice: {
        type: Number,
        required: true,
        trim:true
       
      },
      profit: {
        type: Number,
        required: true,
        trim:true
       
      },
   
  
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of comments and replies on retrieval


const Item= model('Item', itemSchema);

module.exports = Item;
