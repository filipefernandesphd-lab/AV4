1) git config --global user.name "Seu Nome" git config --global user.email "seu.email@example.com"

2) git config --local user.name "Seu Nome" git config --local user.email "seu.email@example.com"

3) ssh-keygen -t rsa -C "email@example.com" -f ~/.ssh/id_rsa_nome 

4) Host github-pessoal HostName github.com User git IdentityFile ~/.ssh/id_rsa_pessoal Host github-profissional HostName github.com User git IdentityFile ~/.ssh/id_rsa_profissional

5) git init

6) git remote add origin git@github.com:usuario/repo.git

7) git clone git@github.com:usuario/repo.git

8) git pull origin <nome_da_branch>

9) git branch <nome_da_branch>

10) git branch -m nome-antigo nome-novo

11) git merge nome-da-branch

12) git add nome-do-arquivo

13) git commit -m "Mensagem do commit"

14) git push origin main
