function checkStatus() {
    const input = document.getElementById("tokenInput").value || "123";
    const token = parseInt(input);
    const current = 15;
  
    document.getElementById("tokenNumber").innerText = token;
    document.getElementById("position").innerText = current === token ? 1 : Math.abs(token - current) + 1;
    document.getElementById("ahead").innerText = current === token ? 0 : Math.abs(token - current);
    document.getElementById("wait").innerText = current === token ? "5 min" : (Math.abs(token - current) * 5) + " min";
  
    const queue = document.getElementById("queue");
    queue.innerHTML = "";
  
    for (let i = current; i <= current + 9; i++) {
      const box = document.createElement("div");
      box.innerText = i;
  
      if (i === token) {
        box.classList.add("you");
      } else if (i === current) {
        box.classList.add("current");
      } else if (i === current + 1 || i === current + 2) {
        box.classList.add("coming");
      }
  
      queue.appendChild(box);
    }
  }
  