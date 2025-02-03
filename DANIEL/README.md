1. git config --global user.name "Nome"
git config --global user.email "Email"


2. git config user.name "Nome"
git config  user.email "Email"

3. ssh-keygen -t rsa -C "your-email-address" -f "github-username"

4. Host github.com-pessoal
	HostName github.com
	User git
	IdentityFile ~/.ssh/github-pessoal

Host github.com-profissional
	HostName github.com
	User git
	IdentityFile ~/.ssh/github-profissional

5. git init

6. git remote add origin git@github.com-usuario:usuario/repositorio.git

7.  git clone https://github.com/usuario/repositorio.git

8.  git fetch repositorio

9. git branch nomeBranch 

10. Local: git branch -m nomeVelho nomeNovo

Remoto:
git push origin :nomeVelho nomeNovo
git push origin -u nomeNovo

11. git checkout branchQueIraMesclar
git merge branchQueSeraMesclada

12. git add arquivo ou git add . para todos os arquivos

13. git commit -m "comentario"

14. git push origin main