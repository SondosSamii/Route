var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");

var submitBtn = document.getElementById("submitBtn");
var deleteBtn = document.getElementById("deleteBtn");

var nameMsg, urlMsg;
var bookmarks;

if (localStorage.getItem("bookmarks") == null) {
    bookmarks = [];
} else {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    displayBookmarks();
}

// submit();

submitBtn.onclick = function () {
    addBookmark();
    displayBookmarks();
}

function addBookmark() {
    var bookmark = {
        name: siteName.value,
        url: siteURL.value
    }
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function displayBookmarks() {
    var cols = "";
    for (var i = 0; i < bookmarks.length; i++) {
        cols +=
            `<div class="bookmark">
                <div class="container m-3 p-4">
                    <div class="row justify-content-center">
                        <h2 class="mr-3"> ` + bookmarks[i].name + ` </h2>
                        <button class="btn btn-primary mr-3"> <a href="http://` + bookmarks[i].url + `"> Visit </a> </button>
                        <button class="btn btn-danger" onclick="deleteBookmark(` + i + `)" id="deleteBtn"> Delete </button>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("addBookmark").innerHTML = cols;
}

function deleteBookmark(id) {
    bookmarks.splice(id, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayBookmarks();
}

function checkName(name) {
    if (name == null) {
        return false;
    }
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].name === name)
            return false;
    }
    return true;
}

function checkUrl(url) {
    if (url == null) {
        return false;
    }
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url === url)
            return false;
    }
    return true;
}

function showNameErr() {
    nameMsg = `<p class="alert alert-danger w-50 mx-auto my-3"> Name is required </p>`
    document.getElementById("nameErr").innerHTML = nameMsg;
}

function showUrlErr() {
    urlMsg = `<p class="alert alert-danger w-50 mx-auto my-3"> URL is
    required </p>`;
    document.getElementById("urlErr").innerHTML = urlMsg;
}


function submit() {
    if (checkName(name) && checkUrl(url)) {
        displayBookmarks();
    } else {
        if (!checkName(name)) {
            showNameErr();
        }
        if (!checkUrl(url)) {
            showUrlErr();
        }
        else {
            showNameErr();
            showUrlErr();
        }
    }
}