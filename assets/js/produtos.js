const produtos = [
    // COMIDA (7)
    {
        nome: "Hambúrguer Artesanal",
        preco: 20,
        categoria: "comida",
        descricao: "Delicioso hambúrguer com queijo e bacon",
        imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=60"
    },
    {
        nome: "Pizza de Calabresa",
        preco: 25,
        categoria: "comida",
        descricao: "Pizza tradicional com calabresa e cebola",
        imagem: "https://painacozinha.com/wp-content/uploads/85.Pizza-de-Calabresa-com-Catupiry.webp"
    },
    {
        nome: "X-Salada",
        preco: 18,
        categoria: "comida",
        descricao: "Sanduíche com carne, alface, tomate e queijo",
        imagem: "https://assets.unileversolutions.com/recipes-v2/106684.jpg"
    },
    {
        nome: "Batata Frita",
        preco: 10,
        categoria: "comida",
        descricao: "Batata frita crocante com tempero especial",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSFibZy-AX_Mb4CbkCAbQ9Ev2YT_93fCMJA&s"
    },
    {
        nome: "Escondidinho de Carne",
        preco: 22,
        categoria: "comida",
        descricao: "Purê de mandioca com carne desfiada",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJlDnztyVW4FMhjZdgHYsEm3N4V4ROJKVUA&s"
    },
    {
        nome: "Frango à Passarinho",
        preco: 20,
        categoria: "comida",
        descricao: "Frango frito crocante com tempero especial",
        imagem: "https://sabores-new.s3.amazonaws.com/public/2024/11/frango-a-passarinho-facil.jpg"
    },
    {
        nome: "Lasanha à Bolonhesa",
        preco: 28,
        categoria: "comida",
        descricao: "Lasanha com molho bolonhesa e queijo gratinado",
        imagem: "https://sabores-new.s3.amazonaws.com/public/2024/11/Lasanha_tradicional.jpg"
    },

    // BEBIDA (7)
    {
        nome: "Suco Natural de Laranja",
        preco: 8,
        categoria: "bebida",
        descricao: "Suco fresco de laranja natural",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZC3FyS5wAsL-DIb4DBivpf1jvBFenJ_0aA&s"
    },
    {
        nome: "Refrigerante Lata",
        preco: 5,
        categoria: "bebida",
        descricao: "Coca-Cola, Fanta ou Guaraná",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUzjBkMYcg_iz0BVWGQ3Xhm1n2SB5o69IFw&s"
    },
    {
        nome: "Cerveja Long Neck",
        preco: 7,
        categoria: "bebida",
        descricao: "Cerveja gelada em garrafa",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHFyWBj_X7QTlWeGEIJW7qoMbrxtn9uHAVtQ&s"
    },
    {
        nome: "Água Mineral",
        preco: 3,
        categoria: "bebida",
        descricao: "Água mineral sem gás",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2U8vsi_BNDazegl-X6uYJBwufhgTHVsflQ&s"
    },
    {
        nome: "Chopp Gelado",
        preco: 9,
        categoria: "bebida",
        descricao: "Chopp servido na medida",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJiFrx31oLDv8D20-vLko9GznSE5wMA_UOrg&s"
    },
    {
        nome: "Caipirinha",
        preco: 12,
        categoria: "bebida",
        descricao: "Tradicional drink brasileiro",
        imagem: "https://mapadacachaca.com.br/wp-content/uploads/2024/11/Caipirinha-Famigerada-300x300-optimized.webp"
    },
    {
        nome: "Suco de Morango",
        preco: 9,
        categoria: "bebida",
        descricao: "Suco fresco de morango natural",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQpOfFgVQtCsUYyIBu7qg3aGQ_dRRahuP8w&s"
    },

    // COMBO (6)
    {
        nome: "Combo Hambúrguer + Batata",
        preco: 25,
        categoria: "combo",
        descricao: "Hambúrguer artesanal com batata frita",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fDVoARUpF2vRnAjop7mSCEnpIWzV9SLsuw&s"
    },
    {
        nome: "Pizza + Refrigerante",
        preco: 30,
        categoria: "combo",
        descricao: "Pizza Calabresa com refrigerante",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_OPQv-Be9uFEZPMRAnlEALVFciXgirTCNQ&s"
    },
    {
        nome: "X-Salada + Suco",
        preco: 22,
        categoria: "combo",
        descricao: "X-Salada com suco natural",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToy1pZ5C04xLwxlGf-P59x7VmpKR7wn4pt8A&s"
    },
    {
        nome: "Frango à Passarinho + Cerveja",
        preco: 25,
        categoria: "combo",
        descricao: "Frango frito crocante com cerveja",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-FfkydUf7f07CdvpsAdkZWJnaOdDrMAuMHw&s"
    },
    {
        nome: "Lasanha + Refrigerante",
        preco: 32,
        categoria: "combo",
        descricao: "Lasanha à Bolonhesa com refrigerante",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7HxkFTxV8Er-E6NQiDsJBU87pVy3tu5bxA&s"
    },
    {
        nome: "Batata + Suco de Morango",
        preco: 15,
        categoria: "combo",
        descricao: "Batata frita crocante com suco de morango",
        imagem: "https://img.freepik.com/fotos-premium/milkshake-de-morango-e-batatas-fritas_926199-597974.jpg"
    }
];

