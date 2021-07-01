import { apiHelper } from './../utils/helpers'

export default {
  signIn ({ email, password }) {
    console.log('apiHelper')
    return apiHelper.post('/signin', {
      email,
      password
    })
  }
}
