//1.variable benennen und mit elementbid holen
    let container = document.getElementById("container");

//2. Api fetchen
fetch("https://picsum.photos/v2/list")
    .then(response => response.json())
    .then(data => {
        console.log(data);

//3.foreach methode anwenden
        data.forEach(block => {
    //3.1.html tags kreieren mit .createElement
            let blockImg = document.createElement("img");
            let blockText = document.createElement("figcaption");
            let blockFigure = document.createElement("figure");
    //3.2. den Inhalt von blockImg und blockText festlegen durch holen der propertys aus dem array
            blockImg.src = block.download_url;
            blockText.textContent = block.author;
    //3.3. bei var blockFigure: 2 childs anhängen jeweils image und text 
            blockFigure.appendChild(blockImg);
            blockFigure.appendChild(blockText);
    //3.4. bei id container: als child die figure anhängen
            container.appendChild(blockFigure);
        });
        
    });