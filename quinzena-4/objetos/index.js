let containerDePosts = document.getElementById("container-de-posts");
let post = {};
let tituloPost;
let autorPost;
let conteudoPost;
let imagemPost;

const criarObjeto = () => {
    
    tituloPost = document.getElementById("titulo-post");
    autorPost = document.getElementById("autor-post");
    conteudoPost = document.getElementById("conteudo-post");
    imagemPost = document.getElementById("imagem-post");

    if(tituloPost.value === "" || autorPost.value === "" || conteudoPost.value === "") {
        alert("Por favor, preencha todos os campos");
    } else {
        post = {
            titulo: tituloPost.value,
            autor: autorPost.value,
            conteudo: conteudoPost.value,
            imagem: imagemPost.value,
        };
    }
}

let arrayDePosts = [];

const adicionarPostNoArray = () => {
    const stringDoLocalStorage = localStorage.getItem("item");
    arrayDePosts = JSON.parse(stringDoLocalStorage);
    
    if(tituloPost.value === "" || autorPost.value === "" || conteudoPost.value === "") {
        
    } else {
        arrayDePosts.push(post);
    
        tituloPost.value = "";
        autorPost.value = "";
        conteudoPost.value = "";
        imagemPost.value = "";
    }
}

const salvarNoLocalStorage = () => {
    const string = JSON.stringify(arrayDePosts);
    localStorage.setItem("item", string );
    console.log(string);
}

const adicionarPostsNoContainer = () => {
   
    const stringDoLocalStorage = localStorage.getItem("item");
    arrayDePosts = JSON.parse(stringDoLocalStorage);
    

    containerDePosts.innerHTML= "";


    for (let post of arrayDePosts) {
      
        if (post.imagem === "") {
           
            containerDePosts.innerHTML+= `<h1 class="titulo">${post.titulo}</h1>
            <p class="autor">${post.autor}</p>
            <p class="conteudo">${post.conteudo}</p>
            <br>`;

        }  else {
           
            containerDePosts.innerHTML+= `<h1 class="titulo">${post.titulo}</h1>
            <p class="autor">${post.autor}</p>
            <img src="${post.imagem}">
            <p class="conteudo">${post.conteudo}</p>
            <br>`;

        }
    }
}
