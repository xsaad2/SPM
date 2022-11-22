class SalesMan{
    constructor(firstname, lastname, email, evalRecord) {
        this._id = undefined;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.evalRecord=evalRecord;
    }
}

module.exports = SalesMan;