export class Commentclass {
    post_id:string;
    email:string;
    comments:string;
    constructor(post_id,email,comments){
        this.email=email;
        this.comments=comments;
        this.post_id=post_id;
    }
}
