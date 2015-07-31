$(document).ready(function() {
  //Set main page as a default page
  window.location.hash = 'main';

  localStorage.clear();
  
  // Fetching existing notes
  populateExistingNotes();

  // Add a note
  bindNoteCreation();
});

function bindNoteCreation()
{
  $("#notes-form").submit(function() {
    if ($("#input-note").val() != "" ) {
      var newNoteIndex = localStorage.length;
      localStorage.setItem("note" + newNoteIndex, $("#input-note").val());

      populateExistingNotes();
      
      $("#input-note").val("");
    }   
    return false;
  });
}

function populateExistingNotes()
{
  $("#notes").empty();

  for(var i = localStorage.length - 1; i >= 0 ; i--)
    $("#notes").append("<li class='note"+i+"'><a data-id='note"+i+"'>" + localStorage.getItem('note'+i));

  $("#notes").listview().listview('refresh');

  bindNoteItems();
}

function bindNoteItems()
{
  $("#notes a").unbind().click(function () {
    $(this).click(function(){
      var noteId = $(this).data('id');
      showNote(noteId);
    });
  });
}

function showNote(noteId)
{
  var noteContent = localStorage.getItem(noteId);
  if (noteContent === undefined)
    noteContent = "Not found";

  var $editor = $("<div contenteditable=true>"+noteContent+"</div>");
  $editor.attr('data-id', noteId);
  $("#details").html($editor);

  bindNoteUpdate($editor);

  $.mobile.changePage("#note");
}

function bindNoteUpdate($editor)
{
  $editor.blur(function() {
    var noteId = $(this).data('id');

    saveNoteUpdate(noteId, $(this).html());
  });
}

function saveNoteUpdate(noteId, content){
  if (content.length === 0)
    alert('Please enter your note');
  else
  {
    localStorage.setItem(noteId, content);
    populateExistingNotes();
  }
}