const narguileAcessorios = [
    // ACESSÓRIOS - ESSÊNCIAS (6)
    {
        nome: "Essência Maçã Verde",
        preco: 12,
        categoria: "essencia",
        descricao: "Sabor refrescante de maçã verde",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOB-MsAgkR4gSyBUQ-Xgi7MW9NFOIWh6qulA&s"
    },
    {
        nome: "Essência Uva",
        preco: 12,
        categoria: "essencia",
        descricao: "Sabor doce e intenso de uva",
        imagem: "https://cdn.awsli.com.br/2500x2500/2383/2383891/produto/261333603/ess-ncia-de-narguil--zomo-uva---a-tabacaria-c117dljrnr.png"
    },
    {
        nome: "Essência Menta",
        preco: 12,
        categoria: "essencia",
        descricao: "Sabor refrescante de menta",
        imagem: "https://cdn.awsli.com.br/1373/1373609/produto/357247313/mint_50g-9hk0dv0bwy.jpg"
    },
    {
        nome: "Essência Morango",
        preco: 12,
        categoria: "essencia",
        descricao: "Sabor doce de morango",
        imagem: "https://cdn.awsli.com.br/600x700/2617/2617667/produto/236739514/ziggy-yogurt-hookah-dream-34rvbflyr1.jpg"
    },
    {
        nome: "Essência Limão",
        preco: 12,
        categoria: "essencia",
        descricao: "Sabor cítrico e refrescante",
        imagem: "https://www.tabacariadamata.com.br/media/tmp/webp/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/e/s/essencia-ziggy-fresh-lemon-_1_jpg.webp"
    },
    {
        nome: "Essência Tropical",
        preco: 12,
        categoria: "essencia",
        descricao: "Mistura de frutas tropicais",
        imagem: "https://cdn.awsli.com.br/300x300/2617/2617667/produto/236740728/ziggy-laranjola-tropical-hookah-dream-p4vn0shg1l.jpg"
    },

    // ACESSÓRIOS - CARVÃO (4)
    {
        nome: "Carvão Natural 1kg",
        preco: 18,
        categoria: "carvao",
        descricao: "Carvão natural para narguilé, alta durabilidade",
        imagem: "https://cdn.awsli.com.br/300x300/294/294169/produto/89393593da89c2f7d8.jpg"
    },
    {
        nome: "Carvão Instantâneo 1kg",
        preco: 15,
        categoria: "carvao",
        descricao: "Acende rápido e queima de forma uniforme",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_954415-MLB46561245699_062021-O-carvo-de-coco-zomo-para-narguile-1kg-envio-imediato.webp"
    },
    {
        nome: "Carvão Mini 500g",
        preco: 10,
        categoria: "carvao",
        descricao: "Pacote menor, ideal para consumo rápido",
        imagem: "https://cdn.awsli.com.br/294/294169/produto/89436251/1ee658c9a0.jpg"
    },
    {
        nome: "Carvão Premium 1kg",
        preco: 22,
        categoria: "carvao",
        descricao: "Queima lenta, excelente para sessões longas",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_776329-MLB69167647839_042023-O-carvo-fumax-premium-jumbo-caixa-1kg-p-narguile-o-melhor.webp"
    },

    // ACESSÓRIOS - OUTROS (4)
    {
        nome: "Pinça de Metal",
        preco: 8,
        categoria: "outros",
        descricao: "Para manipular o carvão com segurança",
        imagem: "https://m.media-amazon.com/images/I/51IOYzLo9CL.jpg"
    },
    {
        nome: "Base Extra de Vidro",
        preco: 20,
        categoria: "outros",
        descricao: "Base substituta para narguilé",
        imagem: "https://www.galeradonarguile.com.br/media/catalog/product/b/a/base_de_vidro_star_hookah_aladin_grande_ga10847.png"
    },
    {
        nome: "Mangueira Extra",
        preco: 15,
        categoria: "outros",
        descricao: "Mangueira de silicone extra para narguilé",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_842023-MLB82863928789_032025-O-mangueira-de-silicone-narguile-anti-chama-piteira-aluminio.webp"
    },
    {
        nome: "Bocal Extra",
        preco: 10,
        categoria: "outros",
        descricao: "Bocal de reposição para seu narguilé",
        imagem: "https://ae01.alicdn.com/kf/H60ffd15bb1b34cfeac00bb076ea0c4e9s.jpg_640x640q90.jpg"
    },

    // COMBOS DE ACESSÓRIOS (4)
    {
        nome: "Kit Essências Sortidas",
        preco: 25,
        categoria: "combo",
        descricao: "3 essências diferentes para você variar o sabor",
        imagem: "https://cdn.awsli.com.br/300x300/2617/2617667/produto/224101995/kit-ziggy-varias-essencias-1imqand9wx.jpg"
    },
    {
        nome: "Kit Carvão + Pinça",
        preco: 20,
        categoria: "combo",
        descricao: "Pacote de carvão natural + pinça de metal para manipular",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3NYEgUIRCYqY4SQvDX4GWvtYcg5eWFQrEw&s"
    },
    {
        nome: "Kit Essência + Base",
        preco: 30,
        categoria: "combo",
        descricao: "1 essência + base de vidro extra para seu narguile",
        imagem: "https://cdn.awsli.com.br/294/294169/produto/73529810/a1007b0067.jpg"
    },
    {
        nome: "Kit Completo Acessórios",
        preco: 50,
        categoria: "combo",
        descricao: "3 essências + carvão + pinça + base extra",
        imagem: "https://images.tcdn.com.br/img/img_prod/1255916/kit_narguile_pequeno_completo_bless_hookah_com_acessorios_1807_1_6ae9f8e691c891f866592d58e5051322.png"
    }
];

