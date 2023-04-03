const contrast = {
    usuario: [
        {
            username: 'sandroluiz',
        }
    ],
     posts:[
        {
            id:1,
            owner:'sandroluiz',
            content: 'Meu Primeiro Post'
        }
     ]
};
//Criar posts
function criarPost(dados){
    contrast.posts.push({
        id: contrast.posts.length + 1,
        owner: dados.owner,
        content:dados.content
    });
}criarPost({owner:'sandroluiz', content: 'terceiro post'});
criarPost({owner:'sandroluiz', content: 'segundo post'});
console.log(contrast.posts) [{owner:'sandroluiz', content: 'Meu segundo posts'}];

//Read
function pegarPosts(){
    return contrast.posts;
}
console.log(pegarPosts())

//Atualizacao
function atualizaOsPosts(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegarPosts().find((posts) => {
        return post.id ===id;
    });
    console.log(postQueVaiSerAtualizado)

}
atualizaOsPosts(1, 'Novo conteudo do post')
console.log(pegarPosts())

//Deletar
function apagarPosts(id) {
    const listaDePostsAtuali = pegarPosts().find((postAtual) => {
        return postAtual.id !== id;
    })
    contrast.posts = listaDePostsAtuali;
}
apagarPosts(1);
