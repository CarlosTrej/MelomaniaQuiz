 window.addEventListener("beforeunload", (e) => {
    if (true) {
        e.preventDefault();
        e.returnValue = ""; 
        return ""
    }
  }); 

