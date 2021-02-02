export class Project {
    constructor(public title: string, public startDate: Date, public endDate: Date, public id: number,public epics:object[]) {}
}