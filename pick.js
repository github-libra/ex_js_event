document.querySelector('#grid').addEventListener('click', function(e) {
    if(e.target.tagName === 'IMG') {
        var count = this.querySelectorAll('img').length;
        if(count > 1) {
            var li = e.target.parentNode;
            li.removeChild(e.target);
            li.parentNode.removeChild(li);

            if (count === 2) {
                document.querySelector('h2').innerText = 
                    'You picked: ' + this.querySelector('img').alt;
                this.querySelector('img').parentNode.style.margin = "auto";
                this.querySelector('img').parentNode.style.display = "block";
            }
        }
    }
}, false)