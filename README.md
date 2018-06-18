# Teste MasonWeb

Tarefa de um crud simples para contratação pela MasonWeb

## Getting Started

Esse projeto foi desenvolvido utilizando Laravel Lumen para backend e AngularJS no frontend com o automatizador de arquivos Gulp

### Prerequisites

Para executar este projeto, é necessário as seguintes tecnologias instaladas: 

* [Composer](https://getcomposer.org/) - Manejo de dependencias para PHP
* [NPM](https://www.npmjs.com/get-npm) - Manejo de dependencias para Node
* [Gulp](https://gulpjs.com/) - Automatização de arquivos

### Installing

Após todos os pré-requisitos estiverem instalados, execute:

```
$ git clone https://github.com/Marlonzao/teste-masonweb.git
$ cd backend
$ composer install
```
Crie uma cópia do arquvio .env.example no diretório backend/, renomeie a cópia para .env e edite seu conteúdo com as informações que o arquivo pede. Em seguida execute estes comandos

```
$ php artisan migrate
$ cd ../client
$ npm i
$ gulp default serve
```

Em seguida a aplicação será aberta no browser pronta para ser testada, você pode fazer login após registrar um usúario.

## Built With

* [AngularJS](https://angularjs.org/) - Frontend
* [Laravel Lumen](https://lumen.laravel.com/) - Backend
* [Gulp](https://gulpjs.com/) - Automatização de arquivos

## Authors

* **Marlon de Oliveira dos Santos** - *Initial work* - [Marlonzao](https://github.com/Marlonzao/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
