function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    document.querySelector('#btnLoadPosts').addEventListener('click', loadPosts);
    document.querySelector('#btnViewPost').addEventListener('click', viewPosts);
    const postCommentsRef = document.querySelector('#post-comments');
    const postTitleRef = document.querySelector('#post-title');
    const postBodyRef = document.querySelector('#post-body');
    const postsRef = document.querySelector('#posts');
    const posts = {};

    async function loadPosts() {
        const request = await fetch(postsUrl);
        const data = await request.json();
        Object.values(data).forEach(post => {
            let option = document.createElement('option');
            option.value = post.id;
            option.text = post.title;
            postsRef.appendChild(option);
            posts[post.id] = post.body;
        });
    }

    async function viewPosts() {
        const comRequest = await fetch(commentsUrl);
        const coments = await comRequest.json();
        const postId = postsRef.selectedOptions[0].value;
        const postTitle = postsRef.selectedOptions[0].text;
        postTitleRef.textContent = postTitle;
        postBodyRef.textContent = posts[postId];
        const filteredComments = Object.values(coments).filter(val => val.postId == postId);
        postCommentsRef.innerHTML = '';
        filteredComments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment.text;
            postCommentsRef.appendChild(li);
        });

    }
}

attachEvents();