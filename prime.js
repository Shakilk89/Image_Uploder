const DragArea = document.querySelector(".AppBody"),
      DragText = DragArea.querySelector("h2"),
      button = DragArea.querySelector("button"),
      input = DragArea.querySelector("input");

let  Myfile;

      button.addEventListener("click", ()=>{
        input.click()
      })

      input.addEventListener("change", function(){
        Myfile = this.files[0];
        DragArea.classList.add("active");
        ShowMe()
      })

      DragArea.addEventListener("dragover", (event)=> {
        event.preventDefault();
        DragArea.classList.add("active");
        DragText.textContent = "Release to Upload File";
      })

      DragArea.addEventListener("dragleave", ()=> {
        DragArea.classList.remove("active");
        DragText.textContent = "Drag & Drop";
      })

      DragArea.addEventListener("drop", (event)=> {
        event.preventDefault();
        Myfile = event.dataTransfer.files[0];
        ShowMe()
      })

function ShowMe(){
    let filetype = Myfile.type;
    let ValidEx = ["image/jpeg", "image/jpg", "image/png"];

    if(ValidEx.includes(filetype)){
        let fileReader = new FileReader();
            fileReader.onload = ()=> {
                let imgUrl = fileReader.result;
                let img = `<img src="${imgUrl}" alt="">`

                DragArea.innerHTML = img
            }

            fileReader.readAsDataURL(Myfile);
    }
    else {
        alert("This File Is Not Valid");
        DragArea.classList.remove("active");
        DragText.textContent = "Drag & Drop";
    }
}