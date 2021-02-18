import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Transaction', TransactionSchema);