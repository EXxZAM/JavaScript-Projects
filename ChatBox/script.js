const sendBtn = document.getElementById("sendBtn");
const entryInput = document.getElementById("messageInput");
const ulList =  document.getElementById("messageList") ;
sendBtn.addEventListener("click", () => {
 
  var li = document.createElement("LI");
  
  li.innerHTML = `<div class="sent">
  <p>
    ${entryInput.value}
  </p>
</div>`;
 

 ulList.appendChild(li);
});
