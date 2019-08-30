// 1. Using this url, fetch data related to NASA’s picture of the day.
// 2. Display the returned object in the console.
// 3. Write a template function that will return a DOM component with
// the image, date, explanation, title, and copyright. Remember to use semantic HTML.
// 4. Write a function that will display the component on the DOM.


fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(nasa => nasa.json())
    .then(parsedNasa => {
        console.table(parsedNasa)
    })


    const nasaContainer = document.querySelector(".nasaList")


    function createNasaHTML (nasaObj){ //functions sole purpose is to create the foodHTML//
        /*
        "name": "Madi's Pasta",
        "category": "pasta",
        "ethnicity": "American",
        "id": 8,
        "restaurantId":1
        */

        //listen to recording 27:00//

        

        let nasaHTML = `
        <section>
       <img src ="${nasaObj.url}">
        <li>${nasaObj.date}</li>
        <li>${nasaObj.explanation}</li>
        <li>${nasaObj.title}</li>
        <li>${nasaObj.copyright}</li>
        </section>
        `
        return nasaHTML;
    }

    function addNasaToDom(htmlString) {
        nasaContainer.innerHTML += htmlString;
    }


    fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(nasa => nasa.json())
    .then(parsedNasa => {
            addNasaToDom(createNasaHTML(parsedNasa))
    })