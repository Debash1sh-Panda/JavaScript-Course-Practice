<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
</head>
<!--
    --CONTENTS--
    *querySelector
    *children
    *innerHTML
    *firstElementChild
    *lastElementChild
    *parentElement
    *nextElementSibling
    *childNodes
    *createElement
    *className
    *id
    *setAttribute
    *createTextNode
    *appendChild
-->
<body style="background-color: grey; color: #000;">
    <div class="parent">
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>
</body>
<script>
       const parent = document.querySelector('.parent') 
    //    console.log(parent);
    //    console.log(parent.children);//we find HTMLCollection
    //    console.log(parent.children[1]);//<div class="day">Tuesday</div>
    //    console.log(parent.children[1].innerHTML);//Tuesday

    //    for (let i= 0; i< parent.children.length; i++) {
    //     console.log(parent.children[i].innerHTML);// it will print all days
    //    }

       parent.children[1].style.color = "blue";
    //    console.log(parent.firstElementChild);// <div class="day">Monday</div>
    //    console.log(parent.firstElementChild.innerHTML);// Monday
    //    console.log(parent.lastElementChild);// <div class="day">Thursday</div>
    //    console.log(parent.lastElementChild.innerHTML='debasish');// it change to debasish

      const dayone = document.querySelector('.day')
    //   console.log(dayone);// <div class="day">Monday</div>
    //   console.log(dayone.parentElement);// it will give parent element <div class="parent">…</div>
    //   console.log(dayone.nextElementSibling);// <div class="day" style="color: blue;">Tuesday</div>

    console.log(parent.childNodes);// very important

       
    // Creat an Element and display it on Console
    const div = document.createElement('div')
    // console.log(div);
    div.className = "myClass"
    div.id = "myId"
    div.setAttribute("title", "generated title")
    div.style.color = "green"
    // div.innerHTML = "Dear Debasish"
    const addText = document.createTextNode('Dear Debasish')
    div.appendChild(addText)//used to attach

    document.body.appendChild(div)//used to show on display
</script>
</html>
