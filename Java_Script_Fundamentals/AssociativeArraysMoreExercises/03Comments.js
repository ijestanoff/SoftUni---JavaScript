function comments(input) {
    let users = [];
    let articles = {};
    for (let part of input) {
        let commands = part.split(' ');
        let command = commands[0];
        if (command == 'user') { //add the user to the list of users
            let userName = commands[1];
            if (!users.includes(userName)) {
                users.push(userName);
            }
        } else if (command == 'article') {
            let articleName = commands[1];
            if (!articles.hasOwnProperty(articleName)) {
                articles[articleName] = {};
            }
        } else if (part.includes('posts on')) {
            let userName = command;
            let posts = part.split(': ');
            let articleName = posts[0].slice(userName.length + 10,);
            let [commentTitle, commentContents] = posts[1].split(', ');
            if (articles.hasOwnProperty(articleName) && users.includes(userName)) {
                if (!articles[articleName].hasOwnProperty(userName)) {
                    articles[articleName][userName] = {};
                }
                articles[articleName][userName][commentTitle] = commentContents;
            }
        }
    }
    let sortArticles = {};
    for (let article in articles) {
        let totalComment = 0;
        for (let user in articles[article]) {
            totalComment += Object.keys(articles[article][user]).length;
        }
        sortArticles[article] = totalComment;
        //sort by user
        let keyValueArray = Object.entries(articles[article]);
        keyValueArray.sort((a, b) => a[0].localeCompare(b[0]));
        articles[article] = Object.fromEntries(keyValueArray);
    }
    //sort by number of comments
    let sortByValue = Object.entries(sortArticles);
    sortByValue.sort((a, b) => b[1] - a[1]);
    sortArticles = Object.fromEntries(sortByValue);

    for (let article in sortArticles) {
        console.log(`Comments on ${article}`);
        for (let user in articles[article]) {
            for (let comment in articles[article][user]) {
                console.log(`--- From user ${user}: ${comment} - ${articles[article][user][comment]}`);
            }
        }
    }
}

comments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);
// comments(['user Mark',
//     'Mark posts on someArticle: NoTitle, stupidComment',
//     'article Bobby',
//     'article Steven',
//     'user Liam',
//     'user Henry',
//     'Mark posts on Bobby: Is, I do really like them',
//     'Mark posts on Steven: title, Run',
//     'someUser posts on Movies: Like']);