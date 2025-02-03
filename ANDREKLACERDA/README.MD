1. git config --global user.name "Seu nome"
git config --global user.email "seuemail@email.com"

2. git config user.name "Seu Nome"
git config user.email "seuemail@email.com"

3. ssh-keygen -t rsa -b 4096 -C "seuemail@email.com"

4. 
Configurar conta pessoal e profissional no arquivo ~/.gitconfig:
[user]
name = "Pessoal Nome"
email = "pessoal@email.com"
[includeIf "gitdir:~/trabalho/"]
path = ~/trabalho/.gitconfig

E no arquivo ~/trabalho/.gitconfig:
[user]
name = "Profissional Nome"
email = "profissional@email.com"

5. git init

6. git remote add origin git@github.com:usuario/repo.git

7. git clone git@github.com:usuario/repo.git

8. git pull origin main

9. git checkout -b nome-da-branch

10. git branch -m nome-antigo nome-novo

11. git merge nome-da-branch

12. git add nome-do-arquivo

13. git commit -m "Mensagem do commit"

14. git push origin main
