const BaseBean = require('./BaseBean');

module.exports = class UserBean extends BaseBean {
  constructor() {
    super();
    this.input = {
      account: null,
      password: null,
    };
  }
};
