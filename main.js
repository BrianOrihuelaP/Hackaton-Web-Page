var imagenes = ['https://www.elplural.com/uploads/s1/89/13/56/european-mink-at-osnabrueck-zoo-02-cropped.jpeg',
        'https://usercontent.one/wp/antropocene.it/wp-content/uploads/2021/02/Neovison_vison.jpg',
        'https://www.artimalia.org/wp-content/uploads/2012/01/s19_vison_marino_tml.jpg',
        'http://antropocene.it/wp-content/uploads/2021/02/Neovison-vison.jpg',
        'https://www.efeverde.com/storage/2020/10/20201011RM-VISON-EUROPEO-35-1200x800.jpg'
    ],
    cont = 0;

function carrousel(contenedor) {
    contenedor.addEventListener('click', e => {
        let regresar = contenedor.querySelector('.regresar'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if (tgt == regresar) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            } else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }

        } else if (tgt == adelante) {
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
        console.log(cont)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrousel(contenedor)
});


var imagenes2 = [
        'https://atlasanimal.com/wp-content/uploads/2021/02/leon-marino-japones.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/84/Zalophus_japonicus.JPG',
        'https://animapedia.org/wp-content/uploads/2018/07/leon-marino.jpg',
        'https://www.cinconoticias.com/wp-content/uploads/leon-marino-japones.jpg'
    ],
    cont = 0;

