const images=document.querySelectorAll(".img")
        const prev=document.querySelector("#prev")
        const next=document.querySelector("#next")
        const name= document.querySelector("#name")
        let index=0
        const imgData =[{
            url:"images/pngwing.com.png",
            name:"Fierce Fury"
        },{
            url:"images/pngwing.com(3).png",
            name:"Magical Mascot"
        },
        {
            url:"images/pngwing.com (5).png",
            name:"Fierce Archer"
        },{
            url:"images/pngwing.com (2).png",
            name:"Iron Blades"
        },
        {
            url:"images/pngwing.com (4).png",
            name:"Riana Axe"
        },
        {
            url:"images/pngwing.com (1).png",
            name:"Dady Wolfy"
        },]

        const NextImage =()=>{
            index=(index+1)%imgData.length
            images.forEach((image)=>{
                image.src=imgData[index].url
            })
            name.textContent=imgData[index].name

        }
        const PreviousImage=()=>{
            if(index>0){
                index=index-1
            }else{
                index=imgData.length-1
            }
            images.forEach((image)=>{
                image.src=imgData[index].url
            })
            name.textContent=imgData[index].name
        }

        prev.addEventListener("mouseover",()=>{
            images[0].style.transform="scale(1.1)"
        })
        
        prev.addEventListener("mouseout",()=>{
            images[0].style.transform="scale(1)"
        })
        next.addEventListener("mouseover",()=>{
            images[0].style.transform="scale(1.1)"
        })
        
        next.addEventListener("mouseout",()=>{
            images[0].style.transform="scale(1)"
        })
        prev.addEventListener("click",PreviousImage);
        next.addEventListener("click",NextImage);