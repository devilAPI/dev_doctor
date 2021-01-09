import CoursePart from '../part';

export default abstract class CoursePartItem {
    public readonly part : CoursePart;
    public readonly name : string;
    public readonly description : string;
    public readonly slug : string;

    public get server() {
        return this.part.server;
    }
    
    public constructor(init?:Partial<CoursePartItem>) {
        Object.assign(this, init);
    }
}