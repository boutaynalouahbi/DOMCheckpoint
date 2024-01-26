let productsSection=document.getElementById("ListOfProducts");
console.log(productsSection.innerHTML)
let Categories=[
    "Hands",
    "Face",
    "Body",
    "Hair"
]
let i=0;
let products=[
    {    
        id:++i,
        Nom:"Quis Eleifend",
        Description:"Enim tortor at auctor urna nunc id. Quis varius quam quisque id diam vel. Non arcu risus quis varius. Quis eleifend quam adipiscing vitae. Habitant morbi tristique senectus et netus et malesuada fames ac. Blandit cursus risus at ultrices mi. Faucibus pulvinar elementum integer enim neque volutpat. Pulvinar sapien et ligula ullamcorper. Feugiat pretium nibh ipsum consequat nisl vel. Netus et malesuada fames ac turpis egestas integer eget. Dolor morbi non arcu risus quis.",
        Prix:165.28,
        Categories:Categories[0],
        img:"imgs/Quis Eleifend.png",
        Like:false,
        Quantité:10,
        cart:false
    },
    {
        id:++i,
        Nom:"Givenchy Parfum",
        Description:"Nunc non blandit massa enim nec dui nunc. Ornare quam viverra orci sagittis. Eu non diam phasellus vestibulum lorem sed risus ultricies. Sem viverra aliquet eget sit. Tincidunt ornare massa eget egestas purus. Arcu cursus euismod quis viverra nibh. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim.",
        Prix:253.42,
        Categories:Categories[2],
        img:"imgs/Givenchy Parfum.png",
        Like:false,
        Quantité:20,
        cart:false
    },
    {
        id:++i,
        Nom:"Maecenas Viverra",
        Description:"At lectus urna duis convallis convallis tellus id. Tellus in metus vulputate eu scelerisque felis. Ut tellus elementum sagittis vitae et leo duis ut diam.",
        Prix:165.28,
        Categories:Categories[3],
        img:"imgs/Maecenas Viverra.png",
        Like:false,
        Quantité:5,
        cart:false
    },
    {
        id:++i,
        Nom:"Neque Egestas Congue",
        Description:"Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Duis at tellus at urna condimentum mattis pellentesque id nibh. Quisque non tellus orci ac auctor augue mauris. Eget nullam non nisi est sit.",
        Prix:180,
        Categories:Categories[1],
        img:"imgs/Neque Egestas Congue.png",
        Like:false,
        Quantité:6,
        cart:false
    }
];
let likes=[];
/* let container=document.createElement('div');
container.setAttribute('class','d-flex flex-column align-items-center ')
let link=document.createElement('a');
link.href='#';
let img=document.createElement('img');
img.src="imgs/Quis Eleifend.png"
img.style.width="200px",
img.style.height="300px"
link.appendChild(img)
container.appendChild(link)
let nom=document.createElement('a')
nom.href="#"
nom.innerText="Quis Eleifend";
nom.setAttribute('class','pt-2 text-decoration-none text-dark h5');
container.appendChild(nom);
let prix=document.createElement("h6")
prix.innerText=165.28+ " MAD";
prix.style.color="#f8906d";
prix.setAttribute('class','pt-2')
container.appendChild(prix );
let categorie=document.createElement('p');
categorie.innerText="Categories : Hands";
container.appendChild(categorie);
productsSection.appendChild(container)
console.log(container) */

for (const product of products) {
    let container=document.createElement('div');
    container.setAttribute('class','d-flex flex-column align-items-center ms-4')
    let link=document.createElement('a');
    link.href='#';
    let img=document.createElement('img');
    img.src=product.img;
    img.style.width="200px";
    img.style.height="300px";
    link.appendChild(img);
    container.appendChild(link)
    let nom=document.createElement('a')
    nom.href="#"
    nom.innerText=product.Nom
    nom.setAttribute('class','pt-2 text-decoration-none text-dark h5');
    container.appendChild(nom);
    let prix=document.createElement("h6")
    prix.innerText=product.Prix+ " MAD";
    prix.style.color="#f8906d";
    prix.setAttribute('class','pt-2')
    container.appendChild(prix );
    let categorie=document.createElement('p');
    categorie.innerText="Categories: " +product.Categories;
    container.appendChild(categorie);
    let div=document.createElement("div");
    div.setAttribute('class','d-flex ')
    let boutton=document.createElement('button');
    boutton.innerText='Add to cart';
    boutton.setAttribute('class','btn btn-secondary');
    boutton.setAttribute('id',product.id);
    let a=document.createElement('a');
    a.setAttribute('href','#like'+product.id);
    a.setAttribute('class','align-self-end btnheart text-decoration-none');
    a.setAttribute('id','like'+product.id);
    let i=document.createElement('i');
    i.setAttribute('class','fa-regular fa-heart fs-3  ms-2 p-0');
    a.appendChild(i);
    div.appendChild(boutton);
    div.appendChild(a);
    container.appendChild(div);
    productsSection.appendChild(container)
}
let counters=document.getElementsByClassName('counter');
for (const product of products) {
localStorage.setItem('cart_' + product.id, JSON.stringify({
    productid: product.id,
    nbr: 0
}));
}

