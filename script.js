function showPostForm() {
    document.getElementById('post-form').style.display = 'block';
}

function publishPost() {
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const productImage = document.getElementById('product-image').files[0];

    const postsContainer = document.getElementById('posts-container');
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const reader = new FileReader();
    reader.onload = function(e) {
        postElement.innerHTML = `
            <h3>${productName}</h3>
            <p>Quantity: ${productQuantity}</p>
            <img src="${e.target.result}" alt="${productName}">
            <button onclick="startChat('${productName}')">Buy Now</button>
        `;
        postsContainer.appendChild(postElement);
    }
    reader.readAsDataURL(productImage);
    
    document.getElementById('post-form').style.display = 'none';
}

function startChat(productName) {
    const chatContainer = document.createElement('div');
    chatContainer.classList.add('chat-container');
    chatContainer.innerHTML = `
        <h3>Chat with Seller for ${productName}</h3>
        <div class="chat-box"></div>
        <input type="text" class="chat-input" placeholder="Type a message...">
        <button onclick="sendMessage(this)">Send</button>
    `;
    document.body.appendChild(chatContainer);
}

function sendMessage(button) {
    const chatContainer = button.parentElement;
    const chatBox = chatContainer.querySelector('.chat-box');
    const chatInput = chatContainer.querySelector('.chat-input');
    const message = chatInput.value;
    
    if (message.trim() !== "") {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatInput.value = '';
    }
}
