function deleteNote(noteId){
    // console.log("hello hi")
    fetch("/delete-note",{
        method:"POST",
        body: JSON.stringify({ noteId: noteId}),
    }).then((_res)=> {
        window.location.href = "/";

    });
}