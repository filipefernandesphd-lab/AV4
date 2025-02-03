# Prova 4 Engenharia de Software II

## 1:
    git config --global user.name "Name"
    git config --global user.email "Email"

## 2: 
    git config user.name "Name"
    git config user.email "Email"

## 3: 
    ssh-keygen -t rsa -C "your-email-address" -f "github-username"

## 4:
    # Conta Porficional
    Host github.com-PMoraizz2
	HostName github.com
	User git
	IdentityFile ~/.ssh/github-PMoraizz2

    # Conta Pessoal
    Host github.com-PMoraizz
	HostName github.com
	User git
	IdentityFile ~/.ssh/github-PMoraizz

## 5:
    git init

## 6:
    git remote add origin git@github.com-usuario:usuario/repositorio.git

## 7:
    git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

## 8:
    git fetch REMOTE-NAME

## 9: 
    git branch NewBrach

## 10:
    git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME
    git fetch origin
    git branch -u origin/NEW-BRANCH-NAME NEW-BRANCH-NAME
    git remote set-head origin -a

## 11:
    git merge branch

## 12:
    git add .

## 13: 
    git commit -m "sua mensagem de commit"

## 14: 
    git push origin main