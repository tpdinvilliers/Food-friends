var helloworld ="hello world"
console.log(helloworld);

var recipeList = [["pesto pasta", "https://www.google.com"],
 ["chicken pasta", "https://www.facebook.com"], 
 ["easy risotto", "https://www.instagram.com"], 
 ["Leek and potato soup", "https://www.youtube.com"]]

topButton= document.getElementById("topButton")
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function searchHeaderText() {
    var input 
    const searchResults = [];
    input = document.getElementById("searchheader").value.toLowerCase().split(' ');
   // console.log(input);
    for (k=0; k < input.length; k++){
       // console.log("searching "+ input[k]); 
        for (i=0; i < recipeList.length; i++){
            var words = recipeList[i][0].split(' ');
            for (j=0; j<words.length; j++){
                if (words[j] == input[k]){
                    if (searchResults.includes(recipeList[i])){}
                    else{
                    searchResults.push(recipeList[i]);
                    }
                } 
            }
        }
    }
    if (searchResults.length ==0 ){
        console.log("There were no results for your seach!")
    }
    else{
      console.log(searchResults.sort());
    }
    displayHeaderSearchResults(searchResults)
}

function searchSubmit() {
    var input 
    const searchResults = [];
    input = document.getElementById("search").value.toLowerCase().split(' ');
    console.log(input);
    for (k=0; k < input.length; k++){
        console.log("searching "+ input[k]); 
        for (i=0; i < recipeList.length; i++){
            var words = recipeList[i][0].split(' ');
            for (j=0; j<words.length; j++){
                if (words[j] == input[k]){
                    if (searchResults.includes(recipeList[i])){}
                    else{
                    searchResults.push(recipeList[i]);
                    }
                } 
            }
        }
    }
    //if (searchResults.length ==0 ){
      //  console.log("There were no results for your seach!")
    //}
    //else{
     console.log(searchResults.sort());
    //}
    displaySearchResults(searchResults)

};

const displayHeaderSearchResults = (searchResults) => {
    const resultsList = document.getElementById("resultsListHeader");
    console.log("search results are " + searchResults)
    const htmlString = searchResults.map((result) => {
        return `<li class="result"> <a href=${result[1]}>${result[0]}</a></li> 
        `;
    })
    .join(``)

    console.log(htmlString);
    if (searchResults.length === 0 ){
        //resultsListHeader.innerHTML = `<p>There were no results for your search</p>`
    }
    else {
    resultsListHeader.innerHTML = htmlString;
    }
}


const displaySearchResults = (searchResults) => {
    const resultsList = document.getElementById("resultsList");
    console.log("search results are " + searchResults)
    const htmlString = searchResults.map((result) => {
        return `<li class="result"> <a href=${result[1]}>${result[0]}</a></li> 
        `;
    })
    .join(``)

    console.log(htmlString);
    if (searchResults.length === 0 ){
        resultsList.innerHTML = `<p>There were no results for your search</p>`
    }
    else {
    resultsList.innerHTML = htmlString;
    }
}


