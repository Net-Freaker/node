require("dotenv").config();

///framework
const express = require("express");
const mongoose = require("mongoose");
//
const req = require("express/lib/request");
const res = require("express/lib/response");
//database
const database = require("./database/index");
//initialize express
const shapeAPI =express();
//configur
shapeAPI.use(express.json());
//Establish data base connection
mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connection Established!!!!"));
/*
Route        /
Description ->to get all books
Access      ->public
Parameter   none
Method      get
*/
shapeAPI.get("/",(req,res) =>{
    return res.json({books:database.books});
});
//ntg myan
/*
Route        /is
Description ->to get specific book
Access      ->public
Parameter   isbn
Method      get
*/
shapeAPI.get("/is/:isbn",(req,res) =>{
    const getSpecificbook = database.books.filter((book) =>book.ISBN===req.params.isbn);
    if(getSpecificbook.length === 0)
    {
        return res.json({error:'No book found for the isbn of $(req.params.isbn)'});
    }
    return res.json({book:getSpecificbook});
});

/*
Route        /c/
Description ->to get specific book based on catagory
Access      ->public
Parameter   catagory
Method      get
*/

shapeAPI.get("/c/:catagory",(req,res) =>{
    const getSpecificbooks = database.books.filter((book) =>
    book.catagory.includes(req.params.catagory)
    );
    if(getSpecificbooks.length === 0)
    {
        return res.json({error:'No book found for the catagory of $(req.params.catagory)'});
    }
    return res.json({book:getSpecificbooks});
});
/*
Route        /a
Description ->to get specific book based on author
Access      ->public
Parameter   author
Method      get
*/

shapeAPI.get("/a/:author",(req,res) =>{
    const getSpecificbookss = database.books.filter((book) =>
    book.authors.includes(req.params.author)
    );
    if(getSpecificbookss.length === 0)
    {
        return res.json({error:'No book found for the catagory of $(req.params.author)'});
    }
    return res.json({book:getSpecificbookss});
});

/*
Route        /author
Description ->to get all authors
Access      ->public
Parameter   none
Method      get
*/
shapeAPI.get("/author",(req,res) =>{
    return res.json({author:database.authors});
});
/*
Route        /author
Description ->to get specific author by his id
Access      ->public
Parameter   based on author
Method      get
*/
shapeAPI.get("/author/:idd",(req,res) =>{
    const getSpecificauthor = database.authors.filter((authrr) =>
    authrr.id == req.params.idd
    
    );
    if(getSpecificauthor.length === 0)
    {
        return res.json({error:'No author found for the catagory of $(req.params.idd)'});
    }
    return res.json({author:getSpecificauthor});
});
/*
Route        /auth/:isbn
Description ->to get specific author  based on book
Access      ->public
Parameter   book
Method      get
*/
shapeAPI.get("/auth/:isbn",(req,res) =>{
    const getSpecificauthors = database.authors.filter((authorr) =>
    authorr.books.includes(req.params.isbn)
    );
    if(getSpecificauthors.length === 0)
    {
        return res.json({error:'No book found for the catagory of $(req.params.isbn)'});
    }
    return res.json({book:getSpecificauthors});
});
/*
Route        /publicationss
Description ->to get all publications
Access      ->public
Parameter   none
Method      get
*/
shapeAPI.get("/publicationss",(req,res) =>{
    return res.json({publicationss:database.publications});
});
/*
Route        /publication/update/book
Description ->update/add new book to a publications
Access      ->public
Parameter   isbn
Method      Put */


shapeAPI.put("/publication/update/book/:isbn",(req,res) => {
    //update the publication
    database.publications.forEach((publication) => {
        if(publication.id===req.body.pubId){
            return publication.books.push(req.params.isbn);
        }
    });

//update the book
database.books.forEach((book) => {
    if(book.ISBN===req.params.isbn){
        book.publications=req.body.pubId;
        return;
    }

});
return res.json(
    {
        books:database.books,
        publications:database.publications,
        messege:"Succesfully updated",
    });

});
shapeAPI.listen(5000, () => console.log("server is running"));


