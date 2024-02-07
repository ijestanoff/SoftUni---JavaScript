function attachGradientEvents() {
    const rectRef = document.getElementById('gradient');
    rectRef.addEventListener('mousemove', gradientMove);
    rectRef.addEventListener('mouseout', gradientOut);

    function gradientMove (event) {
        const gradientBoxWidth = event.target.clientWidth;
        const position = event.offsetX / (gradientBoxWidth - 1);
        const percentage = Math.trunc(position * 100);
        document.getElementById('result').textContent = percentage + '%';

    }

    function gradientOut () {
        document.getElementById('result').textContent = '';
    }
}