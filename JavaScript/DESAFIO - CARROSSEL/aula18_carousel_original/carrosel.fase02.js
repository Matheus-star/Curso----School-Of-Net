(function(){ 
    'use strict';
    let $buttonNext = document.querySelector(".carousel__btn--next");
    let $buttonPrev = document.querySelector(".carousel__btn--prev");
    
    let $carrossel = document.querySelector('.carosel');
    let $carrosselInner = document.querySelector('.carousel__inner');
    let $carrosselItens = document.querySelectorAll('.carousel__item'); // Coleção

    let bannerAtual = 0;
    let qtdBanners = $carrosselItens.length;
    let $carrosselpaginacao = document.querySelector('.carousel__paginacao');

    montaPaginação();
    function montaPaginação() {
        for (let i = 0; i < qtdBanners.length; i++) {
                adicionaPaginacao(i);
            }
        }
    function adicionaPaginacao(i) {
            let $li = document.createElement('li');
            $li.addEventListener('click', function () {
            bannerAtual = i;
            mostraBanner(bannerAtual);
            })
            $carrosselpaginacao.appendChild($li);
        }
    function atualizaPaginacao() {
        $carrosselpaginacao.querySelectorAll('li')[bannerAtual].className = 'atual';
    }


    $buttonNext.style.display = 'block';
    $buttonPrev.style.display = 'block';
    

  // $carrossel.style.overflowX = 'hidden';
    $buttonNext.addEventListener('click', funcNext);
    $buttonPrev.addEventListener('click', funcPrev);



    function funcNext(){
        bannerAtual++;
        mostraBanner(bannerAtual);
    } 
    function funcPrev(){
        bannerAtual--;
        mostraBanner(bannerAtual);
    }
    
    function mostraBanner(bannerAtual) { 
      let largura = getComputedStyle($carrosselItens[0]).width;
        largura = parseInt(largura);
        console.log(bannerAtual);
        
        if(bannerAtual > 0){

            $buttonPrev.disabled = false;
        }else{

            $buttonPrev.disabled = true;
        }
        if (bannerAtual === qtdBanners -1) {
            
           $buttonNext.disabled = true;  
        }else{

            $buttonNext.disabled = false;
        }
                                   

        let novaPosicao = largura * bannerAtual * -1;
        $carrosselInner.style.transform = 'translateX('+ novaPosicao + 'px)';

     
     console.log(novaPosicao, typeof novaPosicao);
    }
})()