function carrousel2(contenedor2) {
    contenedor2.addEventListener('click', e => {
        let regresar = contenedor2.querySelector('.regresar'),
            adelante = contenedor2.querySelector('.adelante'),
            img = contenedor2.querySelector('img'),
            tgt = e.target;

        if (tgt == regresar) {
            if (cont > 0) {
                img.src = imagenes2[cont - 1];
                cont--;
            } else {
                img.src = imagenes2[imagenes2.length - 1];
                cont = imagenes2.length - 1;
            }

        } else if (tgt == adelante) {
            if (cont < imagenes2.length - 1) {
                img.src = imagenes2[cont + 1];
                cont++;
            } else {
                img.src = imagenes2[0];
                cont = 0;
            }
        }
        console.log(cont)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor2 = document.querySelector('.contenedor2');
    carrousel2(contenedor2)
});

var imagenes3 = [
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Em_-_Hydrodamalis_gigas_model.jpg',
        'https://allyouneedisbiology.files.wordpress.com/2019/09/the_model_and_skeleton_of_stellers_sea_cow.jpg?w=474&h=356',
        'https://miro.medium.com/max/1080/1*tDIQBWdOnPG6niODDu20og.jpeg',
        'https://www.mundo-geo.es/uploads/s1/10/30/95/26/estos-animales-extintos-alguna-vez-habitaron-las-areas-cercanas-a-la-costa-de-las-islas-komandor-en-el-mar-de-bering_1_1000x575.jpeg',
        'https://static.inaturalist.org/photos/62156810/large.jpg'
    ],
    cont = 0;

function carrousel3(contenedor3) {
    contenedor3.addEventListener('click', e => {
        let regresar = contenedor3.querySelector('.regresar'),
            adelante = contenedor3.querySelector('.adelante'),
            img = contenedor3.querySelector('img'),
            tgt = e.target;

        if (tgt == regresar) {
            if (cont > 0) {
                img.src = imagenes3[cont - 1];
                cont--;
            } else {
                img.src = imagenes3[imagenes3.length - 1];
                cont = imagenes3.length - 1;
            }

        } else if (tgt == adelante) {
            if (cont < imagenes3.length - 1) {
                img.src = imagenes3[cont + 1];
                cont++;
            } else {
                img.src = imagenes3[0];
                cont = 0;
            }
        }
        console.log(cont)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor3 = document.querySelector('.contenedor3');
    carrousel3(contenedor3)
});


var imagenes4 = [
        'https://assets.isu.pub/document-structure/200310171839-2ac42b5f3c6596203cac5bc19ec6e6dd/v1/5bd16a659b82e33c2ed82fc6c12348ec.jpg',
        'https://p1.pxfuel.com/preview/211/232/8/fish-sea-aquarium-seagull.jpg',
        'https://1.bp.blogspot.com/-f3pooQRHQhM/YCfFZDxVSoI/AAAAAAADmJs/qIh3WkktevELFXhzGJAJu4bJEKqwzMrCgCLcBGAsYHQ/s764/Prototroctes%2Bmaraena%2B1.jpg',
        'https://1.bp.blogspot.com/-RR6kJY9kffk/XeO43s7RoCI/AAAAAAADPSU/pEgZ8MW-S8wCc5l2fT6514rLiKVbcYligCLcBGAsYHQ/s1600/Albula%2Bgoreensis.jpg'
    ],
    cont = 0;

function carrousel4(contenedor4) {
    contenedor4.addEventListener('click', e => {
        let regresar = contenedor4.querySelector('.regresar'),
            adelante = contenedor4.querySelector('.adelante'),
            img = contenedor4.querySelector('img'),
            tgt = e.target;

        if (tgt == regresar) {
            if (cont > 0) {
                img.src = imagenes4[cont - 1];
                cont--;
            } else {
                img.src = imagenes4[imagenes4.length - 1];
                cont = imagenes4.length - 1;
            }

        } else if (tgt == adelante) {
            if (cont < imagenes4.length - 1) {
                img.src = imagenes4[cont + 1];
                cont++;
            } else {
                img.src = imagenes4[0];
                cont = 0;
            }
        }
        console.log(cont)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor4 = document.querySelector('.contenedor4');
    carrousel4(contenedor4)
});

var imagenes5 = [
    'https://estag.fimagenes.com/imagenesred/2476430_0.jpg?1',
    'https://naturalezamamifera.com/wp-content/uploads/2019/01/delfin-del-rio.chino_.jpg',
    'https://e.rpp-noticias.io/xlarge/2016/10/06/212621_259865.png',
    'https://i.pinimg.com/564x/0a/7d/60/0a7d60383cd407369767edf1aab1e832.jpg',
    'http://www.juventudrebelde.cu/images/medias/2018/12/KkFbcR_11-12-2018_10.12.52.000000.jpg'

],
cont = 0;

function carrousel5(contenedor5) {
contenedor5.addEventListener('click', e => {
    let regresar = contenedor5.querySelector('.regresar'),
        adelante = contenedor5.querySelector('.adelante'),
        img = contenedor5.querySelector('img'),
        tgt = e.target;

    if (tgt == regresar) {
        if (cont > 0) {
            img.src = imagenes5[cont - 1];
            cont--;
        } else {
            img.src = imagenes5[imagenes5.length - 1];
            cont = imagenes5.length - 1;
        }

    } else if (tgt == adelante) {
        if (cont < imagenes5.length - 1) {
            img.src = imagenes5[cont + 1];
            cont++;
        } else {
            img.src = imagenes5[0];
            cont = 0;
        }
    }
    console.log(cont)
});
}

document.addEventListener("DOMContentLoaded", () => {
let contenedor5 = document.querySelector('.contenedor5');
carrousel5(contenedor5)
});

var imagenes6 = [
    'https://www.infobae.com/new-resizer/iWH1Ql6pMyBYwUybLHWQXFXwWpQ=/1200x900/filters:format(webp):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/ZPN663BG5JCPDCL6TMCHX6QRZI',
    'https://upload.wikimedia.org/wikipedia/commons/a/a5/Lonesome_George_in_profile.png',
    'https://www.ngenespanol.com/wp-content/uploads/2018/08/Descansa-en-paz-solitario-George.jpg',
    'https://wwflac.awsassets.panda.org/img/original/jorge_tortugo.jpg',
    'http://c.files.bbci.co.uk/328A/production/_118683921_fernandina7.jpg'

],
cont = 0;

function carrousel6(contenedor6) {
contenedor6.addEventListener('click', e => {
    let regresar = contenedor6.querySelector('.regresar'),
        adelante = contenedor6.querySelector('.adelante'),
        img = contenedor6.querySelector('img'),
        tgt = e.target;

    if (tgt == regresar) {
        if (cont > 0) {
            img.src = imagenes6[cont - 1];
            cont--;
        } else {
            img.src = imagenes6[imagenes6.length - 1];
            cont = imagenes6.length - 1;
        }

    } else if (tgt == adelante) {
        if (cont < imagenes6.length - 1) {
            img.src = imagenes6[cont + 1];
            cont++;
        } else {
            img.src = imagenes6[0];
            cont = 0;
        }
    }
    console.log(cont)
});
}

document.addEventListener("DOMContentLoaded", () => {
let contenedor6 = document.querySelector('.contenedor6');
carrousel6(contenedor6)
});

var imagenes7 = [
    'https://www.mundoprehistorico.com/wp-content/uploads/Alca-Gigante-01.jpg',
    'https://www.vistaalmar.es/images/ampliadas8/alca-gigante.jpg',
    'https://atlasanimal.com/wp-content/uploads/2021/02/Alca-Gigante.jpg.webp',
    'https://ecoinventos.com/wp-content/uploads/2012/08/Alca-gigante.jpg',
    'https://www.elagoradiario.com/wp-content/uploads/2021/06/geirfugk-1024x380.jpg'

],
cont = 0;

function carrousel7(contenedor7) {
contenedor7.addEventListener('click', e => {
    let regresar = contenedor7.querySelector('.regresar'),
        adelante = contenedor7.querySelector('.adelante'),
        img = contenedor7.querySelector('img'),
        tgt = e.target;

    if (tgt == regresar) {
        if (cont > 0) {
            img.src = imagenes7[cont - 1];
            cont--;
        } else {
            img.src = imagenes7[imagenes7.length - 1];
            cont = imagenes7.length - 1;
        }

    } else if (tgt == adelante) {
        if (cont < imagenes7.length - 1) {
            img.src = imagenes7[cont + 1];
            cont++;
        } else {
            img.src = imagenes7[0];
            cont = 0;
        }
    }
    console.log(cont)
});
}

document.addEventListener("DOMContentLoaded", () => {
let contenedor7 = document.querySelector('.contenedor7');
carrousel7(contenedor7)
});


var imagenes8 = [
    'https://static.nationalgeographic.es/files/styles/image_3200/public/21574.600x450.jpg?w=1600',
    'https://www.efeverde.com/storage/2018/09/ARCHIVO-foca-monje-EFEverde.jpg',
    'https://www.semana.com/resizer/g89v4rbjFw1sA7I6cXj4WjNLmfU=/arc-anglerfish-arc2-prod-semana/public/F6RKOCALUFGEXDOXBRDLVBJT4M.jpg',
    'http://c.files.bbci.co.uk/17356/production/_109826059_3a.gettyimages-1049444220.jpg',
    'http://redescritoresporlatierra.org/wp-content/uploads/2013/12/foca-monje.noticia.jpg'

],
cont = 0;

function carrousel8(contenedor8) {
contenedor8.addEventListener('click', e => {
    let regresar = contenedor8.querySelector('.regresar'),
        adelante = contenedor8.querySelector('.adelante'),
        img = contenedor8.querySelector('img'),
        tgt = e.target;

    if (tgt == regresar) {
        if (cont > 0) {
            img.src = imagenes8[cont - 1];
            cont--;
        } else {
            img.src = imagenes8[imagenes8.length - 1];
            cont = imagenes8.length - 1;
        }

    } else if (tgt == adelante) {
        if (cont < imagenes8.length - 1) {
            img.src = imagenes8[cont + 1];
            cont++;
        } else {
            img.src = imagenes8[0];
            cont = 0;
        }
    }
    console.log(cont)
});
}

document.addEventListener("DOMContentLoaded", () => {
let contenedor8 = document.querySelector('.contenedor8');
carrousel8(contenedor8)
});


var imagenes9 = [
    'https://www.bigfish.mx/__export/1507478729835/sites/debate/img/2017/10/08/mejj-333.jpg_1668135842.jpg',
    'https://www.bigfish.mx/export/sites/debate/img/2017/10/08/mejj-222.jpg_122906717.jpg',
    'https://i.ytimg.com/vi/meRhV4R3RwY/maxresdefault.jpg',
    'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/03/06/15203566729089.jpg',
    'https://www.pescaderiascorunesas.es/sites/default/files/styles/large/public/2017-10/mejillones-roca-moules-estilo-belga.jpg?itok=FXweltAK'

],
cont = 0;

function carrousel9(contenedor9) {
contenedor9.addEventListener('click', e => {
    let regresar = contenedor9.querySelector('.regresar'),
        adelante = contenedor9.querySelector('.adelante'),
        img = contenedor9.querySelector('img'),
        tgt = e.target;

    if (tgt == regresar) {
        if (cont > 0) {
            img.src = imagenes9[cont - 1];
            cont--;
        } else {
            img.src = imagenes9[imagenes9.length - 1];
            cont = imagenes9.length - 1;
        }

    } else if (tgt == adelante) {
        if (cont < imagenes9.length - 1) {
            img.src = imagenes9[cont + 1];
            cont++;
        } else {
            img.src = imagenes9[0];
            cont = 0;
        }
    }
    console.log(cont)
});
}

document.addEventListener("DOMContentLoaded", () => {
let contenedor9 = document.querySelector('.contenedor9');
carrousel9(contenedor9)
});