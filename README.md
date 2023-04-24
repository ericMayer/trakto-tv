# TraktoTv

Projeto desenvolvimento para desafio **Front-end da Trakto**, mais informações acessar o link com a descrição do [desafio](https://github.com/trakto/desafio_frontend).

Projeto foi desenvolvido com versão **15 do Angular e Material**, seguindo boas práticas do [Angular coding style guide](https://angular.io/guide/styleguide) e da comunidade, foi utilizado [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification) para os commits do projeto, também foi utilizado **programação reativa** [RXJS](https://rxjs.dev/).

## Rodar o projeto local

Para rodar o projeto **localmente** apenas é necessário rodar o comando `npm run start` no terminal já irá abrir o navegado com o projeto, caso queira também pode usar `ng serve` e abrir a url `http://localhost:4200/` no navegador.

## Rodar projeto na rede

Caso seja necessário realizar testes no projeto em um **dispositivo** é possível desde que ele esteja na mesma rede onde está rodando o projeto, somente é necessário rodar o comando `npm run host` para acessar pelo dispositivo utilizar a url `https://ip-do-seu-dispositivo-onde-esta-rodando-o-projeto:4200/#/evino/loja`, pode ser necessário desativar o firewall caso não esteja funcionando.

## ng generate

Execute no terminar `ng generate component nome-do-componente` para criar um novo componente. Você também pode utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`, maiores informações por favor consultar a documentação do [ng generate](https://angular.io/cli/generate).

## Build

Para buildar o projeto e gerar os arquivos de distribuição somente executar o comando `npm run build` no terminal, não existe distinção de ambientes, por questões da **API** não ter **ambientes diferentes**. Os arquivos gerados pelo build serão armazenados na pasta `dist/` na **raiz do projeto**.

## Para ajuda futura

Para futura ajuda e dúvidas, consultar a documentação do [Angular](https://angular.io/), [Material](https://material.angular.io/), [RXJS](https://rxjs.dev/), [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) e [Stack Overflow](https://stackoverflow.com/).