for (const product of products) {
    console.log(product.Quantité)
    let cart=[]
    let boutton=document.getElementById(product.id);
    function increment(id,quantity,price) {
        let input = document.getElementById("quantity"+id);
        console.log(input)
        if( parseInt(input.value) <=quantity){
        input.value = parseInt(input.value) + 1;
        let Subtotal = document.getElementById("Subtotal"+id);
        var subtotal = parseFloat(Subtotal.innerHTML);
        var priceValue = parseFloat(price);
        var result = (subtotal + priceValue).toFixed(3);
        Subtotal.innerHTML = result + " MAD";
          } 
      }
      function decrement(id,price) {
        let input = document.getElementById("quantity"+id);
        if(input.value!=null)
        if( parseInt(input.value) >=2){
        input.value = parseInt(input.value) - 1;
        let Subtotal = document.getElementById("Subtotal"+id);
        var subtotal = parseFloat(Subtotal.innerHTML);
        var priceValue = parseFloat(price);
        var result = (subtotal - priceValue).toFixed(3);
        Subtotal.innerHTML = result + " MAD";
         }
        
      }
      
     
    if(product.cart==true){
        boutton.setAttribute('disabled', 'disabled');
        }
        else{
            boutton.addEventListener('mousedown',()=>{
                for (const count of counters) {
                    count.innerText=Number(count.innerText)+1;
                }
                
                cart.push({ productid: product.id,
                    nbr: 1})
                boutton.setAttribute('disabled', 'disabled');
                for (const c of  cart) {
                    let tr=document.createElement('tr');
                    let tbody=document.getElementById("listcart");
                    let td1=document.createElement('td');
                    td1.setAttribute("class","d-flex align-items-center")
                    let td2=document.createElement('td');
                    let divcounter=document.createElement('div');
                    divcounter.setAttribute('class','input-group mb-3 text-center');
                    let  bouttonP=document.createElement('button');
                    bouttonP.setAttribute('class','btn btn-outline-secondary');
                    bouttonP.setAttribute('type','button');
                    bouttonP.innerText="+";
                    divcounter.appendChild(bouttonP);

                    let input=document.createElement('input');
                    input.setAttribute("value","1");
                    input.setAttribute("type","number");
                    input.setAttribute("id","quantity"+product.id);
                    input.setAttribute("class","form-control form-control-sm");
                    input.setAttribute("aria-label","counter");
                    input.setAttribute("min","1");
                    
                    let  bouttonM=document.createElement('button');
                    bouttonM.setAttribute('class','btn btn-outline-secondary');
                    bouttonM.setAttribute('type','button');
                    bouttonM.innerText="-";
                    console.log(product.Quantité)
                    divcounter.appendChild(bouttonM);
                    let td3=document.createElement('td');
                    let p=document.createElement('p');
                    
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    let img=document.createElement('img');
                    let div=document.createElement('div');
                    div.setAttribute("class","ms-2 ")
                    let name=document.createElement('h6');
                    let price=document.createElement('p');
                    
                    for (const product of products) {
                        if(product.id==c.productid){
                            img.src=product.img;
                            img.style.width='100px';
                            img.style.height='100px';
                            name.innerText=product.Nom;
                            price.innerText=product.Prix+" MAD";
                            div.appendChild(name);
                            div.appendChild(price);
                            td1.appendChild(img);
                            td1.appendChild(div);
                            input.setAttribute("max",product.Quantité);
                            console.log(product.id,product.Quantité)
                            bouttonP.setAttribute('onclick',`increment(${product.id},${product.Quantité},${product.Prix})`);
                            bouttonM.setAttribute('onclick',`decrement(${product.id},${product.Prix})`);
                            divcounter.appendChild(bouttonP);
                            divcounter.appendChild(input);
                            divcounter.appendChild(bouttonM);
                            td2.appendChild(divcounter);
                            p.innerText=product.Prix +" MAD";
                            p.setAttribute("id","Subtotal"+product.id)
                            td3.appendChild(p)
                            
                        }
                    }

                    tbody.appendChild(tr)
                }
            })
        }
    
}
let counterlikes=document.getElementsByClassName("counterlikes");

for (const product of products) {
    let like=document.getElementById("like"+product.id);
  
    like.addEventListener('mousedown',()=>{
    if(product.Like==false){
        like.setAttribute('class','align-self-end btnheartactive');
       
            for (const i in counterlikes) {
                if(parseInt(counterlikes[i].innerText)>=0){
                    counterlikes[i].innerText=parseInt(counterlikes[i].innerHTML)+1;
                console.log("TEST"+counterlikes[i])
            }}
        product.Like=true;
        like.firstChild.setAttribute('class','fa-solid fa-heart fs-3  ms-2 p-0');
        
    }else{
        
        like.setAttribute('class','align-self-end btnheart');
       
            for (const i in counterlikes) {
                if(parseInt(counterlikes[i].innerText)>=0){
                    counterlikes[i].innerText=parseInt(counterlikes[i].innerHTML)-1;
                console.log("TEST"+counterlikes[i])
            }
      
            }
        
            like.firstChild.setAttribute('class','fa-regular fa-heart fs-3  ms-2 p-0');

            product.Like=false;
    }
    });

}