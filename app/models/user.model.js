const UserModel = db.model('users', new Schema({
    token: {
        type: db.Types.ObjectId,
        default: function () {
            return new db.Types.ObjectId();
        }
    },
    name: String,
    username: String,
    password: String,
    phone: String,
    email: String,
    roles: [String]
}, {strict: false, timestamps: true}));

export default UserModel;
