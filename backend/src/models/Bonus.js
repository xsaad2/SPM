class Bonus {
  constructor(code, employeeId, fullName, unit, jobTitle, orders, socialPer) {
    this._id = undefined;
    this.code = code;
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.unit = unit;
    this.jobTitle = jobTitle;
    this.orders = orders;
    this.socialPer = socialPer;
  }
  
}

module.exports = Employee;
