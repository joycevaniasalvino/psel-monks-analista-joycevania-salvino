// src/types.ts

export type LinkItem = {
    id: number;
    titulo: string;
    link: string;
};

export type CardItem = {
    id: number;
    imgCard?: string;
    tituloCard?: string;
    textCard?: string;
    titulo?: string;
    texto?: string;
};

export type ImagemSecao3 = {
    img1?: string;
    img2?: string;
    img3?: string;
};

export type DadosApi = {
    id: number;
    imgLogo?: string;
    linksHeader?: LinkItem[];
    tituloPrincipal?: string;
    textoprincipal?: string;
    imgPrincipal?: string;
    imgScroll?: string;

    tituloSecao2?: string;
    textoSecao2?: string;
    cards?: CardItem[]; // Note: Esse nome "cards" está duplicado na resposta da sua API

    tituloSecao3?: string;
    textoSecao3?: string;
    imagesSecao3?: ImagemSecao3[];

    tituloSecao4?: string;
    textSecao4?: string;
    imgAppleStore?: string;
    imgPlayStore?: string;

    tituloSecao5?: string;
    links?: LinkItem[];

    imgForm?: string;
    tituloForm?: string;
    textoForm?: string;
    textoFormDetalhe?: string;

    instagram?: string;
    whatsapp?: string;
    x?: string;
    facebook?: string;

    fraseRodape?: string;
    link1?: string;
    link2?: string;
    link3?: string;
    link4?: string;
};
