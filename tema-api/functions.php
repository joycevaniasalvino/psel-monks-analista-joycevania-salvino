<?php

add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        return $value;
    });

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
            'imgLogo' => $theme_uri . '/assets/imagens/logo.png',
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
            'imgPrincipal' => $theme_uri . '/assets/imagens/logoSecao.png',
            'imgScroll' => $theme_uri . '/assets/imagens/Scroll.png',

            'tituloSecao2' => 'Lorem ipsum dolor sit amet consectetur',
            'textoSecao2' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo',
            'cards' => [
                [
                    'id' => 1,
                    'imgCard' => $theme_uri . '/assets/imagens/imgCard.jpg',
                    'tituloCard' => 'Lorem ipsum dolor',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur.'
                ],
                [
                    'id' => 2,
                    'imgCard' => $theme_uri . '/assets/imagens/imgCard2.jpg',
                    'tituloCard' => 'Lorem ipsum dolor',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur.'
                ],
                [
                    'id' => 3,
                    'imgCard' => $theme_uri . '/assets/imagens/imgCard3.jpg',
                    'tituloCard' => 'Lorem ipsum dolor',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur.'
                ],
                [
                    'id' => 4,
                    'imgCard' => $theme_uri . '/assets/imagens/imgCard4.jpg',
                    'tituloCard' => 'Lorem ipsum dolor',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur.'
                ]
            ],
            'tituloSecao3' => 'Lorem ipsum dolor sit amet consectetur',
            'textoSecao3' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo',
            'img1' => $theme_uri . '/assets/imagens/imgsecao3.png',
            'img2' => $theme_uri . '/assets/imagens/imgsecao32.png',
            'img3' => $theme_uri . '/assets/imagens/imgsecao33.png',

            'tituloSecao4' => 'Lorem ipsum dolor sit amet consectetur',
            'textSecao4' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra',
            'imgAppleStore' => $theme_uri . '/assets/imagens/imgPS.png',
            'imgPlayStore' => $theme_uri . '/assets/imagens/imgAS.png',

            'tituloSecao5' => 'Lorem ipsum dolor sit amet consectetur',
            'tags' => [
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
            'cards2' => [
                [
                    'id' => 1,
                    'tituloCard' => 'Lorem ipsum dolor sit amet',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.'
                ],
                [
                    'id' => 2,
                    'tituloCard' => 'Lorem ipsum dolor sit amet',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.'
                ],
                [
                    'id' => 3,
                    'tituloCard' => 'Lorem ipsum dolor sit amet',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.'
                ],
                [
                    'id' => 4,
                    'tituloCard' => 'Lorem ipsum dolor sit amet',
                    'textCard' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.'
                ]
            ],
            'imgForm' => $theme_uri . '/assets/imagens/imgForm.png',
            'tituloForm' => 'Lorem ipsum dolor sit amet consectetur',
            'textoForm' => 'Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque',
            'textoFormDetalhe' => '*Lorem ipsum dolor sit amet consectetur',

            'instagram' => '#',
            'whatsapp' => '#',
            'twitter' => '#',
            'facebook' => '#',

            'fraseRodape' => 'Lorem ipsum dolor sit amet',
            'link1' => '#',
            'link2' => '#',
            'link3' => '#',
            'link4' => '#'

        ],
    ];
}
