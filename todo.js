let input = document.getElementById('add-task');
// console.log(input);
let btn = document.getElementById('add');
// console.log(btn);
btn.addEventListener('click', () => {
    const value = input.value;
    let complt = document.getElementsByClassName('completed')[0];
    // console.log(complt);
    let notcomplt = document.getElementsByClassName('notcompleted')[0];
    // console.log(notcomplt);
    
    let newli = document.createElement('li');
    let ncbtn = document.createElement("div");

    ncbtn.setAttribute("id", "check");
    let inp = document.createElement('input');
    inp.setAttribute('type', "checkbox");
    inp.setAttribute("id", "checkbox");
    ncbtn.appendChild(inp);
    // console.log(ncbtn);

    let ndbtn = document.createElement("button");
    ndbtn.setAttribute("class", "fa fa-trash del");

    if (value !== '') {
        let t= document.createElement('span');
        t.textContent=value;
        newli.appendChild(ndbtn);
        newli.appendChild(ncbtn);
        newli.appendChild(t); 
        notcomplt.appendChild(newli);
    }
    else {
        alert("Enter a valid input");
    }
    ncbtn.addEventListener('click', () => {
        let parent = ncbtn.parentElement;
        // console.log(parent);
        setTimeout(() => {
            parent.remove();
            complt.appendChild(parent);
            ncbtn.style.display = 'none';
        }, 500);
    })
    ndbtn.addEventListener('click', () => {
        let el = ndbtn.parentElement;
        el.remove();
    })
    input.value = '';
})