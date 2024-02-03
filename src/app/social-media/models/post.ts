import { Comment } from "src/app/core/models/comment";
export class Post {
    id!: number;
    userId!: number;
    title!: string;
    createdDate!: string;
    content!: string;
    comments!: Comment[];
}
