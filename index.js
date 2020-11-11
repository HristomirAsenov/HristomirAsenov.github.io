document.querySelector('button').addEventListener('click', fetchSoftUniPartners);

function fetchSoftUniPartners() {
    const URL = "https://google.bg";

    fetch(URL)
        .then((r) => r.text())
        .then(appendSoftUniPartners);
}

function appendSoftUniPartners(htmlResponse) {
    let div = document.createElement('div');
    div.innerHTML = htmlResponse;

    document.querySelector('div#result').textContent = JSON.stringify(
        Array.from(div.querySelectorAll('#diamond-partners li a.company-list'))
            .map(e => { return { title: e.title, companyImageUrl: e.href } })
    );
}