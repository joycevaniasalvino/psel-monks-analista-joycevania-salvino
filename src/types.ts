// src/types.ts

export type LinkItem = {
    id: number;
    titulo: string;
    link: string;
};

export type Cards = {
    cards: CardItem[];
};

export type Tags = {
    tags: LinkItem[];
};

export type CardItem = {
    id: number;
    imgCard?: string;
    tituloCard?: string;
    textCard?: string;
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
    cards?: CardItem[];
    cards2?: CardItem[];

    tituloSecao3?: string;
    textoSecao3?: string;
    img1?: string;
    img2?: string;
    img3?: string;

    tituloSecao4?: string;
    textSecao4?: string;
    imgAppleStore?: string;
    imgPlayStore?: string;

    tituloSecao5?: string;
    tags?: LinkItem[];

    imgForm?: string;
    tituloForm?: string;
    textoForm?: string;
    textoFormDetalhe?: string;

    instagram?: string;
    whatsapp?: string;
    twitter?: string;
    facebook?: string;

    fraseRodape?: string;
    link1?: string;
    link2?: string;
    link3?: string;
    link4?: string;
};
