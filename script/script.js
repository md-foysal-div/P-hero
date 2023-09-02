
const myBlog =() => {
  const setBlog = document.getElementById("blog-blog") 
  console.log(setBlog)
  const blogDiv = document.createElement("div")
  blogDiv.innerHTML=`
  <!-- Open the modal using ID.showModal() method -->
            <button class="btn btn-active btn-secondary" onclick="my_modal_5.showModal()">blog</button>
            <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
            <form method="dialog" class="modal-box bg-red-200">
             <ul>
             <li >1.  Discuss the scope of var, let, and const</li>
             <li>2. Tell us the use cases of null and undefined</li>
             <li>3.  What do you mean by REST API?</li>
             </ul>
             <div class="modal-action">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </div>
          </form>
          </dialog> 
  `
  setBlog.appendChild(blogDiv)
} 
myBlog()

const handelFunction = async ()=>{
    const allCategory = await fetch(` https://openapi.programming-hero.com/api/videos/categories`)
    const data = await allCategory.json()
    const mainData = await data.data
    const myId = document.getElementById('my-container')
    mainData.forEach(element => {
    const div = document.createElement('div')
     div.innerHTML=`
     <button onclick = 'allCategory(${element.category_id})' class="btn btn-secondary">${element.category}</button>
    `;
    myId.appendChild(div)
    });
}

const allCategory = async(categoryId)=>{
    const allCategoryData = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await allCategoryData.json()
    const allData = data.data
    // console.log(allData.length)
    const addedElementTwo = document.getElementById("find")
    addedElementTwo.innerHTML=''
    const addedElement = document.getElementById("added-div")
    addedElement.innerHTML= ''
    if(allData.length === 0){
        console.log('myElement')
        const divtwo = document.createElement('div')
        divtwo.innerHTML=`
        <h1 class="text-center text-3xl font-semibold">no data found !!!</h1>
        <img src="/Icon.png" class="mx-auto mt-10" >
        `
        addedElementTwo.appendChild(divtwo)
        
    }
    allData.forEach(myElement => {
      console.log(myElement)
        const mytime =parseInt( myElement.others.posted_date)
        const myMinute = mytime / 60;
        const totalMunit= myMinute % 60;
        
        const myHours = myMinute/60
        const minute = Math.floor(totalMunit) 
        const hours = Math.floor(myHours)
        
    // console.log(data.data.message)

    const div = document.createElement('div')
    div.innerHTML=`
    <div class="card  bg-base-100 shadow-xl px-6">
    <figure class="relative"><img src=${myElement.thumbnail} class="w-[352px] h-[150px]" />
     ${!myElement?.others?.posted_date? myElement.others.posted_date:`<div class=" rounded-sm py-[5px] px-[5px] bg-black absolute bottom-[5px] right-[20px]"><h3 class="text-white">${minute} hrs ${hours} min ago</h3></div>`}
    </figure>
    
    <div class="card-body p-0 py-6">
      <div class="wrapper flex gap-3">
        <div class="card-logo-img w-16" >
            <img src=${myElement?.authors[0]?.profile_picture} alt="" class="h-10 w-10 rounded-full">
          </div>
          <div class="card-text">
            <h2 class="card-title text-base">${myElement?.title}</h2>
            <p class="font-bold inline">${myElement?.authors[0]?.profile_name} </p> 
          ${!myElement?.authors[0]?.verified? myElement.authors[0].verified:"<img src='/varifid.avif' class='h-5 inline'>"} 
           <h3 class="font-semibold">${myElement?.others?.views}</h3>
          
          </div>
      </div>
    </div>
  </div>
    `


 
    addedElement.appendChild(div)
    })
}



allCategory('1000')
handelFunction()