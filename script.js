var sorular = [
    {
        soru: "Atatürk'ün doğum yılı hangisidir?",
        a: "1991",
        b: "1882",
        c: "1981",
        d: "1881",
        cevap: "d"
    },
    {
        soru: "İlk uçak kullanılan savaş hangisidir?",
        a: "1.Dünya Savaşı",
        b: "Trablusgarp Savaşı",
        c: "Malazgirt Savaşı",
        d: "Preveze Savaşı",
        cevap: "b"
    },
    {
        soru: "Yarından sonraki gün Pazartesi ise dün hangi gündür?",
        a: "Cuma",
        b: "Pazartesi",
        c: "Cumartesi",
        d: "Perşembe",
        cevap: "a"
    },
    {
        soru: "Atatürk'ün doğum yılı hangisidir?",
        a: "1991",
        b: "1882",
        c: "1981",
        d: "1881",
        cevap: "d"
    },
    {
        soru: "İlk uçak kullanılan savaş hangisidir?",
        a: "1.Dünya Savaşı",
        b: "Trablusgarp Savaşı",
        c: "Malazgirt Savaşı",
        d: "Preveze Savaşı",
        cevap: "b"
    },
    {
        soru: "Yarından sonraki gün Pazartesi ise dün hangi gündür?",
        a: "Cuma",
        b: "Pazartesi",
        c: "Cumartesi",
        d: "Perşembe",
        cevap: "a"
    }
]
var soru = document.getElementById("soru");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var quiz = document.getElementById("quiz");
var sayac = 0;
var dogru = 0;
var yanlis = 0;
soruYaz();
function soruYaz() {
    soru.innerHTML = "Soru "+(sayac+1)+" : "+sorular[sayac].soru;
    a.innerHTML = "A)"+sorular[sayac].a;
    b.innerHTML = "B)"+sorular[sayac].b;
    c.innerHTML = "C)"+sorular[sayac].c;
    d.innerHTML = "D)"+ sorular[sayac].d;
}
a.addEventListener("click", () => {
    if (sorular[sayac].cevap === "a") {
        alert("doğru cevap!");
        dogru++;
    }
    else {
        alert("Yanlış cevap :(");
        yanlis++;
    }
    sayac++;
    if (sayac < sorular.length) {
        soruYaz();
    }
    else {
        quiz.innerHTML = "Test bitmiştir. Doğru sayınız: "+dogru+" Yanlış sayınız:"+yanlis;
    }
})

b.addEventListener("click", () => {
    if (sorular[sayac].cevap === "b") {
        alert("doğru cevap!");
        dogru++;
    }
    else {
        alert("Yanlış cevap :(");
        yanlis++;
    }
    sayac++;
    if (sayac < sorular.length) {
        soruYaz();
    }
    else {
        quiz.innerHTML = "Test bitmiştir. Doğru sayınız: "+dogru+" Yanlış sayınız:"+yanlis;
    }
})

c.addEventListener("click", () => {
    if (sorular[sayac].cevap === "c") {
        alert("doğru cevap!");
        dogru++;

    }
    else {
        alert("Yanlış cevap :(");
        yanlis++;
    }
    sayac++;
    if (sayac < sorular.length) {
        soruYaz();
    }
    else {
        quiz.innerHTML = "Test bitmiştir. Doğru sayınız: "+dogru+" Yanlış sayınız:"+yanlis;
    }
})

d.addEventListener("click", () => {
    if (sorular[sayac].cevap === "d") {
        alert("doğru cevap!");
        dogru++;

    }
    else {
        alert("Yanlış cevap :(");
        yanlis++;
    }
    sayac++;
    if (sayac < sorular.length) {
        soruYaz();
    }
    else {
        quiz.innerHTML = "Test bitmiştir. Doğru sayınız: "+dogru+" Yanlış sayınız:"+yanlis;
    }
})