const narguilesAluguel = [
  {
    nome: "Narguilé Aladin Médio",
    preco: 30,
    descricao: "Completo com mangueira e base, ideal para 2-3 pessoas",
    imagem: "https://tiobob.vteximg.com.br/arquivos/ids/182890-408-408/Narguile-Completo-Pequeno-Malik-Seth-Fosco-Com-Base-Ninja-Aladin---Setup-Seth-16-Vermelho--26604.jpg?v=637715496472070000"
  },
  {
    nome: "Narguilé Star Hookah Grande",
    preco: 50,
    descricao: "Para festas e eventos, vem com 2 mangueiras extras",
    imagem: "https://cdn.awsli.com.br/294/294169/produto/155001142c11d6f148f.jpg"
  },
  {
    nome: "Narguilé Bless Pequeno",
    preco: 25,
    descricao: "Compacto, fácil de transportar, ótimo para casa",
    imagem: "https://cdn.awsli.com.br/1373/1373609/produto/211132929/22-xwmxnk.jpg"
  },
  {
    nome: "Narguilé Aladin Luxo",
    preco: 60,
    descricao: "Design premium, mangueira de silicone e base de vidro reforçado",
    imagem: "https://www.paraisomistico.com.br/product_images/t/638/6122__92539_std.png"
  },
  {
    nome: "Narguilé Star Hookah Médio",
    preco: 35,
    descricao: "Perfeito para encontros, fácil de limpar",
    imagem: "https://upload-arquivos.s3-sa-east-1.amazonaws.com/img/produtos_fotos/16074/4434f53b2dc3092da85ce0b961396b81.png"
  },
  {
    nome: "Narguilé Tribal Grande",
    preco: 55,
    descricao: "Mangueira dupla, base grande, ideal para festas",
    imagem: "https://cdn.awsli.com.br/294/294169/produto/1550017888e2c3776e7.jpg"
  },
  {
    nome: "Narguilé Classic Médio",
    preco: 28,
    descricao: "Clássico, resistente e com ótimo custo-benefício",
    imagem: "https://tiobob.vteximg.com.br/arquivos/ids/188939-1000-1000/Narguile-Medio-Monte-Verde-King-Color-Azul-Tiobob-29076.jpg?v=638066387509730000"
  },
  {
    nome: "Narguilé Aladin Mini",
    preco: 20,
    descricao: "Portátil, fácil de transportar e armazenar",
    imagem: "https://iconhookah.com/cdn/shop/products/Aladin-mvp360-Clear-Pattern-new_800x.jpg?v=1633483330"
  },
  {
    nome: "Narguilé Lux Star",
    preco: 65,
    descricao: "Modelo premium, base decorativa e 3 mangueiras",
    imagem: "https://media-c.arguilebr.com.br/48691-large_default/narguile-grande-luxx-completo-lu2501-5-preto-bolsa.jpg"
  },
  {
    nome: "Narguilé Tribal Médio",
    preco: 33,
    descricao: "Design diferenciado, perfeito para grupos pequenos",
    imagem: "https://images.tcdn.com.br/img/img_prod/1255916/narguile_medio_completo_triton_viper_golden_c_caixa_2125_1_e3ac6cf7a7007e4f3001f67e064e9b1f.jpg"
  }
];
