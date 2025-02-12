document.getElementById('openButton').addEventListener('click', function() {
    document.getElementById('hiddenContent').style.display = 'block';
    document.getElementById('openButton').style.display = 'none';
     
    // Ukryj zdjęcie "Twoje Zdjęcie2"
    const imageToHide = document.querySelector('.fit-picture');
    imageToHide.style.display = 'none';
    
    const hearts = document.querySelector('.hearts');
    const flowers = document.querySelector('.flowers');

    const numElements = 50; // Liczba elementów
    const spacing = 50; // Odstęp między elementami w pikselach

    for (let i = 0; i < numElements; i++) {
        // Tworzenie serca
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.setProperty('--c', 'red'); // Kolor serca
        heart.style.left = `${i * spacing}px`; // Pozycja w poziomie
        heart.style.animationDelay = `${Math.random() * 1.5}s`; // Losowe opóźnienie animacji
        hearts.appendChild(heart);

        // Tworzenie kwiatka
        // const flower = document.createElement('div');
        // flower.className = 'flower';
        // flower.style.setProperty('--c', 'pink'); // Kolor kwiatka
        // flower.style.left = `${i * spacing}px`; // Pozycja w poziomie
        // flower.style.animationDelay = `${Math.random() * 2}s`; // Losowe opóźnienie animacji
        // flowers.appendChild(flower);
    }
});