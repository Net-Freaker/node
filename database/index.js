const books = [{
    ISBN:"12234",
    title:"NetFreaker",
    authors:["1","2"],
    language:"en",
    pubDate:"17/2/2022",
    numOfPage:"300",
    catagory:["fiction","Programming","tech","web dev"],
    publications:1,
    
    
},
{
    ISBN:"1223455",
    title:"NetFreaker_2",
    authors:["1","2"],
    language:"en",
    pubDate:"17/2/2022",
    numOfPage:"300",
    catagory:["fiction","Programming","tech","web dev"],
    publications:1,
},
];
const authors=[{
    id:1,
    name:"hanu",
    books:"123445onetwo"
},
{
    id:2,
    name:"ramavath",
    books:"123445onetwo"
},
];
const publications =[{
    id:1,
    name:"published by netfreaker",
    books:"123445onetwo"
},
{
    id:2,
    name:"published by netfreaker for secondtime",
    books:[]
},
];

module.exports ={books,authors,publications};