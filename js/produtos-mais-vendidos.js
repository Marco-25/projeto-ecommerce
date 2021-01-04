const items1 = [
    {
        id: 0,
        img:  'imagens/img-6.jpg',
        h3: 'Blusa Ciganinha Bordada Branca',
        span: 'R$ 198,90',
        p1: 'R$ 159,90',
        p2: `ou <b>10x</b> de <b>R$ 15,99</b> s/juros`,
        spanNew: 'new',
        verDetalhes: 'ver detalhes'
    },
    {
        id: 1,
        img:  'imagens/img-7.jpg',
        h3: 'Blusa Ciganinha Bordada Branca',
        span: 'R$ 198,90',
        p1: 'R$ 159,90',
        p2: `ou <b>10x</b> de <b>R$ 15,99</b> s/juros`,
        spanNew: 'new',
        verDetalhes: 'ver detalhes'
    },
    {
        id: 2,
        img:  'imagens/img-8.jpg',
        h3: 'Blusa Ciganinha Bordada Branca',
        span: 'R$ 198,90',
        p1: 'R$ 159,90',
        p2: `ou <b>10x</b> de <b>R$ 15,99</b> s/juros`,
        spanNew: 'new',
        verDetalhes: 'ver detalhes'
    },
    {
        id: 3,
        img:  'imagens/img-9.jpg',
        h3: 'Blusa Ciganinha Bordada Branca',
        span: 'R$ 198,90',
        p1: 'R$ 159,90',
        p2: `ou <b>10x</b> de <b>R$ 15,99</b> s/juros`,
        spanNew: 'new',
        verDetalhes: 'ver detalhes'
    }
];

inicializarProdutosMaisVendidos = () => {
    var containerProdutos = document.getElementById('image-single__best-sellers');

    items1.map((val) => {
        containerProdutos.innerHTML += `

                <div class="hover-best-sellers">
                    <div class="image"> <img src="`+val.img+`">  </div><!--image-->
                    <div class="description-price">
                        <h3>`+val.h3+`</h3>
                        <span>`+val.span+`</span>
                        <p class="p1">`+val.p1+`</p>
                        <p class="p2">`+val.p2+`</p>
                    </div><!--description-price-->

                    <div class="details">
                        <span>`+val.spanNew+`</span>
                        <a href="#">`+val.verDetalhes+`</a>
                        <div class="clear"></div>
                    </div><!--details-->
                </div> `
    });

}


inicializarProdutosMaisVendidos();

