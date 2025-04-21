<?php

add_action('rest_api_init', function () {
    register_rest_route('minhaapi/v1', '/dados/', [
        'methods' => 'GET',
        'callback' => 'minha_api_callback',
    ]);
});

function minha_api_callback()
{
    $theme_uri = get_template_directory_uri();

    return [
        [
            'id' => 1,
            'imgLogo' => $theme_uri . 'assets/imagens/logo.png',
            'linksHeader' => [
                [
                    'id' => 1,
                    'titulo' => 'Categoria 1',
                    'link' => 'link'
                ],
                [
                    'id' => 2,
                    'titulo' => 'Categoria 2',
                    'link' => 'link'
                ],
                [
                    'id' => 3,
                    'titulo' => 'Categoria 3',
                    'link' => 'link'
                ],
                [
                    'id' => 4,
                    'titulo' => 'Categoria 4',
                    'link' => 'link'
                ],
            ],
            'tituloPrincipal' => 'Lorem ipsum dolor sit amet consectetur',
            'textoprincipal' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra',
            'imgPrincipal' => 'link',
            'imgScroll'=> 'link',

            'tituloSecao2' => 'Lorem ipsum dolor sit amet consectetur',
            'textoSecao2' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo',
            'cards' => [
                [
                    'id' => 1,
                    'imgCard' => 'link',
                    'tituloCard' => 'Lorem ipsum dolorLorem ipsum dolor',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur.'
                ],
                [
                    'id' => 2,
                    'imgCard' => 'link',
                    'tituloCard' => 'Lorem ipsum dolorLorem ipsum dolor',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur.'
                ],
                [
                    'id' => 3,
                    'imgCard' => 'link',
                    'tituloCard' => 'Lorem ipsum dolorLorem ipsum dolor',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur.'
                ],
                [
                    'id' => 4,
                    'imgCard' => 'link',
                    'tituloCard' => 'Lorem ipsum dolorLorem ipsum dolor',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur.'
                ]
            ],
            'tituloSecao3' => 'Lorem ipsum dolor sit amet consectetur',
            'textoSecao3' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo',
            'imagesSecao3' => [
                [
                    'img1' => 'link'
                ],
                [
                    'img2' => 'link'
                ],
                [
                    'img3' => 'link'
                ]
                ],

                'tituloSecao4' => 'Lorem ipsum dolor sit amet consectetur',
                'textSecao4' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra',
                'imgAppleStore' => 'link',
                'imgPlayStore' => 'link',

                'tituloSecao5' => 'Lorem ipsum dolor sit amet consectetur',
            'links' => [
                [
                    'id' => 1,
                    'titulo' => 'Perfumaria',
                    'link' => 'link'
                ],
                [
                    'id' => 2,
                    'titulo' => 'Corpo e banho',
                    'link' => 'link'
                ],
                [
                    'id' => 3,
                    'titulo' => 'Hidratante',
                    'link' => 'link'
                ],
                [
                    'id' => 4,
                    'titulo' => 'Desodorante',
                    'link' => 'link'
                ],
                [
                    'id' => 5,
                    'titulo' => 'Cabelos',
                    'link' => 'link'
                ],
                [
                    'id' => 6,
                    'titulo' => 'Maquiagem',
                    'link' => 'link'
                ],
                [
                    'id' => 7,
                    'titulo' => 'Rosto',
                    'link' => 'link'
                ],
                [
                    'id' => 8,
                    'titulo' => 'Casa',
                    'link' => 'link'
                ],
                [
                    'id' => 9,
                    'titulo' => 'Infantil',
                    'link' => 'link'
                ],
                [
                    'id' => 10,
                    'titulo' => 'Shampoo',
                    'link' => 'link'
                ],
                [
                    'id' => 11,
                    'titulo' => 'Sabonete',
                    'link' => 'link'
                ],
                [
                    'id' => 12,
                    'titulo' => 'Body splash',
                    'link' => 'link'
                ],
                [
                    'id' => 13,
                    'titulo' => 'Óleo corporal',
                    'link' => 'link'
                ],
                [
                    'id' => 14,
                    'titulo' => 'Corretivo',
                    'link' => 'link'
                ],
                [
                    'id' => 15,
                    'titulo' => 'Proteção solar',
                    'link' => 'link'
                ],
            ],
    
            'cards' => [
                [
                    'id' => 1,
                    'titulo' => 'Lorem ipsum dolor sit amet',
                    'texto' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.'
                ],
                [
                    'id' => 2,
                    'titulo' => 'Lorem ipsum dolor sit amet',
                    'texto' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.'
                ],
                [
                    'id' => 3,
                    'titulo' => 'Lorem ipsum dolor sit amet',
                    'texto' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.'
                ],
            ],

            'imgForm' => 'link',
            'tituloForm' => 'Lorem ipsum dolor sit amet consectetur',
            'textoForm' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque',
            'textoFormDetalhe'=> '*Lorem ipsum dolor sit amet consectetur',

            'instagram' => 'link',
            'whatsapp' => 'link',
            'x' => 'link',
            'facebook' => 'link',

            'fraseRodape' => 'Lorem ipsum dolor sit amet',
            'link1' => 'link',
            'link2' => 'link',
            'link3' => 'link',
            'link4' => 'link'

        ],
    ];
}

