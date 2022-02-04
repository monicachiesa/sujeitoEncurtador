
//buscar links salvos
export async function getLinksSave(key) {
const myLinks = await localStorage.getItem(key);

let linksSaves = JSON.parse(myLinks) || [];

return linksSaves;
}



//salvar link 
export async function saveLink(key, newLink) {
let linksStored = await getLinksSave(key);

const hasLink = linksStored.some(link => link.id === newLink.id);

if(hasLink) {
    console.log('Esse link já existe na sua lista!');
    return;
}

linksStored.push(newLink); //Adicionar link no array
await localStorage.setItem(key, JSON.stringify(linksStored));
console.log("Link salvo com sucesso!")
}


//deletar link

export function deleteLink(links, id) {
let myLinks = links.filter(item => {
    return (item.id !== id)
})
localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));

return myLinks;
}