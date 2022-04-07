import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  address: String,
  isAbsent: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.model('student', schema)
