class EvalRecord{
    constructor(desc, year,targetValue, actualValue) {
        this._id = undefined;
        this.desc = desc;
        this.year = year;
        this.targetValue = targetValue;
        this.actualValue=actualValue;
    }
}

module.exports = EvalRecord;