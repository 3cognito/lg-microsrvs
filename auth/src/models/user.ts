import mongoose, { Mongoose } from "mongoose";

//For attributes of object to be used for user document creation
interface usersAttrs {
  email: string;
  password: string;
}

//For user models
interface UserModel extends mongoose.Model<Userdoc> {
  build(attr: usersAttrs): Userdoc;
}

//Interface for single doc

interface Userdoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: usersAttrs) => new User(attrs);

const User = mongoose.model<Userdoc, UserModel>("User", userSchema);

export { User };
