Olá, pessoas!

Tudo pronto para o terceiro dia praticando React?

Como prometido, hoje também vou colocar a minha solução lá no final deste e-mail para você comparar com a sua.
Você já viu como pegar um Figma e criar o código no React para ter um site. Você também já adicionou uma ferramenta para ajudar com CSS, utilizando o que tem sido chamado de CSS~in~JS.

O que falta? Ainda muito! Mas um passo de cada vez.

Hoje você vai trabalhar com algumas novidades e adicionar funcionalidades à sua aplicação.

No React, é preciso saber como trabalhar com estados e regras de negócio.

Com a introdução dos React Hooks, é possível definir um estado local para o componente. Sempre que este estado muda, a atualização é automaticamente refletida no navegador.

Atualmente, já é um padrão em projetos React a utilização dos hooks. Entre eles, o useState é o mais comum.

Eu estou falando tudo isso porque hoje eu quero que você volte ao projeto da Casa Verde e adicione funcionalidades ao formulário de cadastro de e-mail para a newsletter.

O seu dever é garantir que a pessoa coloque um e-mail válido antes de liberar o botão de cadastro.

Quando houver um e-mail válido preenchido e o usuário clicar em Assinar Newsletter, um alerta deverá aparecer na tela com a seguinte mensagem:

"Obrigado pela sua assinatura, você receberá nossas novidades no e-mail [e-mail cadastrado]".

DICA

O uso de um estado local com o useState te ajudará a compartilhar informações entre diferentes componentes. Este hook, porém, não tem por padrão uma validação das regras de cadastro.
