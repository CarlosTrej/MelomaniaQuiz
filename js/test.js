 addEventListener("beforeunload", (e) => {
    e.preventDefault();
    return e.returnValue = "";
  }); 
