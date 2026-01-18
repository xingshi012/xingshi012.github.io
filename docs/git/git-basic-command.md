---
sidebar_position: 1
---
# Git 基础命令
> 一些 `git` 的基础命令，日常开发不常用了，一般都是使用 [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) 里的可视化界面去用 `git` 了

## 初始化仓库

```
git init
```

## 添加文件修改到暂存区

```
git add .
```

## 添加文件修改，及其注释并提交

```
git commit -m '注释内容'
```

## 拉取代码

```
git pull
```

## 推送代码

```
git push
```

## 建立本地与远程商店联系
> 一个简易流程，建立本地的项目代码与远程GitHub仓库之间的联系

```
# clone GitHub空仓库到本地
git clone https://github.com/xingshi012/silver-memory.git

# 添加README.md文件
echo "# silver-memory" >> README.md

# 初始化本地git仓库
git init

# 添加md文件到暂存区
git add README.md

# 添加注释
git commit -m "first commit"

# 创建main分支
git branch -M main
# 建立本地与远程仓库的联系
git remote add origin https://github.com/xingshi012/silver-memory.git

# push代码到线上Github
git push -u origin main
```

*Reference:*

https://git-scm.com/

https://git-scm.com/book/en/v2

https://github.com/xingshi012/silver-memory
