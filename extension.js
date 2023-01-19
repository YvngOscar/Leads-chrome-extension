let myLeads=[]
let oldLeads=[]
const inputEl=document.getElementById('input-el')
const saveBtn =document.getElementById("save-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete")

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
console.log(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
 // console.log('There are values in local storage.')
  myLeads=leadsFromLocalStorage
  render(myLeads)
}
function render(leads){
  let listItems=" "
   for (let i=0;i<myLeads.length;i++){
    listItems+=
     `<li> 
         <a target='_blank' href="${leads[i]}">
          ${leads[i]}
         <a/>
     </li>`
   }
  //console.log(listItems)
 ulEl.innerHTML=listItems
}

deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads=[]
  render(myLeads)
})


saveBtn.addEventListener("click",function(){
  myLeads.push(inputEl.value)
  inputEl.value=""
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
})

