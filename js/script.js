window.addEventListener('DOMContentLoaded', function() {
    class MenuCard {
        constructor(src, title, parentSelector, ...classes) {
            this.src = src;
            this.title = title;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                
                <img class="card__img" src=${this.src} alt="">
                <div class="card__text">${this.title}</div>
              `;

            this.parent.append(element);

        }
    }

    new MenuCard(
        "img/cards/1cardsfoto.jpg",
        '25 januar 1999',
        ".cards .container",
        'menu__item',
        'c1'
    ).render();

    new MenuCard(
        "img/cards/2cardsfoto.jpg",
        '26 januar 1999',
        ".cards .container",
        'menu__item',
        'c2'
    ).render();

    new MenuCard(
        "img/cards/3cardsfoto.jpg",
        '29 januar 1999',
        ".cards .container",
        'menu__item',
        'c3'
    ).render();

    new MenuCard(
        "img/cards/4cardsfoto.jpg",
        '26 februar 1999',
        ".cards .container",
        'menu__item',
        'c4'
    ).render();

    new MenuCard(
        "img/cards/5cardsfoto.jpg",
        '29 februar 1001',
        ".cards .container",
        'menu__item',
        'c5'
    ).render();

    new MenuCard(
        "img/cards/6cardsfoto.jpg",
        '29 februar 1001',
        ".cards .container",
        'menu__item',
        'c6'
    ).render();

    new MenuCard(
        "img/cards/7cardsfoto.jpg",
        '29 februar 1001',
        ".cards .container",
        'menu__item',
        'c7'
    ).render();

    new MenuCard(
        "img/cards/8cardsfoto.jpg",
        '29 februar 1001',
        ".cards .container",
        'menu__item',
        '8'
    ).render();

    new MenuCard(
        "img/cards/9cardsfoto.jpg",
        '29 februar 1001',
        ".cards .container",
        'menu__item',
        'c9'
    ).render();

    new MenuCard(
        "img/cards/10cardsfoto.jpg",
        '1 march 1001',
        ".cards .container",
        'menu__item',
        'c10'
    ).render();
});




// window.addEventListener('DOMContentLoaded', function() {
//     class PopUp {
//         constructor(src, alt, title, descr, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.classes = classes;
//             this.parent = document.querySelector(parentSelector);
//         }
//
//         render() {
//             const element = document.createElement('div');
//             if (this.classes.length === 0) {
//                 this.classes = 'popup__item';
//                 element.classList.add(this.classes);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }
//             element.innerHTML = `
//
//                 <div class="popup__photo">
//                     <img class="popup__img" src=${this.src} alt="">
//                 </div>
//                 <div class="popup__content">
//                     <div class="popup__data">${this.alt}</div>
//                     <div class="popup__title">${this.title}</div>
//                     <div class="popup__text">${this.descr}</div>
//                 </div>
//               `;
//
//             this.parent.append(element);
//
//         }
//     }
//
//     new PopUp(
//         "img/popup/jan-16-1999.jpg",
//         '15. januar 1999',
//         "Srpske policijske i vojne snage ubile su 45 albanskih civila, me??u kojima i ??ene i decu???",
//             'Srpske policijske i vojne snage ubile su 45 albanskih civila, me??u kojima su bili i ??ene i deca. Srpske vlasti negiraju da su ubile civile, navode??i da je re?? o ubijenim pripadnicima Oslobodila??ke vojske Kosova, stradalim u borbama.',
//         '.popup .popup__cont',
//         'popup__item', 'p1'
//     ).render();
//
//     new PopUp(
//         "img/popup/jan-16-1999.jpg",
//         '16. januar 1999.',
//         "William Walker: ???Izgledalo je jasno, bez sumnje, kao jedan te??ak zlo??in protiv ??ovje??nosti???",
//         'Ra??ak je obi??ao ??ef verifikacione misije OEBS-a Vilijam Voker (William Walker) koji je potom na konferenciji za medije izjavio da ono ??to je video u Ra??ku ne okleva da opi??e kao masakar. "Izgledalo je jasno, bez sumnje, kao jedan te??ak zlo??in protiv ??ovje??nosti". Par dana kasnije, tada??nji predsednik Savezne Republike Jugoslavije (SRJ), Slobodan Milo??evi?? naredio je Walkeru da napusti dr??avu.\n' +
//         'Ra??ak je obi??ao ??ef verifikacione misije OEBS-a Vilijam Voker (William Walker) koji je potom na konferenciji za medije izjavio da ono ??to je video u  Republike Jugoslavije (SRJ), Slobodan ',
//         '.popup .popup__cont',
//         'popup__item', 'p2'
//     ).render();
//
// });



