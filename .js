document.addEventListener('DOMContentLoaded', () => {
    const postButton = document.getElementById('post-button');
    const postFeed = document.getElementById('posts-feed');

    // Example: Add a post when the button is clicked
    postButton.addEventListener('click', () => {
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = "<p>New post content</p>";
        postFeed.appendChild(newPost);
    });
});