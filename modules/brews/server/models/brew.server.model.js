// var brewSchema = new Schema({
//   firstName: {
//     type: String,
//     trim: true,
//     default: '',
//     validate: [validateLocalStrategyProperty, 'Please fill in your first name']
//   },
//   lastName: {
//     type: String,
//     trim: true,
//     default: '',
//     validate: [validateLocalStrategyProperty, 'Please fill in your last name']
//   },
//   displayName: {
//     type: String,
//     trim: true
//   },
//   email: {
//     type: String,
//     unique: true,
//     lowercase: true,
//     trim: true,
//     default: '',
//     validate: [validateLocalStrategyEmail, 'Please fill a valid email address']
//   },
//   username: {
//     type: String,
//     unique: 'Username already exists',
//     required: 'Please fill in a username',
//     lowercase: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     default: ''
//   },
//   salt: {
//     type: String
//   },
//   profileImageURL: {
//     type: String,
//     default: 'modules/users/client/img/profile/default.png'
//   },
//   provider: {
//     type: String,
//     required: 'Provider is required'
//   },
//   providerData: {},
//   additionalProvidersData: {},
//   roles: {
//     type: [{
//       type: String,
//       enum: ['user', 'admin']
//     }],
//     default: ['user'],
//     required: 'Please provide at least one role'
//   },
//   updated: {
//     type: Date
//   },
//   created: {
//     type: Date,
//     default: Date.now
//   },
//   /* For reset password */
//   resetPasswordToken: {
//     type: String
//   },
//   resetPasswordExpires: {
//     type: Date
//   }
// });
