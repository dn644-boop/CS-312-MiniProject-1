let UserName = "Nameless"
let TimesResumeDownloaded = 0
let Deadline = new Date(2042-6-9)
let CurrentDate = new Date(1-1-1)
let Names = []
let Titles = []
let Contents = []
let Editing = false
let SelectedRow = 0

function RecordPost(){
    var NameInput = document.getElementById("name").value
    var TitleInput = document.getElementById("title").value
    var ContentInput = document.getElementById("content").value
    if (NameInput != "" && TitleInput != "" && ContentInput != "") {
        if (Editing == false) {
            Names.push(NameInput)
            Titles.push(TitleInput)
            Contents.push(ContentInput)
            var Table = document.getElementById("skill-table")
            var NextRow = Table.insertRow()
            var CellOne = NextRow.insertCell(0)
            var CellTwo = NextRow.insertCell(1)
            var CellThree = NextRow.insertCell(2)
            var CellFour = NextRow.insertCell(3)
            var CellFive = NextRow.insertCell(4)
            var CellSix = NextRow.insertCell(5)

            var TableLength = $("#skill-table tr").length;

            CellOne.textContent = Names[TableLength - 2]
            CellTwo.textContent = Titles[TableLength - 2]
            CellThree.textContent = Contents[TableLength - 2]

            CellFour.textContent = new Date(Date.now())

            var EditButton = document.createElement("button")
            EditButton.textContent = "Edit"
            EditButton.type = "button"
            EditButton.addEventListener("click", function(){
                SelectedRow = this.parentNode.parentNode
                alert("Edit Post #" + SelectedRow.rowIndex + " by typing in the new information in the input fields below and pressing submit")
                Editing = true
            })
            CellFive.appendChild(EditButton)
    
            var DeleteButton = document.createElement("button")
            DeleteButton.textContent = "Delete"
            DeleteButton.type = "button"
            DeleteButton.addEventListener("click", function(){
                SelectedRow = this.parentNode.parentNode
                alert("Deleted Row " + SelectedRow.rowIndex)
                Names.splice(SelectedRow.rowIndex - 1, 1)
                Titles.splice(SelectedRow.rowIndex - 1, 1)
                Contents.splice(SelectedRow.rowIndex - 1, 1)
                SelectedRow.remove()
            })
            CellSix.appendChild(DeleteButton)
        }
        else
        {
            Names[SelectedRow.rowIndex - 1] = NameInput
            Titles[SelectedRow.rowIndex - 1] = TitleInput
            Contents[SelectedRow.rowIndex - 1] = ContentInput
            SelectedRow.firstElementChild.textContent = Names[SelectedRow.rowIndex - 1]
            SelectedRow.firstElementChild.nextElementSibling.textContent = Titles[SelectedRow.rowIndex - 1]
            SelectedRow.firstElementChild.nextElementSibling.nextElementSibling.textContent = Contents[SelectedRow.rowIndex - 1]
            SelectedRow.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent = new Date(Date.now())
            Editing = false
            alert("Successfully Edited Post #" + SelectedRow.rowIndex)
        }
    }
    else
    {
        alert("You forgot to fill something in silly!")
    }
}