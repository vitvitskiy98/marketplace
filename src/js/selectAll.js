// selectall
const selectAll = document.getElementById("choose");
const chooseItems = document.querySelectorAll(".choose-checkbox");

 function selectAllItems() {
    const isChecked = selectAll.checked;
        for (let i =0; i < chooseItems.length; i++) {
            chooseItems[i].checked = isChecked;
        }
    
}
selectAll.addEventListener('click', selectAllItems);


for(let product of document.querySelectorAll(".chosen-product")){
    product.addEventListener("click",function(event){
      let target = event.target;
      if(target.closest(".delete")){
        this.classList.add("display-none")
      }  
    })
  }
