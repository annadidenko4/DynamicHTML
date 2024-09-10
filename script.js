document.addEventListener('DOMContentLoaded', () => {
const quotes = {
        "Bella": "I’m not afraid of you. I’m afraid of losing you.",
        "Edward": "Yes, it is enough. Enough for forever.",
        "Jacob": "I’m Jacob Black. You bought my dad’s truck.",
        "Alice": "Bella, how many times do we have to tell you that there’s no danger to us?"
    };
    const inputField = document.getElementById('characterInput');
    const getQuoteButton = document.getElementById('getQuoteButton');
    const quoteDisplay = document.getElementById('quoteDisplay');

    getQuoteButton.addEventListener('click', () => {
        const character = inputField.value.trim();
        const quote = quotes[character];
        quoteDisplay.textContent = quote ? quote : "Character not found. Please try another one.";
        inputField.value = '';
    });

    const commentInput = document.getElementById('commentInput');
    const addCommentButton = document.getElementById('addCommentButton');
    const viewCommentsButton = document.getElementById('viewCommentsButton');
    const commentList = document.getElementById('commentList');


    let comments = [];
    let commentsVisible = false;

    function renderComments() {
        commentList.innerHTML = '';
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment;
            commentList.appendChild(li);
        });
    }

    addCommentButton.addEventListener('click', () => {
        const comment = commentInput.value.trim();
        if (comment) {
            comments.push(comment);
            commentInput.value = '';
            if (commentsVisible) {
                renderComments();
            }
        }
    });

    viewCommentsButton.addEventListener('click', () => {
        commentsVisible = !commentsVisible;
        if (commentsVisible) {
            commentList.style.display = 'block';
            renderComments();
            viewCommentsButton.textContent = 'Hide Comments';
        } else {
            commentList.style.display = 'none';
            viewCommentsButton.textContent = 'View Comments';
        }
    });

    commentList.style.display = 'none';
});
