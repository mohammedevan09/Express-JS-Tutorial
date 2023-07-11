const { v4: uuid4 } = require('uuid')

const users = [
  {
    id: uuid4(),
    username: 'mohammed evan',
    email: 'mohammedevan07@gmail.com',
  },
  {
    id: uuid4(),
    username: 'rakibul islam',
    email: 'adjfda@gmail.com',
  },
]

module.exports = users
