import tablasData from './pages/tabla';

function context(page) {
    console.log("Getting context for: " + page);
    let context = {
        title: "Pagina",
    }
    switch (page) {
        case "/index.html":
            context = { ...context, ...tablasData };
            break;
    }
    console.log("Context: ", JSON.stringify(context, null, 2));
    return context;
}


export default context;