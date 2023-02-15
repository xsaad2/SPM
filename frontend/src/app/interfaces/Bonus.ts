export interface Bonus {
    yearOfPerf: Number;
    code: String;
    employeeId: String;
    fullName: String;
    unit: String;
    jobTitle: String;
    orders: {
        productName: String;
        clientName: String;
        clientRating: String;
        nbrOfItems: String;
        bonusAmount: String;
    }[];
    socialPer: {
        leadership: { value: Number; amount: Number };
        openness: { value: Number; amount: Number };
        behaviour: { value: Number; amount: Number };
        attitude: { value: Number; amount: Number };
        communication: { value: Number; amount: Number };
        integrity: { value: Number; amount: Number };
        totalbonusAmount: Number;
    };
    totalBonus: Number;
    remarks: String;
}
