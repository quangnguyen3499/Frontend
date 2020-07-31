var toDoList = [
    "take a shower",
    "go to bed",
    "review job"
];
var addBtn = document.getElementById("add_btn");
addBtn.addEventListener('add', addItem);

function addItem() {
    var input = document.getElementById("new_item");
    var newItem = input.value;
    toDoList.push(newItem);
    render();
    input.value = '';
}

function render() {

}