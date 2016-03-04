document.querySelector('#grid').addEventListener('mouseover', function(e) {
    e.preventDefault();
    if(e.target.tagName === 'IMG') {
        var thumbnail = e.target;
        var lowRes = thumbnail.src;
        var preview = document.createElement('IMG');
        preview.className = 'preview';
        preview.src = lowRes.substring(0, lowRes.length - 7) + '.jpg';
        preview.style.left += e.offsetX + 'px';
        preview.style.top += e.offsetY + 'px';
        thumbnail.parentNode.appendChild(preview);

        thumbnail.addEventListener('mouseout', function out(d) {
            this.parentNode.removeChild(preview);
            this.removeEventListener('mouseout', out, false);
            this.removeEventListener('mousemove', move, false);
        }, false)

        thumbnail.addEventListener('mousemove', move, false);

        function move(event) {
            var pre = this.parentNode.querySelector('.preview');
            pre.style.left = event.offsetX + 10 + 'px';
            pre.style.top = event.offsetY + +10 + 'px';

        }
    };
}, false)