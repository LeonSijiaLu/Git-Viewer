function getSearchResult() {
    if (localStorage.getItem('search_res')) {
        var res = JSON.parse(localStorage.getItem("search_res"));
        // localStorage.removeItem("search_res");
        return res;
    }
}

function redirect_User(owner, repo, route) {
    localStorage.removeItem("search_owner");
    localStorage.removeItem("search_repo");
    localStorage.setItem("search_owner", JSON.stringify(owner));
    localStorage.setItem("search_repo", JSON.stringify(repo));
    if (window.location.pathname != route) {
        window.location.href = route;
    }
}

function searchToggle(obj, evt) {
    var container = $(obj).closest('.search-wrapper');
    if (!container.hasClass('active')) {
        container.addClass('active');
        evt.preventDefault();
    } else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
    }
}

function redirect(value, route) {
    localStorage.removeItem("search_res");
    localStorage.setItem("search_res", JSON.stringify(value));
    if (window.location.pathname != route) {
        window.location.href = route;
    }
}

function getRepoResult() {
    var res = [];
    if (localStorage.getItem('search_owner') && localStorage.getItem('search_repo')) {
        var owner = JSON.parse(localStorage.getItem("search_owner"));
        var repo = JSON.parse(localStorage.getItem("search_repo"));
        res.push(owner);
        res.push(repo);
        return res;
    }
}

function redirect_to_Git(url) {
    window.location.replace(url);
}