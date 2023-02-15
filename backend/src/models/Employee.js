class Employee {
  constructor(
    firstName,
    middleName,
    lastName,
    code,
    employeeId,
    fullName,
    status,
    dob,
    driversLicenseNumber,
    licenseExpiryDate,
    maritalStatus,
    gender,
    otherId,
    nationality,
    unit,
    jobTitle,
    supervisor
  ) {
    this._id = undefined;
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.code = code;
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.status = status;
    this.dob = dob;
    this.driversLicenseNumber = driversLicenseNumber;
    this.licenseExpiryDate = licenseExpiryDate;
    this.maritalStatus = maritalStatus;
    this.gender = gender;
    this.otherId = otherId;
    this.nationality = nationality;
    this.unit = unit;
    this.jobTitle = jobTitle;
    this.supervisor = supervisor;
  }
}

module.exports = Employee;
