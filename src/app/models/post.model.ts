export class Post {
    id: string;
    lovesIt: number;
    createdAt: Date;

    constructor(public title: string, public content: string) {
        this.lovesIt = 0;
        this.createdAt = new Date();
    }
}
