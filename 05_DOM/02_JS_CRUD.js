<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM2</title>
</head>
<body style="background-color: grey; color: white;">
    <ul class="language">
        <li>JavaScript</li>
    </ul>
</body>
<script>

//CREATE ElementS
    function addLanguage(lang) {
       const li = document.createElement('li')
       li.innerHTML =`${lang}`
       document.querySelector('.language').appendChild(li)
    }
    addLanguage("Java")
    addLanguage("Python")

//Another way but always prefer it 
    function addOptiLang(lang){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(lang))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLang("HTML")

//UPDATE Elements

    const changesecondLang = document.querySelector('li:nth-child(3)')
    const newli = document.createElement('li')
    newli.textContent ="CSS"
    changesecondLang.replaceWith(newli)

// Another way to Edit an Element
    const firstLang = document.querySelector('li:first-child')
    firstLang.outerHTML= '<li>MySQL</li>'


//REMOVE Elements
    const removeLast = document.querySelector('li:last-child')
    removeLast.remove();




//Ex;- Create/add Element
// const addE = document.createElement('li') //Element create
// const addOne = document.createTextNode("Python")//create Text
// addE.appendChild(addOne)//add create Text in empty createelement
// document.querySelector('.language').appendChild(addE)//display and store by using queryselector

</script>
</html>
