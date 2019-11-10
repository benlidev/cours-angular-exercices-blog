export class Post {
    title: string;
    content: string;
    lovesIt: number;
    createdAt: Date;

    constructor() {
        this.createdAt = new Date();
    }
}
