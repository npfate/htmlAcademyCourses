var chat = document.querySelector('.chat-form');
var chatInput = chat.querySelector('.chat-form-input');
var chatContent = document.querySelector('.chat-content');

var template = document.querySelector('#message-template').content;
var messageTemplate = template.querySelector('.chat-message');

chat.addEventListener('submit', function(e) {
  e.preventDefault();
  
  var inputText = chatInput.value;
  var messageText = messageTemplate.querySelector('.chat-message-text');
  messageText.textContent = inputText;
  
  var newMessage = messageTemplate.cloneNode(true);
  delMessage(newMessage);
  chatContent.appendChild(newMessage);
  chatInput.value = '';  
});

var delMessage = function(message) {
  var delButton = message.querySelector('.chat-message-button');
  delButton.addEventListener('click', function() {
    chatContent.removeChild(message);
  });
}


/*

var chat = document.querySelector('.chat-form');
var chatInput = chat.querySelector('.chat-form-input');
var chatContent = document.querySelector('.chat-content');
var chatContentChildren = chatContent.children;

var template = document.querySelector('#message-template').content;
var messageTemplate = template.querySelector('.chat-message');

chat.addEventListener('submit', function(e) {
  e.preventDefault();
  
  var inputText = chatInput.value;
  var messageText = messageTemplate.querySelector('.chat-message-text');
  messageText.textContent = inputText;
  
  var newMessage = messageTemplate.cloneNode(true);
  delMessage(newMessage);
  chatContent.appendChild(newMessage);
  chatInput.value = '';  
});

var delMessage = function(message) {
  var delButton = message.querySelector('.chat-message-button');
  delButton.addEventListener('click', function() {
    message.remove();
  });
}

for (var i = 0; i < chatContentChildren.length; i++) {
  delMessage(chatContentChildren[i]);
}

*/
