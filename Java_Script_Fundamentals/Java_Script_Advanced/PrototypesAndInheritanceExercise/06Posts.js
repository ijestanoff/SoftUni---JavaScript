function solution () {
    class Post {
        constructor (title, content) {
            this.title = title;
            this.content = content;
        }

        toString () {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor (title, content, likes, dislikes) {
            super (title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment (comment) {
            this.comments.push(comment);
        }

        toString () {
            let textToReturn = `Post: ${this.title}\n` +
                    `Content: ${this.content}\n` +
                    `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length) {
                textToReturn += `\nComments:`;
                this.comments.forEach(comment => textToReturn += `\n * ${comment}`);
            }
            return textToReturn;      

        }
    }

    class BlogPost extends Post {
        constructor (title, content, views){
            super (title, content);
            this.views = views;
        }

        view () {
            this.views++;
            return this;
        }

        toString () {
            return `Post: ${this.title}\n` +
            `Content: ${this.content}\n` +
            `Views: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost 
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");
console.log(post.toString());
// Post: Post
// Content: Content
let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
let xxx = new classes.BlogPost("MyTitleXXX", "TestXXX", 12);
xxx.view().view();
console.log(xxx.toString());

